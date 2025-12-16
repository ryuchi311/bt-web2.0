import React from 'react';
import { Handshake, Globe, Gamepad2, LineChart, Megaphone, ArrowRight, Building2, Wallet, Star, Users, Target, Zap, ShieldCheck } from 'lucide-react';
import PartnersCarousel from './PartnersCarousel';
import InfluencersCarousel from './InfluencersCarousel';

// Categorized Partner Data
const categories = [
  {
    title: "Exchanges & Wallets",
    description: "Leading crypto exchanges and financial infrastructure providers we collaborate with.",
    icon: Wallet,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    partners: [
      { name: "Bitrue", logo: "Bitrue.png" },
      { name: "Huobi", logo: "Huobi.png" },
      { name: "LBank", logo: "LBank.png" },
    ]
  },
  {
    title: "Games & Metaverse",
    description: "The most exciting Web3 games and virtual worlds in our ecosystem.",
    icon: Gamepad2,
    color: "text-tamago-accent",
    bg: "bg-tamago-accent/10",
    partners: [
      { name: "KOF Arena", logo: "KOF-Arena.png" },
      { name: "Netmarble", logo: "Netmarble.png" },
      { name: "Perplay", logo: "Perplay.png" },
      { name: "Thetan Arena", logo: "Thetan-Arena.png" },
      { name: "Arcus", logo: "Arcus.png" },
      { name: "Heroes of Mavia", logo: "Heroes-of-Mavia.png" },
      { name: "Playermon", logo: "Playermon.png" },
      { name: "Aqua Farm", logo: "Aqua-Farm.png" },
    ]
  },
  {
    title: "Media & Tools",
    description: "Data aggregators, news platforms, and content networks.",
    icon: LineChart,
    color: "text-tamago-yellow",
    bg: "bg-tamago-yellow/10",
    partners: [
      { name: "P2EAll.com", logo: "P2EAll.png" },
      { name: "Wikibit", logo: "Wikibit.png" },
      { name: "Youtube", logo: "Youtube.png" },
      { name: "PlayToEarn.net", logo: "PlayToEarn.png" },
    ]
  },
  {
    title: "Community & Guilds",
    description: "Strategic alliances with other powerhouses in the space.",
    icon: Building2,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    partners: [
      { name: "Blockchain Space", logo: "Blockchain-Space.png" },
      { name: "AAG", logo: "AAG.png" },
      { name: "Davao Defi Community", logo: "Davao-Defi-Community.png" },
      { name: "Alrocknation", logo: "Alrocknation.png" },
      { name: "Crypto Master Trader Club", logo: "Crypto-Master-Trader-Club.png" },
    ]
  }
];

