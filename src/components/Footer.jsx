import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [taglineIndex, setTaglineIndex] = useState(0);
  const currentYear = new Date().getFullYear();
  
  const taglines = [
    'Illuminate your digital presence.',
    'Built for clarity & speed.',
    'Modern design for modern teams.',
    'Light up your workflow.'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      alert('✉️ Valid email required');
      return;
    }
    alert(`✅ Subscribed: ${email}`);
    setEmail('');
  };

  const handleLinkClick = (e, label) => {
    e.preventDefault();
    alert(`🔗 ${label} (demo)`);
  };

  const handleSocialClick = (e, platform) => {
    e.preventDefault();
    alert(`🌐 ${platform} (demo)`);
  };

  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-light text-[#E2E8F0]">✦</span>
              <span className="text-2xl font-bold tracking-tight">Lumina</span>
            </div>
            <p className="mt-4 text-sm text-[#94A3B8] leading-relaxed max-w-xs transition-opacity duration-200" style={{ opacity: 1 }}>
              {taglines[taglineIndex]}
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <button 
                onClick={(e) => handleSocialClick(e, 'Twitter')}
                className="text-[#94A3B8] hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </button>
              <button 
                onClick={(e) => handleSocialClick(e, 'GitHub')}
                className="text-[#94A3B8] hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.694.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </button>
              <button 
                onClick={(e) => handleSocialClick(e, 'YouTube')}
                className="text-[#94A3B8] hover:text-white transition-colors duration-200"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#94A3B8]">Product</h3>
            <ul className="mt-4 space-y-3">
              <li><button onClick={(e) => handleLinkClick(e, 'Features')} className="text-sm text-[#CBD5E1] hover:text-white transition-colors duration-200">Features</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'Pricing')} className="text-sm text-[#CBD5E1] hover:text-white transition-colors duration-200">Pricing</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'Integrations')} className="text-sm text-[#CBD5E1] hover:text-white transition-colors duration-200">Integrations</button></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#94A3B8]">Company</h3>
            <ul className="mt-4 space-y-3">
              <li><button onClick={(e) => handleLinkClick(e, 'About')} className="text-sm text-[#CBD5E1] hover:text-white transition-colors duration-200">About</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'Careers')} className="text-sm text-[#CBD5E1] hover:text-white transition-colors duration-200">Careers</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'Blog')} className="text-sm text-[#CBD5E1] hover:text-white transition-colors duration-200">Blog</button></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#94A3B8]">Support</h3>
            <ul className="mt-4 space-y-3">
              <li><button onClick={(e) => handleLinkClick(e, 'Help')} className="text-sm text-[#CBD5E1] hover:text-white transition-colors duration-200">Help</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'Docs')} className="text-sm text-[#CBD5E1] hover:text-white transition-colors duration-200">Docs</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'Community')} className="text-sm text-[#CBD5E1] hover:text-white transition-colors duration-200">Community</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#1E293B] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <label htmlFor="email-newsletter" className="text-sm font-medium text-[#94A3B8]">Subscribe</label>
            <div className="flex w-full sm:w-auto">
              <input
                type="email"
                id="email-newsletter"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubscribe(e)}
                className="px-4 py-2 bg-[#1E293B] border border-[#334155] rounded-l-lg text-sm text-white placeholder-[#64748B] focus:outline-none focus:ring-1 focus:ring-[#38BDF8] w-full sm:w-48"
              />
              <button
                onClick={handleSubscribe}
                className="px-4 py-2 bg-[#38BDF8] hover:bg-[#0EA5E9] text-[#0F172A] font-medium text-sm rounded-r-lg transition-colors duration-200"
              >
                Go
              </button>
            </div>
          </div>
          <p className="text-sm text-[#64748B]">&copy; {currentYear} Lumina.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;