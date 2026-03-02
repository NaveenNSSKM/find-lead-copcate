'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
    "All",
    "Social Media",
    "Marketing",
    "Sales Development",
    "Sales Operations"
];

const posts = [
    {
        id: 1,
        title: "Surfer SEO vs Ahrefs: Comparing the Pros and Cons of Two Popular SEO Tools",
        category: "Social Media",
        description: "Repurposing content might be relatively easy to do, but if you're not doing it correctly, it can lead to some pitfalls. Use this guide to learn how to repurpose stories and your feed.",
        content: `
            <p>Repurposing content might be relatively easy to do, but if you're not doing it correctly, it can lead to some pitfalls. This guide explores the best practices for maximizing the reach of your existing content while maintaining high engagement levels across different platforms.</p>
            <h3>Why SEO Tools Matter</h3>
            <p>In the digital age, visibility is everything. Tools like Surfer SEO and Ahrefs provide deep insights into keyword performance, competitor strategies, and on-page optimization. While Ahrefs excels at backlink analysis and technical site audits, Surfer SEO is often preferred for its content editor and real-time optimization suggestions.</p>
            <h3>Maximizing Your Reach</h3>
            <p>Don't just write once. Turn your blog posts into twitter threads, LinkedIn articles, or even short video scripts. By adapting the format to each platform, you ensure your message resonates with different segments of your audience.</p>
        `,
        image: "/images/blog-banner-01.jpg",
        featured: true,
    },
    {
        id: 2,
        title: "Surfer SEO vs Ahrefs: Comparing the Pros and Cons of Two Popular SEO Tools",
        category: "Marketing",
        description: "Repurposing content might be relatively easy to do, but if you're not doing it correctly, it can lead to some pitfalls.",
        content: "<p>Deep dive into marketing strategies and how to leverage modern SEO tools effectively for brand growth.</p>",
        image: "/images/blog-grid-1.jpg",
        featured: false,
    },
    {
        id: 3,
        title: "Surfer SEO vs Ahrefs: Comparing the Pros and Cons of Two Popular SEO Tools",
        category: "Sales Development",
        description: "Repurposing content might be relatively easy to do, but if you're not doing it correctly, it can lead to some pitfalls. Use this guide to learn how to repurpose stories and your feed.",
        content: "<p>Focusing on sales development through content strategy and lead generation optimization.</p>",
        image: "/images/blog-grid-2.jpg",
        featured: false,
    },
    {
        id: 4,
        title: "4 Simple Steps to Turn Audience Data into Campaigns That Drive Engagement",
        category: "Social Media",
        description: "Heroic content makes your life better and helps you do better work. In this post, we'll dive into how to use audience data to drive engagement.",
        content: "<p>Learn how to analyze your audience's behavior and turn those insights into high-performing social media campaigns.</p>",
        image: "/images/blog-grid-3.jpg",
        featured: false,
    },
    {
        id: 5,
        title: "Harnessing the Power of Segmentation to Deliver Engagement and Rankings",
        category: "Marketing",
        description: "Segmentation is a powerful tool that can help you deliver engagement and rankings. In this post, we'll dive into how to use segmentation to drive results.",
        content: "<p>Advanced segmentation techniques for modern marketers looking to drive better ROI on their content spend.</p>",
        image: "/images/blog-left-2.png",
        featured: false,
    },
    {
        id: 6,
        title: "Customer Retention Through Automation: A Case Study",
        category: "Sales Operations",
        description: "Customer retention is a key factor in the success of any business. In this post, we'll dive into how to use automation to drive customer retention.",
        content: "<p>Automating your sales funnel can significantly improve retention. Discover the tools and workflows used by industry leaders.</p>",
        image: "/images/blog-right-2.png",
        featured: false,
    },

     {
        id: 7,
        title: "Customer Retention Through Automation: A Case Study",
        category: "Sales Operations",
        description: "Customer retention is a key factor in the success of any business. In this post, we'll dive into how to use automation to drive customer retention.",
        content: "<p>Automating your sales funnel can significantly improve retention. Discover the tools and workflows used by industry leaders.</p>",
        image: "/images/blog-grid-1.jpg",
        featured: false,
    },
];

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedPost, setSelectedPost] = useState<any>(null);

    // Scroll to top when post is selected
    useEffect(() => {
        if (selectedPost) {
            window.scrollTo(0, 0);
        }
    }, [selectedPost]);

    const filteredPosts = activeCategory === "All"
        ? posts
        : posts.filter(post => post.category === activeCategory);

    const featuredPost = posts.find(p => p.featured);
    const gridPosts = filteredPosts.filter(p => !p.featured || (activeCategory !== "All" && p.category === activeCategory));

    if (selectedPost) {
        return (
            <main className="min-h-screen bg-white">
                <Navbar />

                <div className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
                    <button
                        onClick={() => setSelectedPost(null)}
                        className="text-gray-500 hover:text-[#121212] flex items-center gap-2 mb-8 font-medium group transition-colors"
                    >
                        <svg className="transform transition-transform group-hover:-translate-x-1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        Back to Blog
                    </button>

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
                        />
                    </div>

                    <div
                        className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                    />
                </div>

                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#EFE34B]">
            <Navbar />

            {/* Header Content */}
            <div className="pt-32 pb-16 px-6 md:px-12 max-w-[1440px] mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-12 text-[#121212]">Blog</h1>

                {/* Categories Filter */}
                <div className="flex flex-wrap gap-3 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${activeCategory === cat
                                ? 'bg-[#121212] text-white'
                                : 'bg-white text-[#121212] hover:bg-gray-100 shadow-sm'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Featured Post */}
                {(activeCategory === "All" || featuredPost?.category === activeCategory) && featuredPost && (
                    <div className="bg-white rounded-[40px] overflow-hidden shadow-soft mb-12 flex flex-col lg:flex-row hover:shadow-xl transition-shadow cursor-pointer" onClick={() => setSelectedPost(featuredPost)}>
                        <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#121212] leading-tight font-heading">
                                {featuredPost.title}
                            </h2>
                            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                                {featuredPost.description}
                            </p>
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-[#EFE34B] rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </div>
                                <span className="font-bold text-lg">Read full article</span>
                            </div>
                        </div>
                        <div className="lg:w-1/2 h-[400px] lg:h-auto relative">
                            <Image
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                )}

                {/* Grid Posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {gridPosts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white rounded-[40px] overflow-hidden shadow-soft flex flex-col h-full transform transition-all hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                            onClick={() => setSelectedPost(post)}
                        >
                            <div className="h-64 relative">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold mb-4 text-[#121212] leading-tight font-heading">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 mb-8 flex-grow">
                                    {post.description}
                                </p>
                                <div className="flex items-center gap-3 group mt-auto">
                                    <div className="w-10 h-10 bg-[#EFE34B] rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </div>
                                    <span className="font-bold">Read full article</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Social Commerce CTA Section */}
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
