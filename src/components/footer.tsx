import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-12 text-center text-gray-500 text-sm">
      <div>
        &copy; {new Date().getFullYear()} Shopwise. All rights reserved.
      </div>
      <div className="mt-2">
        <Link href="/privacy" className="mx-2 hover:underline">
          Privacy Policy
        </Link>
        <Link href="/terms" className="mx-2 hover:underline">
          Terms of Service
        </Link>
      </div>
    </footer>
  );
}
