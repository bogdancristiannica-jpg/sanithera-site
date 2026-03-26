import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-deep border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center mb-4">
          <Image
            src="/logo.png"
            alt="SANITHERA Medical Solutions"
            width={140}
            height={52}
            className="h-10 w-auto object-contain rounded-lg"
          />
        </div>
        <p className="text-gray-500 text-sm mb-2">
          SANITHERA Medical Solutions SRL
        </p>
        <p className="text-gray-500 text-sm mb-4">
          Consultanță integrată pentru spitalele publice din România
        </p>
        <p className="text-gray-500 text-sm mb-6">office@sanithera.ro</p>
        <p className="text-gray-500 text-sm">
          © 2026 SANITHERA Medical Solutions SRL
        </p>
      </div>
    </footer>
  );
}
