import React, { createContext, useContext, useState, ReactNode } from "react";

interface LanguageContextType {
  language: "fr" | "en";
  setLanguage: (language: "fr" | "en") => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

// Translation dictionary
const translations = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.projects": "Projets",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.join": "Rejoindre la communauté",
    
    // Hero Section
    "hero.title": "ORIGIN – Le Labo IA Africain qui redéfinit les limites",
    "hero.subtitle": "Nous n'avons de limite que l'infini",
    "hero.description1": "L’Afrique n’attend plus. Elle crée.",
    "hero.description2": "Chez ORIGIN, nous sommes les architectes d’une révolution silencieuse : rendre l’intelligence artificielle accessible, puissante et profondément ancrée dans les réalités africaines.",
    "hero.cta.primary": "Découvrir nos Services",
    "hero.cta.secondary": "Rejoindre la Communauté",
    
    // Problem Section
    "problem.title": "L’intelligence artificielle, repensée pour l’Afrique",
    "problem.description1": "Nous croyons que l’IA n’a de sens que si elle parle nos langues, comprend nos besoins et résout nos défis.",
    "problem.description2": "Nous rendons les outils, API et modèles SOTA accessibles pour nos réalités locales, afin que chaque créateur africain puisse façonner sa propre vision du futur.",
    "problem.accessibility": "Accès limité aux outils IA avancés",
    "problem.mentorship": "Manque de mentorat et de ressources contextualisées",
    "problem.dependency": "Dépendance technologique aux solutions étrangères",
    "problem.transformation": "Difficulté à transformer les idées en projets concrets",
    "problem.transition": "ORIGIN n'est pas juste un labo : c'est le tremplin vers votre futur, votre liberté technologique, votre légende africaine.",
    
    // Solution Section (Values)
    "solution.title": "Nos valeurs",
    "solution.accessibility.title": "Accessibilité",
    "solution.accessibility.description": "Démocratiser l’accès aux technologies avancées.",
    "solution.independence.title": "Indépendance",
    "solution.independence.description": "Bâtir une souveraineté technologique africaine.",
    "solution.community.title": "Communauté",
    "solution.community.description": "Apprendre, créer et évoluer ensemble.",
    "solution.innovation.title": "Innovation",
    "solution.innovation.description": "Inspirer une nouvelle génération de bâtisseurs.",
    "solution.cta": "Accédez aux outils et rejoignez le mouvement",
    
    // Story Section
    "story.title": "Rejoignez le mouvement",
    "story.description1": "Nous ne sommes pas une simple entreprise.",
    "story.description2": "Nous sommes une renaissance.",
    "story.description3": "Une communauté de penseurs, de codeurs et de rêveurs décidés à changer le destin technologique de notre continent.",
    "story.description4": "Nous sommes ORIGIN. Et nous attendons que vous nous rejoigniez.",
    "story.cta": "Rejoindre la Communauté",
    
    // CTA Section
    "cta.title": "Votre aventure commence ici",
    "cta.subtitle": "Inscrivez-vous et devenez un Visionnaire ORIGIN",
    "cta.name": "Votre nom",
    "cta.email": "Votre email",
    "cta.submit": "Rejoindre la communauté",
    "cta.benefits": "En vous inscrivant, vous obtenez :",
    "cta.benefit1": "Accès anticipé aux outils ORIGIN",
    "cta.benefit2": "Invitation aux challenges et hackathons exclusifs",
    "cta.benefit3": "Badge exclusif \"Visionnaire ORIGIN\"",
    "cta.success.title": "Bienvenue parmi nous !",
    "cta.success.description": "Consultez votre boîte mail pour les prochaines étapes",
    "cta.error.title": "Erreur",
    "cta.error.description": "Veuillez remplir tous les champs",
    "cta.success.toast.title": "Bienvenue dans la communauté ORIGIN ! 🎉",
    "cta.success.toast.description": "Vous recevrez bientôt un email avec votre accès anticipé.",
    
    // Footer
    "footer.description": "Le premier laboratoire IA indépendant africain. Nous donnons aux visionnaires africains les outils pour innover sans limite.",
    "footer.product": "Produit",
    "footer.tools": "Outils IA",
    "footer.training": "Formation",
    "footer.community": "Communauté",
    "footer.projects": "Projets",
    "footer.resources": "Ressources",
    "footer.documentation": "Documentation",
    "footer.guides": "Guides",
    "footer.faq": "FAQ",
    "footer.company": "Entreprise",
    "footer.about": "À propos",
    "footer.careers": "Carrières",
    "footer.partners": "Partenaires",
    "footer.copyright": "© {year} ORIGIN. Tous droits réservés.",
    "footer.tagline": "Chez ORIGIN, l'innovation n'a pas de limite. Soyez acteur de l'histoire africaine de la tech.",
    
