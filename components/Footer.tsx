export default function Footer() {
  return (
    <footer className="bg-deep border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center font-syne font-bold text-deep text-sm">
            S
          </div>
          <span className="font-syne font-bold text-lg text-white">
            SANITHERA
          </span>
        </div>
        <p className="text-gray-500 mb-2">
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
