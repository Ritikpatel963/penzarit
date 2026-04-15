import { useEffect } from 'react';

const DEFAULT_IMAGE = '/favicon.svg';

function upsertMeta({ name, property, content }) {
  if (!content) return;

  const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    if (name) {
      element.setAttribute('name', name);
    }
    if (property) {
      element.setAttribute('property', property);
    }
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertLink(rel, href) {
  if (!href) return;

  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

function upsertJsonLd(data) {
  if (!data) return;

  let element = document.head.querySelector('script[data-seo="page-schema"]');
  if (!element) {
    element = document.createElement('script');
    element.type = 'application/ld+json';
    element.setAttribute('data-seo', 'page-schema');
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

export default function Seo({
  title,
  description,
  keywords,
  path = '',
  image = DEFAULT_IMAGE,
  type = 'website',
  robots = 'index,follow',
  schema,
}) {
  useEffect(() => {
    const siteName = 'Panzer IT';
    const origin = window.location.origin;
    const canonicalUrl = new URL(path || window.location.pathname, origin).toString();
    const imageUrl = new URL(image, origin).toString();
    const pageTitle = title ? `${title} | ${siteName}` : siteName;

    document.title = pageTitle;

    upsertMeta({ name: 'description', content: description });
    upsertMeta({ name: 'keywords', content: keywords });
    upsertMeta({ name: 'robots', content: robots });
    upsertMeta({ name: 'author', content: siteName });

    upsertMeta({ property: 'og:type', content: type });
    upsertMeta({ property: 'og:site_name', content: siteName });
    upsertMeta({ property: 'og:title', content: pageTitle });
    upsertMeta({ property: 'og:description', content: description });
    upsertMeta({ property: 'og:url', content: canonicalUrl });
    upsertMeta({ property: 'og:image', content: imageUrl });

    upsertMeta({ name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta({ name: 'twitter:title', content: pageTitle });
    upsertMeta({ name: 'twitter:description', content: description });
    upsertMeta({ name: 'twitter:image', content: imageUrl });

    upsertLink('canonical', canonicalUrl);
    upsertJsonLd(
      schema || {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: pageTitle,
        description,
        url: canonicalUrl,
      }
    );
  }, [description, image, keywords, path, robots, schema, title, type]);

  return null;
}
