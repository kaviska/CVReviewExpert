import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | CVReviewExpert',
  description:
    'Learn how CVReviewExpert protects your privacy. We do not store personal or company information and we auto‑redact sensitive data before any processing.',
};

export default function PrivacyPolicyPage() {
  const updated = 'August 18, 2025';
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-10">Last updated: {updated}</p>

          <div className="prose prose-gray max-w-none">
            <p>
              CVReviewExpert ("CVReviewExpert", "we", "our", or "us") is committed to protecting your
              privacy. This Privacy Policy explains what we do—and what we deliberately do not do—when
              you use our website, resume/CV analysis tools, and related services (collectively, the
              "Services").
            </p>

            <h2>Key Promise: We don’t keep your personal or company information</h2>
            <p>
              We design for privacy by default. We <strong>do not store</strong> personal information or
              company-identifying information contained in your uploaded CV/resume or any provided text.
              Before analysis, we automatically <strong>detect and remove</strong> personally identifiable
              information (PII)—such as your name, email, phone, address, company names, and similar fields—
              from the text and process only the redacted content. Any processing happens in transient
              systems memory; we do not persist the original file contents or the redacted text in our
              databases.
            </p>

            <h2>Information we process</h2>
            <p>
              To operate the Services, we may process limited information in these categories:
            </p>
            <ul>
              <li>
                <strong>Uploaded documents (redacted):</strong> Files you upload are scanned in memory. We
                automatically redact PII and company identifiers from the text prior to running analysis.
                The original and redacted texts are <strong>not stored</strong> in our databases.
              </li>
              <li>
                <strong>Service metadata:</strong> Non-content operational data such as request timestamps,
                response times, error codes, generic device/browser details, and approximate region
                (derived from IP) may be logged for reliability, security, and abuse prevention. We do not
                log file contents.
              </li>
              <li>
                <strong>Account data (if you register):</strong> If you create an account, we may store your
                email, hashed password, and basic profile settings. Account data is separate from any CV
                content; we do not attach or retain CV contents to accounts.
              </li>
            </ul>

            <h2>No sale of personal information</h2>
            <p>
              We do not sell your personal information. We do not rent or trade your personal information
              with third parties for their marketing purposes.
            </p>

            <h2>How we use limited metadata</h2>
            <ul>
              <li>Provide, maintain, and improve the Services.</li>
              <li>Monitor usage for reliability, performance, and security.</li>
              <li>Detect, prevent, and address abuse or technical issues.</li>
              <li>Comply with applicable laws and enforce our Terms.</li>
            </ul>

            <h2>Data retention</h2>
            <p>
              We retain operational logs for the shortest period necessary to ensure stability and security.
              We do <strong>not</strong> retain CV file contents or the redacted text produced during analysis.
            </p>

            <h2>Third‑party services</h2>
            <p>
              We may use reputable third‑party infrastructure (e.g., cloud hosting, analytics that focus on
              high‑level usage). These providers process data on our behalf under contracts that require
              appropriate safeguards. We do not share your CV contents with third parties. Where analytics
              are used, we configure them to avoid collecting CV content and to minimize personal data.
            </p>

            <h2>Security</h2>
            <p>
              We employ administrative, technical, and organizational measures designed to protect the
              limited metadata we process. While no system can be fully secure, we continuously work to
              enhance safeguards. Because we do not store your CV contents, the risk surface is minimized by
              design.
            </p>

            <h2>Your choices and rights</h2>
            <ul>
              <li>
                <strong>Do not upload sensitive data:</strong> Please avoid uploading confidential or
                regulated data (e.g., national IDs beyond what’s typical on a resume). Our redaction is
                comprehensive but cannot guarantee 100% removal for every custom format.
              </li>
              <li>
                <strong>Access, correction, deletion (accounts):</strong> If you maintain an account, you may
                request access to, correction of, or deletion of your account data by contacting us.
              </li>
            </ul>

            <h2>Children’s privacy</h2>
            <p>
              Our Services are not directed to children under 16, and we do not knowingly collect personal
              information from children. If you believe a child has provided personal information, please
              contact us so we can take appropriate action.
            </p>

            <h2>International users</h2>
            <p>
              Our infrastructure may be hosted in various regions. By using the Services, you understand that
              data may be processed in the region where our infrastructure operates. We apply consistent
              protections regardless of location.
            </p>

            <h2>Changes to this Policy</h2>
            <p>
              We may update this Privacy Policy to reflect operational, legal, or regulatory changes. If we
              make material changes, we will post the updated Policy and adjust the “Last updated” date.
            </p>

            <h2>Contact us</h2>
            <p>
              If you have questions about this Privacy Policy or our practices, please contact us via the
              contact options on our website.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
