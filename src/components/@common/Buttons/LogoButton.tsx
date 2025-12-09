interface LogoButtonProps {
  text: string;
}

export default function LogoButton({ text }: LogoButtonProps) {
  return (
    <button
      className="group relative bg-transparent cursor-pointer text-lg tracking-[2px] uppercase text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_23px_#60a5fa]"
      aria-label={text}
    >
      <span>&nbsp;{text}&nbsp;</span>
      <span
        aria-hidden="true"
        className="absolute text-blue-400 w-0 inset-0 border-r border-r-blue-400 animate-pulse group-hover:animate-none overflow-hidden transition-all duration-500 [-webkit-text-stroke:1px_#60a5fa] group-hover:w-full group-hover:drop-shadow-[0_0_23px_#60a5fa]"
      >
        &nbsp;{text}&nbsp;
      </span>
    </button>
  );
}
