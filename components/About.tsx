import React from 'react';
import { Target, Users, Shield, Lightbulb, Heart, Globe, Crown, Briefcase, Handshake, PartyPopper, Megaphone, Linkedin, Twitter } from 'lucide-react';
import { Logo } from './Logo';

// Helper for professional placeholder avatars
const getProfileImage = (seed: string, gender: 'male' | 'female' = 'male') => {
  // Using Unsplash source for high-quality placeholders. In a real app, these would be local assets.
  const id = seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return `https://source.unsplash.com/random/400x400/?portrait,professional,${gender}&sig=${id}`;
};

// Fallback to stylized avatars if Unsplash is too random
const getStylizedAvatar = (name: string) => `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}&backgroundColor=202020`;

const TeamCard: React.FC<{ name: string; role: string; isFounder?: boolean }> = ({ name, role, isFounder }) => (
  <div className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] ${isFounder ? 'h-[400px] w-full max-w-sm mx-auto shadow-[0_0_30px_rgba(253,189,22,0.1)] hover:shadow-[0_0_50px_rgba(253,189,22,0.2)]' : 'h-80 hover:shadow-tamago-accent/10'}`}>
    
    {/* Background Image/Avatar */}
    <div className="absolute inset-0 bg-gray-900">
      <img 
        src={getStylizedAvatar(name)} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0"
      />
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-tamago-dark via-tamago-dark/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>
    </div>

    {/* Content Overlay */}
    <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col items-start justify-end h-full z-10">
      {/* Animated Accent Line */}
      <div className={`w-12 h-1 bg-tamago-yellow mb-4 transition-all duration-500 group-hover:w-24 group-hover:bg-tamago-accent ${isFounder ? 'h-1.5' : ''}`}></div>
      
      <h4 className={`${isFounder ? 'text-3xl' : 'text-xl'} font-bold font-display text-white mb-1 leading-tight group-hover:text-tamago-yellow transition-colors duration-300`}>
        {name}
      </h4>
      <p className={`${isFounder ? 'text-tamago-yellow text-base' : 'text-gray-400 text-sm'} font-mono uppercase tracking-wider group-hover:text-white transition-colors duration-300`}>
        {role}
      </p>

      {/* Social Icons (Visible on Hover with staggering) */}
      <div className="flex gap-3 mt-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 ease-out">
        <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-tamago-yellow hover:text-black text-white transition-all duration-300 hover:scale-110">
          <Twitter size={16} />
        </a>
        <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-[#0077b5] hover:text-white text-white transition-all duration-300 hover:scale-110">
          <Linkedin size={16} />
        </a>
      </div>
    </div>

    {/* Decorative Border for Founders */}
    {isFounder && (
      <div className="absolute inset-0 border-2 border-tamago-yellow/20 rounded-2xl pointer-events-none group-hover:border-tamago-yellow/60 transition-colors duration-500"></div>
    )}
    
    {/* Subtle Border for everyone else */}
    {!isFounder && (
      <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none group-hover:border-white/20 transition-colors duration-500"></div>
    )}
  </div>
);

const About: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Header / Intro */}
      <div className="text-center mb-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-tamago-yellow/5 rounded-full blur-[100px] -z-10"></div>
        
        <div className="inline-block mb-6 animate-bounce-short">
          <Logo className="w-24 h-24" />
        </div>
        
        <h2 className="text-4xl md:text-6xl font-display font-black mb-6">
          Who is <span className="text-tamago-yellow">Brgy Tamago?</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          We are not just an agency. We are a digital <span className="text-white font-bold">Barangay</span> (Community).
        </p>
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-br from-tamago-yellow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           <div className="relative z-10">
             <h3 className="text-2xl font-bold font-display text-white mb-6">The Origin Story</h3>
             <div className="space-y-4 text-gray-300 leading-relaxed">
               <p>
                 In the Philippines, a <strong className="text-tamago-yellow">"Barangay"</strong> is the smallest administrative division—a village, a district, a close-knit community where everyone knows everyone.
               </p>
               <p>
                 Brgy Tamago takes this concept to the Metaverse. We were hatched from the idea that the Web3 space lacks a genuine "home" for builders and creators—a place free from the noise of fake hype.
               </p>
               <p>
                 We started as a small group of gamers and crypto-enthusiasts. Today, we are a full-scale ecosystem helping projects incubate, hatch, and fly.
               </p>
             </div>
           </div>
        </div>

        <div className="space-y-6">
           <div className="glass-panel p-6 rounded-2xl flex items-start gap-4 border border-tamago-yellow/20">
             <div className="bg-tamago-yellow/20 p-3 rounded-lg text-tamago-yellow">
               <Target size={24} />
             </div>
             <div>
               <h4 className="text-lg font-bold text-white mb-2">Our Mission</h4>
               <p className="text-gray-400 text-sm">
                 To eliminate false marketing and provide transparent, high-impact growth strategies that incubate genuine success for Web3 projects.
               </p>
             </div>
           </div>

           <div className="glass-panel p-6 rounded-2xl flex items-start gap-4 border border-tamago-accent/20">
             <div className="bg-tamago-accent/20 p-3 rounded-lg text-tamago-accent">
               <Globe size={24} />
             </div>
             <div>
               <h4 className="text-lg font-bold text-white mb-2">Our Vision</h4>
               <p className="text-gray-400 text-sm">
                 To become the leading digital barangay globally, known for hatching the next generation of unicorns in the gaming and blockchain industry.
               </p>
             </div>
           </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-24">
        <h3 className="text-3xl font-display font-bold text-center mb-12">The <span className="text-tamago-yellow">Tamago Way</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: Users, title: "Community First", desc: "We build for people, not just wallets. Engagement comes from genuine connection." },
            { icon: Shield, title: "Radical Truth", desc: "No bots. No fake numbers. We advocate for authentic analytics and reporting." },
            { icon: Lightbulb, title: "Innovation", desc: "We don't follow trends; we hatch new ones through creative campaigns." },
            { icon: Heart, title: "Passion", desc: "We love what we do. Every project we touch gets our full creative energy." }
          ].map((item, i) => (
            <div key={i} className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-all hover:-translate-y-2">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 text-tamago-yellow">
                <item.icon size={24} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Team Section */}
      <div className="mb-24 animate-in slide-in-from-bottom-10 fade-in duration-700">
        <div className="text-center mb-20">
           <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full mb-6 border border-white/10">
              <Crown size={14} className="text-tamago-yellow" />
              <span className="text-xs font-mono uppercase tracking-widest text-gray-400">Leadership</span>
           </div>
           <h3 className="text-3xl md:text-5xl font-display font-black mb-6">
              Meet the <span className="text-tamago-yellow">Barangay</span>
           </h3>
           <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed text-lg">
             A powerhouse alliance of content creators, crypto influencers, and builders committed to organic growth.
           </p>
        </div>

        {/* Founders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto mb-24">
            <TeamCard name="Mike Tamago" role="The Founder" isFounder />
            <TeamCard name="Alrock" role="Co-Founder" isFounder />
        </div>

        {/* Departments Divider */}
        <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-white/10 flex-1"></div>
            <span className="text-gray-500 font-mono text-sm uppercase tracking-widest font-bold">The Core Squad</span>
            <div className="h-px bg-white/10 flex-1"></div>
        </div>

        {/* Business Development */}
        <div className="mb-16">
            <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Briefcase className="text-blue-400" /> Business Development
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { name: "Dong Ayan TV", role: "Team Director" },
                    { name: "Lester", role: "Global BD Manager" },
                    { name: "Chi", role: "Tech Lead" },
                    { name: "Jasmine", role: "Business Developer" },
                ].map((member, i) => (
                    <TeamCard key={i} name={member.name} role={member.role} />
                ))}
            </div>
        </div>

        {/* Projects & Collaborations */}
        <div className="mb-16">
            <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Handshake className="text-green-400" /> Projects & Collaborations
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <TeamCard name="ULTM8X" role="Partnership Coordinator" />
                {/* Placeholder for future expansion */}
                <div className="rounded-2xl border-2 border-dashed border-white/5 flex items-center justify-center h-80 text-gray-600 font-mono text-xs uppercase tracking-widest hover:border-white/10 transition-colors">
                    Hiring...
                </div>
            </div>
        </div>

        {/* Community & Events */}
        <div className="mb-16">
            <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <PartyPopper className="text-purple-400" /> Community & Events
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                 {[
                    { name: "Liezel", role: "Event Organizer" },
                    { name: "Rowena", role: "Community Ambassador" },
                    { name: "Cherry Ann", role: "Community Ambassador" },
                    { name: "Aldrin", role: "Community Manager" },
                    { name: "Lilian", role: "Graphic Designer" },
                ].map((member, i) => (
                    <TeamCard key={i} name={member.name} role={member.role} />
                ))}
            </div>
        </div>

        {/* Storytelling Quote */}
        <div className="mt-20 text-center max-w-3xl mx-auto px-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-tamago-yellow/5 via-tamago-accent/5 to-tamago-yellow/5 blur-3xl -z-10"></div>
           <div className="inline-block p-4 rounded-full bg-white/5 mb-6 ring-1 ring-white/10">
              <Megaphone className="text-tamago-yellow w-8 h-8" />
           </div>
           <h4 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
             "We believe in the power of storytelling."
           </h4>
           <p className="text-gray-400 text-lg leading-relaxed">
             We'll help you craft a compelling narrative that resonates with your audience, creating an emotional connection that sparks interest and loyalty in our community.
           </p>
        </div>
      </div>

      {/* Team / CTA */}
      <div className="glass-panel rounded-3xl p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tamago-yellow via-white to-tamago-accent"></div>
        <div className="absolute bottom-0 right-0 p-32 bg-tamago-accent/5 rounded-full blur-3xl"></div>
        
        <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 relative z-10">
          Want to join the neighborhood?
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8 relative z-10">
          Whether you are a developer looking for a team, a brand looking for exposure, or a gamer looking for a guild, Brgy Tamago has a spot for you.
        </p>
        <button className="relative z-10 bg-white text-black font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default About;