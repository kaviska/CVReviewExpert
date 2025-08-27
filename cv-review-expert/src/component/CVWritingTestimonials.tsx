'use client';

import React from 'react';

const CVWritingTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Marketing Director",
      company: "Tech Startup",
      image: "/profile.avif", // Using existing profile image
      rating: 5,
      text: "The professional CV writing service exceeded my expectations. My resume was completely transformed, and I received 3 interview invitations within two weeks. The writer understood my industry perfectly and highlighted achievements I didn't even realize were significant.",
      achievement: "Landed dream job with 35% salary increase",
      beforeAfter: {
        before: "2 months with no responses",
        after: "3 interviews in 2 weeks"
      }
    },
    {
      name: "Michael Chen",
      title: "Software Engineer",
      company: "Fortune 500",
      image: "/profile.avif",
      rating: 5,
      text: "As a career changer from finance to tech, I was struggling to position my skills properly. The CV writers created a compelling narrative that showed how my background was actually an asset. The ATS optimization was spot-on - my resume started getting through systems that previously rejected me.",
      achievement: "Successfully transitioned to tech industry",
      beforeAfter: {
        before: "Career change seemed impossible",
        after: "Senior dev role at major tech company"
      }
    },
    {
      name: "David Thompson",
      title: "Executive Director",
      company: "Healthcare Organization",
      image: "/profile.avif",
      rating: 5,
      text: "For executive-level positions, presentation is everything. The writer created a sophisticated, board-ready resume that positioned me as a strategic leader. The investment was minimal compared to the career advancement it enabled. Highly recommend their executive CV writing service.",
      achievement: "Promoted to CEO within 6 months",
      beforeAfter: {
        before: "Stuck in same role for 3 years",
        after: "CEO of larger organization"
      }
    },
    {
      name: "Emily Rodriguez",
      title: "Registered Nurse",
      company: "Regional Hospital",
      image: "/profile.avif",
      rating: 5,
      text: "After 8 years in nursing, I wanted to move into healthcare administration. The CV writers helped me highlight my leadership experience and additional certifications. They knew exactly what healthcare employers look for and optimized my resume accordingly.",
      achievement: "Moved into healthcare management",
      beforeAfter: {
        before: "Limited to bedside nursing roles",
        after: "Nurse manager at top hospital"
      }
    },
    {
      name: "Robert Kim",
      title: "Financial Analyst",
      company: "Investment Firm",
      image: "/profile.avif",
      rating: 5,
      text: "The level of detail and professionalism was impressive. My new resume tells a coherent story of my career progression and quantifies my achievements in ways that matter to finance employers. The ROI on this service was incredible - landed a role with significantly better compensation.",
      achievement: "Secured position at top investment firm",
      beforeAfter: {
        before: "Applications getting ignored",
        after: "Multiple offers to choose from"
      }
    },
    {
      name: "Lisa Wang",
      title: "Project Manager",
      company: "Consulting Firm",
      image: "/profile.avif",
      rating: 5,
      text: "What impressed me most was how the writer captured my voice while making everything sound more professional and impactful. They transformed my basic job duties into achievement statements that really showcase my value. The 48-hour turnaround was also amazing.",
      achievement: "Promoted to senior project manager",
      beforeAfter: {
        before: "Resume looked generic",
        after: "Standout professional presentation"
      }
    }
  ];

  const stats = [
    { number: "5,000+", label: "CVs Written", icon: "📄" },
    { number: "95%", label: "Get Interviews", icon: "📞" },
    { number: "48hrs", label: "Average Delivery", icon: "⚡" },
    { number: "4.9/5", label: "Client Rating", icon: "⭐" }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories from Our Professional CV Writing Service
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read real testimonials from professionals who advanced their careers with our 
            <strong> expert CV writers</strong>. See how our resume writing service helped them land dream jobs and achieve career goals.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-green-50 rounded-xl p-6 text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-green-600 mb-1">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.title}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Achievement */}
              <div className="bg-green-100 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-green-800 mb-2">Achievement:</h4>
                <p className="text-green-700 text-sm">{testimonial.achievement}</p>
              </div>

              {/* Before/After */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-50 rounded-lg p-3">
                  <h5 className="text-xs font-semibold text-red-800 mb-1">BEFORE</h5>
                  <p className="text-red-700 text-xs">{testimonial.beforeAfter.before}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <h5 className="text-xs font-semibold text-green-800 mb-1">AFTER</h5>
                  <p className="text-green-700 text-xs">{testimonial.beforeAfter.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonial Placeholder */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center mb-16">
          <h3 className="text-2xl font-semibold mb-4">
            "Best Investment I Made in My Career"
          </h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            "I was skeptical about paying for a CV writing service, but after seeing the results - 3 job offers 
            within a month - I realized it was the best career investment I ever made. The professional quality 
            and industry expertise made all the difference." - Jennifer M., Marketing Manager
          </p>
          <div className="inline-flex items-center bg-white/20 rounded-lg px-6 py-3">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            <span>Watch Video Testimonial (Coming Soon)</span>
          </div>
        </div>

        {/* Industry Success Stories */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Success Across All Industries
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { industry: "Technology", success: "87% get senior roles", icon: "💻" },
              { industry: "Healthcare", success: "92% advance to management", icon: "🏥" },
              { industry: "Finance", success: "85% increase compensation", icon: "💰" },
              { industry: "Marketing", success: "90% land at top companies", icon: "📊" },
              { industry: "Education", success: "88% move to leadership", icon: "🎓" },
              { industry: "Engineering", success: "91% get promotion", icon: "⚙️" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.industry}</h4>
                <p className="text-green-600 font-medium text-sm">{item.success}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Trusted by Professionals at Leading Companies
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-gray-100 px-6 py-3 rounded-lg">Google</div>
            <div className="bg-gray-100 px-6 py-3 rounded-lg">Microsoft</div>
            <div className="bg-gray-100 px-6 py-3 rounded-lg">Amazon</div>
            <div className="bg-gray-100 px-6 py-3 rounded-lg">Apple</div>
            <div className="bg-gray-100 px-6 py-3 rounded-lg">Meta</div>
            <div className="bg-gray-100 px-6 py-3 rounded-lg">Netflix</div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Get the same professional results that helped these professionals advance their careers.
          </p>
          <button 
            onClick={() => document.getElementById('cv-writing-service')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start My Professional CV Today →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CVWritingTestimonials;
