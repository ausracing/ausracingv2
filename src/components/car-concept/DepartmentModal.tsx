"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { Department } from "./departmentData";

interface DepartmentModalProps {
  dept: Department | null;
  onClose: () => void;
}

export default function DepartmentModal({ dept, onClose }: DepartmentModalProps) {
  return (
    <Dialog open={!!dept} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="
          max-w-2xl w-full bg-[#0a0a0a] border border-white/10
          text-foreground rounded-2xl p-8
          focus-visible:outline-none
        "
      >
        {dept && (
          <>
            <DialogHeader className="gap-4">
              {/* Icon + title row */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl bg-primary/10 border border-primary/20 flex-shrink-0">
                  {dept.icon}
                </div>
                <div>
                  <DialogTitle className="text-foreground text-2xl font-black uppercase tracking-tight">
                    {dept.title}
                  </DialogTitle>
                  <DialogDescription className="text-primary/70 text-xs font-mono tracking-widest uppercase mt-1">
                    Department
                  </DialogDescription>
                </div>
              </div>

              {/* Summary */}
              <p className="text-white/60 text-base leading-relaxed border-t border-white/[0.07] pt-4">
                {dept.summary}
              </p>
            </DialogHeader>

            {/* Detail body */}
            <div className="mt-5 space-y-5">
              <p className="text-white/75 text-sm leading-relaxed">
                {dept.detail}
              </p>

              {dept.bullets && dept.bullets.length > 0 && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {dept.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}