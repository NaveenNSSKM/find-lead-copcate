import { supabase } from '@/lib/supabase';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
    id: number;
    title: string;
    category: string;
    description: string;
    content: string;
    image: string;
    status: string;
}

// Ensure the page fetches fresh data since it's a dynamic blog
export const revalidate = 0;

async function getBlogs() {
    const { data, error } = await supabase
        .from('findlead-ai-blog')
        .select('*')
        .eq('status', 'published')
        .order('id', { ascending: false });

    if (error) {
        console.error('Supabase Error:', error);
        return [];
    }

    return data as BlogPost[];
}

export default async function BlogPage({
    searchParams,
}: {
    searchParams: Promise<{ category?: string; id?: string }>;
}) {
    const blogs = await getBlogs();
    const params = await searchParams;
    const activeCategory = params.category || 'All';
    const selectedId = params.id;

    const categories = ['All', ...Array.from(new Set(blogs.map((p) => p.category).filter(Boolean)))];

    const filteredPosts =
        activeCategory === 'All' ? blogs : blogs.filter((p) => p.category === activeCategory);

    // Find selected post if ID is in URL
    const selectedPost = selectedId ? blogs.find(p => p.id.toString() === selectedId) : null;

    // ──────────────────────────────────────────────────────────────────────────
    // Single Article View (Dynamic based on ?id=...)
    // ──────────────────────────────────────────────────────────────────────────
    if (selectedPost) {
        return (
            <main className="min-h-screen bg-white">
                <Navbar />
                <div className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
                    <Link
                        href="/blog"
                        className="text-gray-500 hover:text-[#121212] flex items-center gap-2 mb-8 font-medium group transition-colors"
                    >
                        <svg className="transform transition-transform group-hover:-translate-x-1"
                            width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12" />
                            <polyline points="12 19 5 12 12 5" />
                        </svg>
                        Back to Blog
                    </Link>

                    <div className="mb-4">
                        <span className="bg-[#EFE34B] text-[#121212] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            {selectedPost.category}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-8 text-[#121212] font-heading leading-tight">
                        {selectedPost.title}
                    </h1>

                    <div className="relative w-full h-[300px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden shadow-soft">
                        <Image
                            src={selectedPost.image}
                            alt={selectedPost.title}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            unoptimized
                        />
                    </div>

                    <div
                        className="blog-content-container max-w-none text-gray-700 leading-relaxed text-xl space-y-6"
                        dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                    />
                </div>

                <style>{`
                    .blog-content-container p { margin-bottom: 2rem; }
                    .blog-content-container h2 { font-size: 2rem; font-weight: bold; margin-top: 3rem; margin-bottom: 1.5rem; color: #121212; }
                    .blog-content-container h3 { font-size: 1.5rem; font-weight: bold; margin-top: 2.5rem; margin-bottom: 1rem; color: #121212; }
                    .blog-content-container ul { list-style-type: disc; padding-left: 2rem; margin-bottom: 2rem; }
                    .blog-content-container li { margin-bottom: 0.5rem; }
                `}</style>
                <Footer />
            </main>
        );
    }

    // ──────────────────────────────────────────────────────────────────────────
    // Blog Listing View (Cards)
    // ──────────────────────────────────────────────────────────────────────────
    const featuredPost = filteredPosts[0] ?? null;
    const gridPosts = filteredPosts.slice(1);

    return (
        <main className="min-h-screen bg-[#EFE34B]">
            <Navbar />

            <div className="pt-32 pb-16 px-6 md:px-12 max-w-[1440px] mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-12 text-[#121212]">Blog</h1>

                {/* Categories Filter */}
                <div className="mb-16 relative z-30">
                    {/* Mobile Dropdown */}
                    <div className="md:hidden">
                        <details className="group relative w-full">
                            <summary className="list-none flex justify-between items-center bg-white p-4 rounded-full shadow-sm text-[#121212] font-bold cursor-pointer w-full outline-none select-none">
                                <span className="ml-2">{activeCategory}</span>
                                <svg className="w-5 h-5 transition-transform group-open:rotate-180 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </summary>
                            <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white rounded-[24px] p-2 flex flex-col gap-1 border border-[#121212]/10 max-h-[50vh] overflow-y-auto" style={{ boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)' }}>
                                {categories.map((cat) => (
                                    <Link
                                        key={cat}
                                        href={cat === 'All' ? '/blog' : `/blog?category=${encodeURIComponent(cat)}`}
                                        className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${activeCategory === cat
                                            ? 'bg-[#EFE34B] text-[#121212]'
                                            : 'bg-transparent text-[#121212] hover:bg-gray-100'
                                            }`}
                                    >
                                        {cat}
                                    </Link>
                                ))}
                            </div>
                        </details>
                        <style>{`
                            details > summary::-webkit-details-marker {
                                display: none;
                            }
                        `}</style>
                    </div>

                    {/* Desktop Pill */}
                    <div className="hidden md:flex w-full justify-center">
                        <div className="bg-white rounded-full p-2 flex items-center gap-2 w-max shadow-sm">
                            {categories.map((cat) => (
                                <Link
                                    key={cat}
                                    href={cat === 'All' ? '/blog' : `/blog?category=${encodeURIComponent(cat)}`}
                                    className={`px-6 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap ${activeCategory === cat
                                        ? 'bg-[#EFE34B] text-[#121212]'
                                        : 'bg-transparent text-[#121212] hover:bg-gray-100'
                                        }`}
                                >
                                    {cat}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Empty State */}
                {blogs.length === 0 && (
                    <div className="text-center py-20 bg-white/20 rounded-[40px] border-2 border-dashed border-[#121212]/10 mb-12">
                        <p className="text-[#121212] text-xl font-bold opacity-60 italic">
                            No published posts found. Please check your Supabase RLS policies!
                        </p>
                    </div>
                )}

                {/* Featured Post */}
                {featuredPost && (
                    <Link
                        href={`/blog?id=${featuredPost.id}${activeCategory !== 'All' ? `&category=${activeCategory}` : ''}`}
                        className="bg-white rounded-[40px] overflow-hidden shadow-soft mb-12 flex flex-col lg:flex-row hover:shadow-xl transition-all group"
                    >
                        <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#121212] leading-tight font-heading">
                                {featuredPost.title}
                            </h2>
                            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                                {featuredPost.description}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#EFE34B] rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="7" y1="17" x2="17" y2="7" />
                                        <polyline points="7 7 17 7 17 17" />
                                    </svg>
                                </div>
                                <span className="font-bold text-lg">Read full article</span>
                            </div>
                        </div>
                        <div className="lg:w-1/2 h-[400px] lg:h-auto relative overflow-hidden">
                            <Image
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                                unoptimized
                            />
                        </div>
                    </Link>
                )}

                {/* Blog Grid */}
                {gridPosts.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {gridPosts.map((post) => (
                            <Link
                                key={post.id}
                                href={`/blog?id=${post.id}${activeCategory !== 'All' ? `&category=${activeCategory}` : ''}`}
                                className="bg-white rounded-[40px] overflow-hidden shadow-soft flex flex-col h-full transform transition-all hover:-translate-y-2 hover:shadow-xl group"
                            >
                                <div className="h-64 relative overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        unoptimized
                                    />
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold mb-4 text-[#121212] leading-tight font-heading">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 mb-8 flex-grow line-clamp-3">{post.description}</p>
                                    <div className="flex items-center gap-3 mt-auto">
                                        <div className="w-10 h-10 bg-[#EFE34B] rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="7" y1="17" x2="17" y2="7" />
                                                <polyline points="7 7 17 7 17 17" />
                                            </svg>
                                        </div>
                                        <span className="font-bold">Read full article</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            {/* CTA Section */}
            <div className="bg-[#EFE34B] py-24 px-6 md:px-12 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 text-[#121212] uppercase font-heading">
                        A SIMPLE APPROACH TO <br /> SOCIAL COMMERCE
                    </h2>
                    <button className="bg-white text-[#121212] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-sm uppercase mb-16">
                        + REQUEST A DEMO
                    </button>
                    <div className="relative max-w-5xl mx-auto bg-white rounded-3xl shadow-soft overflow-hidden p-2 md:p-6 border-[8px] border-white/50">
                        <Image
                            src="/images/dash.png"
                            alt="Dashboard Overview"
                            width={1200}
                            height={800}
                            className="w-full h-auto rounded-xl"
                        />
                    </div>
                </div>
            </div>
   {/* Accelerate Growth Section */}
            <section
                className="py-24 px-6 relative overflow-hidden"
                style={{
                    backgroundImage: 'url(/images/bg-subscribe.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#111' // Fallback color
                }
                }
            >
                <div className="max-w-[1100px] mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading tracking-wide text-white uppercase mb-2">
                                ACCELERATE YOUR
                            </h2>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-wide text-[#EFE34B] uppercase">
                                BUSINESS GROWTH.
                            </h2>
                        </div>

                        {/* Right Form */}
                        <div className="lg:pl-12">
                            <label className="block text-white text-sm mb-2 pl-4">Email*</label>
                            <div className="flex bg-[#222] rounded-full p-1 border border-gray-600 max-w-lg">
                                <input
                                    type="email"
                                    placeholder="What's your work email?"
                                    className="flex-1 bg-transparent text-white px-6 py-3 outline-none placeholder-gray-400 rounded-l-full"
                                />
                                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors whitespace-nowrap">
                                    Contact Us
                                </button>
                            </div>
                            <p className="text-gray-400 text-xs mt-3 pl-4">
                                Free leads | Credit cards not required
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
