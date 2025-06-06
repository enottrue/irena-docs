module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'CRM',
      items: require('./docs/crm/sidebar.js'),
    },
    {
      type: 'category',
      label: 'Платежи',
      items: require('./docs/payments/sidebar.js'),
    },
    {
      type: 'category',
      label: 'Автоматизации',
      items: require('./docs/automation/sidebar.js'),
    },
    {
      type: 'category',
      label: 'Сайты',
      items: require('./docs/websites/sidebar.js'),
    },
  ],
};