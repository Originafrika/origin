import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Brain, Smartphone, Users, Shield, Wallet, Workflow } from "lucide-react";

const Cortexia = () => {
  // Structured data for Cortexia project
  const projectSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Cortexia",
    "description": "Plateforme IA créative d'Afrique qui fusionne intelligence artificielle et créativité.",
    "url": "https://origin.africa/projects/cortexia",
    "creator": {
      "@type": "Organization",
      "name": "ORIGIN"
    }
  });

  const features = [
    {
      icon: Brain,
      title: "Génération d'images IA intelligente",
      description: "Cortexia comprend votre prompt et améliore automatiquement vos idées avec son moteur \"Cortexia Intelligence (CI)\"."
    },
    {
      icon: Smartphone,
      title: "Fil social immersif (style TikTok)",
      description: "Explorez une infinité de créations d'artistes IA, engagez-vous avec la communauté via likes, commentaires et remixes."
    },
    {
      icon: Wallet,
      title: "Système de crédits flexible",
      description: "Gratuit : 20–30 crédits mensuels | Payant : génération illimitée d'images et de vidéos"
    },
    {
      icon: Workflow,
      title: "Workflows de création avancés",
      description: "Créez étape par étape, combinez des images et obtenez des résultats dignes d'un studio."
    },
    {
      icon: Users,
      title: "Réseau social complet",
      description: "Profils créateurs, challenges, monétisation et commissions pour les artistes vérifiés."
    },
    {
      icon: Shield,
      title: "Sécurité et confidentialité",
      description: "Données protégées, conversations chiffrées, authentification Supabase."
    }
  ];

  const uxFeatures = [
    "Conception mobile-first (PWA installable)",
    "Navigation gestuelle fluide",
    "Interface claire optimisée",
    "Caching intelligent et performances élevées",
    "Temps de chargement ultra rapide"
  ];

  const valuePropositions = [
    {
      target: "Créateurs occasionnels",
      value: "Créez des œuvres professionnelles sans effort"
    },
    {
      target: "Artistes confirmés",
      value: "Bâtissez une audience et monétisez vos créations"
    },
    {
      target: "Communautés",
      value: "Collaborez, partagez et remixer les créations IA"
    },
    {
      target: "Entreprises",
      value: "Produisez rapidement des visuels et concepts marketing"
    }
  ];

  // Cortexia external link
  const cortexiaUrl = "https://cortexia.originafrika.com";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Cortexia – Plateforme IA créative d’Afrique | ORIGIN"
        description="Découvrez Cortexia, la plateforme mobile-first africaine qui fusionne intelligence artificielle et créativité. Créez, partagez et découvrez l’art généré par IA."
        keywords="Cortexia, IA créative, art généré par IA, IA en Afrique, ORIGIN, plateforme AI Afrique, intelligence artificielle pour créateurs, PWA AI Afrique"
        ogTitle="Cortexia – L’IA créative africaine"
        ogDescription="Cortexia est la première plateforme IA sociale africaine dédiée à la création artistique intelligente."
        ogImage="https://lovable.dev/opengraph-image-p98pqg.png"
        ogUrl="https://origin.africa/projects/cortexia"
        ogType="website"
        twitterCard="summary_large_image"
        twitterTitle="Cortexia – L’IA créative africaine"
        twitterDescription="Cortexia est la première plateforme IA sociale africaine dédiée à la création artistique intelligente."
        twitterImage="https://lovable.dev/opengraph-image-p98pqg.png"
        canonicalUrl="https://origin.africa/projects/cortexia"
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
            <li className="text-foreground">Cortexia</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="bg-muted rounded-2xl w-full h-64 sm:h-80 flex items-center justify-center mx-auto mb-8 overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-muted/20 to-background"></div>
            <div className="relative z-10 text-center px-4">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-background border rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-12 w-12 sm:h-16 sm:w-16 text-foreground" />
              </div>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Cortexia : L'IA créative qui fusionne art et intelligence
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            La première plateforme mobile-first africaine qui permet de créer, partager et découvrir des œuvres générées par IA, dans une expérience sociale et communautaire unique.
          </p>
          <Button size="lg" asChild>
            <a href={cortexiaUrl} target="_blank" rel="noopener noreferrer">
              Explorer Cortexia
            </a>
          </Button>
        </div>

        {/* Description Section */}
        <div className="bg-muted rounded-2xl p-6 sm:p-8 md:p-12 mb-16 sm:mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl mb-6">
              <strong>Cortexia</strong> est une plateforme innovante qui combine <strong>intelligence artificielle</strong>, <strong>création visuelle</strong> et <strong>interaction sociale</strong>.
            </p>
            <p className="text-muted-foreground mb-6 text-lg">
              Elle offre un espace où les utilisateurs peuvent générer, partager et découvrir des contenus visuels propulsés par l'IA, tout en interagissant avec une communauté créative dynamique.
            </p>
            <p className="text-muted-foreground text-lg">
              Pensée pour les <strong>créateurs africains</strong> et au-delà, Cortexia redéfinit la frontière entre art et technologie, en rendant la création accessible à tous, sans compétences techniques.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Fonctionnalités principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-background border">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* UX Section */}
        <div className="mb-16 sm:mb-20 bg-muted rounded-2xl p-6 sm:p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Expérience utilisateur</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {uxFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-foreground flex items-center justify-center mr-3 mt-1">
                    <div className="h-2 w-2 rounded-full bg-background"></div>
                  </div>
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Value Proposition Section */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Valeur ajoutée par cible</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuePropositions.map((item, index) => (
              <Card key={index} className="bg-background border">
                <CardHeader>
                  <CardTitle className="text-lg font-bold">{item.target}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* External Link Section */}
        <div className="mb-16 sm:mb-20 text-center">
          <p className="text-muted-foreground mb-4">Découvrez Cortexia en ligne</p>
          <a 
            href={cortexiaUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {cortexiaUrl}
          </a>
        </div>

        {/* Final CTA Section */}
        <div className="text-center bg-muted rounded-2xl p-8 sm:p-12">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl italic mb-8">
              Cortexia incarne la créativité africaine augmentée par l'intelligence artificielle.
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Découvrez la puissance d'une génération nouvelle où l'imagination devient réalité.
            </p>
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href={cortexiaUrl} target="_blank" rel="noopener noreferrer">
                Découvrir Cortexia maintenant
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cortexia;