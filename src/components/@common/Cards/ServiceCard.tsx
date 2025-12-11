import { motion } from "framer-motion";
import { StaticImageData } from "next/image";

interface ServiceCardProps {
  index: number;
  title: string;
  icon: string | StaticImageData;
  description?: string;
}

export default function ServiceCard({
  index,
  title,
  icon,
  description,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group relative"
    >
      <div className="relative bg-black/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 h-[320px] flex flex-col text-center hover:border-blue-400/50 transition-all duration-300">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10 flex flex-col h-full">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-500/20 rounded-full border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
            {typeof icon === "string" ? (
              <span className="text-2xl">{icon}</span>
            ) : (
              <img src={icon} alt={title} className="w-8 h-8 object-contain" />
            )}
          </div>

          <h3 className="text-white text-lg font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>

          <div className="flex-1 flex items-center justify-center">
            {description && (
              <p className="text-gray-300 text-xs leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