    // Projects Page
    "projects.title": "Nos Projets",
    "projects.description": "Nos projets incarnent notre vision : une Afrique créatrice, autonome et technologiquement souveraine.",
    "projects.intro": "Chaque projet d'ORIGIN est conçu pour répondre à un défi spécifique de l'écosystème technologique africain. Nous combinons expertise technique et compréhension profonde des réalités locales pour créer des solutions qui font la différence.",
    "projects.active": "Projets Actifs",
    "projects.cortexia.title": "Cortexia",
    "projects.cortexia.description": "L'IA créative qui redéfinit la manière dont les Africains imaginent et partagent le beau.",
    "projects.code.title": "Code",
    "projects.code.description": "Environnement simplifié pour développeurs africains avec outils d'IA intégrés.",
    "projects.upcoming": "Projets à Venir",
    "projects.cta": "Voir plus de projets",
    "projects.preview": "Aperçu du projet",
    
    // About Page
    "about.title": "À propos d'ORIGIN",
    "about.subtitle": "Le premier laboratoire d'intelligence artificielle indépendant en Afrique",
    "about.intro.quote": "Nous étions incompris. Puis nous avons décidé de créer notre propre voie.",
    "about.intro.text": "Cette flamme née de la solitude et de la vision panafricaine est le cœur d'ORIGIN. Nous croyons qu'il est temps pour l'Afrique de créer sa propre intelligence artificielle, adaptée à ses réalités et tournée vers son avenir.",
    "about.mission": "Notre Mission",
    "about.mission.text": "Rendre l'IA accessible aux réalités africaines.",
    "about.mission.description": "Nous développons des solutions d'intelligence artificielle conçues spécifiquement pour les défis et les opportunités du continent africain. Notre objectif est de démocratiser l'accès à l'IA de pointe pour les startups, les chercheurs et les institutions africaines.",
    "about.values": "Nos Valeurs",
    "about.values.audacity": "Audace",
    "about.values.audacity.description": "Nous défions les conventions pour créer des solutions révolutionnaires.",
    "about.values.innovation": "Innovation",
    "about.values.innovation.description": "Nous repoussons les limites de l'IA pour servir les réalités africaines.",
    "about.values.service": "Service",
    "about.values.service.description": "Nous mettons nos compétences au service de la communauté africaine.",
    "about.values.excellence": "Excellence",
    "about.values.excellence.description": "Nous aspirons à l'excellence dans chaque projet et chaque interaction.",
    "about.team": "Notre Équipe",
    "about.team.text": "ORIGIN est né de la rencontre de visionnaires africains passionnés par la technologie. Notre collectif rassemble des chercheurs, développeurs et innovateurs déterminés à faire de l'Afrique un leader mondial en intelligence artificielle.",
    "about.team.quote": "Chez ORIGIN, nous croyons que l'avenir de l'IA se construit en Afrique, par les Africains, pour l'Afrique.",
    "about.description": "Premier laboratoire d'intelligence artificielle indépendant en Afrique",
    
    // Blog Page
    "blog.title": "Blog ORIGIN",
    "blog.subtitle": "Réflexions, analyses et perspectives sur l'intelligence artificielle en Afrique",
    "blog.join": "Rejoignez notre mouvement",
    "blog.join.description": "Recevez nos derniers articles et analyses directement dans votre boîte mail.",
    "blog.subscribe": "S'abonner à la newsletter",
    
