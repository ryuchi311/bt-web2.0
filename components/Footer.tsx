import React from 'react';
import { Mail, Send, Facebook, Video, X } from 'lucide-react';
import { Logo } from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black py-12 md:py-16 relative overflow-hidden">
        {/* Background decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-tamago-yellow/50 to-transparent opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">

            {/* Brand Section */}
            <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left max-w-sm">
              <div className="flex items-center gap-4">
                 <div className="relative group cursor-pointer hover:scale-110 transition-transform duration-300">
                    <div className="absolute inset-0 bg-tamago-yellow/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Logo className="w-12 h-12 relative z-10" />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-2xl font-display font-black tracking-tighter leading-none text-white">BRGY</span>
                    <span className="text-xs font-display font-bold text-tamago-yellow tracking-[0.2em] leading-none mt-1">TAMAGO</span>
                 </div>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                Hatching the next generation of digital communities. Create, communicate, and collaborate with the best in Web3.
              </p>

              <a href="mailto:marketing@brgytamago.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group border border-white/5 bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 hover:border-tamago-yellow/30">
                <Mail size={16} className="text-tamago-yellow group-hover:scale-110 transition-transform" />
                <span>marketing@brgytamago.com</span>
              </a>
            </div>

            {/* Socials & Links */}
            <div className="flex flex-col items-center md:items-end gap-6">
               <div className="text-center md:text-right">
                   <span className="text-xs font-mono text-gray-500 uppercase tracking-widest font-bold block mb-4">Join the Neighborhood</span>
                   <div className="flex items-center gap-4">
                      {[
                          { icon: Send, href: "#", color: "hover:text-[#0088cc]", border: "hover:border-[#0088cc]/30", label: "Telegram" },
                          { icon: Facebook, href: "#", color: "hover:text-[#1877F2]", border: "hover:border-[#1877F2]/30", label: "Facebook" },
                          { icon: X, href: "#", color: "hover:text-white", border: "hover:border-white/30", label: "X" },
                          { icon: Video, href: "#", color: "hover:text-[#ff0050]", border: "hover:border-[#ff0050]/30", label: "TikTok" }
                      ].map((social, idx) => (
                        <a 
                            key={idx}
                            href={social.href} 
                            className={`w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all hover:scale-110 hover:bg-white/10 ${social.color} ${social.border}`}
                            aria-label={social.label}
                        >
                            <social.icon size={20} />
                        </a>
                      ))}
                   </div>
               </div>
               
               <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-gray-500 font-medium">
                   <a href="#" className="hover:text-tamago-yellow hover:underline underline-offset-4 transition-all">Press Kit</a>
                   <a href="#" className="hover:text-tamago-yellow hover:underline underline-offset-4 transition-all">Careers</a>
                   <a href="#" className="hover:text-tamago-yellow hover:underline underline-offset-4 transition-all">Partner with Us</a>
                   <a href="#" className="hover:text-tamago-yellow hover:underline underline-offset-4 transition-all">Privacy Policy</a>
               </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/5 mt-12 pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-mono">
            <p>© {new Date().getFullYear()} Brgy Tamago. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-tamago-yellow transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-tamago-yellow transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-tamago-yellow transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;