import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  favicon: 'https://nbkparks.org/wp-content/themes/NBKPA-wp_v2.8.7/favicon/favicon-32x32.png',
  title: 'WLS Community Garden Green Fund 2023',
  tagline: 'North Brooklyn Community Website',
  // Set the production url of your site here
  url: 'https://green-fund-walt-l-shamel-community-garden2023..github.io/',
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'green-fund-walt-l-shamel-community-garden2023.github.io', // Usually your GitHub org/user name.
  projectName: 'green-fund-walt-l-shamel-community-garden2023.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: "events",
          path: "events",
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/WLS-Community-Garden-Green-Fund-2023/green-fund-walt-l-shamel-community-garden2023.github.io/edit/main/',

        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/WLS-Community-Garden-Green-Fund-2023/green-fund-walt-l-shamel-community-garden2023.github.io/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexBlog: true,
        docsRouteBasePath: ["events"],
        docsDir: ["events"],
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 10,
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'WLS-Community-Garden-Green-Fund-2023',
      logo: {
        alt: 'My Site Logo',
        src: 'logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Project Info',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/WLS-Community-Garden-Green-Fund-2023/green-fund-walt-l-shamel-community-garden2023.github.io',
          label: 'Source',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/WaltLShamelCommunityGarden/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/waltlshamelgarden/?hl=en',
            },
            {
              label: 'Community Gardens - GreenThumb',
              href: 'https://www.nycgovparks.org/greenthumb/community-gardens',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} WLS-Community-Garden-Green-Fund-2023`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
