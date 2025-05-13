import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/irena-docs/__docusaurus/debug/',
    component: ComponentCreator('/irena-docs/__docusaurus/debug/', '013'),
    exact: true
  },
  {
    path: '/irena-docs/__docusaurus/debug/config/',
    component: ComponentCreator('/irena-docs/__docusaurus/debug/config/', '0b6'),
    exact: true
  },
  {
    path: '/irena-docs/__docusaurus/debug/content/',
    component: ComponentCreator('/irena-docs/__docusaurus/debug/content/', 'a00'),
    exact: true
  },
  {
    path: '/irena-docs/__docusaurus/debug/globalData/',
    component: ComponentCreator('/irena-docs/__docusaurus/debug/globalData/', 'b73'),
    exact: true
  },
  {
    path: '/irena-docs/__docusaurus/debug/metadata/',
    component: ComponentCreator('/irena-docs/__docusaurus/debug/metadata/', '6c4'),
    exact: true
  },
  {
    path: '/irena-docs/__docusaurus/debug/registry/',
    component: ComponentCreator('/irena-docs/__docusaurus/debug/registry/', '5bf'),
    exact: true
  },
  {
    path: '/irena-docs/__docusaurus/debug/routes/',
    component: ComponentCreator('/irena-docs/__docusaurus/debug/routes/', '276'),
    exact: true
  },
  {
    path: '/irena-docs/docs/',
    component: ComponentCreator('/irena-docs/docs/', '79b'),
    routes: [
      {
        path: '/irena-docs/docs/',
        component: ComponentCreator('/irena-docs/docs/', 'f1c'),
        routes: [
          {
            path: '/irena-docs/docs/',
            component: ComponentCreator('/irena-docs/docs/', '207'),
            routes: [
              {
                path: '/irena-docs/docs/automation/auto-fill-crm/',
                component: ComponentCreator('/irena-docs/docs/automation/auto-fill-crm/', '03f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/irena-docs/docs/automation/invoice-deal-logic/',
                component: ComponentCreator('/irena-docs/docs/automation/invoice-deal-logic/', '2d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/irena-docs/docs/crm/deals/',
                component: ComponentCreator('/irena-docs/docs/crm/deals/', '179'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/irena-docs/docs/payments/getcourse-integration/',
                component: ComponentCreator('/irena-docs/docs/payments/getcourse-integration/', 'cdc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/irena-docs/docs/websites/astro-irena-analytics/',
                component: ComponentCreator('/irena-docs/docs/websites/astro-irena-analytics/', '9d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/irena-docs/docs/websites/sites/',
                component: ComponentCreator('/irena-docs/docs/websites/sites/', 'da0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/irena-docs/docs/websites/structure/',
                component: ComponentCreator('/irena-docs/docs/websites/structure/', '33b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/irena-docs/',
    component: ComponentCreator('/irena-docs/', '806'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
