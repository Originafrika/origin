import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import StorySection from "@/components/StorySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <main className="min-h-screen">
      <SEO 
        title="ORIGIN – Le Labo IA Africain Indépendant | Nous n’avons de limite que l’infini"
        description="Découvrez ORIGIN, le premier laboratoire d’intelligence artificielle indépendant en Afrique. Une révolution technologique au service de la souveraineté africaine."
        keywords="intelligence artificielle africaine, laboratoire IA Afrique, IA accessible en Afrique, ORIGIN labo IA indépendant, souveraineté technologique africaine, African AI lab, AI for Africa, accessible AI tools"
        ogTitle="ORIGIN – Le Labo IA Africain Indépendant | Nous n’avons de limite que l’infini"
        ogDescription="Découvrez ORIGIN, le premier laboratoire d’intelligence artificielle indépendant en Afrique. Une révolution technologique au service de la souveraineté africaine."
        ogImage="https://lovable.dev/opengraph-image-p98pqg.png"
        ogUrl="https://origin.africa"
        ogType="website"
        twitterCard="summary_large_image"
        twitterTitle="ORIGIN – The Independent African AI Lab | No Limit but Infinity"
        twitterDescription="Discover ORIGIN, Africa’s first independent AI laboratory. A technological revolution empowering African innovation and sovereignty."
        twitterImage="https://lovable.dev/opengraph-image-p98pqg.png"
        canonicalUrl="https://origin.africa"
      />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <StorySection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
