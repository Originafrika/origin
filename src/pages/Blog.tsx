import { useState } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [articles] = useState([
    {
      id: 1,
      title: "Découverte de Cortexia : L'IA créative qui redéfinit l'art africain",
      excerpt: "Plongez dans l'univers de Cortexia, la plateforme révolutionnaire qui fusionne intelligence artificielle et créativité artistique.",
      date: "2025-11-10",
      author: "Équipe ORIGIN",
      slug: "decouverte-cortexia-ia-creative"
    },
    {
      id: 2,
      title: "Pourquoi l'Afrique doit créer sa propre IA ?",
      excerpt: "L'Afrique a des défis uniques qui nécessitent des solutions d'IA adaptées à ses réalités locales.",
      date: "2025-11-01",
      author: "Équipe ORIGIN",
      slug: "pourquoi-afrique-doit-creer-ia"
    },
    {
      id: 3,
      title: "Les défis de l'accessibilité à l'IA pour les startups africaines",
      excerpt: "Identifier et surmonter les obstacles qui empêchent les startups africaines d'accéder à l'intelligence artificielle de pointe.",
      date: "2025-10-25",
      author: "Équipe ORIGIN",
      slug: "defis-accessibilite-ia-startups-africaines"
    },
    {
      id: 4,
      title: "Comment ORIGIN démocratise l'accès au SOTA en Afrique",
      excerpt: "Découvrez comment notre laboratoire rend l'état de l'art en IA accessible aux innovateurs africains.",
      date: "2025-10-18",
      author: "Équipe ORIGIN",
      slug: "origin-democratiser-sota-ia-afrique"
    }
  ]);

  // Structured data for Article
  const articleSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog ORIGIN - IA en Afrique",
    "url": "https://origin.africa/blog",
    "description": "Articles et réflexions sur l'intelligence artificielle en Afrique"
  });

  return (
    <div className="min-h-screen">
      <SEO 
        title="Blog - IA en Afrique"
        description="Articles et réflexions sur l'intelligence artificielle en Afrique. Découvrez pourquoi l'Afrique doit créer sa propre IA et comment ORIGIN démocratise l'accès au SOTA."
        keywords="IA en Afrique, blog IA africaine, intelligence artificielle Afrique, SOTA IA, accessibilité IA, startups africaines"
        ogTitle="Blog ORIGIN - IA en Afrique"
        ogDescription="Articles et réflexions sur l'intelligence artificielle en Afrique. Découvrez pourquoi l'Afrique doit créer sa propre IA."
        ogImage="https://lovable.dev/opengraph-image-p98pqg.png"
        ogUrl="https://origin.africa/blog"
        ogType="website"
        twitterCard="summary_large_image"
        twitterTitle="Blog ORIGIN - IA en Afrique"
        twitterDescription="Articles et réflexions sur l'intelligence artificielle en Afrique."
        twitterImage="https://lovable.dev/opengraph-image-p98pqg.png"
        canonicalUrl="https://origin.africa/blog"
        schema={articleSchema}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog ORIGIN</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Réflexions, analyses et perspectives sur l'intelligence artificielle en Afrique
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {articles.map((article) => (
            <Card key={article.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{article.title}</CardTitle>
                <CardDescription className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to={`/blog/${article.slug}`}>
                    Lire l'article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Rejoignez notre mouvement</h2>
          <p className="text-muted-foreground mb-6">
            Recevez nos derniers articles et analyses directement dans votre boîte mail.
          </p>
          <Button size="lg">S'abonner à la newsletter</Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;