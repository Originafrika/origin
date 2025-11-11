import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Brain, Smartphone, Users, Shield, Wallet, Workflow } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Cortexia = () => {
  const { t } = useLanguage();
  
  // Structured data for Cortexia project
  const projectSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Cortexia",
    "description": t("projects.cortexia.description"),
    "url": "https://origin.africa/projects/cortexia",
    "creator": {
      "@type": "Organization",
      "name": "ORIGIN"
    }
  });

  const features = [
    {
      icon: Brain,
      title: t("cortexia.features.intelligent-ai.title"),
      description: t("cortexia.features.intelligent-ai.description")
    },
    {
      icon: Smartphone,
      title: t("cortexia.features.immersive-social.title"),
      description: t("cortexia.features.immersive-social.description")
    },
    {
      icon: Wallet,
      title: t("cortexia.features.flexible-credits.title"),
      description: t("cortexia.features.flexible-credits.description")
    },
    {
      icon: Workflow,
      title: t("cortexia.features.advanced-workflows.title"),
      description: t("cortexia.features.advanced-workflows.description")
    },
    {
      icon: Users,
      title: t("cortexia.features.complete-social.title"),
      description: t("cortexia.features.complete-social.description")
    },
    {
      icon: Shield,
      title: t("cortexia.features.security-privacy.title"),
      description: t("cortexia.features.security-privacy.description")
    }
  ];

  const uxFeatures = [
    t("cortexia.ux.mobile-first"),
    t("cortexia.ux.fluid-navigation"),
    t("cortexia.ux.clear-interface"),
    t("cortexia.ux.intelligent-caching"),
    t("cortexia.ux.fast-loading")
  ];

  const valuePropositions = [
    {
      target: t("cortexia.value-propositions.casual-creators.target"),
      value: t("cortexia.value-propositions.casual-creators.value")
    },
    {
      target: t("cortexia.value-propositions.established-artists.target"),
      value: t("cortexia.value-propositions.established-artists.value")
    },
    {
      target: t("cortexia.value-propositions.communities.target"),
      value: t("cortexia.value-propositions.communities.value")
    },
    {
      target: t("cortexia.value-propositions.businesses.target"),
      value: t("cortexia.value-propositions.businesses.value")
    }
  ];

  // Cortexia external link
  const cortexiaUrl = "https://cortexia.originafrika.com";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title={t("cortexia.seo.title")}
        description={t("cortexia.seo.description")}
        keywords={t("cortexia.seo.keywords")}
        ogTitle={t("cortexia.seo.og-title")}
        ogDescription={t("cortexia.seo.og-description")}
        ogImage="https://lovable.dev/opengraph-image-p98pqg.png"
        ogUrl="https://origin.africa/projects/cortexia"
        ogType="website"
        twitterCard="summary_large_image"
        twitterTitle={t("cortexia.seo.twitter-title")}
        twitterDescription={t("cortexia.seo.twitter-description")}
        twitterImage="https://lovable.dev/opengraph-image-p98pqg.png"
        canonicalUrl="https://origin.africa/projects/cortexia"
        schema={projectSchema}
      />

      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-foreground">{t("nav.home")}</Link>
            </li>
            <li className="text-muted-foreground">/</li>
            <li>
              <Link to="/projects" className="hover:text-foreground">{t("nav.projects")}</Link>
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
            {t("cortexia.hero.title")}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t("cortexia.hero.description")}
          </p>
          <Button size="lg" asChild>
            <a href={cortexiaUrl} target="_blank" rel="noopener noreferrer">
              {t("cortexia.hero.cta")}
            </a>
          </Button>
        </div>

        {/* Description Section */}
        <div className="bg-muted rounded-2xl p-6 sm:p-8 md:p-12 mb-16 sm:mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl mb-6">
              <strong>Cortexia</strong> {t("cortexia.description.line1")}
            </p>
            <p className="text-muted-foreground mb-6 text-lg">
              {t("cortexia.description.line2")}
            </p>
            <p className="text-muted-foreground text-lg">
              {t("cortexia.description.line3")}
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">{t("cortexia.features.title")}</h2>
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
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">{t("cortexia.ux.title")}</h2>
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
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">{t("cortexia.value-propositions.title")}</h2>
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
          <p className="text-muted-foreground mb-4">{t("cortexia.external-link.description")}</p>
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
              {t("cortexia.final-cta.quote")}
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              {t("cortexia.final-cta.description")}
            </p>
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href={cortexiaUrl} target="_blank" rel="noopener noreferrer">
                {t("cortexia.final-cta.cta")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cortexia;