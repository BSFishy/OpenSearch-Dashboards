import { i18n } from '@osd/i18n';
import uuidv5 from 'uuid/v5';
import { Section, AddSectionGroup } from './types';
import image1 from '../public/assets/image1.png';
import image2 from '../public/assets/image2.png';
import image3 from '../public/assets/image3.png';
import image4 from '../public/assets/image4.png';
import sampleDataImage from '../../home/public/assets/sample_data_resources/ecommerce/dashboard_dark.png';
import dataExplorer from '../public/assets/dataexplorer.svg';

const NAMESPACE = '7b5f8c6f-e849-4fe4-b556-f6a38c424a03';

// const LIST_ITEM_TEXT = i18n.translate('newHome.listItem', { defaultMessage: 'List item' });
const LOREM_TEXT = i18n.translate('newHome.lorem', {
  defaultMessage:
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
});

export const SECTIONS: Section[] = [
  {
    id: uuidv5('add data', NAMESPACE),
    title: i18n.translate('newHome.addData.title', { defaultMessage: 'Add data' }),
    description: i18n.translate('newHome.addData.title', {
      defaultMessage:
        "Use the Add data ingest option to start working with your data in OpenSearch Dashboards. If you aren't ready to add your own data, add a sample data set and try out OpenSearch Dashboards.",
    }),
    categories: [
      {
        type: 'static',
        title: i18n.translate('newHome.addData.addSampleData.title', {
          defaultMessage: 'Add sample data',
        }),
        description: i18n.translate('newHome.addData.addSampleData.description', {
          defaultMessage:
            'Sample datasets come with visualizations, dashboards, and other tools to help you explore Dashboards before you add your own data.',
        }),
        image: sampleDataImage,
        button: i18n.translate('newHome.addData.addSampleData.button', {
          defaultMessage: 'Choose data',
        }),
        buttonType: 'flyout',
      },
      {
        type: 'static',
        title: i18n.translate('newHome.addData.ingest.title', {
          defaultMessage: 'Ingest data with Data Prepper',
        }),
        description: i18n.translate('newHome.addData.ingest.description', {
          defaultMessage:
            'Server-side data collector capable of filtering, enriching, transforming, normalizing, and aggregating data for downstream analytics and visualization.',
        }),
        button: i18n.translate('newHome.addData.ingest.button', {
          defaultMessage: 'Learn more',
        }),
        image: dataExplorer,
        buttonType: 'link',
        href: 'https://opensearch.org/docs/latest/data-prepper/index/',
      },
      {
        type: 'static',
        title: i18n.translate('newHome.addData.connect.title', {
          defaultMessage: 'Connect to Data Source',
        }),
        description: i18n.translate('newHome.addData.connect.description', {
          defaultMessage:
            'Dynamically manage data sources, create index patterns based on those data sources, and combine visualizations in one dashboard',
        }),
        button: i18n.translate('newHome.addData.connect.button', { defaultMessage: 'Learn more' }),
        icon: 'inputOutput',
        buttonType: 'link',
        href: 'https://opensearch.org',
      },
    ],
  },
  {
    id: uuidv5('opensearch 101', NAMESPACE),
    title: i18n.translate('newHome.opensearch101.title', { defaultMessage: 'OpenSearch 101' }),
    description: i18n.translate('newHome.opensearch101.description', {
      defaultMessage: 'Core concepts to get you started with OpenSearch Dashboards',
    }),
    docLink: 'https://opensearch.org/docs/latest/dashboards/index/',
    categories: [
      {
        type: 'list',
        title: i18n.translate('newHome.opensearch101.gettingStarted.title', {
          defaultMessage: 'Getting started',
        }),
        favoritable: false,
        links: [
          {
            text: i18n.translate('newHome.opensearch101.gettingStarted.quickstart', {
              defaultMessage: 'Quickstart',
            }),
            href: 'https://opensearch.org/docs/latest/dashboards/index/',
            iconType: 'popout',
          },
          {
            text: i18n.translate('newHome.opensearch101.gettingStarted.dataVis', {
              defaultMessage: 'Data visualizations',
            }),
            href: 'https://opensearch.org/docs/latest/dashboards/visualize/viz-index/',
            iconType: 'popout',
          },
          {
            text: i18n.translate('newHome.opensearch101.gettingStarted.dashboards', {
              defaultMessage: 'Dashboards',
            }),
            href: 'https://opensearch.org/docs/latest/dashboards/dashboard/index/',
            iconType: 'popout',
          },
        ],
      },
      {
        type: 'list',
        title: i18n.translate('newHome.opensearch101.dataDiscovery.title', {
          defaultMessage: 'Data discovery',
        }),
        favoritable: false,
        links: [
          {
            text: i18n.translate('newHome.opensearch101.dataDiscovery.exploration', {
              defaultMessage: 'Data exploration',
            }),
            href: 'https://opensearch.org/docs/latest/dashboards/discover/index-discover/',
            iconType: 'popout',
          },
          {
            text: i18n.translate('newHome.opensearch101.dataDiscovery.sources', {
              defaultMessage: 'Data sources',
            }),
            href: 'https://opensearch.org/docs/latest/dashboards/discover/multi-data-sources/',
            iconType: 'popout',
          },
          {
            text: i18n.translate('newHome.opensearch101.dataDiscovery.dql', {
              defaultMessage: 'DQL',
            }),
            href: 'https://opensearch.org/docs/latest/dashboards/discover/dql/',
            iconType: 'popout',
          },
        ],
      },
      {
        type: 'list',
        title: i18n.translate('newHome.opensearch101.observability.title', {
          defaultMessage: 'Observability',
        }),
        favoritable: false,
        links: [
          {
            text: i18n.translate('newHome.opensearch101.observability.alerting', {
              defaultMessage: 'Alerting dashboards and visualizations',
            }),
            href:
              'https://opensearch.org/docs/latest/observing-your-data/alerting/dashboards-alerting/',
            iconType: 'popout',
          },
          {
            text: i18n.translate('newHome.opensearch101.observability.ad', {
              defaultMessage: 'Anomaly detection dashboards and visualizations',
            }),
            href:
              'https://opensearch.org/docs/latest/observing-your-data/ad/dashboards-anomaly-detection/',
            iconType: 'popout',
          },
          {
            text: i18n.translate('newHome.opensearch101.observability.trace', {
              defaultMessage: 'Trace analytics',
            }),
            href: 'https://opensearch.org/docs/latest/observing-your-data/trace/ta-dashboards/',
            iconType: 'popout',
          },
          {
            text: i18n.translate('newHome.opensearch101.observability.metric', {
              defaultMessage: 'Metric analytics',
            }),
            href: 'https://opensearch.org/docs/latest/observing-your-data/prometheusmetrics/',
            iconType: 'popout',
          },
        ],
      },
    ],
  },
  {
    id: uuidv5('features', NAMESPACE),
    title: i18n.translate('newHome.features.title', { defaultMessage: 'Features' }),
    description: i18n.translate('newHome.features.description', {
      defaultMessage:
        'Visualize insights at a glance, stay in the loop with real-time data updates, and more.',
    }),
    categories: [
      {
        type: 'list',
        title: i18n.translate('newHome.features.experiences.title', {
          defaultMessage: 'Data Experiences & Visualizations',
        }),
        favoritable: true,
        links: [
          {
            text: i18n.translate('newHome.features.experiences.dashboards', {
              defaultMessage: 'Dashboards',
            }),
            href: 'https://opensearch.org',
            iconType: 'dashboardApp',
          },
          {
            text: i18n.translate('newHome.features.experiences.discover', {
              defaultMessage: 'Discover',
            }),
            href: 'https://opensearch.org',
            iconType: 'discoverApp',
          },
          {
            text: i18n.translate('newHome.features.experiences.visualize', {
              defaultMessage: 'Visualize',
            }),
            href: 'https://opensearch.org',
            iconType: 'visualizeApp',
          },
        ],
      },
      {
        type: 'list',
        title: i18n.translate('newHome.features.management.title', {
          defaultMessage: 'Dashboard Management',
        }),
        favoritable: true,
        links: [
          {
            text: i18n.translate('newHome.features.management.indexPatterns', {
              defaultMessage: 'Index Patterns',
            }),
            href: 'https://opensearch.org',
            iconType: 'indexPatternApp',
          },
          {
            text: i18n.translate('newHome.features.management.dataSources', {
              defaultMessage: 'Data Sources',
            }),
            href: 'https://opensearch.org',
            iconType: 'database',
          },
          {
            text: i18n.translate('newHome.features.management.savedObjects', {
              defaultMessage: 'Saved Objects',
            }),
            href: 'https://opensearch.org',
            iconType: 'save',
          },
          {
            text: i18n.translate('newHome.features.management.advancedSettings', {
              defaultMessage: 'Advanced Settings',
            }),
            href: 'https://opensearch.org',
            iconType: 'gear',
          },
        ],
      },
      // {
      //   type: 'list',
      //   title: i18n.translate('newHome.features.communityApplications', {
      //     defaultMessage: 'Category',
      //   }),
      //   favoritable: true,
      //   links: [
      //     {
      //       text: LIST_ITEM_TEXT,
      //       href: 'https://opensearch.org',
      //       iconType: 'bullseye',
      //     },
      //     {
      //       text: LIST_ITEM_TEXT,
      //       href: 'https://opensearch.org',
      //       iconType: 'bullseye',
      //     },
      //     {
      //       text: LIST_ITEM_TEXT,
      //       href: 'https://opensearch.org',
      //       iconType: 'bullseye',
      //     },
      //     {
      //       text: LIST_ITEM_TEXT,
      //       href: 'https://opensearch.org',
      //       iconType: 'bullseye',
      //     },
      //     {
      //       text: LIST_ITEM_TEXT,
      //       href: 'https://opensearch.org',
      //       iconType: 'bullseye',
      //     },
      //   ],
      // },
    ],
  },
  {
    id: uuidv5('recentVis', NAMESPACE),
    title: i18n.translate('newHome.recentVis.title', { defaultMessage: 'Recent visualizations' }),
    docLink: 'https://opensearch.org',
    docLinkText: i18n.translate('newHome.recentVis.docLink', {
      defaultMessage: 'View all saved objects',
    }),
    images: [image1, image2, image3, image4],
  },
];

