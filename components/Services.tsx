import React from 'react';
import { ServiceItem } from '../types';
import { Lightbulb, Megaphone, Users, Handshake, Box, ArrowUpRight, Shield, Rocket, Mic, Radio, Gift, BarChart3, CheckCircle2, Clock, Globe } from 'lucide-react';

// Featured Service (Large Card)
const blockchainService: ServiceItem = {
  id: 'blockchain',
  title: 'Blockchain Development Services',
  description: 'End-to-end Web3 engineering solutions. We build secure, scalable decentralized applications and infrastructure.',
  icon: 'box',
  priceStart: 'Custom Quote',
  features: [
    'Software & Application Development',
    'Info Security Service',
    'Smart Contract Development',
    'Tech-Related Consultation',
    'Website Development'
  ]
};

// Standard Services
const services: ServiceItem[] = [
  {
    id: 'consultation',
    title: 'Marketing Consultation',
    description: 'Strategic advisory to align your brand, team, and events for maximum impact.',
    icon: 'lightbulb',
    priceStart: 'Advisory',
    features: ['Content Planning & Advise', 'Hiring Process Support', 'Event Organizing']
  },
  {
    id: 'campaigns',
    title: 'Marketing Campaigns',
    description: 'Aggressive promotion strategies including shilling, airdrops, and influencer outreach.',
    icon: 'megaphone',
    priceStart: 'Campaign',
    features: ['Project Shilling & Guild Posting', 'Airdrops & Dedicated Videos', 'Esports Hosting & Streaming']
  },
  {
    id: 'social',
    title: 'Social Building & Mgmt',
    description: 'Cultivating vibrant communities from scratch and managing daily engagement.',
    icon: 'users',
    priceStart: 'Monthly',
    features: ['Social Media Management', 'Community Building', 'Social Group Moderation']
  },
  {
    id: 'partnership',
    title: 'Strategic Partnership Bridge',
    description: 'Connecting you with the right investors, ventures, and Web3 guilds.',
    icon: 'handshake',
    priceStart: 'Network',
    features: ['Ventures / Investors Network', 'Web3 Guilds Support', 'Web3 Expo Organization']
  }
];

