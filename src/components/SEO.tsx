import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  schema?: string;
}

const SEO = ({
  title = "ORIGIN - Le Laboratoire IA Panafricain de Référence",
  description = "ORIGIN, le premier laboratoire IA indépendant africain. Rejoignez le mouvement qui transforme l'Afrique en leader mondial de l'innovation technologique.",
  keywords = "IA en Afrique, laboratoire IA africain, accessibilité IA, technologie africaine, AI Africa, AI startup Afrique, SOTA IA, innovation africaine",
  ogTitle,
  ogDescription,
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  ogUrl = "https://origin.africa",
  ogType = "website",
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage,
  canonicalUrl,
  schema,
}: SEOProps) => {
  const defaultTitle = "ORIGIN - Le Laboratoire IA Panafricain de Référence";
  const defaultDescription = "ORIGIN, le premier laboratoire IA indépendant africain. Rejoignez le mouvement qui transforme l'Afrique en leader mondial de l'innovation technologique.";
  
  const finalTitle = title ? `${title} | ORIGIN` : defaultTitle;
  const finalDescription = description || defaultDescription;
  
  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="ORIGIN" />
      
      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title || defaultTitle} />
      <meta property="og:description" content={ogDescription || description || defaultDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content={ogType} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle || title || defaultTitle} />
      <meta name="twitter:description" content={twitterDescription || description || defaultDescription} />
      <meta name="twitter:image" content={twitterImage || ogImage} />
      <meta name="twitter:site" content="@ORIGIN" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Structured Data */}
      {schema && <script type="application/ld+json">{schema}</script>}
    </Helmet>
  );
};

export default SEO;