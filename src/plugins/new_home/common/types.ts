import { IconType, ExclusiveUnion } from '@elastic/eui';

export type StaticCategory = {
  type: 'static';
  title: string;
  description: string;
  button: string;
  icon?: IconType;
  image?: string;
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
  favoritable: boolean;
}

export type Category = ListCategory | StaticCategory;

export const isStaticCategory = (category: Category): category is StaticCategory => {
  return category.type === 'static';
};

export type Section = {
  id: string;
  title: string;
  description?: string;
  docLink?: string;
  docLinkText?: string;
} & ExclusiveUnion<CategorySection, ImageSection>;

interface CategorySection {
  categories: Category[];
}

interface ImageSection {
  images: string[];
}

export interface AddSection {
  id?: string;
  title: string;
  description: string;
}

export interface AddSectionGroup {
  title: string;
  sections: AddSection[];
}

export interface SampleData {
  id: string;
  title: string;
  description: string;
}