export const SECTION_GROUPS: AddSectionGroup[] = [
  {
    title: i18n.translate('newHome.groups.documentation.title', {
      defaultMessage: 'Documentation',
    }),
    sections: [
      {
        id: SECTIONS[1].id,
        title: i18n.translate('newHome.groups.documentation.opensearch101.title', {
          defaultMessage: 'OpenSearch Dashboards 101',
        }),
        description: i18n.translate('newHome.groups.documentation.opensearch101.description', {
          defaultMessage:
            'Contains links to OpenSearch Dashboards Documentation fundamentals. This content can help onboard your organization to OpenSearch faster.',
        }),
      },
    ],
  },
  {
    title: i18n.translate('newHome.groups.data.title', { defaultMessage: 'Data' }),
    sections: [
      {
        id: SECTIONS[0].id,
        title: i18n.translate('newHome.groups.data.addData.title', { defaultMessage: 'Add data' }),
        description: i18n.translate('newHome.groups.data.addData.description', {
          defaultMessage:
            'Contains short cuts to adding sample data and documentation on how to bring your own data to your OpenSearch instance.',
        }),
      },
      {
        title: i18n.translate('newHome.groups.data.explore.title', {
          defaultMessage: 'Explore data',
        }),
        description: LOREM_TEXT,
      },
      {
        title: i18n.translate('newHome.groups.data.visualize.title', {
          defaultMessage: 'Visualize data',
        }),
        description: LOREM_TEXT,
      },
    ],
  },
  {
    title: i18n.translate('newHome.groups.objects.title', {
      defaultMessage: 'OpenSearch Dashboards & Cluster Objects',
    }),
    sections: [
      {
        title: i18n.translate('newHome.groups.objects.recentItems.title', {
          defaultMessage: 'Recent items - list view',
        }),
        description: LOREM_TEXT,
      },
      {
        title: i18n.translate('newHome.groups.objects.recentVisList.title', {
          defaultMessage: 'Recent visualizations - list view',
        }),
        description: LOREM_TEXT,
      },
      {
        id: SECTIONS[3].id,
        title: i18n.translate('newHome.groups.objects.recentVisGrid.title', {
          defaultMessage: 'Recent visualizations - grid view',
        }),
        description: LOREM_TEXT,
      },
    ],
  },
  {
    title: i18n.translate('newHome.groups.features.title', {
      defaultMessage: 'Features & functionality',
    }),
    sections: [
      {
        id: SECTIONS[2].id,
        title: i18n.translate('newHome.groups.features.features.title', {
          defaultMessage: 'Features',
        }),
        description: i18n.translate('newHome.groups.features.features.description', {
          defaultMessage:
            'Quick links to all out-of-the-box functionality that ships with OpenSearch Dashboards.',
        }),
      },
    ],
  },
];
