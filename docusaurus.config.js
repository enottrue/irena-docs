/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Irena Docs',
  url: 'https://enottrue.github.io',
  baseUrl: '/irena-docs/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'enottrue',
  projectName: 'irena-docs',
  deploymentBranch: 'gh-pages',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      navbar: {
        title: 'Irena Docs',
        items: [
          {
            type: 'doc',
            docId: 'crm/deals',
            position: 'left',
            label: 'Документация',
          },
          {
            href: 'https://github.com/enottrue/irena-docs',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      search: {
        provider: 'local',
        searchParameters: {
          // Увеличиваем количество результатов поиска
          maxResults: 20,
        },
        // Добавляем русский язык для поиска
        language: ['ru', 'en'],
      },
    },
};

module.exports = config;
