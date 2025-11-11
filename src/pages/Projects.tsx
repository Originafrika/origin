import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();
  // Structured data for Projects page
  const websiteSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": t("projects.title"),
    "url": "https://origin.africa/projects",
    "description": t("projects.description")
  });

  // Note: You'll need to add actual image files to src/assets/projects/
  const projects = [
    {
      id: "cortexia",
      status: "Actif",
      link: "/projects/cortexia",
      image: "/src/assets/projects/cortexia.png" // Add your actual image file
    },
    {
      id: "code",
      status: "Actif",
      link: "/projects/code",
      image: "/src/assets/projects/code.jpg" // Add your actual image file
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title={t("projects.title")}
        description={t("projects.description")}
        keywords="projets IA Afrique, Cortexia, Code, innovation IA africaine, solutions IA créatives"
        ogTitle={t("projects.title")}
        ogDescription={t("projects.description")}
        ogImage="https://lovable.dev/opengraph-image-p98pqg.png"
        ogUrl="https://origin.africa/projects"
        ogType="website"
        twitterCard="summary_large_image"
        twitterTitle={t("projects.title")}
        twitterDescription={t("projects.description")}
        twitterImage="https://lovable.dev/opengraph-image-p98pqg.png"
        canonicalUrl="https://origin.africa/projects"
        schema={websiteSchema}
      />

      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{t("projects.title")}</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t("projects.description")}
          </p>
        </div>

        {/* Intro Section */}
        <div className="bg-muted rounded-2xl p-6 sm:p-8 md:p-12 mb-16 sm:mb-20">
          <p className="text-lg sm:text-xl text-center max-w-3xl mx-auto">
            {t("projects.intro")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">{t("projects.active")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">{t(`projects.${project.id}.title`)}</CardTitle>
                  <CardDescription>{t(`projects.${project.id}.description`)}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="bg-muted rounded-lg h-48 flex items-center justify-center mb-4 overflow-hidden">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={`Aperçu du projet ${t(`projects.${project.id}.title`)}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to initial placeholder if image fails to load
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `
                            <div class="text-center">
                              <div class="bg-background rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                                <span class="text-2xl font-bold">${t(`projects.${project.id}.title`).charAt(0)}</span>
                              </div>
                              <span class="text-sm text-muted-foreground">{t("projects.preview")}</span>
                            </div>
                          `;
                        }}
                      />
                    ) : (
                      <div className="text-center">
                        <div className="bg-background rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                          <span className="text-2xl font-bold">{t(`projects.${project.id}.title`).charAt(0)}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{t("projects.preview")}</span>
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
                    <Link to={project.link}>{t("projects.cta")}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              {t("projects.cta")}
            </Button>
          </div>
        </div>

        {/* Future Projects Section */}
        <div className="bg-muted rounded-2xl p-6 sm:p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">{t("projects.upcoming")}</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            {t("projects.intro")}
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