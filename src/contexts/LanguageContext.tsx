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
    "blog.article.author.origin": "Équipe ORIGIN",
    "blog.article1.title": "Découverte de Cortexia : L'IA créative qui redéfinit l'art africain",
    "blog.article1.excerpt": "Plongez dans l'univers de Cortexia, la plateforme révolutionnaire qui fusionne intelligence artificielle et créativité artistique.",
    "blog.article2.title": "Pourquoi l'Afrique doit créer sa propre IA ?",
    "blog.article2.excerpt": "L'Afrique a des défis uniques qui nécessitent des solutions d'IA adaptées à ses réalités locales.",
    "blog.article3.title": "Les défis de l'accessibilité à l'IA pour les startups africaines",
    "blog.article3.excerpt": "Identifier et surmonter les obstacles qui empêchent les startups africaines d'accéder à l'intelligence artificielle de pointe.",
    "blog.article4.title": "Comment ORIGIN démocratise l'accès au SOTA en Afrique",
    "blog.article4.excerpt": "Découvrez comment notre laboratoire rend l'état de l'art en IA accessible aux innovateurs africains.",
    
    // Article Page
    "article.by": "Par",
    "article.default.description": "Articles et réflexions sur l'intelligence artificielle en Afrique",
    "article.default.keywords": "IA en Afrique, blog IA africaine, intelligence artificielle Afrique",
    
    // Article: Why Africa Needs AI
    "article.why-africa-needs-ai.title": "Pourquoi l'Afrique doit créer sa propre IA ?",
    "article.why-africa-needs-ai.description": "Réflexions sur l'importance de créer une IA véritablement africaine",
    "article.why-africa-needs-ai.content": `
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
    `,
    
    // Article: Challenges of AI Accessibility
    "article.challenges-ai-accessibility.title": "Les défis de l'accessibilité à l'IA pour les startups africaines",
    "article.challenges-ai-accessibility.description": "Identifier et surmonter les obstacles qui empêchent les startups africaines d'accéder à l'intelligence artificielle de pointe.",
    "article.challenges-ai-accessibility.content": `
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
    `,
    
    // Article: ORIGIN Democratizing SOTA
    "article.origin-democratizing-sota.title": "Comment ORIGIN démocratise l'accès au SOTA en Afrique",
    "article.origin-democratizing-sota.description": "Découvrez comment notre laboratoire rend l'état de l'art en IA accessible aux innovateurs africains.",
    "article.origin-democratizing-sota.content": `
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
    `,
    
    // Article: Discovering Cortexia
    "article.discovering-cortexia.title": "Découverte de Cortexia : L'IA créative qui redéfinit l'art africain",
    "article.discovering-cortexia.description": "Plongez dans l'univers de Cortexia, la plateforme révolutionnaire qui fusionne intelligence artificielle et créativité artistique.",
    "article.discovering-cortexia.content": `
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
    `,
    
    // Cortexia Project Page
    "cortexia.seo.title": "Cortexia – Plateforme IA créative d’Afrique | ORIGIN",
    "cortexia.seo.description": "Découvrez Cortexia, la plateforme mobile-first africaine qui fusionne intelligence artificielle et créativité. Créez, partagez et découvrez l’art généré par IA.",
    "cortexia.seo.keywords": "Cortexia, IA créative, art généré par IA, IA en Afrique, ORIGIN, plateforme AI Afrique, intelligence artificielle pour créateurs, PWA AI Afrique",
    "cortexia.seo.og-title": "Cortexia – L’IA créative africaine",
    "cortexia.seo.og-description": "Cortexia est la première plateforme IA sociale africaine dédiée à la création artistique intelligente.",
    "cortexia.seo.twitter-title": "Cortexia – L’IA créative africaine",
    "cortexia.seo.twitter-description": "Cortexia est la première plateforme IA sociale africaine dédiée à la création artistique intelligente.",
    "cortexia.hero.title": "Cortexia : L'IA créative qui fusionne art et intelligence",
    "cortexia.hero.description": "La première plateforme mobile-first africaine qui permet de créer, partager et découvrir des œuvres générées par IA, dans une expérience sociale et communautaire unique.",
    "cortexia.hero.cta": "Explorer Cortexia",
    "cortexia.description.line1": "est une plateforme innovante qui combine intelligence artificielle, création visuelle et interaction sociale.",
    "cortexia.description.line2": "Elle offre un espace où les utilisateurs peuvent générer, partager et découvrir des contenus visuels propulsés par l'IA, tout en interagissant avec une communauté créative dynamique.",
    "cortexia.description.line3": "Pensée pour les créateurs africains et au-delà, Cortexia redéfinit la frontière entre art et technologie, en rendant la création accessible à tous, sans compétences techniques.",
    "cortexia.features.title": "Fonctionnalités principales",
    "cortexia.features.intelligent-ai.title": "Génération d'images IA intelligente",
    "cortexia.features.intelligent-ai.description": "Cortexia comprend votre prompt et améliore automatiquement vos idées avec son moteur \"Cortexia Intelligence (CI)\".",
    "cortexia.features.immersive-social.title": "Fil social immersif (style TikTok)",
    "cortexia.features.immersive-social.description": "Explorez une infinité de créations d'artistes IA, engagez-vous avec la communauté via likes, commentaires et remixes.",
    "cortexia.features.flexible-credits.title": "Système de crédits flexible",
    "cortexia.features.flexible-credits.description": "Gratuit : 20–30 crédits mensuels | Payant : génération illimitée d'images et de vidéos",
    "cortexia.features.advanced-workflows.title": "Workflows de création avancés",
    "cortexia.features.advanced-workflows.description": "Créez étape par étape, combinez des images et obtenez des résultats dignes d'un studio.",
    "cortexia.features.complete-social.title": "Réseau social complet",
    "cortexia.features.complete-social.description": "Profils créateurs, challenges, monétisation et commissions pour les artistes vérifiés.",
    "cortexia.features.security-privacy.title": "Sécurité et confidentialité",
    "cortexia.features.security-privacy.description": "Données protégées, conversations chiffrées, authentification Supabase.",
    "cortexia.ux.title": "Expérience utilisateur",
    "cortexia.ux.mobile-first": "Conception mobile-first (PWA installable)",
    "cortexia.ux.fluid-navigation": "Navigation gestuelle fluide",
    "cortexia.ux.clear-interface": "Interface claire optimisée",
    "cortexia.ux.intelligent-caching": "Caching intelligent et performances élevées",
    "cortexia.ux.fast-loading": "Temps de chargement ultra rapide",
    "cortexia.value-propositions.title": "Valeur ajoutée par cible",
    "cortexia.value-propositions.casual-creators.target": "Créateurs occasionnels",
    "cortexia.value-propositions.casual-creators.value": "Créez des œuvres professionnelles sans effort",
    "cortexia.value-propositions.established-artists.target": "Artistes confirmés",
    "cortexia.value-propositions.established-artists.value": "Bâtissez une audience et monétisez vos créations",
    "cortexia.value-propositions.communities.target": "Communautés",
    "cortexia.value-propositions.communities.value": "Collaborez, partagez et remixer les créations IA",
    "cortexia.value-propositions.businesses.target": "Entreprises",
    "cortexia.value-propositions.businesses.value": "Produisez rapidement des visuels et concepts marketing",
    "cortexia.external-link.description": "Découvrez Cortexia en ligne",
    "cortexia.final-cta.quote": "Cortexia incarne la créativité africaine augmentée par l'intelligence artificielle.",
    "cortexia.final-cta.description": "Découvrez la puissance d'une génération nouvelle où l'imagination devient réalité.",
    "cortexia.final-cta.cta": "Découvrir Cortexia maintenant"
