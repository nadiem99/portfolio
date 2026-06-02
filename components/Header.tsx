import Link from "next/link";
import AnimatedLogo from "./AnimatedLogo";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/writing", label: "Writing" },
  { href: "/reading", label: "Reading" },
  { href: "/personal", label: "Personal" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-foreground/5 bg-background/95 backdrop-blur-sm">
      <nav className="container-custom py-5 md:py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex-1">
            <AnimatedLogo />
          </div>

          <div className="flex items-center justify-between gap-4 md:justify-end md:gap-6">
            <ul className="flex items-center gap-3 md:gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline group relative font-mono text-[12px] md:text-[14px]"
                  >
                    <span className="relative z-10 transition-colors group-hover:text-accent">
                      {item.label}
                    </span>
                    <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
