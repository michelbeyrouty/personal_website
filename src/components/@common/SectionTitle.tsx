interface SectionTitleProps {
  title: string;
  subtitle?: string;
  icon: string;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  icon,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="flex items-center justify-center gap-4 mb-4">
        <h2 className="text-4xl font-bold">{title}</h2>
        <div className="w-16 h-16 flex items-center justify-center bg-blue-500/20 rounded-full border border-blue-500/30">
          <span className="text-2xl">{icon}</span>
        </div>
      </div>
      {subtitle && <p className="text-gray-400">{subtitle}</p>}
    </div>
  );
}
