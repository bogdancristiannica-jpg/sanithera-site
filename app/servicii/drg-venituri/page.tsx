import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { allServices, getOtherServices } from "@/lib/services-data";

const service = allServices.find((s) => s.slug === "drg-venituri")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: "https://www.sanithera.ro/servicii/drg-venituri" },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: "https://www.sanithera.ro/servicii/drg-venituri",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <ServicePageTemplate
        title={service.title}
        icon={service.icon}
        paragraphs={service.paragraphs}
        benefits={service.benefits}
        otherServices={getOtherServices(service.slug)}
      />
      <Footer />
    </>
  );
}
