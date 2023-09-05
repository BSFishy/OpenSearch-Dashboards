import React, { FC, useState } from 'react';
import { i18n } from '@osd/i18n';
import { FormattedMessage } from '@osd/i18n/react';
import {
  EuiFlexItem,
  EuiFlexGroup,
  EuiButton,
  EuiButtonEmpty,
  EuiListGroup,
  EuiCard,
  EuiCheckableCard,
  EuiFlyout,
  EuiFlyoutHeader,
  EuiFlyoutBody,
  EuiFlyoutFooter,
  EuiTitle,
  EuiText,
  EuiSpacer,
  EuiIcon,
  EuiListGroupItemProps,
} from '@elastic/eui';
import {
  Category as CategoryType,
  StaticCategory as StaticCategoryType,
  ListCategory as ListCategoryType,
  isStaticCategory,
  SAMPLE_DATA,
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
  const [isFlyoutVisible, setFlyoutVisible] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const buttonProps: any = {};
  if (category.buttonType === 'flyout') {
    buttonProps.onClick = () => {
      setFlyoutVisible(true);
    };
  } else {
    buttonProps.href = category.href;
  }

  let icon;
  if (category.icon) {
    icon = <EuiIcon type={category.icon} size="l" />;
  }

  const toggleSelected = (id: string) => () => {
    const tmp = [...selected];
    const idx = tmp.indexOf(id);
    if (idx !== -1) {
      tmp.splice(idx, 1);
    } else {
      tmp.push(id);
    }
    setSelected(tmp);
  };

  const close = (success: boolean) => () => {
    setSelected([]);
    setFlyoutVisible(false);

    if (success) {
      notifications.toasts.addSuccess({
        title: i18n.translate('newHome.category.flyout.success.title', {
          defaultMessage: 'Sample data added',
        }),
        text: i18n.translate('newHome.category.flyout.success.text', {
          defaultMessage: 'View added sample data by navigating to dashboards or visualizations',
        }),
      });
    }
  };

  let flyout;
  if (isFlyoutVisible) {
    flyout = (
      <EuiFlyout
        ownFocus
        onClose={() => setFlyoutVisible(false)}
        aria-labelledby="new-home--category--flyout"
      >
        <EuiFlyoutHeader hasBorder>
          <EuiTitle size="m">
            <h2 id="new-home--category--flyout">
              <FormattedMessage
                id="newHome.category.flyout.title"
                defaultMessage="Add sample data"
              />
            </h2>
          </EuiTitle>
        </EuiFlyoutHeader>
        <EuiFlyoutBody>
          {SAMPLE_DATA.map<React.ReactNode>((sample) => (
            <EuiCheckableCard
              key={sample.id}
              id={sample.id}
              checkableType="checkbox"
              checked={selected.includes(sample.id)}
              onChange={toggleSelected(sample.id)}
              label={
                <>
                  <EuiTitle size="xs">
                    <p>{sample.title}</p>
                  </EuiTitle>
                  <EuiText>
                    <p>{sample.description}</p>
                  </EuiText>
                </>
              }
            />
          )).reduce((prev, curr, i) => [prev, <EuiSpacer key={i} />, curr])}
        </EuiFlyoutBody>
        <EuiFlyoutFooter>
          <EuiFlexGroup justifyContent="spaceBetween">
            <EuiFlexItem grow={false}>
              <EuiButtonEmpty iconType="cross" flush="left" color="danger" onClick={close(false)}>
                <FormattedMessage id="newHome.category.flyout.cancel" defaultMessage="Cancel" />
              </EuiButtonEmpty>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButton fill onClick={close(true)}>
                <FormattedMessage
                  id="newHome.category.flyout.submit"
                  defaultMessage="Add sample data"
                />
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlyoutFooter>
      </EuiFlyout>
    );
  }

  const footerContent = (
    <EuiFlexGroup justifyContent="flexEnd">
      <EuiFlexItem grow={false}>
        <EuiButton {...buttonProps}>{category.button}</EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>
  );

  return (
    <>
      <EuiFlexItem>
        <EuiCard
          title={category.title}
          description={category.description}
          footer={footerContent}
          icon={icon}
          image={category.image}
          textAlign="left"
        />
      </EuiFlexItem>
      {flyout}
    </>
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

  const extraAction = (i: number): EuiListGroupItemProps['extraAction'] | undefined =>
    category.favoritable
      ? {
          color: 'subdued',
          iconType: favorited[i] ? 'starFilled' : 'starEmpty',
          iconSize: 's',
          alwaysShow: favorited[i],
          onClick: handleFavorite(i),
          'aria-label': 'Favorite',
        }
      : undefined;

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
            extraAction: extraAction(i),
          }))}
        />
      </EuiCard>
    </EuiFlexItem>
  );
};
