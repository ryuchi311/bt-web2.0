import React, { useState, useRef, useEffect } from 'react';
import { ViewState } from './types';
import Game from './components/Game';
import Blog from './components/Blog';
import Services from './components/Services';
import About from './components/About';
import Guilds from './components/Guilds';
import Socials from './components/Socials';
import Partners from './components/Partners';
import HeroCarousel from './components/HeroCarousel';
import PartnersCarousel from './components/PartnersCarousel';
import Footer from './components/Footer';
import { Logo } from './components/Logo';
import { Gamepad2, Feather, Briefcase, Home, Github, Twitter, Menu, X, ArrowRight, TrendingUp, ShieldCheck, Sparkles, Rocket, Globe, Users, Handshake, Swords, Hash, ChevronDown } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [communityDropdownOpen, setCommunityDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCommunityDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const renderContent = () => {
    switch (currentView) {
      case ViewState.GAME:
        return <Game />;
      case ViewState.BLOG:
        return <Blog />;
      case ViewState.SERVICES:
        return <Services />;
      case ViewState.ABOUT:
        return <About />;
      case ViewState.GUILDS:
        return <Guilds />;
      case ViewState.SOCIALS:
        return <Socials />;
      case ViewState.PARTNERS:
        return <Partners />;
      case ViewState.HOME:
      default:
        return <Hero setView={setCurrentView} />;
    }
  };

  const NavItem = ({ view, icon: Icon, label }: { view: ViewState, icon: any, label: string }) => (
    <button
      onClick={() => {
        setCurrentView(view);
        setMobileMenuOpen(false);
        setCommunityDropdownOpen(false);
      }}
      className={`flex items-center gap-3 px-6 py-4 md:py-2 md:px-4 rounded-xl md:rounded-full transition-all duration-300 w-full md:w-auto text-left md:text-center ${
        currentView === view 
          ? 'bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
          : 'text-gray-400 hover:text-white hover:bg-white/10'
      }`}
    >
      <Icon size={20} className={currentView === view ? "text-tamago-accent" : ""} />
      <span className="text-lg md:text-sm">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-tamago-dark text-white font-sans selection:bg-tamago-yellow selection:text-black">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-tamago-dark/90 backdrop-blur-xl supports-[backdrop-filter]:bg-tamago-dark/60">
        <div className="max-w-7xl mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group relative z-50"
            onClick={() => {
                setCurrentView(ViewState.HOME);
                setMobileMenuOpen(false);
            }}
          >
            {/* Nav Logo Component */}
              <div className="relative group-hover:scale-110 transition-transform duration-300">
              <div className="absolute inset-0 bg-tamago-yellow/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Logo
                src="/src/assets/icon-bt/bt-logo.png"
                className="w-10 h-10 md:w-12 md:h-12 relative z-10"
                style={{ width: '135px', height: '47px' }}
              />
            </div>
            
            
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 relative">
            <NavItem view={ViewState.HOME} icon={Home} label="Home" />
            <NavItem view={ViewState.ABOUT} icon={Users} label="About Us" />
            <NavItem view={ViewState.SERVICES} icon={Briefcase} label="Services" />
            
            {/* Dropdown for Community */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setCommunityDropdownOpen(!communityDropdownOpen)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  (currentView === ViewState.GUILDS || currentView === ViewState.SOCIALS || currentView === ViewState.PARTNERS)
                    ? 'bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <Globe size={18} />
                <span>Community</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${communityDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {communityDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-tamago-dark border border-white/10 rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 z-50 p-2 flex flex-col gap-1">
                  <button
                    onClick={() => {
                      setCurrentView(ViewState.GUILDS);
                      setCommunityDropdownOpen(false);
                    }}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all w-full text-left ${
                      currentView === ViewState.GUILDS ? 'bg-white/10 text-white font-bold' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <Swords size={18} className="text-tamago-yellow" />
                    <span>Guilds</span>
                  </button>
                  <button
                    onClick={() => {
                      setCurrentView(ViewState.PARTNERS);
                      setCommunityDropdownOpen(false);
                    }}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all w-full text-left ${
                      currentView === ViewState.PARTNERS ? 'bg-white/10 text-white font-bold' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <Handshake size={18} className="text-tamago-orange" />
                    <span>Partners</span>
                  </button>
                  <button
                    onClick={() => {
                      setCurrentView(ViewState.SOCIALS);
                      setCommunityDropdownOpen(false);
                    }}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all w-full text-left ${
                      currentView === ViewState.SOCIALS ? 'bg-white/10 text-white font-bold' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <Hash size={18} className="text-purple-400" />
                    <span>Socials</span>
                  </button>
                </div>
              )}
            </div>

            <NavItem view={ViewState.BLOG} icon={Feather} label="The Shell" />
            <NavItem view={ViewState.GAME} icon={Gamepad2} label="Arcade" />
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            <button className="bg-tamago-accent hover:bg-red-500 text-white px-5 py-2 rounded-lg text-sm font-bold transition-colors shadow-[0_0_15px_rgba(242,37,36,0.5)]">
              Join Community
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white relative z-50 p-2 bg-white/5 rounded-full border border-white/10" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-tamago-dark/95 backdrop-blur-xl md:hidden flex flex-col pt-24 pb-8 px-6 animate-in slide-in-from-top-10 duration-200 overflow-y-auto">
             <div className="flex flex-col gap-2">
                <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 pl-2">Navigation</div>
                <NavItem view={ViewState.HOME} icon={Home} label="Home" />
                <NavItem view={ViewState.ABOUT} icon={Users} label="About Us" />
                <NavItem view={ViewState.SERVICES} icon={Briefcase} label="Services" />
             </div>

             <div className="h-px bg-white/10 my-4 w-full"></div>

             <div className="flex flex-col gap-2">
               <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 pl-2">Community</div>
               <NavItem view={ViewState.GUILDS} icon={Swords} label="Guilds" />
               <NavItem view={ViewState.PARTNERS} icon={Handshake} label="Partners" />
               <NavItem view={ViewState.SOCIALS} icon={Hash} label="Socials" />
            </div>

            <div className="h-px bg-white/10 my-4 w-full"></div>

            <div className="flex flex-col gap-2">
                <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 pl-2">Experience</div>
                <NavItem view={ViewState.BLOG} icon={Feather} label="The Shell (Blog)" />
                <NavItem view={ViewState.GAME} icon={Gamepad2} label="Arcade" />
            </div>

            <div className="mt-auto pt-8">
               <button className="w-full bg-tamago-accent py-4 rounded-xl font-bold text-white shadow-lg mb-4">
                  Join Discord Community
               </button>
               <div className="flex justify-center gap-6 text-gray-400">
                  <Github size={24} />
                  <Twitter size={24} />
               </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-24 md:pt-28 pb-20 min-h-screen relative overflow-x-hidden">
        {/* Background Ambient Effects */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-red-900/20 rounded-full blur-[80px] md:blur-[100px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-yellow-600/10 rounded-full blur-[80px] md:blur-[100px]" style={{ animationDelay: '1s' }}></div>
        </div>

        {renderContent()}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const Hero: React.FC<{ setView: (view: ViewState) => void }> = ({ setView }) => {
  return (
    <div className="flex flex-col items-center w-full">
      
      {/* Top Split Section */}
      <div className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center py-8 md:py-12">
        
        {/* Left Column: Logo & Heading */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          {/* Main Logo Display */}
          <div className="relative mb-6 group">
            <div className="absolute inset-0 bg-tamago-yellow/20 rounded-full blur-2xl group-hover:blur-xl transition-all duration-500"></div>
            <img
              alt="Brgy Tamago Logo"
              className="w-24 sm:w-32 md:w-40 h-auto relative z-10 drop-shadow-2xl animate-bounce-short hover:scale-105 transition-transform duration-300 max-w-full"
              role="img"
              aria-label="Brgy Tamago Logo"
              src="/src/assets/icon-bt/logo.png"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[0.95] md:leading-[0.9] w-full">
            <span className="block text-white hover:text-tamago-yellow transition-colors duration-300">CREATE.</span>
            <span className="block text-white hover:text-tamago-accent transition-colors duration-300">COMMUNICATE.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-tamago-yellow via-white to-tamago-yellow animate-gradient-x">COLLABORATE.</span>
          </h1>
        </div>

        {/* Right Column: Carousel */}
        <div className="w-full h-full order-1 lg:order-2">
          <HeroCarousel />
        </div>

      </div>

      {/* Expanded Content Section: Description & CTAs */}
      <div className="w-full max-w-4xl mx-auto px-4 text-center pb-16 md:pb-20">
        <p className="text-lg md:text-2xl text-gray-400 mb-8 md:mb-10 leading-relaxed font-light">
          Welcome to <strong className="text-tamago-yellow">Brgy Tamago</strong>. We are a community of creators, developers, and gamers hatching the next big thing.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full px-4 sm:px-0">
          <button 
            onClick={() => setView(ViewState.SERVICES)}
            className="group relative px-8 py-4 bg-tamago-yellow text-black font-bold rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,184,0,0.4)] w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">Our Services <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/></span>
          </button>
          
          <button 
            onClick={() => setView(ViewState.GAME)}
            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 hover:border-tamago-accent/50 w-full sm:w-auto"
          >
            <Gamepad2 size={18} className="text-tamago-accent" /> Play Minigame
          </button>
        </div>
      </div>

      {/* Info Cards Section */}
      <div className="w-full max-w-7xl mx-auto px-4 pb-16 md:pb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Data & Strategy */}
          <div className="glass-panel p-6 md:p-8 rounded-3xl hover:bg-white/5 transition-all hover:translate-y-[-5px]">
            <TrendingUp className="text-tamago-yellow w-10 h-10 md:w-12 md:h-12 mb-6" />
            <h3 className="text-lg md:text-xl font-bold font-display mb-4 text-white">Data-Driven Growth</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Our ability to analyze data and make strategic recommendations can help businesses make more informed decisions, leading to improved revenue and growth.
            </p>
          </div>

          {/* Card 2: Advocacy */}
          <div className="glass-panel p-6 md:p-8 rounded-3xl hover:bg-white/5 transition-all hover:translate-y-[-5px]">
            <ShieldCheck className="text-tamago-accent w-10 h-10 md:w-12 md:h-12 mb-6" />
            <h3 className="text-lg md:text-xl font-bold font-display mb-4 text-white">Authentic Advocacy</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              One of our advocacy is to eliminate false marketing and fake promotions in the marketing industry that can damage the growth of the business.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed font-semibold text-white/90">
              We provide organic engagement and remain true to our client promotions.
            </p>
          </div>

          {/* Card 3: Unique Exposure */}
          <div className="glass-panel p-6 md:p-8 rounded-3xl hover:bg-white/5 transition-all hover:translate-y-[-5px]">
            <Sparkles className="text-purple-400 w-10 h-10 md:w-12 md:h-12 mb-6" />
            <h3 className="text-lg md:text-xl font-bold font-display mb-4 text-white">Next-Level Promotion</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Brgy. Tamago helps projects to have wide exposure by making a unique approach and very engaging campaign promotions that you cannot get from other marketing and advertising companies.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Hosting tournaments, fun and exciting campaign mechanics, and building special and exclusive segment shows for the projects makes us different from the others! Bring your project promotion to the next level with us!
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Line / CTA Section */}
      <div className="w-full max-w-7xl mx-auto px-4 pb-20 md:pb-24 relative z-10">
        <div className="relative rounded-[3rem] overflow-hidden group bg-[#151516] border border-white/5 shadow-2xl">
           
           {/* Animated Space Background */}
           <div className="absolute inset-0 overflow-hidden">
             {/* Spinning gradient background */}
             <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.03)_180deg,transparent_360deg)] animate-[spin_20s_linear_infinite] opacity-30"></div>
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
             
             {/* Animated Blobs */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tamago-accent/10 rounded-full blur-[120px] animate-pulse"></div>
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-tamago-yellow/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
           </div>
           
           <div className="relative z-10 px-6 py-16 md:px-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Text Content */}
              <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-3 self-center lg:self-start bg-black/40 border border-white/10 px-6 py-2 rounded-full backdrop-blur-md animate-in slide-in-from-bottom-4 fade-in duration-700 hover:border-tamago-yellow/50 transition-colors cursor-default">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-gray-300 font-mono text-xs md:text-sm tracking-widest uppercase font-bold">Status: All Systems Go</span>
                </div>

                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[0.9] tracking-tighter drop-shadow-2xl">
                  But the <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-tamago-yellow via-white to-tamago-yellow bg-[length:200%_auto] animate-gradient-x">bottom line</span> is...
                </h2>
              </div>

              {/* Interactive Launch Card */}
              <div className="lg:col-span-5 w-full relative group/card perspective-1000">
                <div className="absolute -inset-1 bg-gradient-to-r from-tamago-yellow to-tamago-accent rounded-3xl blur opacity-30 group-hover/card:opacity-75 transition duration-500"></div>
                <button 
                  onClick={() => setView(ViewState.SERVICES)}
                  className="relative w-full bg-[#1A1A1A] hover:bg-[#202020] border border-white/10 text-white rounded-3xl p-8 md:p-12 transition-all transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center gap-6 group-hover/card:border-white/20 overflow-hidden"
                >
                  {/* Background Grid inside button */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>

                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-tamago-yellow to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover/card:scale-110 transition-transform duration-300">
                       <Rocket size={40} className="text-black group-hover/card:-translate-y-1 group-hover/card:translate-x-1 transition-transform duration-300" />
                    </div>
                    
                    <span className="text-gray-400 font-mono text-sm uppercase tracking-widest">Ready for takeoff?</span>
                    
                    <h3 className="text-2xl md:text-3xl font-bold font-display text-center leading-tight">
                      Let’s bring your project to the <span className="text-tamago-yellow">moon!</span>
                    </h3>
                    
                    <div className="mt-4 flex items-center gap-2 text-sm font-bold border-b border-tamago-yellow pb-1">
                        Start Campaign <ArrowRight size={16} />
                    </div>
                  </div>
                </button>
              </div>

           </div>
        </div>
      </div>

      {/* Partners/Collaborations Section - CAROUSEL */}
      <div className="w-full max-w-7xl mx-auto px-4 pb-20 md:pb-24 relative z-10 border-t border-white/5 pt-12 md:pt-16 overflow-hidden">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full mb-6 border border-white/10">
            <Globe size={14} className="text-tamago-yellow" />
            <span className="text-xs font-mono uppercase tracking-widest text-gray-400">Trusted Network</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
            Past Project & Collaborations
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Our promoters and influencers are dedicated and provided a number of quality project collaborations in the past.
          </p>
        </div>
        
        {/* Featured Partners 3D Carousel */}
        <PartnersCarousel />
        
      </div>

      {/* Grid decorative element */}
      <div className="w-full max-w-5xl h-32 border-x border-t border-white/5 rounded-t-3xl relative overflow-hidden mask-gradient-b">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-tamago-dark to-transparent"></div>
      </div>
    </div>
  );
};

export default App;