import { Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

const StorySection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-accent to-foreground opacity-90" />
      
      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10 md:space-y-12">
          {/* Flame icon */}
          <div className="animate-scale-in">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-background/10 backdrop-blur-sm">
              <Flame className="h-8 w-8 sm:h-10 sm:w-10 text-background" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight animate-fade-in px-2">
            De l'isolement à la flamme de l'innovation
          </h2>

          {/* Story narrative */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto animate-fade-in-up px-2">
            <p className="text-background/90">
              Nous étions souvent incompris et rejetés. Notre différence dérangeait. 
              Mais dans cette solitude, nous avons touché le fond et vu la réalité : 
              l'Afrique freinée par le manque de moyens et d'accès aux technologies.
            </p>
            <p className="text-background/90">
              Une <span className="font-bold text-background">flamme</span> s'est allumée. 
              Nous avons choisi de transformer la douleur en force, la différence en arme. 
              Nous avons choisi ORIGIN. Nous avons choisi de libérer l'Afrique.
            </p>
            <p className="text-background/90">
              Aujourd'hui, chaque visionnaire peut rejoindre ce mouvement et créer l'avenir. 
              Cette flamme a libéré les esprits créatifs. Elle a connecté les talents. 
              Elle a donné naissance à des projets qui transforment l'Afrique.
            </p>
            <p className="font-semibold text-lg sm:text-xl md:text-2xl text-background">
              La flamme brûle plus fort que jamais. Et elle attend que vous la rejoigniez.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-6 sm:pt-8 animate-fade-in px-4">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 bg-background text-foreground hover:bg-background/90 hover-lift w-full sm:w-auto"
            >
              Rejoignez la flamme
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
