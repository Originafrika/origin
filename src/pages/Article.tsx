import { useParams } from "react-router-dom";
import SEO from "@/components/SEO";

const Article = () => {
  const { slug } = useParams();
  
  // In a real app, this would come from an API or CMS
  const article = {
    title: "Pourquoi l'Afrique doit créer sa propre IA ?",
    date: "2025-11-01",
    author: "Équipe ORIGIN",
    content: `
      <p>L'Afrique représente le deuxième continent le plus peuplé de la planète, avec plus de 1,3 milliard d'habitants répartis sur 54 pays. Pourtant, le développement de l'intelligence artificielle sur le continent reste limité, malgré un potentiel immense.</p>
      
      <h2>Les défis uniques du continent africain</h2>
      
      <p>L'Afrique fait face à des défis spécifiques qui nécessitent des solutions d'IA adaptées :</p>
      
      <ul>
        <li>La diversité linguistique avec plus de 2000 langues parlées</li>
        <li>Des infrastructures technologiques hétérogènes</li>
        <li>Des réalités économiques et sociales variées</li>
        <li>Des problématiques agricoles et climatiques spécifiques</li>
      </ul>
      
      <h2>Pourquoi l'IA importée ne suffit pas ?</h2>
      
      <p>Les modèles d'IA développés dans d'autres régions du monde sont souvent inadaptés aux réalités africaines :</p>
      
      <blockquote>
        "L'IA doit être développée par les Africains, pour les Africains."
      </blockquote>
      
      <p>Les données utilisées pour entraîner ces modèles ne représentent pas la diversité africaine, ce qui entraîne des biais et des performances médiocres dans nos contextes locaux.</p>
      
      <h2>Le rôle d'ORIGIN</h2>
      
      <p>ORIGIN s'engage à créer une IA véritablement africaine en :</p>
      
      <ol>
        <li>Collectant des données représentatives du continent</li>
        <li>Développant des modèles adaptés aux langues et cultures locales</li>
        <li>Formant la prochaine génération d'experts IA africains</li>
        <li>Créant des solutions accessibles aux startups et PME africaines</li>
      </ol>
      
      <p>Notre mission est claire : rendre l'intelligence artificielle accessible à tous les visionnaires africains, afin de transformer notre continent en leader mondial de l'innovation technologique.</p>
    `
  };

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
    "description": "Réflexions sur l'importance de créer une IA véritablement africaine",
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
        description="Réflexions sur l'importance de créer une IA véritablement africaine"
        keywords="IA en Afrique, intelligence artificielle africaine, ORIGIN, développement IA locale"
        ogTitle={article.title}
        ogDescription="Réflexions sur l'importance de créer une IA véritablement africaine"
        ogImage="https://lovable.dev/opengraph-image-p98pqg.png"
        ogUrl={`https://origin.africa/blog/${slug}`}
        ogType="article"
        twitterCard="summary_large_image"
        twitterTitle={article.title}
        twitterDescription="Réflexions sur l'importance de créer une IA véritablement africaine"
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
              <span>Par {article.author}</span>
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