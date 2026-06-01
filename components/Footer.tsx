import { site } from "@/content/site";

const links = [
  { label: "LinkedIn", href: site.linkedin },
  { label: "Email", href: site.email },
  { label: "GitHub", href: site.github },
  { label: "Writing", href: site.writing },
  { label: "Source", href: site.source },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-foreground/5 md:mt-32">
      <div className="container-custom py-10 md:py-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="font-mono text-[12px] text-muted transition-all duration-300 hover:text-foreground hover:tracking-wide md:text-[13px]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="font-mono text-[10px] text-muted/60">
            Adapted from Jaidev Jayakumar&apos;s site source with permission.
          </p>
        </div>
      </div>
    </footer>
  );
}
