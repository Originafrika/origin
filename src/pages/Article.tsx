import { useParams } from "react-router-dom";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

const Article = () => {
  const { slug } = useParams();
  const { t } = useLanguage();
  
  // In a real app, this would come from an API or CMS
  const articles = {
    "pourquoi-afrique-doit-creer-ia": {
      title: "Pourquoi l'Afrique doit créer sa propre IA ?",
      date: "2025-11-01",
      author: "Équipe ORIGIN",
      description: "Réflexions sur l'importance de créer une IA véritablement africaine",
      keywords: "IA en Afrique, intelligence artificielle africaine, ORIGIN, développement IA locale",
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
    },
    "defis-accessibilite-ia-startups-africaines": {
      title: "Les défis de l'accessibilité à l'IA pour les startups africaines",
      date: "2025-10-25",
      author: "Équipe ORIGIN",
      description: "Identifier et surmonter les obstacles qui empêchent les startups africaines d'accéder à l'intelligence artificielle de pointe.",
      keywords: "IA en Afrique, startups africaines, accessibilité IA, ORIGIN",
      content: `
        <p>Les startups africaines représentent un levier essentiel pour l'innovation technologique du continent. Cependant, leur accès à l'intelligence artificielle de pointe reste limité par plusieurs facteurs.</p>
        
        <h2>Les principaux obstacles</h2>
        
        <p>Plusieurs barrières empêchent les startups africaines de tirer pleinement parti de l'IA :</p>
        
        <ul>
          <li><strong>Coût des infrastructures :</strong> Les ressources cloud nécessaires pour entraîner des modèles d'IA restent coûteuses pour les jeunes entreprises.</li>
          <li><strong>Manque de talents :</strong> Le fossé de compétences en IA continue de s'élargir, malgré les efforts de formation.</li>
          <li><strong>Données locales limitées :</strong> L'absence de jeux de données représentatifs du contexte africain complique le développement de solutions pertinentes.</li>
          <li><strong>Connectivité instable :</strong> Les problèmes de réseau dans certaines régions rendent difficile l'utilisation d'API cloud.</li>
        </ul>
        
        <h2>Les solutions d'ORIGIN</h2>
        
        <p>Notre laboratoire développe des approches spécifiquement conçues pour surmonter ces défis :</p>
        
        <ol>
          <li><strong>Plateformes optimisées :</strong> Cortexia et Code sont conçus pour fonctionner avec des ressources limitées.</li>
          <li><strong>Formation accessible :</strong> Nos programmes de formation sont adaptés aux réalités locales et dispensés dans plusieurs langues.</li>
          <li><strong>Données africaines :</strong> Nous construisons des jeux de données représentatifs du continent.</li>
          <li><strong>Solutions hybrides :</strong> Nos outils fonctionnent en mode déconnecté pour pallier les problèmes de connectivité.</li>
        </ol>
        
        <h2>Perspectives d'avenir</h2>
        
        <p>Avec les bonnes approches, les startups africaines peuvent devenir des leaders mondiaux de l'IA. ORIGIN s'engage à les accompagner dans cette transformation.</p>
      `
    },
    "origin-democratiser-sota-ia-afrique": {
      title: "Comment ORIGIN démocratise l'accès au SOTA en Afrique",
      date: "2025-10-18",
      author: "Équipe ORIGIN",
      description: "Découvrez comment notre laboratoire rend l'état de l'art en IA accessible aux innovateurs africains.",
      keywords: "ORIGIN, SOTA IA, démocratisation, Afrique, intelligence artificielle",
      content: `
        <p>L'état de l'art (SOTA) en intelligence artificielle semble souvent réservé aux grandes entreprises technologiques. ORIGIN œuvre pour changer cette réalité en Afrique.</p>
        
        <h2>Qu'est-ce que le SOTA ?</h2>
        
        <p>Le SOTA (State Of The Art) désigne les techniques, modèles et approches les plus avancés dans un domaine donné. En IA, cela inclut :</p>
        
        <ul>
          <li>Les dernières architectures de réseaux de neurones</li>
          <li>Les modèles d'apprentissage automatique les plus performants</li>
          <li>Les techniques d'optimisation de pointe</li>
          <li>Les méthodologies de recherche innovantes</li>
        </ul>
        
        <h2>Notre approche de démocratisation</h2>
        
        <p>ORIGIN utilise plusieurs stratégies pour rendre le SOTA accessible :</p>
        
        <ol>
          <li><strong>Adaptation locale :</strong> Nous adaptons les techniques SOTA aux réalités africaines plutôt que de les importer telles quelles.</li>
          <li><strong>Formation continue :</strong> Nos programmes éducatifs permettent aux talents locaux de maîtriser ces techniques.</li>
          <li><strong>Outils open-source :</strong> Nous publions nos outils et bibliothèques pour que tous puissent en bénéficier.</li>
          <li><strong>Collaboration :</strong> Nous travaillons avec les universités et centres de recherche africains.</li>
        </ol>
        
        <h2>Exemples concrets</h2>
        
        <p>Nos projets illustrent cette approche :</p>
        
        <ul>
          <li><strong>Cortexia :</strong> Une plateforme qui rend les techniques SOTA de génération d'images accessibles à tous les créateurs.</li>
          <li><strong>Code :</strong> Un environnement de développement qui intègre les dernières avancées en IA sans complexité.</li>
        </ul>
        
        <h2>Impact et résultats</h2>
        
        <p>Grâce à ces efforts, nous observons une montée en compétence significative dans la communauté africaine :</p>
        
        <ul>
          <li>Croissance de 40% des contributions africaines à des projets IA open-source</li>
          <li>Augmentation de 60% des publications de chercheurs africains dans des conférences IA de premier plan</li>
          <li>Création de 15 startups IA basées sur des technologies SOTA adaptées au contexte local</li>
        </ul>
      `
    },
    "decouverte-cortexia-ia-creative": {
      title: "Découverte de Cortexia : L'IA créative qui redéfinit l'art africain",
      date: "2025-11-10",
      author: "Équipe ORIGIN",
      description: "Plongez dans l'univers de Cortexia, la plateforme révolutionnaire qui fusionne intelligence artificielle et créativité artistique.",
      keywords: "Cortexia, IA créative, art généré par IA, ORIGIN, plateforme créative",
      content: `
        <p>Dans le paysage en constante évolution de l'intelligence artificielle, ORIGIN présente <strong>Cortexia</strong>, une plateforme révolutionnaire qui redéfinit les frontières entre technologie et créativité. Conçue spécifiquement pour les créateurs africains et au-delà, Cortexia ouvre de nouvelles perspectives dans la génération d'art par IA.</p>
        
        <h2>Qu'est-ce que Cortexia ?</h2>
        
        <p>Cortexia est bien plus qu'une simple plateforme de génération d'images. C'est un écosystème créatif complet qui combine intelligence artificielle, création visuelle et interaction sociale. Elle offre un espace où les utilisateurs peuvent non seulement générer des contenus visuels propulsés par l'IA, mais aussi les partager, les découvrir et interagir avec une communauté de créateurs dynamique.</p>
        
        <h2>Fonctionnalités clés</h2>
        
        <h3>Génération d'images IA intelligente</h3>
        <p>Cortexia comprend vos prompts et améliore automatiquement vos idées avec son moteur "Cortexia Intelligence (CI)", transformant des concepts simples en œuvres complexes et raffinées.</p>
        
        <h3>Fil social immersif</h3>
        <p>Inspiré par les plateformes sociales modernes, Cortexia propose un fil d'actualité où vous pouvez explorer une infinité de créations d'artistes IA, vous engager avec la communauté via likes, commentaires et remixes.</p>
        
        <h3>Système de crédits flexible</h3>
        <p>Accessible à tous, Cortexia propose un modèle gratuit avec 20-30 crédits mensuels, et une option payante pour une génération illimitée d'images et de vidéos.</p>
        
        <h3>Workflows de création avancés</h3>
        <p>Pour les créateurs ambitieux, Cortexia offre des outils de création étape par étape, permettant de combiner des images et d'obtenir des résultats dignes d'un studio professionnel.</p>
        
        <h3>Réseau social complet</h3>
        <p>Avec des profils créateurs, des challenges communautaires, et des options de monétisation, Cortexia permet aux artistes vérifiés de bâtir une audience et de tirer profit de leurs créations.</p>
        
        <h3>Sécurité et confidentialité</h3>
        <p>Vos données sont protégées, les conversations chiffrées, et l'authentification sécurisée via Supabase garantit un environnement de création sûr.</p>
        
        <h2>Expérience utilisateur optimale</h2>
        
        <p>Cortexia a été conçue avec l'utilisateur au cœur de toutes les décisions :</p>
        
        <ul>
          <li><strong>Conception mobile-first :</strong> Application PWA installable sur tous les appareils</li>
          <li><strong>Navigation gestuelle fluide :</strong> Interface intuitive et réactive</li>
          <li><strong>Interface claire optimisée :</strong> Design épuré qui met en valeur les créations</li>
          <li><strong>Performances élevées :</strong> Caching intelligent et temps de chargement ultra rapide</li>
        </ul>
        
        <h2>Valeur ajoutée par cible</h2>
        
        <p>Cortexia s'adapte à différents types d'utilisateurs :</p>
        
        <ul>
          <li><strong>Créateurs occasionnels :</strong> Créez des œuvres professionnelles sans effort</li>
          <li><strong>Artistes confirmés :</strong> Bâtissez une audience et monétisez vos créations</li>
          <li><strong>Communautés :</strong> Collaborez, partagez et remixer les créations IA</li>
          <li><strong>Entreprises :</strong> Produisez rapidement des visuels et concepts marketing</li>
        </ul>
        

        
        <h2>Conclusion : L'avenir de la création artistique</h2>
        
        <p>Cortexia incarne la créativité africaine augmentée par l'intelligence artificielle. Elle représente une génération nouvelle où l'imagination devient réalité, où les barrières techniques s'effondrent, et où chaque individu peut devenir un créateur d'œuvres extraordinaires.</p>
        
        <p>Découvrez Cortexia dès maintenant sur <a href="https://cortexia.originafrika.com" target="_blank" rel="noopener noreferrer">cortexia.originafrika.com</a> et rejoignez la révolution de l'art généré par IA.</p>
      `
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
    "description": article.description || "Article du blog ORIGIN sur l'intelligence artificielle en Afrique",
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
        description={article.description || "Articles et réflexions sur l'intelligence artificielle en Afrique"}
        keywords={article.keywords || "IA en Afrique, blog IA africaine, intelligence artificielle Afrique"}
        ogTitle={article.title}
        ogDescription={article.description || "Articles et réflexions sur l'intelligence artificielle en Afrique"}
        ogImage="https://lovable.dev/opengraph-image-p98pqg.png"
        ogUrl={`https://origin.africa/blog/${slug}`}
        ogType="article"
        twitterCard="summary_large_image"
        twitterTitle={article.title}
        twitterDescription={article.description || "Articles et réflexions sur l'intelligence artificielle en Afrique"}
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