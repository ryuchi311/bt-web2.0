import React, { useState, useEffect } from 'react';
import { BlogPost } from '../types';
import { generateBlogContent } from '../services/geminiService';
import { Sparkles, Calendar, User, ArrowRight, Loader2, Clock, Search, Hash, Mic, Newspaper, Gift, ChevronLeft, ChevronRight } from 'lucide-react';

// Enhanced Mock Data matching the "Brgy Tamago" theme
const initialPosts: BlogPost[] = [
  {
    id: 'featured-1',
    title: 'The Evolution of Digital Barangays',
    excerpt: 'How Web3 is reimagining the concept of local communities on a global scale. We explore the transition from physical neighborhoods to digital ecosystems.',
    content: '<p>The concept of a "Barangay" has always been about close-knit community...</p>',
    date: 'Oct 24, 2023',
    author: 'Tamago Chief',
    tags: ['Community', 'Web3'],
    category: 'Community',
    imageUrl: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=2029'
  },
  {
    id: 'airdrop-1',
    title: 'Tap-to-Earn Revolution: The Ultimate Airdrop Guide',
    excerpt: 'The latest articles about crypto airdrops and tap-to-earn Telegram games that can be participated on right now. Don\'t miss the next big allocation.',
    content: '<p>The tapping meta has taken Telegram by storm. From Notcoin to the latest clones, millions are tapping their screens hoping for a massive airdrop.</p><p>In this guide, we break down:</p><ul><li>Which projects are legit</li><li>How to maximize your points</li><li>Wallet security basics for claimers</li></ul>',
    date: 'Dec 12, 2023',
    author: 'Airdrop Hunter',
    tags: ['Airdrops', 'Telegram', 'Gaming'],
    category: 'Airdrops',
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 'podcast-1',
    title: 'Webcast Ep. 1: Titans of the Industry',
    excerpt: 'A platform for direct dialogue with the top movers and shakers of the crypto landscape. The Brgy Tamago Webcast cuts through the noise.',
    content: '<p>Welcome to the first episode of the Brgy Tamago Webcast. Today we bring insights straight from the people who are moving the industry forward.</p><p><strong>Guest:</strong> Anon Founder of Top Protocol</p><p>We discuss the future of L2 scaling and what it means for the average user.</p>',
    date: 'Dec 10, 2023',
    author: 'Tamago Host',
    tags: ['Podcast', 'Interview'],
    category: 'Podcast',
    imageUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 'news-1',
    title: 'Global Markets: Exchange Regulations Update',
    excerpt: 'The latest developments in embattled cryptocurrency exchange and Global Reach news. How regulatory shifts are impacting liquidity.',
    content: '<p>The regulatory landscape is shifting rapidly. As major exchanges face scrutiny, liquidity is moving on-chain.</p><p>We analyze the impact on:</p><ul><li>Asian Markets</li><li>US Institutional Adoption</li><li>DeFi Protocol Volumes</li></ul>',
    date: 'Dec 08, 2023',
    author: 'News Desk',
    tags: ['Business News', 'Regulation'],
    category: 'Business News',
    imageUrl: 'https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: '1',
    title: 'Top 5 Web3 Games to Watch in 2024',
    excerpt: 'A deep dive into the most anticipated Play-to-Earn titles launching this year.',
    content: '<p>The gaming landscape is shifting rapidly...</p>',
    date: 'Nov 02, 2023',
    author: 'GamerOne',
    tags: ['Gaming', 'Reviews'],
    category: 'Gaming',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070'
  },
  {
    id: '2',
    title: 'Organic Growth vs. Paid Hype',
    excerpt: 'Why sustainable community building beats aggressive shilling in the long run.',
    content: '<p>In the volatile world of crypto marketing...</p>',
    date: 'Nov 15, 2023',
    author: 'MarketingPro',
    tags: ['Marketing', 'Strategy'],
    category: 'Web3',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070'
  },
  {
    id: '3',
    title: 'Understanding NFT Utility',
    excerpt: 'Moving beyond JPEGs: How smart contracts are powering the next generation of digital assets.',
    content: '<p>Utility is the buzzword of the year...</p>',
    date: 'Nov 20, 2023',
    author: 'TechLead',
    tags: ['Tech', 'NFTs'],
    category: 'Tech',
    imageUrl: 'https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?auto=format&fit=crop&q=80&w=2057'
  }
];

