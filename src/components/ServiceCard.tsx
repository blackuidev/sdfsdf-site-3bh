import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

interface ServiceCardProps {
  icon: keyof typeof LucideIcons;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  const IconComponent = LucideIcons[icon] as React.ElementType;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 flex flex-col items-start gap-4 hover:bg-zinc-800/50 transition-colors duration-300 hover:-translate-y-2"
    >
      {IconComponent && <IconComponent className="w-10 h-10 text-blue-400" />}
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
