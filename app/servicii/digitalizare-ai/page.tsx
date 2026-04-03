import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { allServices, getOtherServices } from "@/lib/services-data";

const service = allServices.find((s) => s.slug === "digitalizare-ai")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: "https://www.sanithera.ro/servicii/digitalizare-ai" },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: "https://www.sanithera.ro/servicii/digitalizare-ai",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <ServicePageTemplate
        title={service.title}
        icon={service.icon}
        slug={service.slug}
        paragraphs={service.paragraphs}
        benefits={service.benefits}
        otherServices={getOtherServices(service.slug)}
      />
      <Footer />
    </>
  );
}
