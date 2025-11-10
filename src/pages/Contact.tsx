import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  // Structured data for Contact page
  const organizationSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ORIGIN",
    "url": "https://origin.africa",
    "description": "Premier laboratoire d'intelligence artificielle indépendant en Afrique",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@origin.africa",
      "contactType": "customer support"
    },
    "sameAs": [
      "https://linkedin.com/company/origin",
      "https://twitter.com/ORIGIN",
      "https://github.com/origin"
    ]
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@origin.africa",
      description: "Pour toute demande de partenariat ou collaboration"
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: "Dakar, Sénégal",
      description: "Siège du laboratoire ORIGIN"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Contact ORIGIN — Laboratoire IA en Afrique"
        description="Contactez le laboratoire ORIGIN pour toute collaboration, projet ou partenariat autour de l'intelligence artificielle en Afrique."
        keywords="contact IA Afrique, partenariat IA, laboratoire africain IA, ORIGIN"
        ogTitle="Contact ORIGIN — Laboratoire IA en Afrique"
        ogDescription="Contactez le laboratoire ORIGIN pour toute collaboration, projet ou partenariat autour de l'intelligence artificielle en Afrique."
        ogImage="https://lovable.dev/opengraph-image-p98pqg.png"
        ogUrl="https://origin.africa/contact"
        ogType="website"
        twitterCard="summary_large_image"
        twitterTitle="Contact ORIGIN — Laboratoire IA en Afrique"
        twitterDescription="Contactez le laboratoire ORIGIN pour toute collaboration, projet ou partenariat autour de l'intelligence artificielle en Afrique."
        twitterImage="https://lovable.dev/opengraph-image-p98pqg.png"
        canonicalUrl="https://origin.africa/contact"
        schema={organizationSchema}
      />

      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Une question ? Une idée ? Une collaboration ? Parlez-nous de votre vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Envoyez-nous un message</CardTitle>
                <CardDescription>
                  Remplissez ce formulaire et notre équipe vous répondra dans les plus brefs délais.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nom complet
                      </label>
                      <Input id="name" placeholder="Votre nom" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="votre@email.com" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Sujet
                    </label>
                    <Input id="subject" placeholder="Sujet de votre message" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Décrivez votre projet, idée ou question..." 
                      rows={5}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Informations de contact</CardTitle>
                  <CardDescription>
                    Vous pouvez également nous contacter directement via les canaux ci-dessous.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-muted rounded-full p-3 mt-1">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{info.title}</h3>
                        <p className="font-medium">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Suivez-nous</CardTitle>
                  <CardDescription>
                    Restez informé de nos dernières actualités et projets.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="w-12 h-12 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="bg-muted rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl font-bold mb-4">Partenariats et Collaborations</h3>
                <p className="text-muted-foreground mb-6">
                  Vous représentez une institution, une startup ou une organisation intéressée par 
                  un partenariat avec ORIGIN ? Contactez notre équipe dédiée aux partenariats.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/partners">En savoir plus</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;