const Partners: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      
      {/* Hero Section */}
      <div className="text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-tamago-yellow/5 rounded-full blur-[120px] -z-10"></div>
        
        <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full mb-8 border border-white/10 animate-in slide-in-from-top-4 duration-700">
          <Handshake size={16} className="text-tamago-yellow" />
          <span className="text-xs font-mono uppercase tracking-widest text-gray-300">Our Network</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
          Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-tamago-yellow to-tamago-accent">Partners</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          We believe in the power of collaboration. We work with the biggest names in the industry to bring the best opportunities to our community.
        </p>
      </div>

      {/* Featured Partners Carousel */}
      <div className="mb-24">
         <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-4">
             <div className="p-3 rounded-xl bg-tamago-yellow/10 text-tamago-yellow">
                <Star size={24} />
             </div>
             <div>
               <h3 className="text-2xl font-display font-bold text-white mb-1">Featured Partners</h3>
               <p className="text-gray-400 text-sm max-w-md">Highlighting our key strategic alliances.</p>
             </div>
         </div>
         <PartnersCarousel />
      </div>

      {/* What Makes Us Strong Section */}
      <div className="mb-24 relative overflow-hidden rounded-[3rem] bg-gradient-to-b from-[#1a1a1a] to-transparent border border-white/5 p-8 md:p-16">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-tamago-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-tamago-yellow/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
                <div className="inline-flex items-center gap-2 text-tamago-yellow font-bold uppercase tracking-widest text-xs mb-4">
                    <ShieldCheck size={16} />
                    <span>Core Strength</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-6 leading-tight">
                    What Makes Us <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-tamago-yellow to-orange-500">Strong!</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    These are the essential pillars of our team that help us to be the leading marketing benchmark in the Crypto Space. Our common goal and firm synergy can create a great impact that amplifies our best strategies in promoting web3 businesses.
                </p>
                <div className="flex flex-col gap-4">
                    {[
                        { icon: Target, text: "Common Goal", desc: "Unified vision for Web3 adoption." },
                        { icon: Users, text: "Firm Synergy", desc: "Collaborative power of our network." },
                        { icon: Zap, text: "Great Impact", desc: "Amplifying strategies for max reach." }
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                            <div className="p-3 bg-black/40 rounded-lg text-tamago-yellow">
                                <item.icon size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">{item.text}</h4>
                                <p className="text-xs text-gray-400">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Visual/Image Side */}
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-tamago-yellow/20 to-tamago-accent/20 blur-3xl rounded-full"></div>
                <div className="relative glass-panel p-8 rounded-3xl border border-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="flex flex-col gap-6 items-center text-center">
                         <div className="w-24 h-24 bg-gradient-to-br from-tamago-yellow to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-orange-500/20 mb-2">
                            <Handshake size={48} className="text-white" />
                         </div>
                         <div>
                             <h3 className="text-2xl font-bold text-white mb-2">Unbreakable Bonds</h3>
                             <p className="text-gray-400 text-sm">
                                "Synergy is not just a buzzword for us. It is the engine that drives every campaign we launch."
                             </p>
                         </div>
                         <div className="w-full h-px bg-white/10"></div>
                         <div className="flex justify-between w-full text-xs font-mono text-gray-500">
                             <span>EST. 2023</span>
                             <span>BRGY TAMAGO</span>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* KOLS & INFLUENCERS */}
      <div className="mb-24 relative">
        <div className="text-center mb-12">
           <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 py-2 rounded-full mb-6 border border-purple-500/30">
              <Megaphone size={16} className="text-purple-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-gray-200">The Voices</span>
           </div>
           <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-6">
              KOLS | <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">INFLUENCERS</span>
           </h2>
           <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-snug">
              Over <span className="text-tamago-yellow font-bold">500,000+</span> engagement reach on all social media partners and channels
           </p>
        </div>
        
        <InfluencersCarousel />
      </div>

      {/* ADVISER SECTION */}
      <div className="mb-24 relative max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
           <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 px-4 py-2 rounded-full mb-6 border border-blue-500/30">
              <Target size={16} className="text-blue-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-gray-200">Strategic Leadership</span>
           </div>
           <h2 className="text-3xl md:text-5xl font-display font-black text-white">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Adviser</span>
           </h2>
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-[3rem] border border-blue-500/20 relative overflow-hidden group hover:border-blue-500/40 transition-colors duration-500">
           {/* Background effects */}
           <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-transparent opacity-50"></div>
           <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

           <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">
               {/* Image */}
               <div className="relative shrink-0 group-hover:scale-105 transition-transform duration-500">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full p-2 border border-white/10 bg-white/5 relative">
                      <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse-slow"></div>
                      <img 
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                        alt="Bob Bao" 
                        className="w-full h-full object-cover rounded-full shadow-2xl relative z-10"
                      />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg border border-white/20 whitespace-nowrap">
                    Board Member
                  </div>
               </div>

               {/* Content */}
               <div className="text-center md:text-left flex-1">
                   <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">Bob Bao</h3>
                   <div className="text-xl text-blue-400 font-mono mb-6 flex items-center justify-center md:justify-start gap-3">
                      <span>Head Manager</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
                      <span className="text-white">Wikibit</span>
                   </div>
                   <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      "Guiding Brgy Tamago with world-class expertise in crypto data analysis and global market strategies. Together, we are setting new standards for transparency and community growth in the Web3 space."
                   </p>
                   
                   <div className="flex flex-wrap justify-center md:justify-start gap-4">
                      <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
                         <Globe size={16} className="text-blue-400"/> Global Strategy
                      </div>
                      <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
                         <Handshake size={16} className="text-blue-400"/> Partnerships
                      </div>
                   </div>
               </div>
           </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="space-y-20">
        {categories.map((category, idx) => (
          <div key={idx} className="relative">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-4 border-b border-white/5 pb-4">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${category.bg} ${category.color}`}>
                  <category.icon size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-gray-400 text-sm max-w-md">{category.description}</p>
                </div>
              </div>
            </div>

            {/* Partners Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {category.partners.map((partner, pIdx) => (
                <div 
                  key={pIdx} 
                  className="group relative glass-panel p-6 rounded-2xl flex items-center justify-center hover:bg-white/5 transition-all duration-300 hover:scale-[1.02] border border-white/5 hover:border-white/20"
                >
                  {/* Hover Glow */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl ${category.bg}`}></div>
                  
                  <div className="relative z-10 w-full aspect-[3/2] flex items-center justify-center">
                     <img 
                        src={`/logos/${partner.logo}`} 
                        alt={partner.name}
                        className="w-full h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML += `<span class="text-xs font-bold text-center text-gray-500 font-display">${partner.name}</span>`;
                        }}
                      />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-24">
        <div className="glass-panel p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden group border-tamago-accent/20">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-tamago-dark via-tamago-dark to-tamago-accent/10"></div>
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="text-center md:text-left max-w-2xl">
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                      Ready to collaborate?
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        Join our extensive network of partners and let's build something incredible together in the Web3 space.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                       <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Globe size={16} className="text-tamago-yellow" /> Global Reach
                       </div>
                       <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Megaphone size={16} className="text-tamago-accent" /> Co-Marketing
                       </div>
                    </div>
                </div>
                
                <button className="whitespace-nowrap flex items-center gap-3 bg-white text-black font-bold py-4 px-10 rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                    <span>Become a Partner</span>
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Partners;