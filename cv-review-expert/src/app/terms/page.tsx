import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | CVReviewExpert',
  description:
    'Review the terms governing your use of CVReviewExpert. Clear rules, acceptable use, disclaimers, and our strong privacy-first commitments.',
};

export default function TermsPage() {
  const updated = 'August 18, 2025';
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Terms & Conditions</h1>
          <p className="text-sm text-gray-500 mb-10">Last updated: {updated}</p>

          <div className="prose prose-gray max-w-none">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using CVReviewExpert (the "Service"), you agree to be bound by these Terms &
              Conditions and our Privacy Policy. If you do not agree, please discontinue use of the Service.
            </p>

            <h2>2. Privacy-first processing (no storage + pre-redaction)</h2>
            <p>
              We prioritize privacy. We <strong>do not store</strong> personal or company-identifying
              information from your uploaded CV/resume or provided text. Before any analysis starts, we
              automatically <strong>remove personal and company identifiers</strong> from the text (e.g., name,
              email, phone, address, company names) and process only the redacted content. CV file contents
              and redacted text are processed in memory and are <strong>not stored</strong> in our databases.
              See our Privacy Policy for details.
            </p>

            <h2>3. Eligibility</h2>
            <p>
              You must be at least 16 years old to use the Service. If you use the Service on behalf of an
              organization, you represent that you are authorized to bind that organization to these Terms.
            </p>

            <h2>4. Acceptable Use</h2>
            <ul>
              <li>Do not upload unlawful, harmful, or malicious content.</li>
              <li>Do not attempt to reverse engineer, hack, or disrupt the Service.</li>
              <li>Do not misuse the Service for spam or to violate others’ rights.</li>
              <li>Respect intellectual property and applicable laws.</li>
            </ul>

            <h2>5. Accounts</h2>
            <p>
              Some features may require an account. You are responsible for maintaining the confidentiality of
              your credentials and for all activities under your account. You agree to promptly notify us of
              any unauthorized use.
            </p>

            <h2>6. Intellectual Property</h2>
            <p>
              CVReviewExpert and its licensors retain all rights, title, and interest in and to the Service,
              including all software, features, content, logos, and trademarks. You may not use our branding
              without prior written permission.
            </p>

            <h2>7. Feedback</h2>
            <p>
              If you provide feedback or suggestions, you grant us a non-exclusive, worldwide, royalty-free
              license to use that feedback to improve the Service without any obligation to you.
            </p>

            <h2>8. Disclaimers</h2>
            <p>
              The Service is provided on an "as is" and "as available" basis. We do not warrant that the
              Service will be uninterrupted, error-free, or that results will meet your expectations. Resume
              analysis and recommendations are informational and should be evaluated alongside your judgment.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, CVReviewExpert shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, or any loss of profits or data, arising
              from or related to your use of the Service.
            </p>

            <h2>10. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless CVReviewExpert and its affiliates from any
              claims, liabilities, damages, losses, and expenses arising from your use of the Service or your
              violation of these Terms.
            </p>

            <h2>11. Modifications to the Service</h2>
            <p>
              We may modify, suspend, or discontinue all or part of the Service at any time with or without
              notice, including introducing new features or limitations.
            </p>

            <h2>12. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Changes are effective upon posting. Your continued
              use of the Service after changes constitute your acceptance of the updated Terms.
            </p>

            <h2>13. Governing Law</h2>
            <p>
              These Terms are governed by the laws applicable in your place of residence or, if specified on
              our website, by the laws of a stated jurisdiction, without regard to conflict of law principles.
            </p>

            <h2>14. Contact</h2>
            <p>
              For questions about these Terms, please contact us using the contact options available on our
              website.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
