import { ReactNode } from "react";

export default function Component({ children }: { children: ReactNode }) {
  return <section className="p-4 text-primary md:p-8">{children}</section>;
}
