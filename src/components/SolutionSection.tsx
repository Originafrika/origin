import { Cpu, GraduationCap, Users2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const SolutionSectionContent = () => {
  const { t } = useLanguage();
  
  const solutions = [
    {
      title: t("solution.accessibility.title"),
      description: t("solution.accessibility.description"),
    },
    {
      title: t("solution.independence.title"),
      description: t("solution.independence.description"),
    },
    {
      title: t("solution.community.title"),
      description: t("solution.community.description"),
    },
    {
      title: t("solution.innovation.title"),
      description: t("solution.innovation.description"),
    },
  ];
  
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-background">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12 md:space-y-16">
          {/* Section header */}
          <div className="text-center space-y-3 sm:space-y-4 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight px-2">
              {t("solution.title")}
            </h2>
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
              {t("solution.cta")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionSection = () => {
  return <SolutionSectionContent />;
};

export default SolutionSection;