const categories = ['All', 'Gaming', 'Web3', 'Community', 'Tech', 'Airdrops', 'Podcast', 'Business News'];

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [topic, setTopic] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [expandedPostId, setExpandedPostId] = useState<string | null>(null);
  
  // Carousel State
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    
    setIsGenerating(true);
    const generated = await generateBlogContent(topic);
    
    const newPost: BlogPost = {
      id: Date.now().toString(),
      title: generated.title,
      excerpt: generated.excerpt,
      content: generated.content,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      author: 'AI Contributor',
      tags: generated.tags,
      category: 'AI Generated',
      imageUrl: `https://picsum.photos/seed/${Math.random()}/800/600`
    };

    setPosts([newPost, ...posts]);
    setTopic('');
    setIsGenerating(false);
  };

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory || post.tags.includes(selectedCategory));

  // Carousel Logic: Top 3 posts are featured when in 'All' view
  const featuredPosts = posts.slice(0, 3);
  
  // Grid Logic: If 'All', show posts starting from index 3. Else show filtered posts.
  const gridPosts = selectedCategory === 'All' 
    ? posts.slice(3) 
    : filteredPosts;

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
        case 'Podcast': return <Mic size={14} className="mr-1" />;
        case 'Airdrops': return <Gift size={14} className="mr-1" />;
        case 'Business News': return <Newspaper size={14} className="mr-1" />;
        default: return null;
    }
  };

  // Auto-play carousel
  useEffect(() => {
    if (selectedCategory !== 'All') return;
    const timer = setInterval(() => {
      setCurrentFeaturedIndex((prev) => (prev + 1) % featuredPosts.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [selectedCategory, featuredPosts.length]);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentFeaturedIndex((prev) => (prev + 1) % featuredPosts.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentFeaturedIndex((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);
  };

  const currentFeaturedPost = featuredPosts[currentFeaturedIndex];

  return (
    <div className="w-full min-h-screen bg-tamago-dark">
      
      {/* Blog Header */}
      <div className="relative py-12 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full mb-4 border border-white/10 animate-in slide-in-from-top-4">
              <Sparkles size={14} className="text-tamago-yellow" />
              <span className="text-xs font-mono uppercase tracking-widest text-gray-300">The Shell</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-black text-white mb-4">
              Insights & <span className="text-tamago-yellow">Stories</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
              Exploring the intersection of gaming, community, and blockchain technology.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Featured Post (Magazine Slider) */}
        {selectedCategory === 'All' && featuredPosts.length > 0 && (
          <div className="mb-12 md:mb-20 group relative select-none" >
            
            <div 
                className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden h-[500px] md:h-auto md:aspect-[21/9] border border-white/10 cursor-pointer shadow-2xl transition-all"
                onClick={() => setExpandedPostId(expandedPostId === currentFeaturedPost.id ? null : currentFeaturedPost.id)}
            >
               {/* Animated Background Image */}
               <div key={currentFeaturedIndex} className="absolute inset-0 animate-in fade-in duration-700">
                  <img 
                    src={currentFeaturedPost.imageUrl} 
                    alt={currentFeaturedPost.title} 
                    className="w-full h-full object-cover transition-transform duration-[10s] scale-100 group-hover:scale-105"
                  />
                  {/* Enhanced Gradient for Mobile Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-tamago-dark via-tamago-dark/60 md:via-tamago-dark/40 to-transparent"></div>
               </div>
               
               {/* Navigation Buttons - Visible on Mobile, Hover on Desktop */}
               <button 
                onClick={prevSlide}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-tamago-yellow hover:text-black hover:scale-110 transition-all z-20 md:opacity-0 md:group-hover:opacity-100"
               >
                 <ChevronLeft size={24} />
               </button>
               <button 
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-tamago-yellow hover:text-black hover:scale-110 transition-all z-20 md:opacity-0 md:group-hover:opacity-100"
               >
                 <ChevronRight size={24} />
               </button>

               {/* Content Overlay */}
               <div className="absolute bottom-0 left-0 w-full p-6 md:p-16 z-10 flex flex-col justify-end h-full">
                 <div className="flex flex-col items-start gap-3 md:gap-4 animate-in slide-in-from-bottom-4 fade-in duration-500 key={currentFeaturedIndex}">
                    
                    {/* Badge & Indicators */}
                    <div className="flex items-center gap-3 w-full justify-between md:justify-start">
                        <span className="bg-tamago-yellow text-black px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider shadow-lg shadow-tamago-yellow/20">
                            Featured Story
                        </span>
                        <div className="flex gap-1.5 md:hidden">
                             {/* Mobile Indicators */}
                            {featuredPosts.map((_, idx) => (
                                <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentFeaturedIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/30'}`} />
                            ))}
                        </div>
                    </div>
                    
                    {/* Desktop Indicators (Hidden on Mobile) */}
                    <div className="hidden md:flex gap-1 mb-2">
                        {featuredPosts.map((_, idx) => (
                            <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentFeaturedIndex ? 'w-8 bg-white' : 'w-2 bg-white/30'}`} />
                        ))}
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white max-w-4xl leading-tight md:leading-[0.9] tracking-tight hover:text-tamago-yellow transition-colors drop-shadow-lg">
                       {currentFeaturedPost.title}
                    </h2>
                    
                    <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-300 mt-1 md:mt-2">
                        <span className="flex items-center gap-2 bg-black/20 px-2 py-1 rounded-md backdrop-blur-sm"><Calendar size={12} className="md:w-3.5 md:h-3.5" /> {currentFeaturedPost.date}</span>
                        <span className="hidden md:inline w-1 h-1 bg-gray-500 rounded-full"></span>
                        <span className="flex items-center gap-2 bg-black/20 px-2 py-1 rounded-md backdrop-blur-sm"><User size={12} className="md:w-3.5 md:h-3.5" /> {currentFeaturedPost.author}</span>
                    </div>

                    <p className="text-gray-200 text-sm md:text-xl max-w-2xl line-clamp-3 md:line-clamp-2 mt-2 leading-relaxed drop-shadow-md">
                        {currentFeaturedPost.excerpt}
                    </p>
                 </div>
               </div>
            </div>
            
            {/* Expanded Content for Featured */}
            {expandedPostId === currentFeaturedPost.id && (
              <div className="glass-panel p-6 md:p-12 rounded-3xl mt-6 animate-in fade-in slide-in-from-top-4">
                 <div 
                  className="prose prose-invert prose-lg max-w-none text-gray-300"
                  dangerouslySetInnerHTML={{ __html: currentFeaturedPost.content }} 
                />
              </div>
            )}
          </div>
        )}

        {/* Navigation & Tools */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 sticky top-24 z-30 bg-tamago-dark/80 backdrop-blur-xl py-4 border-b border-white/5">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap flex items-center ${
                  selectedCategory === cat 
                    ? 'bg-white text-black' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {getCategoryIcon(cat)}
                {cat}
              </button>
            ))}
          </div>

          {/* Neural Writer Tool (Compact) */}
          <div className="flex items-center gap-2 w-full md:w-auto bg-white/5 p-1 rounded-full border border-white/10 pl-4 focus-within:border-tamago-accent/50 transition-colors">
            <Sparkles size={16} className="text-tamago-accent shrink-0" />
            <input 
              type="text" 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Ask AI to write a post..." 
              className="bg-transparent border-none text-sm text-white focus:outline-none w-full md:w-64 placeholder:text-gray-600"
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
            />
            <button 
              onClick={handleGenerate}
              disabled={isGenerating || !topic.trim()}
              className="bg-tamago-accent p-2 rounded-full text-white hover:bg-red-500 transition-colors disabled:opacity-50"
            >
              {isGenerating ? <Loader2 size={16} className="animate-spin" /> : <ArrowRight size={16} />}
            </button>
          </div>
        </div>

        {/* Recent Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridPosts.map((post) => (
            <article 
              key={post.id} 
              className="flex flex-col group cursor-pointer"
              onClick={() => setExpandedPostId(expandedPostId === post.id ? null : post.id)}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/5 bg-white/5">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10 flex items-center">
                    {getCategoryIcon(post.category || '')}
                    {post.category || post.tags[0] || 'General'}
                  </span>
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 font-mono uppercase tracking-wide">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                  <span>{post.author}</span>
                </div>
                
                <h3 className="text-xl font-bold font-display text-white mb-3 leading-snug group-hover:text-tamago-yellow transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex items-center gap-2 text-tamago-accent text-sm font-bold group-hover:gap-3 transition-all">
                  Read Article <ArrowRight size={16} />
                </div>
              </div>

              {/* Expanded Content Inline */}
              {expandedPostId === post.id && (
                <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-4 glass-panel p-6 rounded-2xl animate-in fade-in slide-in-from-top-2">
                   <div 
                    className="prose prose-invert prose-sm max-w-none text-gray-300"
                    dangerouslySetInnerHTML={{ __html: post.content }} 
                  />
                </div>
              )}
            </article>
          ))}
        </div>

        {gridPosts.length === 0 && (
          <div className="text-center py-20">
             <div className="bg-white/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-gray-500" />
             </div>
             <p className="text-gray-400">No posts found in this category.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Blog;