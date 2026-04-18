import Image from "next/image";
import Link from "next/link";
import { content } from "@/lib/content";

const c = content.footer;

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
        <p className="text-gray-500 text-sm mb-2">{c.company}</p>
        <p className="text-gray-500 text-sm mb-2">{c.legal_info}</p>
        <p className="text-gray-500 text-sm mb-4">{c.tagline}</p>
        <p className="text-gray-500 text-sm mb-6">{c.email}</p>
        <p className="text-gray-500 text-sm">{c.copyright}</p>

        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mt-6 text-sm text-gray-400">
          <Link
            href="/confidentialitate"
            className="hover:text-white transition-colors"
          >
            {c.links.privacy}
          </Link>
          <span aria-hidden="true">·</span>
          <Link
            href="/termeni"
            className="hover:text-white transition-colors"
          >
            {c.links.terms}
          </Link>
          <span aria-hidden="true">·</span>
          <Link
            href="/cookies"
            className="hover:text-white transition-colors"
          >
            {c.links.cookies}
          </Link>
          <span aria-hidden="true">·</span>
          <a
            href="https://anpc.ro"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            {c.links.anpc}
          </a>
          <span aria-hidden="true">·</span>
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            {c.links.sol}
          </a>
        </div>
      </div>
    </footer>
  );
}
