import React from 'react';
import { Facebook, Twitter, Send, Video, Youtube, Mail, MessageCircle, ExternalLink, Globe, Hash } from 'lucide-react';

const socialLinks = [
  {
    name: "Facebook",
    handle: "@BrgyTamago",
    description: "Follow our official page for the latest news, events, and community highlights.",
    icon: Facebook,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "hover:border-blue-500/50",
    link: "#"
  },
  {
    name: "X (Twitter)",
    handle: "@BrgyTamago",
    description: "Join the conversation. Real-time updates, spaces, and threads about everything Web3.",
    icon: Twitter,
    color: "text-white",
    bgColor: "bg-white/10",
    borderColor: "hover:border-white/50",
    link: "#"
  },
  {
    name: "Telegram",
    handle: "Brgy Tamago Community",
    description: "Chat with the community. The heart of our daily discussions and announcements.",
    icon: Send,
    color: "text-[#0088cc]",
    bgColor: "bg-[#0088cc]/10",
    borderColor: "hover:border-[#0088cc]/50",
    link: "#"
  },
  {
    name: "Discord",
    handle: "Brgy Tamago Server",
    description: "Voice channels, gaming lobbies, and exclusive guild access. Dive deeper into the rabbit hole.",
    icon: MessageCircle,
    color: "text-[#5865F2]",
    bgColor: "bg-[#5865F2]/10",
    borderColor: "hover:border-[#5865F2]/50",
    link: "#"
  },
  {
    name: "YouTube",
    handle: "Brgy Tamago TV",
    description: "Watch our AMAs, tutorials, game reviews, and exclusive video content.",
    icon: Youtube,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "hover:border-red-500/50",
    link: "#"
  },
  {
    name: "TikTok",
    handle: "@BrgyTamago",
    description: "Short-form fun, clips, and highlights from our gaming sessions and events.",
    icon: Video,
    color: "text-[#ff0050]",
    bgColor: "bg-[#ff0050]/10",
    borderColor: "hover:border-[#ff0050]/50",
    link: "#"
  }
];

const Socials: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      
      {/* Header */}
      <div className="text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10"></div>
        
        <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full mb-8 border border-white/10 animate-in slide-in-from-top-4 duration-700">
          <Hash size={16} className="text-tamago-yellow" />
          <span className="text-xs font-mono uppercase tracking-widest text-gray-300">Connect With Us</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
          Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Conversation</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          We are everywhere. From live streams to threads, voice chats to video clips. Choose your platform and say hello to the neighborhood.
        </p>
      </div>

      {/* Social Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {socialLinks.map((social, idx) => (
          <a 
            key={idx} 
            href={social.link}
            className={`glass-panel p-8 rounded-3xl group transition-all duration-300 border border-white/5 ${social.borderColor} hover:-translate-y-2 relative overflow-hidden`}
          >
            {/* Hover Gradient Background */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-current ${social.color}`}></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className={`w-14 h-14 rounded-2xl ${social.bgColor} flex items-center justify-center ${social.color} shadow-lg`}>
                  <social.icon size={28} />
                </div>
                <div className="bg-white/5 p-2 rounded-full text-gray-400 group-hover:text-white transition-colors">
                  <ExternalLink size={16} />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold font-display text-white mb-1">{social.name}</h3>
              <p className={`text-sm font-mono mb-4 ${social.color} opacity-80`}>{social.handle}</p>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {social.description}
              </p>
              
              <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-3 transition-all">
                Connect <Globe size={14} />
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Official Channels Footer */}
      <div className="glass-panel p-12 rounded-[2.5rem] text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 bg-tamago-yellow/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 p-32 bg-tamago-accent/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10">
          <Mail className="w-12 h-12 text-tamago-yellow mx-auto mb-6" />
          <h3 className="text-2xl font-display font-bold text-white mb-4">
            Business Inquiries
          </h3>
          <p className="text-gray-400 mb-8">
            Looking for partnerships, promotions, or collaborations? Shoot us an email.
          </p>
          <a 
            href="mailto:marketing@brgytamago.com" 
            className="inline-flex items-center gap-3 bg-white text-black font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            marketing@brgytamago.com
          </a>
        </div>
      </div>

    </div>
  );
};

export default Socials;