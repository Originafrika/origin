import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import logoLight from "@/assets/logo-light.jpg";
import logoDark from "@/assets/logo-dark.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { label: "Outils IA", href: "#tools" },
      { label: "Formation", href: "#training" },
      { label: "Communauté", href: "#community" },
      { label: "Projets", href: "#projects" },
    ],
    resources: [
      { label: "Documentation", href: "#docs" },
      { label: "Blog", href: "#blog" },
      { label: "Guides", href: "#guides" },
      { label: "FAQ", href: "#faq" },
    ],
    company: [
      { label: "À propos", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Carrières", href: "#careers" },
      { label: "Partenaires", href: "#partners" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-foreground text-background py-16 md:py-20">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="w-16 h-16">
              <img 
                src={logoDark} 
                alt="ORIGIN" 
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-background/80 text-sm leading-relaxed max-w-sm">
              Le premier laboratoire IA indépendant africain. 
              Nous donnons aux visionnaires africains les outils pour innover sans limite.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h3 className="font-semibold mb-4 text-background">Produit</h3>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-background">Ressources</h3>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-background">Entreprise</h3>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm text-center md:text-left">
              © {currentYear} ORIGIN. Tous droits réservés.
            </p>
            <p className="text-background/80 text-sm font-medium text-center md:text-right italic">
              Chez ORIGIN, l'innovation n'a pas de limite. Soyez acteur de l'histoire africaine de la tech.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
