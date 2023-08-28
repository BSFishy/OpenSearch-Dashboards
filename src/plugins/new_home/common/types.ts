import { IconType } from '@elastic/eui';

export type StaticCategory = {
  type: 'static';
  title: string;
  description: string;
  button: string;
} & (FlyoutStaticCategory | LinkStaticCategory);

interface FlyoutStaticCategory {
  buttonType: 'flyout';
}

interface LinkStaticCategory {
  buttonType: 'link';
  href: string;
}

export interface ListLink {
  text: string;
  href: string;
  iconType?: IconType;
}

export interface ListCategory {
  type: 'list';
  title: string;
  links: ListLink[];
}

export type Category = ListCategory | StaticCategory;

export const isStaticCategory = (category: Category): category is StaticCategory => {
  return category.type === 'static';
};

export interface Section {
  id: string;
  title: string;
  description: string;
  docLink?: string;
  categories: Category[];
}

export interface SampleData {
  id: string;
  title: string;
  description: string;
}
