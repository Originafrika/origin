import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Target, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  // Structured data for About page
  const organizationSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ORIGIN",
    "url": "https://origin.africa",
    "description": "Premier laboratoire d'intelligence artificielle indépendant en Afrique",
    "sameAs": [
      "https://linkedin.com/company/origin",
      "https://twitter.com/ORIGIN",
      "https://github.com/origin"
    ]
  });

  return (
    <div className="min-h-screen">
      <SEO 
        title="À propos d'ORIGIN — Laboratoire d'IA africain indépendant"
        description="Découvrez la mission, la vision et les valeurs du premier laboratoire d'intelligence artificielle indépendant en Afrique."
        keywords="à propos IA Afrique, vision IA, laboratoire africain IA, ORIGIN"
        ogTitle="À propos d'ORIGIN — Laboratoire d'IA africain indépendant"
        ogDescription="Découvrez la mission, la vision et les valeurs du premier laboratoire d'intelligence artificielle indépendant en Afrique."
        ogImage="https://lovable.dev/opengraph-image-p98pqg.png"
        ogUrl="https://origin.africa/about"
        ogType="website"
        twitterCard="summary_large_image"
        twitterTitle="À propos d'ORIGIN — Laboratoire d'IA africain indépendant"
        twitterDescription="Découvrez la mission, la vision et les valeurs du premier laboratoire d'intelligence artificielle indépendant en Afrique."
        twitterImage="https://lovable.dev/opengraph-image-p98pqg.png"
        canonicalUrl="https://origin.africa/about"
        schema={organizationSchema}
      />

      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">À propos d'ORIGIN</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Le premier laboratoire d'intelligence artificielle indépendant en Afrique
          </p>
        </div>

        {/* Intro Section */}
        <div className="mb-16 sm:mb-20">
          <div className="bg-muted rounded-2xl p-6 sm:p-8 md:p-12">
            <blockquote className="text-2xl sm:text-3xl font-bold text-center italic mb-6">
              "Nous étions incompris. Puis nous avons décidé de créer notre propre voie."
            </blockquote>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Cette flamme née de la solitude et de la vision panafricaine est le cœur d'ORIGIN. 
              Nous croyons qu'il est temps pour l'Afrique de créer sa propre intelligence artificielle, 
              adaptée à ses réalités et tournée vers son avenir.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-16 sm:mb-20">
          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Notre Mission</h2>
              <p className="text-lg sm:text-xl mb-6">
                Rendre l'IA accessible aux réalités africaines.
              </p>
              <p className="text-muted-foreground mb-6">
                Nous développons des solutions d'intelligence artificielle conçues spécifiquement 
                pour les défis et les opportunités du continent africain. Notre objectif est de 
                démocratiser l'accès à l'IA de pointe pour les startups, les chercheurs et les 
                institutions africaines.
              </p>
              <Button asChild>
                <Link to="/projects">Découvrir nos projets</Link>
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
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 mb-4 text-primary" />
                <CardTitle>Audace</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Nous défions les conventions pour créer des solutions révolutionnaires.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Target className="h-10 w-10 mb-4 text-primary" />
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Nous repoussons les limites de l'IA pour servir les réalités africaines.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 mb-4 text-primary" />
                <CardTitle>Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Nous mettons nos compétences au service de la communauté africaine.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="h-10 w-10 mb-4 text-primary flex items-center justify-center font-bold text-xl">E</div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Nous aspirons à l'excellence dans chaque projet et chaque interaction.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Notre Équipe</h2>
            <p className="text-lg mb-8">
              ORIGIN est né de la rencontre de visionnaires africains passionnés par la technologie. 
              Notre collectif rassemble des chercheurs, développeurs et innovateurs déterminés à 
              faire de l'Afrique un leader mondial en intelligence artificielle.
            </p>
            <div className="bg-muted rounded-2xl p-8">
              <p className="text-xl italic">
                "Chez ORIGIN, nous croyons que l'avenir de l'IA se construit en Afrique, par les Africains, pour l'Afrique."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;