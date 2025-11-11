import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Target, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  // Structured data for About page
  const organizationSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ORIGIN",
    "url": "https://origin.africa",
    "description": t("about.description"),
    "sameAs": [
      "https://linkedin.com/company/origin",
      "https://twitter.com/ORIGIN",
      "https://github.com/origin"
    ]
  });

  return (
    <div className="min-h-screen">
      <SEO 
        title={t("about.title")}
        description={t("about.subtitle")}
        keywords="à propos IA Afrique, vision IA, laboratoire africain IA, ORIGIN"
        ogTitle={t("about.title")}
        ogDescription={t("about.subtitle")}
        ogImage="https://lovable.dev/opengraph-image-p98pqg.png"
        ogUrl="https://origin.africa/about"
        ogType="website"
        twitterCard="summary_large_image"
        twitterTitle={t("about.title")}
        twitterDescription={t("about.subtitle")}
        twitterImage="https://lovable.dev/opengraph-image-p98pqg.png"
        canonicalUrl="https://origin.africa/about"
        schema={organizationSchema}
      />

      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{t("about.title")}</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        {/* Intro Section */}
        <div className="mb-16 sm:mb-20">
          <div className="bg-muted rounded-2xl p-6 sm:p-8 md:p-12">
            <blockquote className="text-2xl sm:text-3xl font-bold text-center italic mb-6">
              {t("about.intro.quote")}
            </blockquote>
            <p className="text-lg text-center max-w-3xl mx-auto">
              {t("about.intro.text")}
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-16 sm:mb-20">
          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t("about.mission")}</h2>
              <p className="text-lg sm:text-xl mb-6">
                {t("about.mission.text")}
              </p>
              <p className="text-muted-foreground mb-6">
                {t("about.mission.description")}
              </p>
              <Button asChild>
                <Link to="/projects">{t("projects.cta")}</Link>
              </Button>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-muted rounded-full flex items-center justify-center">
                  <MapPin className="h-16 w-16 text-background" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">{t("about.values")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 mb-4 text-primary" />
                <CardTitle>{t("about.values.audacity")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t("about.values.audacity.description")}
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Target className="h-10 w-10 mb-4 text-primary" />
                <CardTitle>{t("about.values.innovation")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t("about.values.innovation.description")}
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 mb-4 text-primary" />
                <CardTitle>{t("about.values.service")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t("about.values.service.description")}
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="h-10 w-10 mb-4 text-primary flex items-center justify-center font-bold text-xl">E</div>
                <CardTitle>{t("about.values.excellence")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t("about.values.excellence.description")}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">{t("about.team")}</h2>
            <p className="text-lg mb-8">
              {t("about.team.text")}
            </p>
            <div className="bg-muted rounded-2xl p-8">
              <p className="text-xl italic">
                {t("about.team.quote")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;