import { i18n } from '@osd/i18n';
import uuidv5 from 'uuid/v5';
import { Section, AddSectionGroup } from './types';

const NAMESPACE = '7b5f8c6f-e849-4fe4-b556-f6a38c424a03';

const CATEGORY_TEXT = i18n.translate('newHome.category', { defaultMessage: 'Category' });
const LIST_ITEM_TEXT = i18n.translate('newHome.listItem', { defaultMessage: 'List item' });
const LOREM_TEXT = i18n.translate('newHome.lorem', {
  defaultMessage:
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
});

export const SECTIONS: Section[] = [
  {
    id: uuidv5('add data', NAMESPACE),
    title: i18n.translate('newHome.addData.title', { defaultMessage: 'Add data' }),
    description: LOREM_TEXT,
    categories: [
      {
        type: 'static',
        title: i18n.translate('newHome.addData.addSampleData.title', {
          defaultMessage: 'Add sample data',
        }),
        description: LOREM_TEXT,
        button: i18n.translate('newHome.addData.addSampleData.button', {
          defaultMessage: 'Choose data',
        }),
        buttonType: 'flyout',
      },
      {
        type: 'static',
        title: i18n.translate('newHome.addData.ingest.title', { defaultMessage: 'Ingest Data' }),
        description: LOREM_TEXT,
        button: i18n.translate('newHome.addData.ingest.button', {
          defaultMessage: 'Documentation',
        }),
        buttonType: 'link',
        href: 'https://opensearch.org',
      },
      {
        type: 'static',
        title: i18n.translate('newHome.addData.connect.title', {
          defaultMessage: 'Connect to Data Source',
        }),
        description: LOREM_TEXT,
        button: i18n.translate('newHome.addData.connect.button', { defaultMessage: 'Button' }),
        buttonType: 'link',
        href: 'https://opensearch.org',
      },
    ],
  },
  {
    id: uuidv5('opensearch 101', NAMESPACE),
    title: i18n.translate('newHome.opensearch101.title', { defaultMessage: 'OpenSearch 101' }),
    description: LOREM_TEXT,
    docLink: 'https://opensearch.org',
    categories: [
      {
        type: 'list',
        title: CATEGORY_TEXT,
        links: [
          {
            text: LIST_ITEM_TEXT,
            href: 'https://opensearch.org',
            iconType: 'bullseye',
          },
          {
            text: LIST_ITEM_TEXT,
            href: 'https://opensearch.org',
            iconType: 'bullseye',
          },
          {
            text: LIST_ITEM_TEXT,
            href: 'https://opensearch.org',
            iconType: 'bullseye',
          },
        ],
      },
      {
        type: 'list',
        title: CATEGORY_TEXT,
        links: [
          {
            text: LIST_ITEM_TEXT,
            href: 'https://opensearch.org',
            iconType: 'bullseye',
          },
          {
            text: LIST_ITEM_TEXT,
            href: 'https://opensearch.org',
            iconType: 'bullseye',
          },
          {
            text: LIST_ITEM_TEXT,
            href: 'https://opensearch.org',
            iconType: 'bullseye',
          },
        ],
      },
      {
        type: 'list',
        title: CATEGORY_TEXT,
        links: [
          {
            text: LIST_ITEM_TEXT,
            href: 'https://opensearch.org',
            iconType: 'bullseye',
          },
          {
            text: LIST_ITEM_TEXT,
            href: 'https://opensearch.org',
            iconType: 'bullseye',
          },
          {
            text: LIST_ITEM_TEXT,
            href: 'https://opensearch.org',
            iconType: 'bullseye',
          },
        ],
      },
    ],
  },
  {
    id: uuidv5('features', NAMESPACE),
    title: i18n.translate('newHome.features.title', { defaultMessage: 'Features' }),
    description: LOREM_TEXT,
    docLink: 'https://opensearch.org',
    categories: [
      {
        type: 'list',
        title: i18n.translate('newHome.features.experiences', {
          defaultMessage: 'Data Experiences & Visualizations',
        }),
        links: [
          {
            text: LIST_ITEM_TEXT,
            href: 'https://opensearch.org',
            iconType: 'bullseye',
          },
          {
            text: LIST_ITEM_TEXT,
            href: 'https://opensearch.org',
            iconType: 'bullseye',
          },
          {
            text: LIST_ITEM_TEXT,
            href: 'https://opensearch.org',
            iconType: 'bullseye',
          },
        ],
      },
      {
        type: 'list',
        title: i18n.translate('newHome.features.administrative', {
          defaultMessage: 'Administrative',
        }),
        links: [
          {
            text: LIST_ITEM_TEXT,
            href: 'https://opensearch.org',
            iconType: 'bullseye',
          },
          {
            text: LIST_ITEM_TEXT,
            href: 'https://opensearch.org',
            iconType: 'bullseye',
          },
          {
            text: LIST_ITEM_TEXT,
            href: 'https://opensearch.org',
            iconType: 'bullseye',
          },
        ],
      },
      {
        type: 'list',
        title: i18n.translate('newHome.features.communityApplications', {
          defaultMessage: 'Community Applications',
        }),
        links: [
          {
            text: LIST_ITEM_TEXT,
            href: 'https://opensearch.org',
            iconType: 'bullseye',
          },
          {
            text: LIST_ITEM_TEXT,
            href: 'https://opensearch.org',
            iconType: 'bullseye',
          },
          {
            text: LIST_ITEM_TEXT,
            href: 'https://opensearch.org',
            iconType: 'bullseye',
          },
        ],
      },
    ],
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
        title: i18n.translate('newHome.groups.objects.recentVisualizations.title', {
          defaultMessage: 'Recent visualizations - list view',
        }),
        description: LOREM_TEXT,
      },
    ],
  },
];
