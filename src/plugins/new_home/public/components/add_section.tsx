import React, { FC, Dispatch, SetStateAction, useState } from 'react';
import {
  EuiFlyout,
  EuiFlyoutHeader,
  EuiFlyoutBody,
  EuiFlyoutFooter,
  EuiButton,
  EuiButtonEmpty,
  EuiTitle,
  EuiFlexGroup,
  EuiFlexItem,
  EuiCheckableCard,
  EuiText,
  EuiFormFieldset,
  EuiSpacer,
} from '@elastic/eui';
import { i18n } from '@osd/i18n';
import { FormattedMessage } from '@osd/i18n/react';

import { SECTION_GROUPS } from '../../common';
import { CoreStart } from '../../../../core/public';

interface Props {
  setFlyoutVisible: Dispatch<SetStateAction<boolean>>;
  sections: string[];
  setSections: Dispatch<SetStateAction<string[]>>;
  notifications: CoreStart['notifications'];
}

const FLAT_SECTIONS = SECTION_GROUPS.flatMap((section) => section.sections);

export const AddSectionFlyout: FC<Props> = ({
  setFlyoutVisible,
  sections,
  setSections,
  notifications,
}) => {
  const [selected, setSelected] = useState<string[]>([]);
  const selectedSections = selected.map(
    (title) => FLAT_SECTIONS.find((section) => section.title === title)!
  );
  const addableSections = selectedSections.filter((section) => !!section.id);

  const toggleSelect = (title: string) => () => {
    const tmp = [...selected];
    const idx = selected.indexOf(title);
    if (idx !== -1) {
      tmp.splice(idx, 0);
    } else {
      tmp.push(title);
    }
    setSelected(tmp);
  };

  const close = (success: boolean) => () => {
    setFlyoutVisible(false);

    if (success) {
      const tmp = [...sections];
      addableSections.forEach((section) => tmp.push(section.id!));
      setSections(tmp);

      const text =
        selected.length !== addableSections.length
          ? i18n.translate('newHome.addSection.flyout.success.text', {
              defaultMessage:
                "You selected some sections that aren't implemented yet. They will not show up.",
            })
          : undefined;

      notifications.toasts.addSuccess({
        title: i18n.translate('newHome.addSection.flyout.success.title', {
          defaultMessage: 'Sections added',
        }),
        text,
      });
    }
  };

  return (
    <EuiFlyout
      ownFocus
      onClose={() => setFlyoutVisible(false)}
      aria-labelledby="new-home--category--flyout"
    >
      <EuiFlyoutHeader hasBorder>
        <EuiTitle size="m">
          <h2 id="new-home--category--flyout">
            <FormattedMessage
              id="newHome.addSection.flyout.title"
              defaultMessage="Add content row"
            />
          </h2>
        </EuiTitle>
      </EuiFlyoutHeader>
      <EuiFlyoutBody>
        {SECTION_GROUPS.map<React.ReactNode>((group) => (
          <EuiFormFieldset
            key={group.title}
            legend={{
              children: (
                <EuiTitle size="xs">
                  <span>{group.title}</span>
                </EuiTitle>
              ),
            }}
          >
            {group.sections
              .map<React.ReactNode>((section) => (
                <EuiCheckableCard
                  key={section.id ?? section.title}
                  checked={selected.includes(section.title)}
                  onChange={toggleSelect(section.title)}
                  checkableType="checkbox"
                  id={section.id ?? section.title}
                  disabled={section.id ? sections.includes(section.id) : false}
                  label={
                    <>
                      <EuiTitle size="xs">
                        <p>{section.title}</p>
                      </EuiTitle>
                      <EuiText>
                        <p>{section.description}</p>
                      </EuiText>
                    </>
                  }
                />
              ))
              .reduce((prev, curr, i) => [prev, <EuiSpacer key={i} />, curr])}
          </EuiFormFieldset>
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
};
