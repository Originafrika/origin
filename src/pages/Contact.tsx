import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Github, Instagram, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  // Structured data for Contact page
  const organizationSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ORIGIN",
    "url": "https://originafrika.com",
    "description": t("about.description"),
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@originafrika.com",
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
      title: "email",
      value: "contact@originafrika.com",
      description: t("contact.email.description")
    },
    {
      icon: MapPin,
      title: "address",
      value: "Lomé, Togo",
      description: t("contact.address.description")
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/19je91pEAi/?mibextid=wwXIfr", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/Origin__Afrika", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/Origin__Afrika", label: "X" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/origin-afrika?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", label: "LinkedIn" }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title={t("contact.title")}
        description={t("contact.subtitle")}
        keywords="contact IA Afrique, partenariat IA, laboratoire africain IA, ORIGIN"
        ogTitle={t("contact.title")}
        ogDescription={t("contact.subtitle")}
        ogImage="https://lovable.dev/opengraph-image-p98pqg.png"
        ogUrl="https://origin.africa/contact"
        ogType="website"
        twitterCard="summary_large_image"
        twitterTitle={t("contact.title")}
        twitterDescription={t("contact.subtitle")}
        twitterImage="https://lovable.dev/opengraph-image-p98pqg.png"
        canonicalUrl="https://origin.africa/contact"
        schema={organizationSchema}
      />

      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{t("contact.title")}</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t("contact.form.title")}</CardTitle>
                <CardDescription>
                  {t("contact.form.description")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        {t("contact.form.name")}
                      </label>
                      <Input id="name" placeholder={t("contact.form.name.placeholder")} />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        {t("contact.form.email")}
                      </label>
                      <Input id="email" type="email" placeholder={t("contact.form.email.placeholder")} />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      {t("contact.form.subject")}
                    </label>
                    <Input id="subject" placeholder={t("contact.form.subject.placeholder")} />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {t("contact.form.message")}
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder={t("contact.form.message.placeholder")} 
                      rows={5}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    {t("contact.form.submit")}
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
                  <CardTitle className="text-2xl">{t("contact.info.title")}</CardTitle>
                  <CardDescription>
                    {t("contact.info.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-muted rounded-full p-3 mt-1">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{t(`contact.${info.title}`)}</h3>
                        <p className="font-medium">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{t(`contact.${info.title}.description`)}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{t("contact.follow")}</CardTitle>
                  <CardDescription>
                    {t("contact.follow.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
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
                <h3 className="text-xl font-bold mb-4">{t("contact.partnerships")}</h3>
                <p className="text-muted-foreground mb-6">
                  {t("contact.partnerships.text")}
                </p>
                <Button variant="outline" asChild>
                  <Link to="/partners">{t("contact.partnerships.cta")}</Link>
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