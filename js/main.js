// Animéa - Language Switching & Interactions

// Language Content
const content = {
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Prestations',
      team: 'Animaux & Équipe',
      contact: 'Contact'
    },
    home: {
      heroTitle: 'La médiation animale au service du lien, du calme et du mieux-être',
      heroSubtitle: 'Intervenante en médiation animale. Accompagnement des personnes à travers la relation avec l’animal, au service du lien social, du bien-être humain et animal.',
      heroCta: 'Nous contacter',
      aboutTitle: 'Qu’est-ce que la médiation animale?',
      aboutText: 'Animéa propose un accompagnement professionnel à travers la relation avec l’animal, dans le respect de la personne, du rythme de chacun et du bien-être animal. Chevaux, chiens et petits animaux deviennent des partenaires de rencontre, d’apaisement et de confiance dans un cadre structuré et bienveillant.',
      servicesTitle: 'Nos Prestations',
      servicesSubtitle: 'Accompagnement adapté à vos besoins'
    },
    services: {
      pageTitle: 'Nos Prestations',
      pageSubtitle: 'Accompagnement adapté pour enfants, adultes, seniors et institutions',
      individual: {
        title: 'Séances Individuelles',
        description: 'Accompagnement personnalisé dans un cadre bienveillant. Les séances individuelles permettent un travail ciblé sur les besoins spécifiques de chaque personne, qu’il s’agisse de développer la confiance en soi, de favoriser l’apaisement émotionnel ou de renforcer les compétences sociales.'
      },
      group: {
        title: 'Séances en Groupe',
        description: 'Rencontres collectives favorisant le lien social et l’entraide. Les activités de groupe permettent de travailler la coopération, la communication et le respect mutuel dans un environnement sécurisant et ludique.'
      },
      institutional: {
        title: 'Interventions en Institutions',
        description: 'Programmes adaptés pour écoles, EMS, centres spécialisés et autres institutions. Nous développons des projets sur mesure en collaboration avec les équipes professionnelles pour répondre aux objectifs spécifiques de chaque structure.'
      },
      howTitle: 'Comment se déroule une séance?',
      howText: 'Chaque séance est adaptée aux besoins et au rythme de la personne accompagnée. Après un premier entretien pour définir les objectifs, les rencontres se déroulent dans le respect du bien-être animal et humain. Les activités peuvent inclure le soin aux animaux, des exercices d’observation, de la relaxation ou des jeux interactifs.'
    },
    team: {
      pageTitle: 'Animaux & Équipe',
      pageSubtitle: 'Découvrez nos partenaires animaux et notre équipe',
      leaTitle: 'Léa Furet',
      leaRole: 'Intervenante en médiation animale',
      leaDescription: 'Passionnée par le lien entre l’humain et l’animal, Léa accompagne avec bienveillance et professionnalisme les personnes de tous âges. Formée à la médiation animale, elle développe des interventions adaptées en collaboration étroite avec ses partenaires animaux.',
      animalsTitle: 'Nos Animaux Partenaires'
    },
    contact: {
      pageTitle: 'Nous Contacter',
      pageSubtitle: 'Une question? Un projet? N’hésitez pas à nous écrire',
      phone: 'Téléphone',
      email: 'Email',
      location: 'Localisation',
      instagram: 'Instagram',
      formTitle: 'Envoyez-nous un message',
      formName: 'Nom complet',
      formEmail: 'Email',
      formPhone: 'Téléphone',
      formMessage: 'Message',
      formSubmit: 'Envoyer'
    },
    footer: {
      rights: 'Tous droits réservés',
      instagram: 'Suivez-nous sur Instagram'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      team: 'Animals & Team',
      contact: 'Contact'
    },
    home: {
      heroTitle: 'Animal mediation for connection, calm and wellbeing',
      heroSubtitle: 'Animal mediation practitioner. Supporting people through the human-animal relationship to foster social connection and both human and animal wellbeing.',
      heroCta: 'Contact Us',
      aboutTitle: 'What is Animal Mediation?',
      aboutText: 'Animéa offers professional support through the relationship with animals, respecting each person’s rhythm and ensuring animal welfare. Horses, dogs and small animals become partners in connection, calming and trust within a structured and caring environment.',
      servicesTitle: 'Our Services',
      servicesSubtitle: 'Support adapted to your needs'
    },
    services: {
      pageTitle: 'Our Services',
      pageSubtitle: 'Adapted support for children, adults, seniors and institutions',
      individual: {
        title: 'Individual Sessions',
        description: 'Personalized support in a caring environment. Individual sessions allow targeted work on each person’s specific needs, whether developing self-confidence, promoting emotional regulation or strengthening social skills.'
      },
      group: {
        title: 'Group Sessions',
        description: 'Collective encounters fostering social connection and mutual support. Group activities allow work on cooperation, communication and mutual respect in a safe and playful environment.'
      },
      institutional: {
        title: 'Institutional Programs',
        description: 'Adapted programs for schools, care homes, specialized centers and other institutions. We develop customized projects in collaboration with professional teams to meet each structure’s specific objectives.'
      },
      howTitle: 'How does a session work?',
      howText: 'Each session is adapted to the needs and rhythm of the person being supported. After an initial meeting to define objectives, sessions unfold with respect for animal and human wellbeing. Activities may include animal care, observation exercises, relaxation or interactive games.'
    },
    team: {
      pageTitle: 'Animals & Team',
      pageSubtitle: 'Meet our animal partners and our team',
      leaTitle: 'Léa Furet',
      leaRole: 'Animal Mediation Practitioner',
      leaDescription: 'Passionate about the connection between humans and animals, Léa supports people of all ages with care and professionalism. Trained in animal mediation, she develops adapted interventions in close collaboration with her animal partners.',
      animalsTitle: 'Our Animal Partners'
    },
    contact: {
      pageTitle: 'Contact Us',
      pageSubtitle: 'A question? A project? Feel free to write to us',
      phone: 'Phone',
      email: 'Email',
      location: 'Location',
      instagram: 'Instagram',
      formTitle: 'Send us a message',
      formName: 'Full name',
      formEmail: 'Email',
      formPhone: 'Phone',
      formMessage: 'Message',
      formSubmit: 'Send'
    },
    footer: {
      rights: 'All rights reserved',
      instagram: 'Follow us on Instagram'
    }
  }
};

// Current language
let currentLang = 'fr';

// Switch language
function switchLanguage(lang) {
  currentLang = lang;
  
  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
  
  // Update content
  updateContent();
}

// Update page content based on current language
function updateContent() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const keys = key.split('.');
    let value = content[currentLang];
    
    keys.forEach(k => {
      value = value[k];
    });
    
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = value;
    } else {
      el.textContent = value;
    }
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Set up language switchers
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchLanguage(btn.getAttribute('data-lang'));
    });
  });
  
  // Initialize with French
  updateContent();

    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const isExpanded = navMenu.classList.contains('active');
            mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }
});
