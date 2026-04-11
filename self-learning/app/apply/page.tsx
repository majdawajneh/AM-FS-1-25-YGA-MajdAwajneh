'use client';
import Link from "next/link";
import { useState } from "react";

export default function Apply() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
    company: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Submit logic
    alert("Application submitted! We\\'ll review and contact you within 48 hours.");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Apply Now
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Join the next cohort of elite engineers. Limited spots available.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center mb-20">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Month Program</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">98%</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Placement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Partners</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Level Up?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Submit your application. Our admissions team reviews every submission within 48 hours.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
                <input
                  type="number"
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="3+"
                  min="3"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-8 rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Submit Application
              </button>
            </form>
          </div>
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What Happens Next?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-green-600 font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Review (48h)</h4>
                    <p className="text-gray-600">Technical review of your experience and background.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Interview</h4>
                    <p className="text-gray-600">30min call with program director.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-xl flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-purple-600 font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Welcome!</h4>
                    <p className="text-gray-600">Onboarding and cohort kickoff.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-24">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-gray-200"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
