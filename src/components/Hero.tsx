import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logoLight from "@/assets/logo-light.jpg";
import logoDark from "@/assets/logo-dark.jpg";

const Hero = () => {
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
            />
            <img 
              src={logoDark} 
              alt="ORIGIN - Laboratoire IA panafricain de référence" 
              className="w-full h-full object-contain hidden dark:block"
            />
          </div>

          {/* Main headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl leading-tight px-2">
            Nous n'avons de limite{" "}
            <span className="block mt-1 sm:mt-2">que l'infini</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl font-light px-2">
            ORIGIN, le laboratoire IA panafricain de référence
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed px-4">
            La technologie de pointe, accessible à tous les visionnaires africains. 
            Rejoignez le mouvement qui transforme l'Afrique en leader mondial de l'innovation.
          </p>

          {/* CTA Button */}
          <div className="pt-2 sm:pt-4 px-4 w-full sm:w-auto">
            <Button 
              size="lg" 
              className="text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 hover-lift group w-full sm:w-auto"
            >
              <span className="text-center">Rejoignez la communauté des Visionnaires</span>
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </Button>
          </div>

          {/* Social proof */}
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground pt-4 sm:pt-8 animate-fade-in px-4">
            Déjà <span className="font-semibold text-foreground">500 développeurs africains</span> rejoignent notre mouvement chaque mois
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default Hero;
