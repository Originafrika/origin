import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Code = () => {
  // Structured data for Code project
  const projectSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Code",
    "description": "Environnement simplifié pour développeurs africains avec outils d'IA intégrés.",
    "url": "https://origin.africa/projects/code",
    "creator": {
      "@type": "Organization",
      "name": "ORIGIN"
    }
  });

  return (
    <div className="min-h-screen">
      <SEO 
        title="Code — Environnement simplifié pour développeurs africains"
        description="Découvrez Code, l'environnement simplifié conçu par ORIGIN pour les développeurs africains avec outils d'IA intégrés."
        keywords="Code, environnement développeurs, outils IA, développeurs africains, ORIGIN"
        ogTitle="Code — Environnement simplifié pour développeurs africains"
        ogDescription="Découvrez Code, l'environnement simplifié conçu par ORIGIN pour les développeurs africains avec outils d'IA intégrés."
        ogImage="https://lovable.dev/opengraph-image-p98pqg.png"
        ogUrl="https://origin.africa/projects/code"
        ogType="website"
        twitterCard="summary_large_image"
        twitterTitle="Code — Environnement simplifié pour développeurs africains"
        twitterDescription="Découvrez Code, l'environnement simplifié conçu par ORIGIN pour les développeurs africains avec outils d'IA intégrés."
        twitterImage="https://lovable.dev/opengraph-image-p98pqg.png"
        canonicalUrl="https://origin.africa/projects/code"
        schema={projectSchema}
      />

      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-foreground">Accueil</Link>
            </li>
            <li className="text-muted-foreground">/</li>
            <li>
              <Link to="/projects" className="hover:text-foreground">Projets</Link>
            </li>
            <li className="text-muted-foreground">/</li>
            <li className="text-foreground">Code</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="bg-muted rounded-2xl w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center mx-auto mb-8">
            <span className="text-4xl sm:text-5xl font-bold">C</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Code</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Environnement simplifié pour développeurs africains avec outils d'IA intégrés
          </p>
        </div>

        {/* Overview Section */}
        <div className="bg-muted rounded-2xl p-6 sm:p-8 md:p-12 mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Aperçu du Projet</h2>
          <p className="text-lg mb-6">
            Code est un environnement de développement conçu pour simplifier l'intégration de l'intelligence 
            artificielle dans les projets des développeurs africains, même avec des connaissances limitées en IA.
          </p>
          <p className="text-muted-foreground mb-6">
            Avec une interface intuitive et des outils préconfigurés, Code permet aux développeurs de se 
            concentrer sur la création de solutions plutôt que sur la configuration complexe des environnements.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Simplifié
            </span>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Intuitif
            </span>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              IA Intégrée
            </span>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Multi-plateformes
            </span>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Fonctionnalités Clés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Interface Intuitive</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Une interface utilisateur conçue pour être accessible aux développeurs de tous niveaux, 
                  avec des assistants visuels pour les tâches courantes.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Intégration IA Simplifiée</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Des bibliothèques et des modèles préconfigurés pour intégrer facilement des 
                  fonctionnalités d'IA dans vos applications.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Modèles Locaux</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Exécution des modèles d'IA directement sur votre machine pour une confidentialité 
                  maximale et une réduction de la dépendance à l'Internet.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Documentation Africaine</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Documentation et tutoriels rédigés en français et anglais, avec des exemples 
                  spécifiquement adaptés aux contextes africains.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-muted rounded-2xl p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Commencez avec Code</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Téléchargez Code dès aujourd'hui et commencez à intégrer l'intelligence artificielle 
            dans vos projets sans complexité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Télécharger Code
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/projects">Voir tous les projets</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Code;