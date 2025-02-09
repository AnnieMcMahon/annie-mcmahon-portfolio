import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CertificateFormat } from "@/app/lib/interfaces";

interface CertificateProps {
  certificate: CertificateFormat;
}

export default function Certificate({ certificate }: CertificateProps) {
  return (
    <Card className="w-96 my-2">
      <CardHeader>
        <CardTitle>{certificate.title}</CardTitle>
      </CardHeader>
      <div className="w-88 mb-4 overflow-hidden mx-auto">
        <img
          src={certificate.image}
          alt="Project Image"
          className="w-full object-cover"
        />
      </div>
    </Card>
  );
}