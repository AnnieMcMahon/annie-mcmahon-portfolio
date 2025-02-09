import Certificate from "@/app/components/Certificate";
import certificates from "@/app/lib/certificates";

export default function Certificates() {
  
  return (
    <div className="mx-auto px-4 py-10" id="certificates">
      <h2>Certificates</h2>
      <div className="w-full gap-x-4 mx-auto inline-flex flex-wrap justify-center mb-4">
        {certificates.map((card) => (
          <Certificate key={card.id} certificate={card} />
        ))}
      </div>
    </div>
  );
}

