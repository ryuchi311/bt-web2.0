import React from 'react';
import { Shield, Swords, Globe, Users, Trophy, Target, ArrowRight, Handshake, ScrollText } from 'lucide-react';

const featuredGuilds = [
  {
    name: "Blockchain Space",
    category: "Guild Hub",
    logo: "Blockchain-Space.png",
    members: "100K+",
    description: "The leading guild hub of the metaverse, empowering play-to-earn guilds to scale.",
    color: "text-blue-400"
  },
  {
    name: "AAG",
    category: "Metaverse Guild",
    logo: "AAG.png",
    members: "50K+",
    description: "Creating economic freedom worldwide through the metaverse economy and P2E gaming.",
    color: "text-green-400"
  },
  {
    name: "Davao Defi Community",
    category: "Regional Hub",
    logo: "Davao-Defi-Community.png",
    members: "20K+",
    description: "The premier DeFi and Blockchain education community in the southern Philippines.",
    color: "text-yellow-400"
  }
];

const partnerGuilds = [
  { name: "Alrocknation", type: "Esports Org", logo: "Alrocknation.png" },
  { name: "Crypto Master Trader", type: "Trading Club", logo: "Crypto-Master-Trader-Club.png" },
  { name: "Playermon", type: "Game Guild", logo: "Playermon.png" }
];

const Guilds: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      
      {/* Hero Section */}
      <div className="text-center mb-12 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-tamago-accent/10 rounded-full blur-[120px] -z-10"></div>
        
        <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full mb-8 border border-white/10 animate-in slide-in-from-top-4 duration-700">
          <Globe size={16} className="text-tamago-yellow" />
          <span className="text-xs font-mono uppercase tracking-widest text-gray-300">Global Alliance Network</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-tamago-yellow to-tamago-accent">Guild Alliance</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          We collaborate with the strongest communities in Web3. Together, we amplify engagement, host massive tournaments, and build the future of decentralized gaming.
        </p>
      </div>

      {/* Guild Definition Block */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="glass-panel p-8 md:p-10 rounded-2xl border-tamago-yellow/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-tamago-yellow"></div>
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
             <div className="bg-tamago-yellow/10 p-4 rounded-full shrink-0">
               <ScrollText size={32} className="text-tamago-yellow" />
             </div>
             <div>
               <p className="text-gray-300 text-lg leading-relaxed font-serif italic">
                 "A guild is an organization or association of individuals who come together for a common purpose,
                 typically related to a particular trade, craft, or profession. Guilds have a long history, dating back
                 to medieval times, and were often formed to protect the interests and rights of their members."
               </p>
             </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div className="glass-panel p-6 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
            <Users size={24} />
          </div>
          <div>
            <div className="text-2xl font-bold font-display text-white">500K+</div>
            <div className="text-xs text-gray-400 font-mono uppercase tracking-wider">Combined Reach</div>
          </div>
        </div>
        <div className="glass-panel p-6 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-tamago-yellow/10 flex items-center justify-center text-tamago-yellow">
            <Trophy size={24} />
          </div>
          <div>
            <div className="text-2xl font-bold font-display text-white">50+</div>
            <div className="text-xs text-gray-400 font-mono uppercase tracking-wider">Tournaments Hosted</div>
          </div>
        </div>
        <div className="glass-panel p-6 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-tamago-accent/10 flex items-center justify-center text-tamago-accent">
            <Handshake size={24} />
          </div>
          <div>
            <div className="text-2xl font-bold font-display text-white">20+</div>
            <div className="text-xs text-gray-400 font-mono uppercase tracking-wider">Active Partners</div>
          </div>
        </div>
      </div>

      {/* Featured Guilds */}
      <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
        <Shield className="text-tamago-yellow" /> Featured Partners
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        {featuredGuilds.map((guild, idx) => (
          <div key={idx} className="glass-panel rounded-3xl p-8 relative group overflow-hidden hover:border-tamago-yellow/30 transition-all duration-300">
            <div className="absolute top-0 right-0 p-20 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-tamago-yellow/10 transition-colors"></div>
            
            <div className="relative z-10">
              <div className="h-16 mb-6 flex items-center">
                 {/* Fallback layout if image missing, but usually logos exist in public folder */}
                 <div className="flex items-center gap-4">
                    <img 
                      src={`/logos/${guild.logo}`} 
                      alt={guild.name}
                      className="h-12 w-auto object-contain"
                      onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML += `<span class="text-xl font-bold">${guild.name.charAt(0)}</span>`;
                      }}
                    />
                    <div>
                        <h4 className="font-bold text-xl leading-none">{guild.name}</h4>
                        <span className={`text-xs font-mono ${guild.color}`}>{guild.category}</span>
                    </div>
                 </div>
              </div>

              <p className="text-gray-400 text-sm mb-8 min-h-[60px]">
                {guild.description}
              </p>

              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                  <Users size={12} />
                  {guild.members} Members
                </div>
                <button className="text-sm font-bold text-white hover:text-tamago-yellow transition-colors flex items-center gap-1">
                  Profile <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Network Grid */}
      <div className="glass-panel rounded-3xl p-8 md:p-12 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-2 flex items-center gap-2">
              <Swords className="text-tamago-accent" /> The Ecosystem
            </h3>
            <p className="text-gray-400 text-sm max-w-md">
              Our broader network of gaming guilds, tech partners, and trading communities.
            </p>
          </div>
          <button className="bg-white/5 hover:bg-white/10 text-white px-6 py-2 rounded-full text-sm font-bold border border-white/10 transition-all">
            View All Partners
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {partnerGuilds.map((partner, idx) => (
             <div key={idx} className="bg-black/20 border border-white/5 hover:border-white/20 rounded-xl p-4 flex items-center gap-4 transition-all hover:scale-[1.02]">
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center shrink-0 p-2">
                   <img 
                      src={`/logos/${partner.logo}`} 
                      alt={partner.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                          e.currentTarget.style.display = 'none';
                      }} 
                   />
                </div>
                <div className="overflow-hidden">
                  <h5 className="font-bold text-sm truncate">{partner.name}</h5>
                  <span className="text-xs text-gray-500 font-mono block">{partner.type}</span>
                </div>
             </div>
          ))}
          
          {/* Join Card */}
          <div className="bg-gradient-to-br from-tamago-yellow/10 to-transparent border border-tamago-yellow/20 border-dashed rounded-xl p-4 flex items-center justify-center gap-2 transition-all hover:bg-tamago-yellow/20 cursor-pointer group">
             <Target className="text-tamago-yellow group-hover:scale-110 transition-transform" />
             <span className="font-bold text-tamago-yellow text-sm">Join the Alliance</span>
          </div>
        </div>
      </div>

      {/* Application CTA Section */}
      <div className="w-full text-center">
        <div className="glass-panel p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden group border-tamago-yellow/20">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-tamago-accent/20 to-transparent opacity-50"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-tamago-yellow/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative z-10 flex flex-col items-center">
                <h3 className="text-3xl md:text-5xl font-display font-black text-white mb-6 tracking-tight">
                  Want to be part of our <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-tamago-yellow via-white to-tamago-yellow animate-gradient-x">Ecosystem Guild?</span>
                </h3>
                <p className="text-gray-300 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
                    Click the button below to apply and we will review your application and get back to you.
                </p>
                
                <button className="relative group/btn flex items-center gap-3 bg-white text-black font-bold py-4 px-10 rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    <span className="text-lg">Apply Now</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Guilds;