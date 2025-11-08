import { Cpu, GraduationCap, Users2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const solutions = [
  {
    icon: Cpu,
    title: "Accès aux outils SOTA",
    description:
      "Modèles IA de pointe, APIs avancées, et ressources technologiques adaptées au contexte africain. Tout ce dont vous avez besoin pour innover sans limite.",
  },
  {
    icon: GraduationCap,
    title: "Formation & Mentorat",
    description:
      "Tutoriels spécialisés, guides pratiques, et accompagnement personnalisé par des experts. Apprenez des meilleurs et développez vos compétences rapidement.",
  },
  {
    icon: Users2,
    title: "Communauté des Visionnaires",
    description:
      "Forums actifs, hackathons stimulants, challenges créatifs, et un réseau panafricain de talents. Connectez-vous avec ceux qui partagent votre vision.",
  },
  {
    icon: Rocket,
    title: "Projets Open-Source",
    description:
      "Contribuez à des projets africains innovants, partagez vos créations, et construisez ensemble l'avenir technologique du continent.",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-background">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12 md:space-y-16">
          {/* Section header */}
          <div className="text-center space-y-3 sm:space-y-4 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight px-2">
              Tout ce dont un visionnaire africain a besoin pour innover
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              ORIGIN vous donne accès à un écosystème complet conçu pour transformer vos idées en réalité
            </p>
          </div>

          {/* Solutions grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="border-2 hover:border-foreground transition-all duration-300 hover-lift bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="p-4 sm:p-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-foreground text-background flex items-center justify-center mb-3 sm:mb-4">
                    <solution.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl md:text-2xl">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <CardDescription className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {solution.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center pt-6 sm:pt-8 animate-fade-in px-4">
            <Button size="lg" variant="outline" className="text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 hover-lift w-full sm:w-auto">
              Accédez aux outils et rejoignez le mouvement
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
