import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | ShopWise',
  description: 'Privacy Policy for ShopWise',
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-4 py-16 sm:px-6">
      {/* Back Link */}
      <div className="mb-8">
          <Link href="/shopwise" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>

      {/* Content */}
      <article className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight text-foreground">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </header>

        <section className="space-y-6 text-foreground/90 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold mb-3">Introduction</h2>
            <p>
              ShopWise ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise handle your information when you visit our website and use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Information We Collect</h2>
            <p className="mb-3">We may collect information about you in a variety of ways. The information we may collect on our Site includes:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong>Personal Information:</strong> Name, email address, and other information you voluntarily provide</li>
              <li><strong>Device Information:</strong> Browser type, operating system, and device identifiers</li>
              <li><strong>Usage Information:</strong> Pages visited, time spent, and search queries</li>
              <li><strong>Cookies:</strong> We use cookies to enhance your experience and track site performance</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect in the following ways:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>To improve our website and services</li>
              <li>To send promotional communications (with your consent)</li>
              <li>To analyze website usage and trends</li>
              <li>To prevent fraudulent transactions and protect against malicious activity</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Third-Party Services</h2>
            <p>
              We use third-party services such as Google Analytics and other analytics platforms to understand how users interact with our website. These services may collect information about your visit to our site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Your Privacy Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of promotional communications</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us at hello@example.com
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. Your continued use of our website after any modifications constitutes your acceptance of the updated policy.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
