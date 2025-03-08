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
import { sendEventEmail } from "@/app/actions/sendEventEmail";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  nomineeName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  nomineeEmail: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, {
    message: "Message cannot exceed 500 characters.",
  }),
  link: z.string().url({ message: "Please enter a valid URL." }).or(z.literal("")),

});

export default function EventForm() {
  const [status, setStatus] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      nomineeName: "",
      nomineeEmail: "",
      message: "",
      link: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setStatus("Sending...");
    const response = await sendEventEmail(
      values.name,
      values.email,
      values.nomineeName,
      values.nomineeEmail,
      values.message,
      values.link || ""
    );

    if (response.success) {
      setStatus("Message sent successfully!");
      form.reset();
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <div className="p-6 mb-8 rounded-2xl shadow-lg mt-6 bg-gray-100 text-left" id="contact">
        <h2>Apply Now</h2>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-md space-y-4 my-4 mx-auto"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Your name</FormLabel>
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
                <FormLabel className="font-bold">Your e-mail</FormLabel>
                <FormControl>
                  <Input className="w-full" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nomineeName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Nominee name</FormLabel>
                <FormControl>
                  <Input className="w-full" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nomineeEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Nominee e-mail</FormLabel>
                <FormControl>
                  <Input className="w-full" type="email" {...field} />
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
                <FormLabel className="font-bold">
                  Why they need a free website
                </FormLabel>
                <FormControl>
                  <Textarea className="h-24" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">
                  Link to their existing website or social media (optional)
                </FormLabel>
                <FormControl>
                  <Input className="w-full" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {status && (
            <div
              className={`text-center p-2 mt-4 rounded-md ${
                status.includes("Failed")
                  ? "bg-red-100 text-red-800"
                  : "bg-teal-100 text-teal-700"
              }`}
            >
              {status}
            </div>
          )}

          <div className="flex justify-center">
            <Button
              type="submit"
              disabled={status === "Sending..."}
              className={`px-6 py-3 font-bold text-lg rounded-md transition ${
                status === "Sending..."
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-teal-800 text-white hover:bg-teal-600"
              }`}
            >
              {status === "Sending..." ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </Form>
  );
}
