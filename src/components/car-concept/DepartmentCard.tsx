import type { Department } from "./departmentData";

interface DepartmentCardProps {
  dept: Department;
  onClick: (dept: Department) => void;
}

export default function DepartmentCard({ dept, onClick }: DepartmentCardProps) {
  return (
    <button
      onClick={() => onClick(dept)}
      className="
        group relative flex flex-col gap-4 p-6 text-left w-full h-full
        bg-white/[0.03] border border-white/10
        hover:border-primary/60 hover:bg-white/[0.06]
        rounded-xl transition-all duration-300 cursor-pointer
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
      "
    >
      {/* Icon */}
      <div
        className="
          w-10 h-10 rounded-lg flex items-center justify-center text-xl
          bg-primary/10 border border-primary/20
          group-hover:bg-primary/20 transition-colors duration-300
        "
        aria-hidden="true"
      >
        {dept.icon}
      </div>

      {/* Title */}
      <h3 className="text-foreground font-semibold text-base leading-snug group-hover:text-primary transition-colors duration-300">
        {dept.title}
      </h3>

      {/* Summary — flex-1 pushes arrow to the bottom */}
      <p className="text-white/50 text-sm leading-relaxed flex-1">
        {dept.summary}
      </p>

      {/* Arrow hint */}
      <span
        className="
          self-start text-xs font-mono tracking-widest uppercase
          text-primary/0 group-hover:text-primary/70
          transition-all duration-300 translate-y-1 group-hover:translate-y-0
        "
      >
        Learn more →
      </span>
    </button>
  );
}