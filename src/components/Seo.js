import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://www.asfam.co.ke';
const LOGO_URL = 'https://www.asfam.co.ke/asfam-logo.png';
const DEFAULT_TITLE = 'ASFAM Consultancy Limited | Financial & Trade Advisory';
const DEFAULT_DESCRIPTION = 'ASFAM Consultancy Limited provides financial advisory, investment facilitation, trade advisory, credit facilitation, business research, and professional training in Kenya.';

const pageMetadata = {
  '/': {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    ogType: 'website',
    image: LOGO_URL,
    imageWidth: '624',
    imageHeight: '284'
  },
  '/about': {
    title: 'About ASFAM Consultancy Limited | Advisory & Training in Kenya',
    description: 'Learn about ASFAM Consultancy Limited, a Kenyan financial and trade advisory firm supporting enterprise growth, inclusion, and institutional capacity.',
    ogType: 'website',
    image: LOGO_URL,
    imageWidth: '624',
    imageHeight: '284'
  },
  '/services': {
    title: 'Advisory, Training & Trade Services | ASFAM Consultancy',
    description: 'Explore ASFAM services: investment and financial advisory, credit facilitation, trade advisory, business research, resource mobilization, and professional training.',
    ogType: 'website',
    image: LOGO_URL,
    imageWidth: '624',
    imageHeight: '284'
  },
  '/team': {
    title: 'Our Team | ASFAM Consultancy Limited',
    description: 'Meet the multidisciplinary financial, legal, HR, and accounting professionals at ASFAM Consultancy Limited.',
    ogType: 'website',
    image: LOGO_URL,
    imageWidth: '624',
    imageHeight: '284'
  },
  '/partners': {
    title: 'Our Partners | ASFAM Consultancy Limited',
    description: 'Discover the strategic partnerships that help ASFAM Consultancy connect clients with finance, markets, and growth opportunities.',
    ogType: 'website',
    image: LOGO_URL,
    imageWidth: '624',
    imageHeight: '284'
  },
  '/contact': {
    title: 'Contact ASFAM Consultancy Limited | Kenya',
    description: 'Contact ASFAM Consultancy Limited for financial advisory, trade facilitation, investment support, and professional training in Kenya.',
    ogType: 'website',
    image: LOGO_URL,
    imageWidth: '624',
    imageHeight: '284'
  }
};

function setMetaContent(selector, content) {
  const element = document.querySelector(selector);
  if (element) element.setAttribute('content', content);
}

function updateOrCreateMeta(name, value, isProperty = false) {
  const attribute = isProperty ? 'property' : 'name';
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', value);
}

function addBreadcrumbSchema(pathname) {
  const breadcrumbMap = {
    '/': [{ name: 'Home', url: SITE_URL }],
    '/about': [
      { name: 'Home', url: SITE_URL },
      { name: 'About', url: `${SITE_URL}/about` }
    ],
    '/services': [
      { name: 'Home', url: SITE_URL },
      { name: 'Services', url: `${SITE_URL}/services` }
    ],
    '/team': [
      { name: 'Home', url: SITE_URL },
      { name: 'Team', url: `${SITE_URL}/team` }
    ],
    '/partners': [
      { name: 'Home', url: SITE_URL },
      { name: 'Partners', url: `${SITE_URL}/partners` }
    ],
    '/contact': [
      { name: 'Home', url: SITE_URL },
      { name: 'Contact', url: `${SITE_URL}/contact` }
    ]
  };

  const breadcrumbs = breadcrumbMap[pathname] || breadcrumbMap['/'];
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  };

  // Remove existing breadcrumb schema if present
  const existingScript = document.querySelector('script[data-type="breadcrumb-schema"]');
  if (existingScript) existingScript.remove();

  // Add new breadcrumb schema
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-type', 'breadcrumb-schema');
  script.textContent = JSON.stringify(breadcrumbSchema);
  document.head.appendChild(script);
}

function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[pathname] || pageMetadata['/'];
    const canonicalUrl = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;

    // Update basic tags
    document.title = metadata.title;
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl);
    
    // Update meta tags
    setMetaContent('meta[name="description"]', metadata.description);
    updateOrCreateMeta('description', metadata.description);
    
    // Update Open Graph tags
    updateOrCreateMeta('og:type', metadata.ogType, true);
    updateOrCreateMeta('og:title', metadata.title, true);
    updateOrCreateMeta('og:description', metadata.description, true);
    updateOrCreateMeta('og:url', canonicalUrl, true);
    updateOrCreateMeta('og:image', metadata.image, true);
    updateOrCreateMeta('og:image:width', metadata.imageWidth, true);
    updateOrCreateMeta('og:image:height', metadata.imageHeight, true);
    updateOrCreateMeta('og:image:alt', 'ASFAM Consultancy Limited - Financial & Trade Advisory', true);
    updateOrCreateMeta('og:locale', 'en_KE', true);
    
    // Update Twitter Card tags
    updateOrCreateMeta('twitter:title', metadata.title);
    updateOrCreateMeta('twitter:description', metadata.description);
    updateOrCreateMeta('twitter:image', metadata.image);
    updateOrCreateMeta('twitter:image:alt', 'ASFAM Consultancy Limited Logo');
    updateOrCreateMeta('twitter:card', 'summary_large_image');
    
    // Add breadcrumb schema
    addBreadcrumbSchema(pathname);

    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default Seo;