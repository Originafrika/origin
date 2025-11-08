import { Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

const StorySection = () => {
  return (
    <section className="py-20 md:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-accent to-foreground opacity-90" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Flame icon */}
          <div className="animate-scale-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-background/10 backdrop-blur-sm">
              <Flame className="h-10 w-10 text-background" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight animate-fade-in">
            De l'isolement à la flamme de l'innovation
          </h2>

          {/* Story narrative */}
          <div className="space-y-6 text-base md:text-lg leading-relaxed max-w-3xl mx-auto animate-fade-in-up">
            <p className="text-background/90">
              Il était une fois des développeurs isolés, dispersés à travers le continent, 
              rêvant de créer mais limités par le manque d'accès aux outils avancés.
            </p>
            <p className="text-background/90">
              Puis une <span className="font-bold text-background">flamme</span> s'est allumée. 
              Un laboratoire est né — ORIGIN — où l'intelligence artificielle n'est plus un privilège 
              réservé à quelques-uns, mais un droit accessible à tous les visionnaires.
            </p>
            <p className="text-background/90">
              Cette flamme a libéré les esprits créatifs. Elle a connecté les talents. 
              Elle a donné naissance à des projets qui transforment l'Afrique.
            </p>
            <p className="font-semibold text-xl md:text-2xl text-background">
              Aujourd'hui, cette flamme brûle plus fort que jamais. 
              Et elle attend que vous la rejoigniez.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-8 animate-fade-in">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-base px-8 py-6 bg-background text-foreground hover:bg-background/90 hover-lift"
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
