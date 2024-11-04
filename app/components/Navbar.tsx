import Link from 'next/link';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="bg-orange-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <Logo className="animate-bounce" />
            <span className="font-bold text-xl">DBAPI</span>
          </Link>
          <div className="flex space-x-4">
            <Link href="/docs" className="hover:text-orange-200 transition-colors">
              Documentation
            </Link>
            <a 
              href="https://github.com/jojogamerCt/dbapi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-orange-200 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 