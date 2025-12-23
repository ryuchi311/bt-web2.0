import React, { useState } from 'react';
import { 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Sparkles,
  ChevronRight,
  Mail
} from 'lucide-react';
import { generateBlogContent } from '../services/geminiService';

interface BlogPost {
  id: string | number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

const initialPosts: BlogPost[] = [
  {
    id: 'featured-1',
    title: 'The Evolution of Digital Barangays',
    excerpt: 'How Web3 is reimagining the concept of local communities on a global scale. We explore the transition from physical neighborhoods to digital ecosystems.',
    content: '<p>The concept of a "Barangay" has always been about close-knit community...</p>',
    date: 'Oct 24, 2023',
    readTime: '5 min read',
    author: 'Tamago Chief',
    tags: ['Community', 'Web3'],
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=2029'
  },
  {
    id: 'airdrop-1',
    title: 'Tap-to-Earn Revolution: The Ultimate Airdrop Guide',
    excerpt: 'The latest articles about crypto airdrops and tap-to-earn Telegram games that can be participated on right now. Don\'t miss the next big allocation.',
    content: '<p>The tapping meta has taken Telegram by storm...</p>',
    date: 'Dec 12, 2023',
    readTime: '8 min read',
    author: 'Airdrop Hunter',
    tags: ['Airdrops', 'Telegram', 'Gaming'],
    category: 'Airdrops',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 'podcast-1',
    title: 'Webcast Ep. 1: Titans of the Industry',
    excerpt: 'A platform for direct dialogue with the top movers and shakers of the crypto landscape. The Brgy Tamago Webcast cuts through the noise.',
    content: '<p>Welcome to the first episode...</p>',
    date: 'Dec 10, 2023',
    readTime: '45 min listen',
    author: 'Tamago Host',
    tags: ['Podcast', 'Interview'],
    category: 'Podcast',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 'news-1',
    title: 'Global Markets: Exchange Regulations Update',
    excerpt: 'The latest developments in embattled cryptocurrency exchange and Global Reach news. How regulatory shifts are impacting liquidity.',
    content: '<p>The regulatory landscape is shifting rapidly...</p>',
    date: 'Dec 08, 2023',
    readTime: '6 min read',
    author: 'News Desk',
    tags: ['Business News', 'Regulation'],
    category: 'Business News',
    image: 'https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: '1',
    title: 'Top 5 Web3 Games to Watch in 2024',
    excerpt: 'A deep dive into the most anticipated Play-to-Earn titles launching this year.',
    content: '<p>The gaming landscape is shifting rapidly...</p>',
    date: 'Nov 02, 2023',
    readTime: '7 min read',
    author: 'GamerOne',
    tags: ['Gaming', 'Reviews'],
    category: 'Gaming',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070'
  },
  {
    id: '2',
    title: 'Organic Growth vs. Paid Hype',
    excerpt: 'Why sustainable community building beats aggressive shilling in the long run.',
    content: '<p>In the volatile world of crypto marketing...</p>',
    date: 'Nov 15, 2023',
    readTime: '5 min read',
    author: 'MarketingPro',
    tags: ['Marketing', 'Strategy'],
    category: 'Web3',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070'
  },
  {
    id: '3',
    title: 'Understanding NFT Utility',
    excerpt: 'Moving beyond JPEGs: How smart contracts are powering the next generation of digital assets.',
    content: '<p>Utility is the buzzword of the year...</p>',
    date: 'Nov 20, 2023',
    readTime: '4 min read',
    author: 'TechLead',
    tags: ['Tech', 'NFTs'],
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?auto=format&fit=crop&q=80&w=2057'
  }
];

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [isGenerating, setIsGenerating] = useState(false);
  const [topic, setTopic] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ["All", "Popular", "Featured", "Announcements", "Product"];

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    
    setIsGenerating(true);
    try {
      const generatedData = await generateBlogContent(topic);
      
      const newPost: BlogPost = {
        id: posts.length + 1,
        title: generatedData.title,
        excerpt: generatedData.excerpt,
        content: generatedData.content,
        author: "AI Assistant",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        readTime: "3 min read",
        category: "AI Generated",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        tags: generatedData.tags
      };

      setPosts([newPost, ...posts]);
      setTopic('');
    } catch (error) {
      console.error('Error generating post:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const heroPost = posts[0];
  const sidePosts = posts.slice(1, 5);
  const gridPosts = posts.slice(5);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            CodeRabbit Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Dig into insights about our products, use cases, and POVs
          </p>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Main Hero Post */}
          <div className="lg:col-span-7 group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl mb-4 aspect-video">
              <img 
                src={heroPost.image} 
                alt={heroPost.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-blue-400">
                <span className="font-medium">{heroPost.category}</span>
                <span>•</span>
                <span>{heroPost.readTime}</span>
              </div>
              <h2 className="text-3xl font-bold group-hover:text-blue-400 transition-colors">
                {heroPost.title}
              </h2>
              <p className="text-gray-400 text-lg line-clamp-2">
                {heroPost.excerpt}
              </p>
              <div className="flex items-center gap-2 text-blue-400 font-medium mt-2">
                Read more <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Side Posts List */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {sidePosts.map((post) => (
              <div key={post.id} className="group cursor-pointer flex gap-4 items-start">
                <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs text-blue-400 mb-1">
                    <span>{post.category}</span>
                  </div>
                  <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Bar */}
        <div className="sticky top-20 z-30 bg-[#0B0F19]/95 backdrop-blur-sm py-4 border-y border-gray-800 mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === cat 
                      ? 'text-blue-400' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            {/* Search & Generate - Hybrid Approach */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-initial">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full sm:w-64 bg-gray-900/50 border border-gray-800 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              </div>
              
              <button 
                onClick={() => {
                  const newTopic = prompt("Enter a topic for AI to write about:");
                  if (newTopic) {
                    setTopic(newTopic);
                    handleGenerate();
                  }
                }}
                className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
                title="Generate with AI"
              >
                <Sparkles className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">All Articles</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...gridPosts, ...initialPosts].map((post, idx) => (
              <div key={`${post.id}-${idx}`} className="group cursor-pointer flex flex-col h-full">
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-[16/10]">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-blue-400 mb-2">
                    <span className="uppercase tracking-wider font-semibold">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-3 mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mt-auto">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <button className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full text-sm font-medium transition-colors border border-gray-800">
              Load more articles
            </button>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 border border-gray-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Catch the latest, right in your inbox.</h2>
            <p className="text-gray-400 mb-8">
              Subscribe to get the latest insights, product updates, and engineering stories delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="w-full bg-black/50 border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              By signing up you agree to our Terms of Use and Privacy Policy.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;