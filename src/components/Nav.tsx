"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";

export function Nav({ children }: { children: ReactNode }) {
  return (
    <nav className="flex justify-center px-4 bg-primary text-primary-foreground">
      {children}
    </nav>
  );
}

export function Navlink(props: Omit<ComponentProps<typeof Link>, "classname">) {
  const path = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        "text-sm font-medium hover:text-secondary-foreground focus-visible::text-secondary-foreground hover:bg-secondary transition-colors focus-visible::bg-secondary p-5 ",
        path === props.href && "bg-background text-foreground"
      )}
    />
  );
}
