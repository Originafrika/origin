import { Card, CardContent } from "@/components/ui/card";
import { Quote, Award, Users, Lightbulb } from "lucide-react";

const testimonials = [
  {
    name: "Amara K.",
    role: "Développeuse IA, Lagos",
    quote:
      "ORIGIN m'a donné accès aux outils que je croyais hors de portée. Aujourd'hui, je développe des solutions IA qui impactent ma communauté.",
  },
  {
    name: "Mamadou S.",
    role: "Data Scientist, Dakar",
    quote:
      "La communauté ORIGIN est incroyable. J'ai trouvé des mentors, des collaborateurs, et surtout, une famille de visionnaires.",
  },
  {
    name: "Fatima M.",
    role: "Fondatrice Startup IA, Nairobi",
    quote:
      "Grâce à ORIGIN, j'ai transformé mon idée en startup. L'accompagnement et les ressources sont exceptionnels.",
  },
];

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Membres actifs",
  },
  {
    icon: Lightbulb,
    value: "200+",
    label: "Projets lancés",
  },
  {
    icon: Award,
    value: "15",
    label: "Pays africains",
  },
];

const SocialProofSection = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Déjà la référence pour les visionnaires africains
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Rejoignez une communauté grandissante de talents qui transforment l'Afrique
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground text-background mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-2 hover:shadow-xl transition-all duration-300 hover-lift"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <Quote className="h-8 w-8 text-muted-foreground" />
                  <p className="text-sm md:text-base leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="pt-4 border-t">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
