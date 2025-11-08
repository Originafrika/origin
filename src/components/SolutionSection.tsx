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
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Tout ce dont un visionnaire africain a besoin pour innover
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              ORIGIN vous donne accès à un écosystème complet conçu pour transformer vos idées en réalité
            </p>
          </div>

          {/* Solutions grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="border-2 hover:border-foreground transition-all duration-300 hover-lift bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-foreground text-background flex items-center justify-center mb-4">
                    <solution.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {solution.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center pt-8 animate-fade-in">
            <Button size="lg" variant="outline" className="text-base px-8 py-6 hover-lift">
              Accédez aux outils et rejoignez le mouvement
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