    // Contact Page
    "contact.title": "Contactez-nous",
    "contact.subtitle": "Une question ? Une idée ? Une collaboration ? Parlez-nous de votre vision.",
    "contact.form.title": "Envoyez-nous un message",
    "contact.form.description": "Remplissez ce formulaire et notre équipe vous répondra dans les plus brefs délais.",
    "contact.form.name": "Nom complet",
    "contact.form.email": "Email",
    "contact.form.subject": "Sujet",
    "contact.form.message": "Message",
    "contact.form.submit": "Envoyer le message",
    "contact.info.title": "Informations de contact",
    "contact.info.description": "Vous pouvez également nous contacter directement via les canaux ci-dessous.",
    "contact.email": "Email",
    "contact.email.value": "contact@origin.africa",
    "contact.email.description": "Pour toute demande de partenariat ou collaboration",
    "contact.address": "Adresse",
    "contact.address.value": "Dakar, Sénégal",
    "contact.address.description": "Siège du laboratoire ORIGIN",
    "contact.follow": "Suivez-nous",
    "contact.follow.description": "Restez informé de nos dernières actualités et projets.",
    "contact.partnerships": "Partenariats et Collaborations",
    "contact.partnerships.text": "Vous représentez une institution, une startup ou une organisation intéressée par un partenariat avec ORIGIN ? Contactez notre équipe dédiée aux partenariats.",
    "contact.partnerships.cta": "En savoir plus",
    "contact.form.name.placeholder": "Votre nom",
    "contact.form.email.placeholder": "votre@email.com",
    "contact.form.subject.placeholder": "Sujet de votre message",
    "contact.form.message.placeholder": "Décrivez votre projet, idée ou question...",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.join": "Join the Community",
    
    // Hero Section
    "hero.title": "ORIGIN – The African AI Lab Redefining the Limits",
    "hero.subtitle": "We Have No Limit But Infinity",
    "hero.description1": "Africa is no longer waiting. It's creating.",
    "hero.description2": "At ORIGIN, we are the architects of a silent revolution — making artificial intelligence accessible, powerful, and deeply rooted in African realities.",
    "hero.cta.primary": "Discover Our Services",
    "hero.cta.secondary": "Join the Community",
    
    // Problem Section
    "problem.title": "Artificial Intelligence, Reimagined for Africa",
    "problem.description1": "We believe AI only makes sense when it speaks our languages, understands our needs, and solves our challenges.",
    "problem.description2": "We make tools, APIs, and SOTA models accessible for our local realities, so every African creator can shape their own vision of the future.",
    "problem.accessibility": "Limited access to advanced AI tools",
    "problem.mentorship": "Lack of mentoring and contextualized resources",
    "problem.dependency": "Technological dependency on foreign solutions",
    "problem.transformation": "Difficulty transforming ideas into concrete projects",
    "problem.transition": "ORIGIN is not just a lab: it's the springboard to your future, your technological freedom, your African legend.",
    
    // Solution Section (Values)
    "solution.title": "Our Values",
    "solution.accessibility.title": "Accessibility",
    "solution.accessibility.description": "Democratizing access to advanced technologies.",
    "solution.independence.title": "Independence",
    "solution.independence.description": "Building African technological sovereignty.",
    "solution.community.title": "Community",
    "solution.community.description": "Learning, creating, and evolving together.",
    "solution.innovation.title": "Innovation",
    "solution.innovation.description": "Inspiring a new generation of builders.",
    "solution.cta": "Access tools and join the movement",
    
    // Story Section
    "story.title": "Join the Movement",
    "story.description1": "We're not just a company.",
    "story.description2": "We're a renaissance.",
    "story.description3": "A community of thinkers, coders, and dreamers committed to changing Africa's technological destiny.",
    "story.description4": "We are ORIGIN. And we're waiting for you to join us.",
    "story.cta": "Join the Community",
    
    // CTA Section
    "cta.title": "Your adventure starts here",
    "cta.subtitle": "Sign up and become an ORIGIN Visionary",
    "cta.name": "Your name",
    "cta.email": "Your email",
    "cta.submit": "Join the community",
    "cta.benefits": "By signing up, you get:",
    "cta.benefit1": "Early access to ORIGIN tools",
    "cta.benefit2": "Invitation to exclusive challenges and hackathons",
    "cta.benefit3": "Exclusive \"ORIGIN Visionary\" badge",
    "cta.success.title": "Welcome among us!",
    "cta.success.description": "Check your mailbox for the next steps",
    "cta.error.title": "Error",
    "cta.error.description": "Please fill in all fields",
    "cta.success.toast.title": "Welcome to the ORIGIN community! 🎉",
    "cta.success.toast.description": "You will soon receive an email with your early access.",
    
    // Footer
    "footer.description": "Africa's first independent AI laboratory. We give African visionaries the tools to innovate without limits.",
    "footer.product": "Product",
    "footer.tools": "AI Tools",
    "footer.training": "Training",
    "footer.community": "Community",
    "footer.projects": "Projects",
    "footer.resources": "Resources",
    "footer.documentation": "Documentation",
    "footer.guides": "Guides",
    "footer.faq": "FAQ",
    "footer.company": "Company",
    "footer.about": "About",
    "footer.careers": "Careers",
    "footer.partners": "Partners",
    "footer.copyright": "© {year} ORIGIN. All rights reserved.",
    "footer.tagline": "At ORIGIN, innovation has no limits. Be an actor in Africa's tech history.",
    