const Services: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'lightbulb': return <Lightbulb className="w-8 h-8 text-yellow-400" />;
      case 'megaphone': return <Megaphone className="w-8 h-8 text-red-400" />;
      case 'users': return <Users className="w-8 h-8 text-blue-400" />;
      case 'handshake': return <Handshake className="w-8 h-8 text-green-400" />;
      case 'box': return <Box className="w-12 h-12 text-tamago-yellow" />;
      default: return <Rocket className="w-8 h-8 text-gray-400" />;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Accelerate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-tamago-yellow to-tamago-accent">Web3 Growth</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
          From smart contracts to community building, we provide the full stack of services needed to launch and scale.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(300px,auto)] mb-16 md:mb-20">
        
        {/* Featured Large Card: Blockchain Development */}
        <div className="lg:col-span-2 glass-panel p-6 md:p-8 rounded-3xl relative overflow-hidden group hover:border-tamago-yellow/50 transition-colors">
          <div className="absolute top-0 right-0 p-12 md:p-16 bg-tamago-yellow/10 rounded-bl-[100px] transition-transform group-hover:scale-110 duration-700"></div>
          
          <div className="relative z-10 mb-6">
            {getIcon(blockchainService.icon)}
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold font-display mb-4 relative z-10 text-white group-hover:text-tamago-yellow transition-colors">
            {blockchainService.title}
          </h3>
          <p className="text-gray-400 mb-8 relative z-10 max-w-md text-sm md:text-base">
            {blockchainService.description}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
            {blockchainService.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-xs md:text-sm font-mono text-gray-300">
                <Shield size={14} className="text-tamago-yellow shrink-0" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Standard Services */}
        {services.map((service, idx) => (
          <div key={service.id} className="glass-panel p-6 rounded-3xl flex flex-col justify-between group hover:bg-white/5 transition-colors">
            <div>
              <div className="bg-white/5 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-lg md:text-xl font-bold font-display mb-2 group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-xs md:text-sm text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-[10px] md:text-xs text-gray-500 font-mono">
                    <span className="w-1 h-1 bg-white/30 rounded-full mt-1.5 shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="h-px w-full bg-white/10 mb-4"></div>
              <div className="flex justify-between items-end">
                <span className="text-[10px] md:text-xs text-gray-600 font-mono uppercase tracking-widest">Model</span>
                <div className="text-sm font-bold text-tamago-yellow flex items-center gap-1">
                  {service.priceStart} <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Call to Action Card */}
        <div className="glass-panel p-8 rounded-3xl flex flex-col items-center justify-center text-center bg-gradient-to-br from-tamago-accent/20 to-purple-900/20 border-tamago-accent/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <h3 className="text-xl md:text-2xl font-bold font-display mb-2 relative z-10">Book an Appointment</h3>
          <p className="text-xs md:text-sm text-gray-300 mb-6 relative z-10 max-w-lg leading-relaxed">
            Book an appointment with us anytime from Monday to Friday, Philippine Time (GMT+8), between 4 PM and 10 PM. We look forward to assisting you!
          </p>
          <button className="bg-white text-black font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)] relative z-10 uppercase tracking-wide text-sm md:text-base">
            BOOK NOW
          </button>
        </div>
      </div>

      {/* Community & AMA Detailed Section */}
      <div className="border-t border-white/10 pt-16 md:pt-20 animate-in slide-in-from-bottom-10 fade-in duration-700">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full mb-6 border border-white/10">
            <Users size={14} className="text-tamago-yellow" />
            <span className="text-xs font-mono uppercase tracking-widest text-gray-400">Community Marketing</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
            Comprehensive <span className="text-tamago-yellow">AMA & Promotion</span> Solutions
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            If you are looking for the best community for your marketing, we strongly recommend leveraging our extensive social media network.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          
          {/* AMA Section */}
          <div className="glass-panel p-6 md:p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-24 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold font-display text-white mb-6 flex items-center gap-3">
                <Mic className="text-tamago-accent" /> AMA Sessions
              </h3>

              <div className="bg-white/5 rounded-2xl p-6 mb-8 border border-white/5">
                <div className="flex items-start gap-4 mb-4">
                  <Clock className="text-tamago-yellow mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-white mb-1">Duration</h4>
                    <p className="text-gray-400 text-sm">1 Hour to Unlimited (As long as you want)</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-2 mt-6 border-b border-white/10 pb-2">Structure</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-tamago-yellow rounded-full"></span> Introduction Segment
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-tamago-yellow rounded-full"></span> Twitter Segment
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-tamago-yellow rounded-full"></span> Live Segment
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                  <Radio size={18} className="text-green-400" /> Available Platforms
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['X Space AMA', 'Telegram AMA', 'Youtube AMA', 'Facebook AMA'].map((platform) => (
                    <div key={platform} className="bg-black/40 border border-white/10 rounded-lg p-3 text-sm text-gray-300 flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-tamago-accent" /> {platform}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Other Services Section */}
          <div className="glass-panel p-6 md:p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute bottom-0 left-0 p-24 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
               <h3 className="text-xl md:text-2xl font-bold font-display text-white mb-6 flex items-center gap-3">
                <Gift className="text-purple-400" /> Additional Services
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Promo List */}
                <div>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Promotions</h4>
                  <ul className="space-y-3">
                    {[
                      'Pin Post', 
                      'Giveaway Promotion', 
                      'Airdrop Event Promotion', 
                      'Long-term Partnership'
                    ].map(item => (
                      <li key={item} className="flex items-center gap-3 text-sm text-gray-200">
                        <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                          <CheckCircle2 size={12} className="text-purple-400" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specialized List */}
                <div>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Specialized</h4>
                   <ul className="space-y-3">
                    {[
                      'Market Making (MM)', 
                      'TG Calls & Pin Posts', 
                      'X (Twitter) Posts',
                      'Press Releases',
                      'Verified Twitter Posts',
                      'Direct Message (DM)',
                      'YouTube Video Calls'
                    ].map(item => (
                      <li key={item} className="flex items-center gap-3 text-sm text-gray-200">
                        <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                          <BarChart3 size={12} className="text-tamago-yellow" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="bg-gradient-to-r from-tamago-dark to-white/5 p-4 rounded-xl flex items-center gap-4 border border-white/5">
                  <Globe className="text-blue-400 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold text-sm">Global Reach</h4>
                    <p className="text-gray-400 text-xs mt-1">Our networks span across multiple regions, ensuring your project gets worldwide exposure.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Services;