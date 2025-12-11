interface IconBubbleProps {
  icon: string;
  iconSize?: "sm" | "md" | "lg";
}

export default function IconBubble({ icon, iconSize = "md" }: IconBubbleProps) {
  const sizeClasses = {
    sm: "w-12 h-12 text-lg",
    md: "w-16 h-16 text-2xl",
    lg: "w-20 h-20 text-3xl",
  };

  return (
    <div
      className={`flex items-center justify-center bg-blue-500/20 rounded-full border border-blue-500/30 ${sizeClasses[iconSize]}`}
    >
      <span>{icon}</span>
    </div>
  );
}
