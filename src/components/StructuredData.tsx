import { Helmet } from "react-helmet-async";

interface OrganizationData {
  name: string;
  url: string;
  description: string;
  sameAs?: string[];
  logo?: string;
}

interface WebsiteData {
  name: string;
  url: string;
  description: string;
}

interface ArticleData {
  headline: string;
  datePublished: string;
  author: string;
  description: string;
  image?: string;
}

interface StructuredDataProps {
  organization?: OrganizationData;
  website?: WebsiteData;
  article?: ArticleData;
}

const StructuredData = ({ organization, website, article }: StructuredDataProps) => {
  const structuredData = [];
  
  if (organization) {
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": organization.name,
      "url": organization.url,
      "description": organization.description,
      "sameAs": organization.sameAs || [],
      "logo": organization.logo
    });
  }
  
  if (website) {
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": website.name,
      "url": website.url,
      "description": website.description
    });
  }
  
  if (article) {
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.headline,
      "datePublished": article.datePublished,
      "author": {
        "@type": "Organization",
        "name": article.author
      },
      "description": article.description,
      "image": article.image,
      "publisher": {
        "@type": "Organization",
        "name": "ORIGIN",
        "logo": {
          "@type": "ImageObject",
          "url": "https://lovable.dev/opengraph-image-p98pqg.png"
        }
      }
    });
  }
  
  if (structuredData.length === 0) return null;
  
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;