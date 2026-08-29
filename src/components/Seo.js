import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://www.asfam.co.ke';
const DEFAULT_TITLE = 'ASFAM Consultancy Limited | Financial & Trade Advisory';
const DEFAULT_DESCRIPTION = 'ASFAM Consultancy Limited provides financial advisory, investment facilitation, trade advisory, credit facilitation, business research, and professional training in Kenya.';

const pageMetadata = {
  '/': {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION
  },
  '/about': {
    title: 'About ASFAM Consultancy Limited | Advisory & Training in Kenya',
    description: 'Learn about ASFAM Consultancy Limited, a Kenyan financial and trade advisory firm supporting enterprise growth, inclusion, and institutional capacity.'
  },
  '/services': {
    title: 'Advisory, Training & Trade Services | ASFAM Consultancy',
    description: 'Explore ASFAM services: investment and financial advisory, credit facilitation, trade advisory, business research, resource mobilization, and professional training.'
  },
  '/team': {
    title: 'Our Team | ASFAM Consultancy Limited',
    description: 'Meet the multidisciplinary financial, legal, HR, and accounting professionals at ASFAM Consultancy Limited.'
  },
  '/partners': {
    title: 'Our Partners | ASFAM Consultancy Limited',
    description: 'Discover the strategic partnerships that help ASFAM Consultancy connect clients with finance, markets, and growth opportunities.'
  },
  '/contact': {
    title: 'Contact ASFAM Consultancy Limited | Kenya',
    description: 'Contact ASFAM Consultancy Limited for financial advisory, trade facilitation, investment support, and professional training in Kenya.'
  }
};

function setMetaContent(selector, content) {
  const element = document.querySelector(selector);
  if (element) element.setAttribute('content', content);
}

function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[pathname] || pageMetadata['/'];
    const canonicalUrl = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;

    document.title = metadata.title;
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl);
    setMetaContent('meta[name="description"]', metadata.description);
    setMetaContent('meta[property="og:title"]', metadata.title);
    setMetaContent('meta[property="og:description"]', metadata.description);
    setMetaContent('meta[property="og:url"]', canonicalUrl);
    setMetaContent('meta[name="twitter:title"]', metadata.title);
    setMetaContent('meta[name="twitter:description"]', metadata.description);
  }, [pathname]);

  return null;
}

export default Seo;