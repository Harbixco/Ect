import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link to={"/"} className={className}>
      <img src="/logo.svg" alt="logo" className="size-full" />
    </Link>
  );
}
