import React, { FC, useState } from 'react';
import { i18n } from '@osd/i18n';
import { FormattedMessage } from '@osd/i18n/react';
import {
  EuiPanel,
  EuiFlexGroup,
  EuiFlexItem,
  EuiLink,
  EuiCard,
  EuiButtonIcon,
  EuiPopover,
  EuiContextMenu,
  EuiContextMenuPanelDescriptor,
} from '@elastic/eui';

import { CoreStart } from '../../../../core/public';
import { Section as SectionType } from '../../common';
import { Category } from './category';

interface Props {
  notifications: CoreStart['notifications'];
  section: SectionType;
  first: boolean;
  last: boolean;
  dismiss: () => void;
  moveUp: () => void;
  moveDown: () => void;
}

const OptionsMenu = ({
  first,
  last,
  dismiss,
  moveUp,
  moveDown,
}: {
  first: boolean;
  last: boolean;
  dismiss: () => void;
  moveUp: () => void;
  moveDown: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const closePopover = () => {
    setIsOpen(false);
  };

  const panels: EuiContextMenuPanelDescriptor[] = [
    {
      id: 0,
      title: i18n.translate('newHome.section.options.title', { defaultMessage: 'Section Options' }),
      items: [
        {
          name: i18n.translate('newHome.section.options.dismiss', {
            defaultMessage: 'Dismiss section',
          }),
          icon: 'cross',
          onClick: () => {
            closePopover();
            dismiss();
          },
        },
        {
          name: i18n.translate('newHome.section.options.moveUp', { defaultMessage: 'Move up' }),
          icon: 'sortUp',
          disabled: first,
          onClick: () => {
            closePopover();
            moveUp();
          },
        },
        {
          name: i18n.translate('newHome.section.options.moveDown', { defaultMessage: 'Move down' }),
          icon: 'sortDown',
          disabled: last,
          onClick: () => {
            closePopover();
            moveDown();
          },
        },
      ],
    },
  ];

  const button = (
    <EuiButtonIcon
      iconType="boxesHorizontal"
      color="text"
      aria-label={i18n.translate('newHome.section.options', { defaultMessage: 'Options' })}
      onClick={onButtonClick}
    />
  );

  return (
    <EuiPopover button={button} isOpen={isOpen} closePopover={closePopover} panelPaddingSize="none">
      <EuiContextMenu panels={panels} initialPanelId={0} />
    </EuiPopover>
  );
};

export const Section: FC<Props> = ({
  notifications,
  section,
  first,
  last,
  dismiss,
  moveUp,
  moveDown,
}) => {
  const { title, description, docLink, categories } = section;

  return (
    <EuiFlexItem>
      <EuiPanel>
        <EuiFlexGroup gutterSize="m">
          <EuiFlexItem>
            <EuiCard title={title} display="plain" layout="horizontal" description={description}>
              {docLink && (
                <EuiLink href={docLink} target="_blank">
                  <FormattedMessage id="newHome.docLink" defaultMessage="Documentation" />
                </EuiLink>
              )}
            </EuiCard>
          </EuiFlexItem>
          {categories.map((category, i) => (
            <Category key={i} category={category} notifications={notifications} />
          ))}
          <EuiFlexItem grow={false}>
            <OptionsMenu
              first={first}
              last={last}
              dismiss={dismiss}
              moveUp={moveUp}
              moveDown={moveDown}
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>
    </EuiFlexItem>
  );
};
