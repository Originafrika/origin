import { useState } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Blog = () => {
  const { t } = useLanguage();
  const [articles] = useState([
    {
      id: 1,
      title: t("blog.article1.title"),
      excerpt: t("blog.article1.excerpt"),
      date: "2025-11-10",
      author: t("blog.article.author.origin"),
      slug: "decouverte-cortexia-ia-creative"
    },
    {
      id: 2,
      title: t("blog.article2.title"),
      excerpt: t("blog.article2.excerpt"),
      date: "2025-11-01",
      author: t("blog.article.author.origin"),
      slug: "pourquoi-afrique-doit-creer-ia"
    },
    {
      id: 3,
      title: t("blog.article3.title"),
      excerpt: t("blog.article3.excerpt"),
      date: "2025-10-25",
      author: t("blog.article.author.origin"),
      slug: "defis-accessibilite-ia-startups-africaines"
    },
    {
      id: 4,
      title: t("blog.article4.title"),
      excerpt: t("blog.article4.excerpt"),
      date: "2025-10-18",
      author: t("blog.article.author.origin"),
      slug: "origin-democratiser-sota-ia-afrique"
    }
  ]);

  // Structured data for Article
  const articleSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": t("blog.title"),
    "url": "https://origin.africa/blog",
    "description": t("blog.subtitle")
  });

  return (
    <div className="min-h-screen">
      <SEO 
        title={t("blog.title")}
        description={t("blog.subtitle")}
        keywords="IA en Afrique, blog IA africaine, intelligence artificielle Afrique, SOTA IA, accessibilité IA, startups africaines"
        ogTitle={t("blog.title")}
        ogDescription={t("blog.subtitle")}
        ogImage="https://lovable.dev/opengraph-image-p98pqg.png"
        ogUrl="https://origin.africa/blog"
        ogType="website"
        twitterCard="summary_large_image"
        twitterTitle={t("blog.title")}
        twitterDescription={t("blog.subtitle")}
        twitterImage="https://lovable.dev/opengraph-image-p98pqg.png"
        canonicalUrl="https://origin.africa/blog"
        schema={articleSchema}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("blog.title")}</h1>
          <p className="text-xl text-muted-foreground mb-8">
            {t("blog.subtitle")}
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
                    {t("blog.subscribe")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">{t("blog.join")}</h2>
          <p className="text-muted-foreground mb-6">
            {t("blog.join.description")}
          </p>
          <Button size="lg">{t("blog.subscribe")}</Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;