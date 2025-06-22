'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Type for the translation object
type Translations = {
  [key: string]: string;
};

// Type for the supported languages
type Language = 'en' | 'fr' | 'nl';

// Type for context value
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations
const translations: Record<Language, Translations> = {
    en: {
    // Navigation
    'navbar.home': 'Home',
    'navbar.luxe': 'Luxury',
    'navbar.rent': 'Rent',
    'navbar.buy': 'Buy',
    'navbar.login': 'Login',
    'navbar.cart': 'Cart',
    'navbar.visits': 'Appointments',
    'navbar.contact': 'Contact',

    // Hero Section
    'hero.badge': 'Featured Properties',
    'hero.title1': 'Find Your',
    'hero.title2': 'Dream Home in Belgium',
    'hero.description': 'Discover premium properties in the heart of Europe. Your ideal home is just a search away.',
    'hero.searchPlaceholder': 'Search by location, type, or price...',
    'hero.search': 'Search',
    'hero.properties': 'Properties',
    'hero.clients': 'Happy Clients',
    'hero.years': 'Years Experience',

    // Featured Properties
    'featured.title': 'Featured Properties',
    'featured.subtitle': 'Explore our handpicked selection of premium properties',
    'featured.viewAll': 'View All Properties',
    'featured.bedrooms': 'Bedrooms',
    'featured.bathrooms': 'Bathrooms',
    'featured.sqft': 'sq ft',
    'featured.forSale': 'For Sale',
    'featured.forRent': 'For Rent',
    'featured.viewDetails': 'View Details',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive real estate solutions tailored to your needs',
    'services.buy': 'Buy a Home',
    'services.buyDesc': 'Find your dream home from our exclusive listings.',
    'services.sell': 'Sell a Home',
    'services.sellDesc': 'Get the best price for your property with our expert marketing.',
    'services.rent': 'Rent a Property',
    'services.rentDesc': 'Discover rental properties that match your lifestyle.',
    'services.valuation': 'Free Valuation',
    'services.valuationDesc': 'Get an accurate market valuation for your property.',

    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Success stories from our happy clients',

    // Newsletter
    'newsletter.title': 'Stay Updated',
    'newsletter.subtitle': 'Subscribe to our newsletter for the latest listings and market insights',
    'newsletter.placeholder': 'Your email address',
    'newsletter.subscribe': 'Subscribe',
    'newsletter.privacy': 'We respect your privacy. Unsubscribe at any time.',

    // Call to Action
    'cta.title': 'Ready to Find Your Dream Home?',
    'cta.subtitle': 'Contact us today to schedule a viewing or get a free consultation',
    'cta.button': 'Get in Touch',

    'footer.about': 'About Us',
    'footer.contact': 'Contact',
    'footer.terms': 'Terms & Conditions',
    'footer.privacy': 'Privacy Policy',
    'footer.rights': 'All Rights Reserved',

    'auth.login': 'Login',
    'auth.signup': 'Register',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.confirmPassword': 'Confirm Password',
    'auth.firstName': 'First Name',
    'auth.lastName': 'Last Name',
    'auth.signIn': 'Sign In',
    'auth.createAccount': 'Create Account',
    'auth.noAccount': "Don't have an account?",
    'auth.haveAccount': 'Already have an account?',
    'auth.signUpLink': 'Sign up',
    'auth.signInLink': 'Sign in',

    'category.luxe': 'Luxury Properties',
    'category.rent': 'Properties for Rent',
    'category.buy': 'Properties for Sale',

    'related.title': 'Related Properties',

    'schedule.title': 'Book a Visit',
    'schedule.fullName': 'Full Name',
    'schedule.email': 'Email',
    'schedule.phone': 'Phone Number',
    'schedule.preferredDate': 'Preferred Date',
    'schedule.preferredTime': 'Preferred Time',
    'schedule.additionalNotes': 'Additional Notes',
    'schedule.scheduleVisit': 'Book Visit',
    'schedule.selectTime': 'Select Time',

    'visits.title': 'My Visits',
    'visits.noVisits': 'No visits planned',
    'visits.visitDate': 'Visit Date',
    'visits.visitTime': 'Visit Time',
    'visits.visitNotes': 'Visit Notes',
    'visits.cancelVisit': 'Cancel Visit',
    'visits.date': 'Date',
    'visits.time': 'Time',
    'visits.notes': 'Notes',
    'visits.cancel': 'Cancel',
  },
  fr: {
    // Navigation
    'navbar.home': 'Accueil',
    'navbar.luxe': 'Prestige',
    'navbar.rent': 'À Louer',
    'navbar.buy': 'À Vendre',
    'navbar.login': 'Se connecter',
    'navbar.cart': 'Panier',
    'navbar.visits': 'Rendez-vous',
    'navbar.contact': 'Contact',

    // Hero Section
    'hero.badge': 'Biens en Vedette',
    'hero.title1': 'Trouvez Votre',
    'hero.title2': 'Maison de Rêve en Belgique',
    'hero.description': 'Découvrez des biens immobiliers d\'exception au cœur de l\'Europe. Votre logement idéal est à portée de clic.',
    'hero.searchPlaceholder': 'Rechercher par lieu, type ou prix...',
    'hero.search': 'Rechercher',
    'hero.properties': 'Biens',
    'hero.clients': 'Clients Satisfaits',
    'hero.years': 'Années d\'Expérience',

    // Featured Properties
    'featured.title': 'Biens en Vedette',
    'featured.subtitle': 'Découvrez notre sélection de biens immobiliers d\'exception',
    'featured.viewAll': 'Voir Tous les Biens',
    'featured.bedrooms': 'Chambres',
    'featured.bathrooms': 'Salles de Bain',
    'featured.sqft': 'm²',
    'featured.forSale': 'À Vendre',
    'featured.forRent': 'À Louer',
    'featured.viewDetails': 'Voir les Détails',

    // Services
    'services.title': 'Nos Services',
    'services.subtitle': 'Des solutions immobilières complètes adaptées à vos besoins',
    'services.buy': 'Acheter un Bien',
    'services.buyDesc': 'Trouvez la maison de vos rêves parmi nos annonces exclusives.',
    'services.sell': 'Vendre un Bien',
    'services.sellDesc': 'Obtenez le meilleur prix pour votre bien grâce à notre expertise marketing.',
    'services.rent': 'Louer un Bien',
    'services.rentDesc': 'Découvrez des biens à louer qui correspondent à votre style de vie.',
    'services.valuation': 'Évaluation Gratuite',
    'services.valuationDesc': 'Obtenez une évaluation précise de votre bien sur le marché actuel.',

    // Testimonials
    'testimonials.title': 'Témoignages',
    'testimonials.subtitle': 'Découvrez les témoignages de nos clients satisfaits',

    // Newsletter
    'newsletter.title': 'Restez Informé',
    'newsletter.subtitle': 'Abonnez-vous à notre newsletter pour les dernières annonces et actualités du marché',
    'newsletter.placeholder': 'Votre adresse e-mail',
    'newsletter.subscribe': 'S\'abonner',
    'newsletter.privacy': 'Nous respectons votre vie privée. Désabonnez-vous à tout moment.',

    // Call to Action
    'cta.title': 'Prêt à Trouver Votre Maison de Rêve ?',
    'cta.subtitle': 'Contactez-nous dès aujourd\'hui pour organiser une visite ou obtenir une consultation gratuite',
    'cta.button': 'Nous Contacter',

    'footer.about': 'À propos',
    'footer.contact': 'Contact',
    'footer.terms': 'Conditions Générales',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.rights': 'Tous droits réservés',

    'auth.login': 'Connexion',
    'auth.signup': 'Créer un compte',
    'auth.email': 'E-mail',
    'auth.password': 'Mot de passe',
    'auth.confirmPassword': 'Confirmer le mot de passe',
    'auth.firstName': 'Prénom',
    'auth.lastName': 'Nom',
    'auth.signIn': 'Se connecter',
    'auth.createAccount': 'Créer un compte',
    'auth.noAccount': 'Pas encore de compte ?',
    'auth.haveAccount': 'Vous avez déjà un compte ?',
    'auth.signUpLink': "S'inscrire",
    'auth.signInLink': 'Se connecter',

    'category.luxe': 'Biens de Prestige',
    'category.rent': 'Biens à Louer',
    'category.buy': 'Biens à Vendre',

    'related.title': 'Biens Similaires',

    'schedule.title': 'Prendre un Rendez-vous',
    'schedule.fullName': 'Nom complet',
    'schedule.email': 'E-mail',
    'schedule.phone': 'Numéro de téléphone',
    'schedule.preferredDate': 'Date souhaitée',
    'schedule.preferredTime': 'Heure souhaitée',
    'schedule.additionalNotes': 'Notes supplémentaires',
    'schedule.scheduleVisit': 'Prendre Rendez-vous',
    'schedule.selectTime': 'Sélectionner l\'heure',

    'visits.title': 'Mes Rendez-vous',
    'visits.noVisits': 'Aucun rendez-vous prévu',
    'visits.visitDate': 'Date du Rendez-vous',
    'visits.visitTime': 'Heure du Rendez-vous',
    'visits.visitNotes': 'Notes',
    'visits.cancelVisit': 'Annuler le Rendez-vous',
    'visits.date': 'Date',
    'visits.time': 'Heure',
    'visits.notes': 'Notes',
    'visits.cancel': 'Annuler',
  },
  nl: {
    // Navigation
    'navbar.home': 'Startpagina',
    'navbar.luxe': 'Luxe',
    'navbar.rent': 'Te Huur',
    'navbar.buy': 'Te Koop',
    'navbar.login': 'Inloggen',
    'navbar.cart': 'Winkelwagen',
    'navbar.visits': 'Afspraken',
    'navbar.contact': 'Contact',

    // Hero Section
    'hero.badge': 'Uitgelichte Panden',
    'hero.title1': 'Vind Uw',
    'hero.title2': 'Droomhuis in België',
    'hero.description': 'Ontdek uitzonderlijke vastgoedobjecten in het hart van Europa. Uw ideale woning is binnen handbereik.',
    'hero.searchPlaceholder': 'Zoek op locatie, type of prijs...',
    'hero.search': 'Zoeken',
    'hero.properties': 'Panden',
    'hero.clients': 'Tevreden Klanten',
    'hero.years': 'Jaar Ervaring',

    // Featured Properties
    'featured.title': 'Uitgelichte Panden',
    'featured.subtitle': 'Ontdek onze selectie van uitzonderlijke vastgoedobjecten',
    'featured.viewAll': 'Bekijk Alle Panden',
    'featured.bedrooms': 'Slaapkamers',
    'featured.bathrooms': 'Badkamers',
    'featured.sqft': 'm²',
    'featured.forSale': 'Te Koop',
    'featured.forRent': 'Te Huur',
    'featured.viewDetails': 'Bekijk Details',

    // Services
    'services.title': 'Onze Diensten',
    'services.subtitle': 'Volledige vastgoedoplossingen op maat van uw behoeften',
    'services.buy': 'Een Huis Kopen',
    'services.buyDesc': 'Vind uw droomhuis tussen onze exclusieve aanbiedingen.',
    'services.sell': 'Een Huis Verkopen',
    'services.sellDesc': 'Haal de beste prijs voor uw eigendom met onze marketingexpertise.',
    'services.rent': 'Een Pand Huren',
    'services.rentDesc': 'Ontdek huurwoningen die bij uw levensstijl passen.',
    'services.valuation': 'Gratis Schatting',
    'services.valuationDesc': 'Krijg een nauwkeurige marktwaardebepaling van uw eigendom.',

    // Testimonials
    'testimonials.title': 'Wat Onze Klanten Zeggen',
    'testimonials.subtitle': 'Succesverhalen van onze tevreden klanten',

    // Newsletter
    'newsletter.title': 'Blijf Op De Hoogte',
    'newsletter.subtitle': 'Schrijf u in op onze nieuwsbrief voor de laatste aanbiedingen en marktinzichten',
    'newsletter.placeholder': 'Uw e-mailadres',
    'newsletter.subscribe': 'Inschrijven',
    'newsletter.privacy': 'We respecteren uw privacy. U kunt u op elk moment uitschrijven.',

    // Call to Action
    'cta.title': 'Klaar om Uw Droomhuis te Vinden?',
    'cta.subtitle': 'Neem vandaag nog contact met ons op voor een bezichtiging of een gratis consultatie',
    'cta.button': 'Contact Opnemen',

    'footer.about': 'Over ons',
    'footer.contact': 'Contact',
    'footer.terms': 'Algemene Voorwaarden',
    'footer.privacy': 'Privacybeleid',
    'footer.rights': 'Alle rechten voorbehouden',

    'auth.login': 'Inloggen',
    'auth.signup': 'Registreren',
    'auth.email': 'E-mailadres',
    'auth.password': 'Wachtwoord',
    'auth.confirmPassword': 'Bevestig Wachtwoord',
    'auth.firstName': 'Voornaam',
    'auth.lastName': 'Achternaam',
    'auth.signIn': 'Aanmelden',
    'auth.createAccount': 'Account aanmaken',
    'auth.noAccount': 'Nog geen account?',
    'auth.haveAccount': 'Al een account?',
    'auth.signUpLink': 'Registreren',
    'auth.signInLink': 'Aanmelden',

    'category.luxe': 'Luxueuze Panden',
    'category.rent': 'Panden te Huur',
    'category.buy': 'Panden te Koop',

    'related.title': 'Vergelijkbare Panden',

    'schedule.title': 'Afspraak Maken',
    'schedule.fullName': 'Volledige Naam',
    'schedule.email': 'E-mailadres',
    'schedule.phone': 'Telefoonnummer',
    'schedule.preferredDate': 'Gewenste Datum',
    'schedule.preferredTime': 'Gewenste Tijd',
    'schedule.additionalNotes': 'Bijkomende Notities',
    'schedule.scheduleVisit': 'Afspraak Maken',
    'schedule.selectTime': 'Selecteer Tijd',

    'visits.title': 'Mijn Afspraken',
    'visits.noVisits': 'Geen afspraken gepland',
    'visits.visitDate': 'Datum',
    'visits.visitTime': 'Tijdstip',
    'visits.visitNotes': 'Notities',
    'visits.cancelVisit': 'Afspraak Annuleren',
    'visits.date': 'Datum',
    'visits.time': 'Tijd',
    'visits.notes': 'Notities',
    'visits.cancel': 'Annuleren',
  },
};

// Props type for the provider
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};