import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";
import { motion } from "framer-motion";

const ServicesPage = () => {
  return (
    <div className="bg-zinc-950 text-white min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16 sm:py-24"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400"
          >
            Premium Automotive Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-lg leading-8 text-zinc-300"
          >
            At AutoLux, we offer a comprehensive suite of services to ensure your luxury vehicle performs at its peak and maintains its value. Our commitment to excellence is unmatched.
          </motion.p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon as any}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesPage;
