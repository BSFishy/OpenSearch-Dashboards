import React, { FC, useState } from 'react';
import { EuiFlexItem, EuiFlexGroup, EuiButton, EuiListGroup, EuiCard } from '@elastic/eui';
import {
  Category as CategoryType,
  StaticCategory as StaticCategoryType,
  ListCategory as ListCategoryType,
  isStaticCategory,
} from '../../common';
import { CoreStart } from '../../../../core/public';

interface Props {
  category: CategoryType;
  notifications: CoreStart['notifications'];
}

export const Category: FC<Props> = ({ category, notifications }) => {
  if (isStaticCategory(category)) {
    return <StaticCategory category={category} notifications={notifications} />;
  }

  return <ListCategory category={category} notifications={notifications} />;
};

const StaticCategory = ({
  category,
  notifications,
}: {
  category: StaticCategoryType;
  notifications: CoreStart['notifications'];
}) => {
  const buttonHandler = () => {
    notifications.toasts.addInfo('Buttons are not implemented.');
  };

  const footerContent = (
    <EuiFlexGroup justifyContent="flexEnd">
      <EuiFlexItem grow={false}>
        <EuiButton onClick={buttonHandler}>{category.button}</EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>
  );

  return (
    <EuiFlexItem>
      <EuiCard
        title={category.title}
        description={category.description}
        footer={footerContent}
        textAlign="left"
      />
    </EuiFlexItem>
  );
};

const ListCategory = ({
  category,
  notifications,
}: {
  category: ListCategoryType;
  notifications: CoreStart['notifications'];
}) => {
  const [favorited, setFavorited] = useState<boolean[]>(Array(category.links.length).fill(false));

  const handleLink = (e: any) => {
    e.preventDefault();

    notifications.toasts.addInfo('List items are not implemented.');
  };

  const handleFavorite = (idx: number) => () => {
    const tmp = [...favorited];
    tmp[idx] = !tmp[idx];
    setFavorited(tmp);
  };

  return (
    <EuiFlexItem>
      <EuiCard title={category.title} layout="horizontal">
        <EuiListGroup
          flush
          wrapText
          listItems={category.links.map((link, i) => ({
            label: link.text,
            href: link.href,
            onClick: handleLink,
            iconType: link.iconType,
            extraAction: {
              color: 'subdued',
              iconType: favorited[i] ? 'starFilled' : 'starEmpty',
              iconSize: 's',
              alwaysShow: favorited[i],
              onClick: handleFavorite(i),
            },
          }))}
        />
      </EuiCard>
    </EuiFlexItem>
  );
};
