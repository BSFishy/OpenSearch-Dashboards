import { i18n } from '@osd/i18n';
import uuidv5 from 'uuid/v5';
import { Section } from './types';

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
