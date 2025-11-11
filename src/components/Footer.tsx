import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logoLight from "@/assets/logo-light.jpg";
import logoDark from "@/assets/logo-dark.jpg";

const FooterContent = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const links = {
    product: [
      { label: t("footer.projects"), href: "/projects" },
      { label: t("footer.tools"), href: "#tools" },
      { label: t("footer.training"), href: "#training" },
      { label: t("footer.community"), href: "#community" },
    ],
    resources: [
      { label: "Blog", href: "/blog" },
      { label: t("footer.documentation"), href: "#docs" },
      { label: t("footer.guides"), href: "#guides" },
      { label: t("footer.faq"), href: "#faq" },
    ],
    company: [
      { label: t("footer.about"), href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: t("footer.careers"), href: "#careers" },
      { label: t("footer.partners"), href: "#partners" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-foreground text-background py-12 sm:py-16 md:py-20">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16">
              <img 
                src={logoDark} 
                alt="ORIGIN - Laboratoire IA indépendant africain" 
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-background/80 text-xs sm:text-sm leading-relaxed max-w-sm">
              {t("footer.description")}
            </p>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-background text-sm sm:text-base">{t("footer.product")}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {links.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background text-xs sm:text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-background text-sm sm:text-base">{t("footer.resources")}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {links.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background text-xs sm:text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-background text-sm sm:text-base">{t("footer.company")}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background text-xs sm:text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-background/60 text-xs sm:text-sm text-center md:text-left">
              {t("footer.copyright").replace('{year}', currentYear.toString())}
            </p>
            <p className="text-background/80 text-xs sm:text-sm font-medium text-center md:text-right italic px-2">
              {t("footer.tagline")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer = () => {
  return <FooterContent />;
};

export default Footer;
