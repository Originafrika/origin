import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Projects = () => {
  // Structured data for Projects page
  const websiteSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Projets ORIGIN",
    "url": "https://origin.africa/projects",
    "description": "Découvrez les initiatives technologiques d'ORIGIN : Cortexia, Code et d'autres projets d'intelligence artificielle conçus pour l'Afrique."
  });

  // Note: You'll need to add actual image files to src/assets/projects/
  const projects = [
    {
      id: "cortexia",
      title: "Cortexia",
      description: "L'IA créative qui redéfinit la manière dont les Africains imaginent et partagent le beau.",
      status: "Actif",
      link: "/projects/cortexia",
      image: "/src/assets/projects/cortexia.png" // Add your actual image file
    },
    {
      id: "code",
      title: "Code",
      description: "Environnement simplifié pour développeurs africains avec outils d'IA intégrés.",
      status: "Actif",
      link: "/projects/code",
      image: "/src/assets/projects/code.jpg" // Add your actual image file
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Projets ORIGIN — Innovations IA créatives africaines"
        description="Découvrez les projets innovants d'ORIGIN, notamment Cortexia, la plateforme IA créative qui redéfinit la manière dont les Africains imaginent et partagent le beau."
        keywords="projets IA Afrique, Cortexia, Code, innovation IA africaine, solutions IA créatives"
        ogTitle="Projets ORIGIN — Innovations IA créatives africaines"
        ogDescription="Découvrez les projets innovants d'ORIGIN, notamment Cortexia, la plateforme IA créative qui redéfinit la manière dont les Africains imaginent et partagent le beau."
        ogImage="https://lovable.dev/opengraph-image-p98pqg.png"
        ogUrl="https://origin.africa/projects"
        ogType="website"
        twitterCard="summary_large_image"
        twitterTitle="Projets ORIGIN — Innovations IA créatives africaines"
        twitterDescription="Découvrez les projets innovants d'ORIGIN, notamment Cortexia, la plateforme IA créative qui redéfinit la manière dont les Africains imaginent et partagent le beau."
        twitterImage="https://lovable.dev/opengraph-image-p98pqg.png"
        canonicalUrl="https://origin.africa/projects"
        schema={websiteSchema}
      />

      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Nos Projets</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Nos projets incarnent notre vision : une Afrique créatrice, autonome et technologiquement souveraine.
          </p>
        </div>

        {/* Intro Section */}
        <div className="bg-muted rounded-2xl p-6 sm:p-8 md:p-12 mb-16 sm:mb-20">
          <p className="text-lg sm:text-xl text-center max-w-3xl mx-auto">
            Chaque projet d'ORIGIN est conçu pour répondre à un défi spécifique de l'écosystème 
            technologique africain. Nous fusionnons créativité, technologie et intelligence artificielle 
            pour créer des solutions qui redéfinissent les frontières de l'innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Projets Actifs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="bg-muted rounded-lg h-48 flex items-center justify-center mb-4 overflow-hidden">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={`Aperçu du projet ${project.title}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to initial placeholder if image fails to load
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `
                            <div class="text-center">
                              <div class="bg-background rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                                <span class="text-2xl font-bold">${project.title.charAt(0)}</span>
                              </div>
                              <span class="text-sm text-muted-foreground">Aperçu du projet</span>
                            </div>
                          `;
                        }}
                      />
                    ) : (
                      <div className="text-center">
                        <div className="bg-background rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                          <span className="text-2xl font-bold">{project.title.charAt(0)}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">Aperçu du projet</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {project.status}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link to={project.link}>En savoir plus</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Voir plus de projets
            </Button>
          </div>
        </div>

        {/* Future Projects Section */}
        <div className="bg-muted rounded-2xl p-6 sm:p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Projets à Venir</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            Nous travaillons continuellement sur de nouvelles initiatives pour renforcer l'écosystème 
            de l'IA en Afrique. Rejoignez notre communauté pour être informé de nos prochaines annonces.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-background rounded-lg p-4 text-center border-2 border-dashed border-muted">
                <div className="h-4 bg-muted rounded w-3/4 mx-auto mb-2"></div>
                <div className="h-3 bg-muted rounded w-1/2 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;