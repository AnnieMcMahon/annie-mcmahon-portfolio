"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/app/actions/sendEmail";
import { useState } from "react";

const formSchema = z
  .object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }).optional().or(z.literal("")), 
    phone: z.string()
      .regex(/^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/, {
        message: "Please enter a valid phone number (e.g., 123-456-7890).",
      })
      .optional()
      .or(z.literal("")), 
    message: z.string().min(10, {
      message: "Message must be at least 10 characters.",
    }),
  })
  .refine((data) => data.email || data.phone, {
    message: "Either email or phone number must be provided.",
    path: ["email"], 
  });

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setStatus("Sending...");
    const response = await sendEmail(values.name, values.email || "", values.phone || "", values.message);
    
    if (response.success) {
      setStatus("Message sent successfully!");
      form.reset();
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <div className="py-10 bg-gray-100" id="contact">
      <h2>Contact Me</h2>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-md space-y-4 my-4 mx-auto w-96"
        >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Name</FormLabel>
              <FormControl>
                <Input className="w-full" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Email</FormLabel>
              <FormControl>
                <Input className="w-full" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Phone</FormLabel>
              <FormControl>
                <Input className="w-full" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Message</FormLabel>
              <FormControl>
                <Textarea className="h-24" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {status && <p className="text-center text-sm text-gray-600">{status}</p>}

        <div className="flex justify-center">
          <Button
            type="submit"
            className="px-6 py-3 bg-teal-800 text-white font-bold text-lg rounded-md hover:bg-teal-600 transition"
          >
            Submit
          </Button>
        </div>
      </form>
      </div>
    </Form>
  );
}
