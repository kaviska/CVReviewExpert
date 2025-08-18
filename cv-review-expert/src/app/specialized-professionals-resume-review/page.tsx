import Footer from '@/component/Footer';
import Navbar from '@/component/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Specialized Professionals Resume Review | CVReviewExpert',
  description:
    'Explore tailored resume review guidance for specialized professions. Choose your role and get ATS-friendly, role-specific insights.',
};

const categories = [
  { slug: 'accountants', title: 'Accountants', desc: 'Optimize accounting resumes for ATS and hiring managers.' },
  { slug: 'auditors', title: 'Auditors', desc: 'Highlight compliance, risk, and audit achievements.' },
  { slug: 'bank-officers', title: 'Bank Officers', desc: 'Showcase lending, customer service, and KYC strengths.' },
  { slug: 'civil-engineers', title: 'Civil Engineers', desc: 'Emphasize projects, safety, codes, and tools (AutoCAD, BIM).' },
  { slug: 'finance-managers', title: 'Finance Managers', desc: 'Focus on FP&A, budgeting, modeling, and impact.' },
  { slug: 'front-desk-officers', title: 'Front Desk Officers', desc: 'Customer service, scheduling, and communication skills.' },
  { slug: 'hotel-managers', title: 'Hotel Managers', desc: 'Operations, occupancy KPIs, guest experience, and leadership.' },
  { slug: 'nurses', title: 'Nurses', desc: 'Certifications, patient care, and shift leadership.' },
  { slug: 'pharmacists', title: 'Pharmacists', desc: 'Regulatory compliance, accuracy, and patient counseling.' },
];

export default function SpecializedProfessionalsPage() {
  return (
    <main className="min-h-screen bg-white">
        <Navbar/>
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">Specialized Resume Reviews</h1>
            <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
              Pick your profession for tailored, ATS-ready resume guidance.
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <a
                key={c.slug}
                href={`/specialized-professionals-resume-review/${c.slug}`}
                className="group block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700">{c.title}</h2>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-100">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
                <div className="mt-4 inline-flex items-center text-sm font-medium text-blue-700 group-hover:underline">
                  Explore guidance
                  <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
