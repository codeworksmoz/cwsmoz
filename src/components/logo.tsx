import { cn } from "@/lib/utils";
import { Code2 } from "lucide-react";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 text-2xl font-bold font-headline text-primary", className)}>
      <Code2 className="h-7 w-7" />
      <span>Codworks MOZ</span>
    </div>
  );
}
