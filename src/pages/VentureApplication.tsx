import { useState, useEffect } from 'react';
import { ArrowRight, Shield, Target, Layers, Briefcase, AlertCircle, Send, CheckCircle, X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { EMAILJS_CONFIG } from '@/lib/email';

const evaluationCriteria = [
  {
    title: 'Working Product',
    description: 'You have a functional product that users can actually use today.'
  },
  {
    title: 'Growth Challenge',
    description: 'There\'s a gap between your product quality and current user adoption.'
  },
  {
    title: 'Committed Team',
    description: 'You have bandwidth to work alongside us and execute on growth.'
  }
];

const partnershipHighlights = [
  {
    icon: Layers,
    title: 'Partnership Models',
    description: 'Sprint (4-12 weeks), Embedded (3-6 months), Equity (long-term).'
  },
  {
    icon: Briefcase,
    title: 'Selective Process',
    description: 'We evaluate products against traction, team commitment, and market potential.'
  },
  {
    icon: Target,
    title: 'Growth-Ready',
    description: 'We look for products ready to scale, not just product quality.'
  }
];

const partnershipTypeOptions = ['Sprint Partnership (4-12 weeks)', 'Embedded Partner (3-6 months)', 'Equity Partnership (long-term)', 'Not sure - need recommendation'];

const VentureApplicationPage = () => {
  const applicationStructuredData = {
    "@context": "https://schema.org",
    "@type": "ApplyAction",
    "name": "Tunnels Growth Partnership Application",
    "description": "Apply for a growth partnership with Tunnels. For products with working functionality seeking systematic user acquisition and growth.",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://tunnels.ng/venture-studio/apply"
    },
    "result": {
      "@type": "Service",
      "name": "Growth Partnership"
    },
    "areaServed": ["Nigeria", "Africa"]
  };
  const [formData, setFormData] = useState({
    founderName: '',
    email: '',
    company: '',
    role: '',
    website: '',
    location: '',
    timeline: '',
    description: '',
    productName: '',
    productUrl: '',
    currentUsers: '',
    targetAudience: '',
    distributionGap: '',
    previousEfforts: '',
    partnershipType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid =
    formData.founderName.trim().length > 1 &&
    formData.email.includes('@') &&
    formData.company.trim().length > 1 &&
    formData.productName.trim().length > 1 &&
    formData.productUrl.trim().length > 1 &&
    formData.distributionGap.trim().length > 30 &&
    formData.description.trim().length > 30;

  const handleSubmit = async (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (!isFormValid || isSubmitting) return;
    setIsSubmitting(true);
    setSubmitStatus(null);

    const messageBody = `Product Name: ${formData.productName}\nProduct URL: ${formData.productUrl}\nCurrent Users: ${formData.currentUsers || 'Not provided'}\nTarget Audience: ${formData.targetAudience || 'Not provided'}\nRole: ${formData.role || 'Not provided'}\nWebsite: ${formData.website || 'Not provided'}\nLocation: ${formData.location || 'Not provided'}\nPartnership Type: ${formData.partnershipType || 'Not specified'}\nTimeline: ${formData.timeline || 'Not provided'}\n\nGrowth Challenge:\n${formData.distributionGap}\n\nPrevious Efforts:\n${formData.previousEfforts || 'Not provided'}\n\nWhy This Partnership:\n${formData.description}`;

    const templateParams = {
      from_name: formData.founderName,
      from_email: formData.email,
      company: formData.company,
      budget: 'Growth Partnership',
      project_type: `Growth Partnership Application (${formData.partnershipType || 'Type TBD'})`,
      message: messageBody,
      to_email: formData.email,
      venture_stage: formData.productName,
      venture_traction: formData.currentUsers || 'Not provided',
      venture_timeline: formData.timeline || 'Not provided',
      venture_team: formData.targetAudience || 'Not provided'
    };

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateIdCustomer,
        templateParams
      );

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateIdAdmin,
        templateParams
      );

      setSubmitStatus('success');
      setShowSuccessModal(true);
      setFormData({
        founderName: '',
        email: '',
        company: '',
        role: '',
        website: '',
        location: '',
        timeline: '',
        description: '',
        productName: '',
        productUrl: '',
        currentUsers: '',
        targetAudience: '',
        distributionGap: '',
        previousEfforts: '',
        partnershipType: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-tunnels-black">
      <SEO
        title="Growth Partnership Application"
        description="Apply for a growth partnership with Tunnels. For products with working functionality seeking systematic user acquisition and growth."
        keywords="growth partnership application, user acquisition partner, startup growth partner, growth consulting"
        url="https://tunnels.ng/venture-studio/apply"
        structuredData={applicationStructuredData}
      />
      <Navbar />

      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="bg-tunnels-dark border border-tunnels-darkgray/50 rounded-2xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center">
              <div className="w-16 h-16 bg-tunnels-red rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Application Received</h3>
              <p className="text-white/60 mb-6">
                Thank you for applying. Our team will review your product and growth opportunity. We'll reach out if there's a potential fit for partnership.
              </p>

              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full px-6 py-3 bg-tunnels-red text-white font-semibold rounded-lg hover:bg-tunnels-red-light transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="pt-32 pb-20 bg-tunnels-black">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-4xl">
            <p className="text-tunnels-red uppercase tracking-[0.3em] text-xs mb-4">Selective Program</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Apply for a Growth Partnership
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-3xl">
              This application is for products with working functionality seeking growth support. Standard service inquiries should use the contact form.
            </p>
          </div>
        </div>
      </section>

      {/* Criteria Section */}
      <section className="py-16 bg-tunnels-dark border-t border-tunnels-darkgray/40">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid md:grid-cols-3 gap-6">
            {evaluationCriteria.map((item, index) => (
              <div key={index} className="p-6 rounded-2xl border border-tunnels-darkgray/40 bg-tunnels-black/40">
                <div className="w-10 h-10 rounded-lg bg-tunnels-red/10 flex items-center justify-center mb-4">
                  <Target className="w-5 h-5 text-tunnels-red" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Highlights */}
      <section className="py-16 bg-tunnels-black">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {partnershipHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="p-6 rounded-2xl border border-tunnels-darkgray/40 bg-tunnels-dark/60">
                  <div className="w-12 h-12 rounded-xl bg-tunnels-red/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-tunnels-red" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-tunnels-dark">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
              <div>
                <h2 className="text-3xl font-bold text-white mb-3">Growth Partnership Application</h2>
                <p className="text-white/60">
                  We review applications weekly. Only products aligned with our focus and capacity will move forward.
                </p>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl border border-tunnels-darkgray/40 bg-tunnels-black/40">
                <Shield className="w-5 h-5 text-tunnels-red" />
                <div>
                  <p className="text-white text-sm font-semibold">Confidential review</p>
                  <p className="text-white/50 text-xs">Information is only shared internally.</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-tunnels-black rounded-3xl border border-tunnels-darkgray/50 p-8 md:p-10 space-y-6">
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 mt-0.5" />
                  <div>
                    <p className="text-red-400 font-semibold text-sm">We could not submit your application.</p>
                    <p className="text-white/60 text-sm">Please retry or email hello@tunnels.ng</p>
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white text-sm mb-2">Founder / Lead Name *</label>
                  <input
                    name="founderName"
                    value={formData.founderName}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-tunnels-dark border border-tunnels-darkgray/40 text-white focus:border-tunnels-red/60 focus:outline-none"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm mb-2">Email *</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-tunnels-dark border border-tunnels-darkgray/40 text-white focus:border-tunnels-red/60 focus:outline-none"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white text-sm mb-2">Company / Venture *</label>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-tunnels-dark border border-tunnels-darkgray/40 text-white focus:border-tunnels-red/60 focus:outline-none"
                    placeholder="Company or project name"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm mb-2">Role / Title</label>
                  <input
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-tunnels-dark border border-tunnels-darkgray/40 text-white focus:border-tunnels-red/60 focus:outline-none"
                    placeholder="e.g. CEO, Product Lead"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white text-sm mb-2">Website / Deck</label>
                  <input
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-tunnels-dark border border-tunnels-darkgray/40 text-white focus:border-tunnels-red/60 focus:outline-none"
                    placeholder="https://"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm mb-2">Headquarters / Region</label>
                  <input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-tunnels-dark border border-tunnels-darkgray/40 text-white focus:border-tunnels-red/60 focus:outline-none"
                    placeholder="City, Country"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white text-sm mb-2">Product Name *</label>
                  <input
                    name="productName"
                    value={formData.productName}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-tunnels-dark border border-tunnels-darkgray/40 text-white focus:border-tunnels-red/60 focus:outline-none"
                    placeholder="Your product name"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm mb-2">Product URL *</label>
                  <input
                    name="productUrl"
                    value={formData.productUrl}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-tunnels-dark border border-tunnels-darkgray/40 text-white focus:border-tunnels-red/60 focus:outline-none"
                    placeholder="https://yourproduct.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white text-sm mb-2">Current Monthly Active Users</label>
                  <input
                    name="currentUsers"
                    value={formData.currentUsers}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-tunnels-dark border border-tunnels-darkgray/40 text-white focus:border-tunnels-red/60 focus:outline-none"
                    placeholder="e.g., 500 MAU or 'Pre-launch'"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm mb-2">Target User Profile</label>
                  <input
                    name="targetAudience"
                    value={formData.targetAudience}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-tunnels-dark border border-tunnels-darkgray/40 text-white focus:border-tunnels-red/60 focus:outline-none"
                    placeholder="Who is this product for?"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm mb-2">What's your growth challenge? *</label>
                <textarea
                  name="distributionGap"
                  value={formData.distributionGap}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-4 rounded-xl bg-tunnels-dark border border-tunnels-darkgray/40 text-white focus:border-tunnels-red/60 focus:outline-none resize-none"
                  placeholder="Describe the gap between your product and users..."
                />
              </div>

              <div>
                <label className="block text-white text-sm mb-2">Previous Growth Efforts</label>
                <textarea
                  name="previousEfforts"
                  value={formData.previousEfforts}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-4 rounded-xl bg-tunnels-dark border border-tunnels-darkgray/40 text-white focus:border-tunnels-red/60 focus:outline-none resize-none"
                  placeholder="What have you tried? What worked/didn't work?"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white text-sm mb-2">Partnership Type</label>
                  <select
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-tunnels-dark border border-tunnels-darkgray/40 text-white focus:border-tunnels-red/60 focus:outline-none"
                  >
                    <option value="" disabled>Select preference</option>
                    {partnershipTypeOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white text-sm mb-2">Target Timeline</label>
                  <input
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-tunnels-dark border border-tunnels-darkgray/40 text-white focus:border-tunnels-red/60 focus:outline-none"
                    placeholder="e.g. Q2 2026"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm mb-2">Why is this the right partnership? *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={6}
                  className="w-full p-4 rounded-xl bg-tunnels-dark border border-tunnels-darkgray/40 text-white focus:border-tunnels-red/60 focus:outline-none resize-none"
                  placeholder="Tell us about your product, the users you're trying to reach, and why you believe Tunnels is the right partner..."
                />
              </div>

              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full p-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  isFormValid && !isSubmitting
                    ? 'bg-tunnels-red text-white hover:bg-tunnels-red-light'
                    : 'bg-tunnels-darkgray text-white/40 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <>Submitting... <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /></>
                ) : (
                  <>Submit Application <Send className="w-5 h-5" /></>
                )}
              </button>

              <p className="text-white/40 text-xs">
                By submitting, you confirm the information provided is accurate and understand that acceptance into the partnership program is not guaranteed.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-tunnels-black border-t border-tunnels-darkgray/40">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 text-center">
          <p className="text-white/60 mb-4">Need advisory or build services instead?</p>
          <ArrowRight className="w-5 h-5 text-tunnels-red mx-auto mb-4" />
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-tunnels-darkgray/60 rounded-xl text-white hover:border-tunnels-red/40 transition-colors"
          >
            Visit the Contact Page
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VentureApplicationPage;
