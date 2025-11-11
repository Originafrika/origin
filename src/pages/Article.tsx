import { useParams } from "react-router-dom";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

const Article = () => {
  const { slug } = useParams();
  const { t } = useLanguage();
  
  // In a real app, this would come from an API or CMS
  const articles = {
    "pourquoi-afrique-doit-creer-ia": {
      title: t("article.why-africa-needs-ai.title"),
      date: "2025-11-01",
      author: t("blog.article.author.origin"),
      description: t("article.why-africa-needs-ai.description"),
      keywords: "IA en Afrique, intelligence artificielle africaine, ORIGIN, développement IA locale",
      content: t("article.why-africa-needs-ai.content")
    },
    "defis-accessibilite-ia-startups-africaines": {
      title: t("article.challenges-ai-accessibility.title"),
      date: "2025-10-25",
      author: t("blog.article.author.origin"),
      description: t("article.challenges-ai-accessibility.description"),
      keywords: "IA en Afrique, startups africaines, accessibilité IA, ORIGIN",
      content: t("article.challenges-ai-accessibility.content")
    },
    "origin-democratiser-sota-ia-afrique": {
      title: t("article.origin-democratizing-sota.title"),
      date: "2025-10-18",
      author: t("blog.article.author.origin"),
      description: t("article.origin-democratizing-sota.description"),
      keywords: "ORIGIN, SOTA IA, démocratisation, Afrique, intelligence artificielle",
      content: t("article.origin-democratizing-sota.content")
    },
    "decouverte-cortexia-ia-creative": {
      title: t("article.discovering-cortexia.title"),
      date: "2025-11-10",
      author: t("blog.article.author.origin"),
      description: t("article.discovering-cortexia.description"),
      keywords: "Cortexia, IA créative, art généré par IA, ORIGIN, plateforme créative",
      content: t("article.discovering-cortexia.content")
    }
  };
  
  const article = articles[slug] || articles["pourquoi-afrique-doit-creer-ia"];
  
  // Structured data for Article
  const articleSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "author": {
      "@type": "Organization",
      "name": "ORIGIN"
    },
    "datePublished": article.date,
    "description": article.description || t("article.default.description"),
    "publisher": {
      "@type": "Organization",
      "name": "ORIGIN",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lovable.dev/opengraph-image-p98pqg.png"
      }
    }
  });

  return (
    <div className="min-h-screen">
      <SEO 
        title={article.title}
        description={article.description || t("article.default.description")}
        keywords={article.keywords || t("article.default.keywords")}
        ogTitle={article.title}
        ogDescription={article.description || t("article.default.description")}
        ogImage="https://lovable.dev/opengraph-image-p98pqg.png"
        ogUrl={`https://origin.africa/blog/${slug}`}
        ogType="article"
        twitterCard="summary_large_image"
        twitterTitle={article.title}
        twitterDescription={article.description || t("article.default.description")}
        twitterImage="https://lovable.dev/opengraph-image-p98pqg.png"
        canonicalUrl={`https://origin.africa/blog/${slug}`}
        schema={articleSchema}
      />
      
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span>{article.date}</span>
              <span>•</span>
              <span>{t("article.by")} {article.author}</span>
            </div>
          </header>
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </div>
    </div>
  );
};

export default Article;