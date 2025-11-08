import { AlertCircle, Globe, Users, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    text: "Accès limité aux outils IA avancés",
  },
  {
    icon: Users,
    text: "Manque de mentorat et de ressources contextualisées",
  },
  {
    icon: Globe,
    text: "Dépendance technologique aux solutions étrangères",
  },
  {
    icon: AlertCircle,
    text: "Difficulté à transformer les idées en projets concrets",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Section title */}
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              L'Afrique mérite sa place dans le futur de l'IA
            </h2>
          </div>

          {/* Storytelling */}
          <div className="prose prose-lg max-w-3xl mx-auto text-muted-foreground animate-fade-in-up">
            <p className="text-base md:text-lg leading-relaxed">
              Pendant trop longtemps, les développeurs africains ont été privés d'accès aux 
              meilleures technologies. Les infrastructures limitées, le coût des outils SOTA 
              et la dépendance aux solutions étrangères ont freiné l'innovation locale.
            </p>
            <p className="text-base md:text-lg leading-relaxed mt-4">
              Chez ORIGIN, nous avons choisi de transformer ce manque en opportunité. Nous avons 
              bâti un laboratoire indépendant, pensé pour l'Afrique, où chaque visionnaire peut 
              créer, expérimenter et exceller.
            </p>
          </div>

          {/* Problem list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-lg bg-background border border-border hover:shadow-lg transition-all duration-300 hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <problem.icon className="h-6 w-6 text-foreground" />
                </div>
                <p className="text-left text-sm md:text-base font-medium">
                  {problem.text}
                </p>
              </div>
            ))}
          </div>

          {/* Transition text */}
          <div className="pt-8 animate-fade-in">
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              ORIGIN n'est pas juste un labo : c'est le tremplin vers votre futur, votre liberté technologique, votre légende africaine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
