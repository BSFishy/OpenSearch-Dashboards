import { i18n } from '@osd/i18n';
import uuidv5 from 'uuid/v5';
import { SampleData } from './types';

const NAMESPACE = '7b5f8c6f-e849-4fe4-b556-f6a38c424a03';

export const SAMPLE_DATA: SampleData[] = [
  {
    id: uuidv5('flight', NAMESPACE),
    title: i18n.translate('newHome.sampleData.flight.title', {
      defaultMessage: 'Sample flight data',
    }),
    description: i18n.translate('newHome.sampleData.flight.description', {
      defaultMessage: 'Sample data, visualizations, and dashboards for monitoring flight routes.',
    }),
  },
  {
    id: uuidv5('ecommerce', NAMESPACE),
    title: i18n.translate('newHome.sampleData.ecommerce.title', {
      defaultMessage: 'Sample eCommerce orders',
    }),
    description: i18n.translate('newHome.sampleData.ecommerce.description', {
      defaultMessage: 'Sample data, visualizations, and dashboards for tracking eCommerce orders.',
    }),
  },
  {
    id: uuidv5('web', NAMESPACE),
    title: i18n.translate('newHome.sampleData.web.title', { defaultMessage: 'Sample web logs' }),
    description: i18n.translate('newHome.sampleData.web.description', {
      defaultMessage: 'Sample data, visualizations, and dashboards for monitoring web logs.',
    }),
  },
];
