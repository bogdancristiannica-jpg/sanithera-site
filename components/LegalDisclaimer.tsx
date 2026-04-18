export default function LegalDisclaimer() {
  return (
    <div className="bg-yellow-500/10 border-l-4 border-yellow-500 rounded-r-lg p-4 my-8">
      <p className="text-yellow-200 font-semibold mb-2">
        ⚠️ Versiune provizorie
      </p>
      <p className="text-yellow-100/80 text-sm leading-relaxed">
        Acest document este în curs de revizuire juridică. Pentru informații
        oficiale și pentru exercitarea drepturilor conform GDPR, vă rugăm să
        ne contactați la{" "}
        <a
          href="mailto:office@sanithera.ro"
          className="underline hover:text-yellow-100"
        >
          office@sanithera.ro
        </a>{" "}
        sau la telefonul{" "}
        <a
          href="tel:+40745136707"
          className="underline hover:text-yellow-100 whitespace-nowrap"
        >
          0745 136 707
        </a>
        .
      </p>
    </div>
  );
}