,
    
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
    "blog.article.author.origin": "ORIGIN Team",
    "blog.article1.title": "Discovering Cortexia: The Creative AI Redefining African Art",
    "blog.article1.excerpt": "Dive into the world of Cortexia, the revolutionary platform that fuses artificial intelligence and artistic creativity.",
    "blog.article2.title": "Why Africa Must Create Its Own AI?",
    "blog.article2.excerpt": "Africa has unique challenges that require AI solutions adapted to its local realities.",
    "blog.article3.title": "The Challenges of AI Accessibility for African Startups",
    "blog.article3.excerpt": "Identifying and overcoming obstacles preventing African startups from accessing cutting-edge artificial intelligence.",
    "blog.article4.title": "How ORIGIN Democratizes Access to SOTA in Africa",
    "blog.article4.excerpt": "Discover how our laboratory makes state-of-the-art AI accessible to African innovators.",
    
    // Article Page
    "article.by": "By",
    "article.default.description": "Articles and reflections on artificial intelligence in Africa",
    "article.default.keywords": "AI in Africa, African AI blog, artificial intelligence Africa",
    
    // Article: Why Africa Needs AI
    "article.why-africa-needs-ai.title": "Why Africa Must Create Its Own AI?",
    "article.why-africa-needs-ai.description": "Reflections on the importance of creating truly African AI",
    "article.why-africa-needs-ai.content": `
      <p>Africa represents the second most populous continent on the planet, with over 1.3 billion inhabitants spread across 54 countries. Yet, the development of artificial intelligence on the continent remains limited, despite immense potential.</p>
      
      <h2>The unique challenges of the African continent</h2>
      
      <p>Africa faces specific challenges that require AI solutions adapted to them:</p>
      
      <ul>
        <li>Linguistic diversity with over 2000 languages spoken</li>
        <li>Heterogeneous technological infrastructures</li>
        <li>Varied economic and social realities</li>
        <li>Specific agricultural and climatic issues</li>
      </ul>
      
      <h2>Why imported AI is not enough?</h2>
      
      <p>AI models developed in other regions of the world are often unsuitable for African realities:</p>
      
      <blockquote>
        "AI must be developed by Africans, for Africans."
      </blockquote>
      
      <p>The data used to train these models does not represent African diversity, leading to biases and poor performance in our local contexts.</p>
      
      <h2>ORIGIN's role</h2>
      
      <p>ORIGIN is committed to creating truly African AI by:</p>
      
      <ol>
        <li>Collecting data representative of the continent</li>
        <li>Developing models adapted to local languages and cultures</li>
        <li>Training the next generation of African AI experts</li>
        <li>Creating solutions accessible to African startups and SMEs</li>
      </ol>
      
      <p>Our mission is clear: to make artificial intelligence accessible to all African visionaries, transforming our continent into a global leader in technological innovation.</p>
    `,
    
    // Article: Challenges of AI Accessibility
    "article.challenges-ai-accessibility.title": "The Challenges of AI Accessibility for African Startups",
    "article.challenges-ai-accessibility.description": "Identifying and overcoming obstacles preventing African startups from accessing cutting-edge artificial intelligence.",
    "article.challenges-ai-accessibility.content": `
      <p>African startups represent an essential lever for the continent's technological innovation. However, their access to cutting-edge artificial intelligence remains limited by several factors.</p>
      
      <h2>The main obstacles</h2>
      
      <p>Several barriers prevent African startups from fully leveraging AI:</p>
      
      <ul>
        <li><strong>Infrastructure costs:</strong> Cloud resources needed to train AI models remain expensive for young companies.</li>
        <li><strong>Lack of talent:</strong> The AI skills gap continues to widen, despite training efforts.</li>
        <li><strong>Limited local data:</strong> The absence of datasets representative of the African context complicates the development of relevant solutions.</li>
        <li><strong>Unstable connectivity:</strong> Network issues in certain regions make it difficult to use cloud APIs.</li>
      </ul>
      
      <h2>ORIGIN's solutions</h2>
      
      <p>Our laboratory develops approaches specifically designed to overcome these challenges:</p>
      
      <ol>
        <li><strong>Optimized platforms:</strong> Cortexia and Code are designed to work with limited resources.</li>
        <li><strong>Accessible training:</strong> Our training programs are adapted to local realities and delivered in multiple languages.</li>
        <li><strong>African data:</strong> We build datasets representative of the continent.</li>
        <li><strong>Hybrid solutions:</strong> Our tools work offline to overcome connectivity issues.</li>
      </ol>
      
      <h2>Future prospects</h2>
      
      <p>With the right approaches, African startups can become global leaders in AI. ORIGIN is committed to supporting them in this transformation.</p>
    `,
    
    // Article: ORIGIN Democratizing SOTA
    "article.origin-democratizing-sota.title": "How ORIGIN Democratizes Access to SOTA in Africa",
    "article.origin-democratizing-sota.description": "Discover how our laboratory makes state-of-the-art AI accessible to African innovators.",
    "article.origin-democratizing-sota.content": `
      <p>State-of-the-art (SOTA) in artificial intelligence often seems reserved for major technology companies. ORIGIN works to change this reality in Africa.</p>
      
      <h2>What is SOTA?</h2>
      
      <p>SOTA (State Of The Art) refers to the most advanced techniques, models, and approaches in a given field. In AI, this includes:</p>
      
      <ul>
        <li>The latest neural network architectures</li>
        <li>The most performant machine learning models</li>
        <li>Cutting-edge optimization techniques</li>
        <li>Innovative research methodologies</li>
      </ul>
      
      <h2>Our democratization approach</h2>
      
      <p>ORIGIN uses several strategies to make SOTA accessible:</p>
      
      <ol>
        <li><strong>Local adaptation:</strong> We adapt SOTA techniques to African realities rather than importing them as-is.</li>
        <li><strong>Continuous training:</strong> Our educational programs enable local talent to master these techniques.</li>
        <li><strong>Open-source tools:</strong> We publish our tools and libraries for everyone to benefit from.</li>
        <li><strong>Collaboration:</strong> We work with African universities and research centers.</li>
      </ol>
      
      <h2>Concrete examples</h2>
      
      <p>Our projects illustrate this approach:</p>
      
      <ul>
        <li><strong>Cortexia:</strong> A platform that makes SOTA image generation techniques accessible to all creators.</li>
        <li><strong>Code:</strong> A development environment that integrates the latest AI advances without complexity.</li>
      </ul>
      
      <h2>Impact and results</h2>
      
      <p>Thanks to these efforts, we observe significant skill development in the African community:</p>
      
      <ul>
        <li>40% growth in African contributions to open-source AI projects</li>
        <li>60% increase in publications by African researchers in top-tier AI conferences</li>
        <li>Creation of 15 AI startups based on SOTA technologies adapted to the local context</li>
      </ul>
    `,
    
    // Article: Discovering Cortexia
    "article.discovering-cortexia.title": "Discovering Cortexia: The Creative AI Redefining African Art",
    "article.discovering-cortexia.description": "Dive into the world of Cortexia, the revolutionary platform that fuses artificial intelligence and artistic creativity.",
    "article.discovering-cortexia.content": `
      <p>In the constantly evolving landscape of artificial intelligence, ORIGIN presents <strong>Cortexia</strong>, a revolutionary platform that redefines the boundaries between technology and creativity. Designed specifically for African creators and beyond, Cortexia opens new perspectives in AI-generated art.</p>
      
      <h2>What is Cortexia?</h2>
      
      <p>Cortexia is far more than a simple image generation platform. It's a complete creative ecosystem that combines artificial intelligence, visual creation, and social interaction. It offers a space where users can not only generate AI-powered visual content, but also share, discover, and interact with a dynamic creator community.</p>
      
      <h2>Key features</h2>
      
      <h3>Intelligent AI image generation</h3>
      <p>Cortexia understands your prompts and automatically enhances your ideas with its "Cortexia Intelligence (CI)" engine, transforming simple concepts into complex and refined works.</p>
      
      <h3>Immersive social feed</h3>
      <p>Inspired by modern social platforms, Cortexia offers a news feed where you can explore an infinite array of AI artist creations, engage with the community through likes, comments, and remixes.</p>
      
      <h3>Flexible credit system</h3>
      <p>Accessible to all, Cortexia offers a free model with 20-30 monthly credits, and a paid option for unlimited image and video generation.</p>
      
      <h3>Advanced creation workflows</h3>
      <p>For ambitious creators, Cortexia offers step-by-step creation tools, allowing you to combine images and achieve studio-quality results.</p>
      
      <h3>Complete social network</h3>
      <p>With creator profiles, community challenges, and monetization options, Cortexia enables verified artists to build an audience and profit from their creations.</p>
      
      <h3>Security and privacy</h3>
      <p>Your data is protected, conversations are encrypted, and secure authentication via Supabase guarantees a safe creative environment.</p>
      
      <h2>Optimal user experience</h2>
      
      <p>Cortexia was designed with the user at the heart of all decisions:</p>
      
      <ul>
        <li><strong>Mobile-first design:</strong> Installable PWA application on all devices</li>
        <li><strong>Fluid gesture navigation:</strong> Intuitive and responsive interface</li>
        <li><strong>Optimized clear interface:</strong> Clean design that highlights creations</li>
        <li><strong>High performance:</strong> Intelligent caching and ultra-fast loading times</li>
      </ul>
      
      <h2>Added value by target</h2>
      
      <p>Cortexia adapts to different types of users:</p>
      
      <ul>
        <li><strong>Casual creators:</strong> Create professional works effortlessly</li>
        <li><strong>Established artists:</strong> Build an audience and monetize your creations</li>
        <li><strong>Communities:</strong> Collaborate, share, and remix AI creations</li>
        <li><strong>Businesses:</strong> Quickly produce marketing visuals and concepts</li>
      </ul>
      
      <h2>Conclusion: The future of artistic creation</h2>
      
      <p>Cortexia embodies African creativity augmented by artificial intelligence. It represents a new generation where imagination becomes reality, where technical barriers collapse, and where every individual can become a creator of extraordinary works.</p>
      
      <p>Discover Cortexia now at <a href="https://cortexia.originafrika.com" target="_blank" rel="noopener noreferrer">cortexia.originafrika.com</a> and join the AI-generated art revolution.</p>
    `,
    
    // Cortexia Project Page
    "cortexia.seo.title": "Cortexia – Africa's Creative AI Platform | ORIGIN",
    "cortexia.seo.description": "Discover Cortexia, Africa's mobile-first platform that fuses artificial intelligence and creativity. Create, share, and discover AI-generated art.",
    "cortexia.seo.keywords": "Cortexia, Creative AI, AI-generated art, AI in Africa, ORIGIN, African AI platform, artificial intelligence for creators, AI PWA Africa",
    "cortexia.seo.og-title": "Cortexia – Africa's Creative AI",
    "cortexia.seo.og-description": "Cortexia is Africa's first social AI platform dedicated to intelligent artistic creation.",
    "cortexia.seo.twitter-title": "Cortexia – Africa's Creative AI",
    "cortexia.seo.twitter-description": "Cortexia is Africa's first social AI platform dedicated to intelligent artistic creation.",
    "cortexia.hero.title": "Cortexia: The AI that fuses art and intelligence",
    "cortexia.hero.description": "Africa's first mobile-first platform that enables creating, sharing, and discovering AI-generated works in a unique social and community experience.",
    "cortexia.hero.cta": "Explore Cortexia",
    "cortexia.description.line1": "is an innovative platform that combines artificial intelligence, visual creation, and social interaction.",
    "cortexia.description.line2": "It offers a space where users can generate, share, and discover AI-powered visual content while interacting with a dynamic creative community.",
    "cortexia.description.line3": "Designed for African creators and beyond, Cortexia redefines the boundary between art and technology, making creation accessible to everyone without technical skills.",
    "cortexia.features.title": "Key Features",
    "cortexia.features.intelligent-ai.title": "Intelligent AI Image Generation",
    "cortexia.features.intelligent-ai.description": "Cortexia understands your prompt and automatically enhances your ideas with its \"Cortexia Intelligence (CI)\" engine.",
    "cortexia.features.immersive-social.title": "Immersive Social Feed (TikTok-style)",
    "cortexia.features.immersive-social.description": "Explore an infinite array of AI artist creations, engage with the community through likes, comments, and remixes.",
    "cortexia.features.flexible-credits.title": "Flexible Credit System",
    "cortexia.features.flexible-credits.description": "Free: 20-30 monthly credits | Paid: unlimited image and video generation",
    "cortexia.features.advanced-workflows.title": "Advanced Creation Workflows",
    "cortexia.features.advanced-workflows.description": "Create step-by-step, combine images, and achieve studio-quality results.",
    "cortexia.features.complete-social.title": "Complete Social Network",
    "cortexia.features.complete-social.description": "Creator profiles, challenges, monetization, and commissions for verified artists.",
    "cortexia.features.security-privacy.title": "Security and Privacy",
    "cortexia.features.security-privacy.description": "Protected data, encrypted conversations, secure Supabase authentication.",
    "cortexia.ux.title": "User Experience",
    "cortexia.ux.mobile-first": "Mobile-first design (installable PWA)",
    "cortexia.ux.fluid-navigation": "Fluid gesture navigation",
    "cortexia.ux.clear-interface": "Optimized clear interface",
    "cortexia.ux.intelligent-caching": "Intelligent caching and high performance",
    "cortexia.ux.fast-loading": "Ultra-fast loading times",
    "cortexia.value-propositions.title": "Added Value by Target",
    "cortexia.value-propositions.casual-creators.target": "Casual Creators",
    "cortexia.value-propositions.casual-creators.value": "Create professional works effortlessly",
    "cortexia.value-propositions.established-artists.target": "Established Artists",
    "cortexia.value-propositions.established-artists.value": "Build an audience and monetize your creations",
    "cortexia.value-propositions.communities.target": "Communities",
    "cortexia.value-propositions.communities.value": "Collaborate, share, and remix AI creations",
    "cortexia.value-propositions.businesses.target": "Businesses",
    "cortexia.value-propositions.businesses.value": "Quickly produce marketing visuals and concepts",
    "cortexia.external-link.description": "Discover Cortexia online",
    "cortexia.final-cta.quote": "Cortexia embodies African creativity augmented by artificial intelligence.",
    "cortexia.final-cta.description": "Discover the power of a new generation where imagination becomes reality.",
    "cortexia.final-cta.cta": "Discover Cortexia Now"
,
    
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