    // Projects Page
    "projects.title": "Our Projects",
    "projects.description": "Our projects embody our vision: a creative, autonomous, and technologically sovereign Africa.",
    "projects.intro": "Each ORIGIN project is designed to address a specific challenge in the African technology ecosystem. We combine technical expertise with a deep understanding of local realities to create solutions that make a difference.",
    "projects.active": "Active Projects",
    "projects.cortexia.title": "Cortexia",
    "projects.cortexia.description": "The AI that redefines how Africans imagine and share beauty.",
    "projects.code.title": "Code",
    "projects.code.description": "Simplified environment for African developers with integrated AI tools.",
    "projects.upcoming": "Upcoming Projects",
    "projects.cta": "See more projects",
    "projects.preview": "Project preview",
    
    // About Page
    "about.title": "About ORIGIN",
    "about.subtitle": "Africa's first independent artificial intelligence laboratory",
    "about.intro.quote": "We were misunderstood. Then we decided to create our own path.",
    "about.intro.text": "This flame born from solitude and pan-African vision is the heart of ORIGIN. We believe it's time for Africa to create its own artificial intelligence, adapted to its realities and oriented toward its future.",
    "about.mission": "Our Mission",
    "about.mission.text": "Making AI accessible to African realities.",
    "about.mission.description": "We develop artificial intelligence solutions specifically designed for the challenges and opportunities of the African continent. Our goal is to democratize access to cutting-edge AI for startups, researchers, and African institutions.",
    "about.values": "Our Values",
    "about.values.audacity": "Audacity",
    "about.values.audacity.description": "We challenge conventions to create revolutionary solutions.",
    "about.values.innovation": "Innovation",
    "about.values.innovation.description": "We push the boundaries of AI to serve African realities.",
    "about.values.service": "Service",
    "about.values.service.description": "We put our skills at the service of the African community.",
    "about.values.excellence": "Excellence",
    "about.values.excellence.description": "We strive for excellence in every project and interaction.",
    "about.team": "Our Team",
    "about.team.text": "ORIGIN was born from the meeting of African visionaries passionate about technology. Our collective brings together researchers, developers, and innovators determined to make Africa a global leader in artificial intelligence.",
    "about.team.quote": "At ORIGIN, we believe the future of AI is built in Africa, by Africans, for Africa.",
    "about.description": "Africa's first independent artificial intelligence laboratory",
    
    // Blog Page
    "blog.title": "ORIGIN Blog",
    "blog.subtitle": "Reflections, analyses, and perspectives on artificial intelligence in Africa",
    "blog.join": "Join our movement",
    "blog.join.description": "Receive our latest articles and analyses directly in your inbox.",
    "blog.subscribe": "Subscribe to the newsletter",
    
    // Contact Page
    "contact.title": "Contact Us",
    "contact.subtitle": "A question? An idea? A collaboration? Tell us about your vision.",
    "contact.form.title": "Send us a message",
    "contact.form.description": "Fill out this form and our team will get back to you as soon as possible.",
    "contact.form.name": "Full name",
    "contact.form.email": "Email",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.submit": "Send message",
    "contact.info.title": "Contact Information",
    "contact.info.description": "You can also contact us directly through the channels below.",
    "contact.email": "Email",
    "contact.email.value": "contact@origin.africa",
    "contact.email.description": "For partnership or collaboration requests",
    "contact.address": "Address",
    "contact.address.value": "Dakar, Senegal",
    "contact.address.description": "Laboratory headquarters",
    "contact.follow": "Follow us",
    "contact.follow.description": "Stay informed about our latest news and projects.",
    "contact.partnerships": "Partnerships and Collaborations",
    "contact.partnerships.text": "You represent an institution, startup, or organization interested in partnering with ORIGIN? Contact our dedicated partnerships team.",
    "contact.partnerships.cta": "Learn more",
    "contact.form.name.placeholder": "Your name",
    "contact.form.email.placeholder": "your@email.com",
    "contact.form.subject.placeholder": "Subject of your message",
    "contact.form.message.placeholder": "Describe your project, idea or question...",
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  
  const t = (key: string): string => {
    return translations[language][key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};