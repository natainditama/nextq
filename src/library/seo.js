const metaTags = [
  {
    name: 'mobile-web-app-capable',
    content: 'yes',
  },
  {
    charSet: 'utf-8',
  },
  {
    httpEquiv: 'X-UA-Compatible',
    content: 'IE=edge',
  },
  {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1.0',
  },
  {
    name: 'apple-mobile-web-app-capable',
    content: 'yes',
  },
  {
    name: 'msapplication-starturl',
    content: '/',
  },
  {
    name: 'application-name',
    content: 'NextQ App',
  },
  {
    name: 'apple-mobile-web-app-status-bar-style',
    content: 'default',
  },
  {
    name: 'apple-mobile-web-app-title',
    content: 'NextQ App',
  },
  {
    name: 'format-detection',
    content: 'telephone=no',
  },
  {
    name: 'msapplication-TileColor',
    content: '#000000',
  },
  {
    name: 'msapplication-tap-highlight',
    content: 'no',
  },
  {
    name: 'keywords',
    content:
      'nextjs, next, react, reactjs, nextjs-quickstart, nextq, nextq-app, natainditama, tailwindcss, tailwindcss-nextjs, tailwindcss-nextjs-quickstart, nextjs-boilerplate',
  },
];

const linkTags = [
  {
    rel: 'manifest',
    href: '/manifest.json',
  },
  {
    rel: 'icon',
    type: 'image/x-icon',
    href: '/favicon.ico',
  },
  {
    rel: 'icon',
    type: 'image/png',
    href: '/icons/favicon-16x16.png',
    sizes: '16x16',
  },
  {
    rel: 'icon',
    type: 'image/png',
    href: '/icons/favicon-32x32.png',
    sizes: '32x32',
  },
  {
    rel: 'shortcut icon',
    href: '/favicon.ico',
    type: 'image/x-icon',
  },
  {
    rel: 'apple-touch-icon',
    href: 'icons/apple-touch-icon.png',
  },
];

const seoDefaults = {
  defaultTitle: 'NextQ - Get Started Template with NextQ',
  description:
    "Get Started Template built with Next JS and Tailwind CSS. It's a great starting point for your next Next.js project. Feel free to use it for your next Next.js project. It's open source and available on GitHub. Feel free to contribute to it",
  robotsProps: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Home',
    description:
      "Get Started Template built with Next JS and Tailwind CSS. It's a great starting point for your next Next.js project. Feel free to use it for your next Next.js project. It's open source and available on GitHub. Feel free to contribute to it.",
    images: [
      {
        url: `/images/og-image.png`,
        width: 1000,
        height: 420,
      },
    ],
  },
  additionalLinkTags: [...linkTags],
  additionalMetaTags: [...metaTags],
  twitter: {
    handle: '@natainditama',
    site: '@natainditama',
    cardType: 'summary_large_image',
  },
};

export default seoDefaults;
