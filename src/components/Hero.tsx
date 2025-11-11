import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logoLight from "@/assets/logo-light.jpg";
import logoDark from "@/assets/logo-dark.jpg";

const HeroContent = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-muted/20 via-background to-background" />
      
      <div className="container relative z-10 px-4 sm:px-6 py-12 sm:py-16 md:py-20 mx-auto">
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 animate-fade-in-up">
          {/* Logo */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-2 sm:mb-4 animate-scale-in">
            <img 
              src={logoLight} 
              alt="ORIGIN - Laboratoire IA panafricain de référence" 
              className="w-full h-full object-contain dark:hidden"
              width="160"
              height="160"
            />
            <img 
              src={logoDark} 
              alt="ORIGIN - Laboratoire IA panafricain de référence" 
              className="w-full h-full object-contain hidden dark:block"
              width="160"
              height="160"
            />
          </div>

          {/* Main headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl leading-tight px-2">
            {t("hero.title")}
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl font-light px-2">
            {t("hero.subtitle")}
          </p>

          {/* Description */}
          <div className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed px-4 space-y-4">
            <p>
              {t("hero.description1")}
            </p>
            <p>
              {t("hero.description2")}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 px-4 w-full sm:w-auto">
            <Button 
              size="lg" 
              className="text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 hover-lift group w-full sm:w-auto"
            >
              <span className="text-center">{t("hero.cta.primary")}</span>
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 hover-lift group w-full sm:w-auto"
            >
              <span className="text-center">{t("hero.cta.secondary")}</span>
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

const Hero = () => {
  return <HeroContent />;
};

export default Hero;