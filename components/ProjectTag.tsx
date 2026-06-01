interface ProjectTagProps {
  label: string;
}

export default function ProjectTag({ label }: ProjectTagProps) {
  return (
    <span className="inline-block px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider
      border border-accent/30 text-accent/80 bg-accent/5
      hover:border-accent/60 hover:text-accent hover:bg-accent/10 transition-all duration-300
      mr-2 mb-2">
      {label}
    </span>
  );
}

