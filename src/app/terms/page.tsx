import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | ShopWise',
  description: 'Terms of Service for ShopWise',
};

export default function TermsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-4 py-16 sm:px-6">
      {/* Back Link */}
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>

      {/* Content */}
      <article className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight text-foreground">Terms of Service</h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </header>

        <section className="space-y-6 text-foreground/90 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using ShopWise (the "Website"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">2. Use License</h2>
            <p className="mb-3">
              Permission is granted to temporarily download one copy of the materials (information or software) on ShopWise for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">3. Disclaimer</h2>
            <p>
              The materials on ShopWise are provided on an 'as is' basis. ShopWise makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">4. Limitations of Liability</h2>
            <p>
              In no event shall ShopWise or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ShopWise, even if ShopWise or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on ShopWise could include technical, typographical, or photographic errors. ShopWise does not warrant that any of the materials on ShopWise are accurate, complete, or current. ShopWise may make changes to the materials contained on ShopWise at any time without notice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">6. Links</h2>
            <p>
              ShopWise has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by ShopWise of the site. Use of any such linked website is at the user's own risk.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">7. Modifications</h2>
            <p>
              ShopWise may revise these terms of service for ShopWise at any time without notice. By using ShopWise, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction where ShopWise operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">9. User Responsibilities</h2>
            <p className="mb-3">You agree to use this website only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment of the website. Prohibited behavior includes:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Harassing or causing distress or inconvenience to any person</li>
              <li>Obscene or offensive statements or language</li>
              <li>Disrupting the normal flow of dialogue within our website</li>
              <li>Attempting to gain unauthorized access to our systems</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">10. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at hello@example.com
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
