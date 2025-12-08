interface LogoButtonProps {
  text: string;
}

export default function LogoButton({ text }: LogoButtonProps) {
  return (
    <button
      className="group relative bg-transparent cursor-pointer text-lg tracking-[2px] uppercase text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_23px_theme(colors.brand-red)]"
      aria-label={text}
    >
      <span>&nbsp;{text}&nbsp;</span>
      <span
        aria-hidden="true"
        className="absolute text-brand-red w-0 inset-0 border-r-[4px] border-r-brand-red animate-pulse group-hover:animate-none overflow-hidden transition-all duration-500 [-webkit-text-stroke:1px_theme(colors.brand-red)] group-hover:w-full group-hover:drop-shadow-[0_0_23px_theme(colors.brand-red)]"
      >
        &nbsp;{text}&nbsp;
      </span>
    </button>
  );
}
