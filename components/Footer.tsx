import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="text-sm text-black uppercase tracking-wide">
            <p>© {new Date().getFullYear()} Benny&apos;s Site</p>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="https://www.linkedin.com/in/benlopez1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold uppercase tracking-wider text-black hover:underline transition-all"
              aria-label="LinkedIn"
            >
              LinkedIn
            </Link>
            <Link
              href="https://www.youtube.com/@okaybenny/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold uppercase tracking-wider text-black hover:underline transition-all"
              aria-label="YouTube"
            >
              YouTube
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
