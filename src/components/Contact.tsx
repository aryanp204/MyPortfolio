import React, { useState } from 'react';
import { profile } from '@/data/profile';
import { ArrowUpRight, Copy, Check, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch (err) {
      console.warn('Clipboard write failed:', err);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-hairline">
      <div className="max-w-spec mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-12 border-b border-hairline gap-2">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs text-vermilion font-medium">03 //</span>
            <h2 className="font-mono text-sm tracking-mono uppercase text-primary font-semibold">
              CONTACT & COMMUNICATION
            </h2>
          </div>
          <div className="font-mono text-[11px] text-muted tracking-mono uppercase">
            <span>AVAILABILITY: OPEN FOR OPPORTUNITIES</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Narrative Column: 6 of 12 cols */}
          <div className="col-span-12 lg:col-span-6 space-y-6">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter text-primary">
              Get in touch
            </h3>
            <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-[55ch]">
              Whether you have a project in mind, want to collaborate, or just want to say hello,
              I'd love to hear from you! Feel free to reach out directly via email, or connect with me on
              social media. Looking forward to chatting!
            </p>

            <div className="pt-2">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center space-x-2.5 px-6 py-3 bg-primary text-canvas font-mono text-xs font-semibold uppercase tracking-mono hover:bg-vermilion hover:text-white transition-all focus:outline-none"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Compose Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Direct Channels Directory: 6 of 12 cols */}
          <div className="col-span-12 lg:col-span-6">
            <div className="border border-hairline bg-surface/30 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-hairline font-mono text-xs text-muted uppercase tracking-mono">
                <span>DIRECT COMMUNICATION CHANNELS</span>
                <span>STATUS: ACTIVE</span>
              </div>

              <div className="space-y-4 font-mono">
                {/* Email with Click-to-Copy */}
                <div className="p-4 border border-hairline bg-canvas flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] text-muted uppercase tracking-mono">Email Address</div>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-xs sm:text-sm text-primary font-medium hover:text-vermilion transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="self-start sm:self-center inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-mono border border-hairline hover:border-vermilion text-secondary hover:text-vermilion transition-colors"
                    aria-label="Copy email address to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-vermilion" />
                        <span className="text-vermilion font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* LinkedIn */}
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 border border-hairline bg-canvas flex items-center justify-between hover:border-vermilion transition-all"
                >
                  <div>
                    <div className="text-[10px] text-muted uppercase tracking-mono">LinkedIn Profile</div>
                    <div className="text-xs sm:text-sm text-primary font-medium group-hover:text-vermilion transition-colors">
                      aryan-patel-35240a238
                    </div>
                  </div>
                  <div className="p-2 border border-hairline group-hover:border-vermilion text-muted group-hover:text-vermilion transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={profile.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 border border-hairline bg-canvas flex items-center justify-between hover:border-vermilion transition-all"
                >
                  <div>
                    <div className="text-[10px] text-muted uppercase tracking-mono">Instagram</div>
                    <div className="text-xs sm:text-sm text-primary font-medium group-hover:text-vermilion transition-colors">
                      @runrunaryan
                    </div>
                  </div>
                  <div className="p-2 border border-hairline group-hover:border-vermilion text-muted group-hover:text-vermilion transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>
              </div>

              <div className="pt-2 flex items-center justify-between font-mono text-[10px] text-muted border-t border-hairline/60">
                <span>LOCATION: {profile.location.toUpperCase()}</span>
                <span>TYPICAL RESPONSE: &lt; 24H</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
