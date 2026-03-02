import { GlowingCards, GlowingCard } from "@/components/lightswind/glowing-cards";
import { motion } from "framer-motion";
import { Award, Target, Users } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400">
            Driving the Future of Luxury
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-300 max-w-3xl mx-auto">
            AutoLux was founded on a passion for performance, elegance, and unparalleled customer service. We are more than a dealership; we are curators of an elite automotive lifestyle.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="my-24"
        >
            <img 
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Luxury Car Showroom"
                className="rounded-2xl aspect-video object-cover shadow-2xl shadow-blue-500/20"
            />
        </motion.div>

        {/* Our Values Section */}
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">Our Core Values</h2>
            <p className="mt-4 text-zinc-400">The principles that guide every decision we make.</p>
        </div>

        <GlowingCards>
            <GlowingCard>
                <div className="p-8">
                    <Award className="w-10 h-10 text-blue-400 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Excellence</h3>
                    <p className="text-zinc-400">We pursue the highest standards in every vehicle we source and every service we provide.</p>
                </div>
            </GlowingCard>
            <GlowingCard>
                <div className="p-8">
                    <Target className="w-10 h-10 text-blue-400 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Integrity</h3>
                    <p className="text-zinc-400">Transparency and honesty are the cornerstones of our relationship with clients.</p>
                </div>
            </GlowingCard>
            <GlowingCard>
                <div className="p-8">
                    <Users className="w-10 h-10 text-blue-400 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Community</h3>
                    <p className="text-zinc-400">We are building a community of enthusiasts who share a passion for automotive artistry.</p>
                </div>
            </GlowingCard>
        </GlowingCards>
      </div>
    </div>
  );
};

export default AboutPage;
