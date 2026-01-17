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
    title: 'Validated Problem',
    description: 'Clear evidence of customer demand, market pull, or commercial pilots that prove the problem is worth solving.'
  },
  {
    title: 'Accountable Team',
    description: 'Founders or operators with industry expertise, execution capacity, and direct ownership of business outcomes.'
  },
  {
    title: 'Scale Ambition',
    description: 'Targets significant markets with a credible plan for defensibility, monetisation, and scale.'
  }
];

const partnershipHighlights = [
  {
    icon: Layers,
    title: 'Partnership Models',
    description: 'Deferred build, equity, or revenue-share structures determined after internal diligence.'
  },
  {
    icon: Briefcase,
    title: 'Engagement Window',
    description: 'We onboard a limited number of ventures per cycle to preserve focus and accountability.'
  },
  {
    icon: Target,
    title: 'Evaluation',
    description: 'Applications are reviewed against traction, execution readiness, and market potential.'
  }
];

const stageOptions = ['Pre-launch (prototype ready)', 'Early revenue (0-50k MRR)', 'Growth (50k+ MRR)', 'Corporate spin-out'];
const fundingOptions = ['Bootstrapped', 'Pre-seed', 'Seed', 'Series A+', 'Corporate budget available'];
const partnershipInterest = ['Deferred Build', 'Equity Partnership', 'Revenue Share', 'Not sure - need recommendation'];

const VentureApplicationPage = () => {
  const applicationStructuredData = {
    "@context": "https://schema.org",
    "@type": "ApplyAction",
    "name": "TunnelsNG Venture Studio Application",
    "description": "Application for startups and corporate teams seeking a technical co-founder partnership in Nigeria and Africa.",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://tunnels.ng/venture-studio/apply"
    },
    "result": {
      "@type": "Service",
      "name": "Startup Venture Studio Nigeria"
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
    productStage: '',
    traction: '',
    fundingStatus: '',
    teamSize: '',
    partnershipModel: '',
    timeline: '',
    description: ''
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
    formData.productStage !== '' &&
    formData.description.trim().length > 30;

  const handleSubmit = async (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (!isFormValid || isSubmitting) return;
    setIsSubmitting(true);
    setSubmitStatus(null);

    const messageBody = `Role: ${formData.role || 'Not provided'}\nWebsite: ${formData.website || 'Not provided'}\nLocation: ${formData.location || 'Not provided'}\nStage: ${formData.productStage}\nTraction: ${formData.traction || 'Not provided'}\nFunding: ${formData.fundingStatus || 'Not specified'}\nTeam Size: ${formData.teamSize || 'Not provided'}\nPreferred Model: ${formData.partnershipModel || 'Not specified'}\nTimeline: ${formData.timeline || 'Not provided'}\n\nFocus Narrative:\n${formData.description}`;

    const templateParams = {
      from_name: formData.founderName,
      from_email: formData.email,
      company: formData.company,
      budget: formData.fundingStatus || 'Not specified',
      project_type: `Venture Studio Application (${formData.partnershipModel || 'Model TBD'})`,
      message: messageBody,
      to_email: formData.email,
      venture_stage: formData.productStage,
      venture_traction: formData.traction || 'Not provided',
      venture_timeline: formData.timeline || 'Not provided',
      venture_team: formData.teamSize || 'Not provided'
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
        productStage: '',
        traction: '',
        fundingStatus: '',
        teamSize: '',
        partnershipModel: '',
        timeline: '',
        description: ''
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
        title="Venture Studio Application"
        description="Apply to TunnelsNG’s startup venture studio in Nigeria—our technical co-founder program for African founders with validated traction and accountable teams."
        keywords="venture studio application Nigeria, technical co-founder application Africa, tunnelsng partnership"
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
                Thank you for submitting your venture. Our team will review and get back if the fit is aligned with our current build cycles.
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
              Apply to the TunnelsNG Venture Studio
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-3xl">
              This application is for founders, operators, and corporate teams with validated traction looking to co-build with our studio. Service inquiries should go through the contact form.
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
                <h2 className="text-3xl font-bold text-white mb-3">Venture Studio Application</h2>
                <p className="text-white/60">
                  We review applications weekly. Only ventures aligned with our investment focus and capacity will move to diligence.
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
                  <label className="block text-white text-sm mb-2">Product Stage *</label>
                  <select
                    name="productStage"
                    value={formData.productStage}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-tunnels-dark border border-tunnels-darkgray/40 text-white focus:border-tunnels-red/60 focus:outline-none"
                  >
                    <option value="" disabled>Select stage</option>
                    {stageOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white text-sm mb-2">Funding Status</label>
                  <select
                    name="fundingStatus"
                    value={formData.fundingStatus}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-tunnels-dark border border-tunnels-darkgray/40 text-white focus:border-tunnels-red/60 focus:outline-none"
                  >
                    <option value="" disabled>Select status</option>
                    {fundingOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white text-sm mb-2">Traction Snapshot</label>
                  <input
                    name="traction"
                    value={formData.traction}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-tunnels-dark border border-tunnels-darkgray/40 text-white focus:border-tunnels-red/60 focus:outline-none"
                    placeholder="Revenue, pilots, or usage"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm mb-2">Team Size</label>
                  <input
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-tunnels-dark border border-tunnels-darkgray/40 text-white focus:border-tunnels-red/60 focus:outline-none"
                    placeholder="Number of core team members"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white text-sm mb-2">Preferred Partnership Model</label>
                  <select
                    name="partnershipModel"
                    value={formData.partnershipModel}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-tunnels-dark border border-tunnels-darkgray/40 text-white focus:border-tunnels-red/60 focus:outline-none"
                  >
                    <option value="" disabled>Select preference</option>
                    {partnershipInterest.map((option) => (
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
                    placeholder="e.g. Pilot in Q2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm mb-2">What should we know? *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={6}
                  className="w-full p-4 rounded-xl bg-tunnels-dark border border-tunnels-darkgray/40 text-white focus:border-tunnels-red/60 focus:outline-none resize-none"
                  placeholder="Describe your venture, market insight, execution plan, and why TunnelsNG is the right partner."
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
                By submitting, you confirm the information provided is accurate and understand that progressing to diligence is not guaranteed.
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
