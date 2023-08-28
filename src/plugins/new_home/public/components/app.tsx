import React, { ReactNode, useState, useMemo, Dispatch, SetStateAction } from 'react';
import { i18n } from '@osd/i18n';
import { FormattedMessage, I18nProvider } from '@osd/i18n/react';
import { BrowserRouter as Router } from 'react-router-dom';

import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiLink,
  EuiPageTemplate,
  EuiSpacer,
} from '@elastic/eui';

import { CoreStart } from '../../../../core/public';
import { Section } from './section';
import { AddSectionFlyout } from './add_section';
import { Section as SectionType, SECTIONS } from '../../common';
import { useSectionOrder as useSectionOrderLocalStorage } from '../util';

interface NewHomeAppDeps {
  basename: string;
  notifications: CoreStart['notifications'];
}

const useSectionOrder = (): [SectionType[], string[], Dispatch<SetStateAction<string[]>>] => {
  const [sectionOrder, setSectionOrder] = useSectionOrderLocalStorage();

  // memoize this, as finding the sections could be performance intensive
  return useMemo(() => {
    const sections: SectionType[] = [];
    for (const sectionId of sectionOrder) {
      const section = SECTIONS.find((s) => s.id === sectionId)!;
      sections.push(section);
    }

    return [sections, sectionOrder, setSectionOrder];
  }, [sectionOrder, setSectionOrder]);
};

export const NewHomeApp = ({ basename, notifications }: NewHomeAppDeps) => {
  const [sections, sectionOrder, setSectionOrder] = useSectionOrder();
  const [isFlyoutVisible, setFlyoutVisible] = useState(false);

  const dismiss = (index: number) => () => {
    const tmp = [...sectionOrder];
    tmp.splice(index, 1);
    setSectionOrder(tmp);
  };

  const moveUp = (index: number) => () => {
    const tmp = [...sectionOrder];
    tmp[index - 1] = sectionOrder[index];
    tmp[index] = sectionOrder[index - 1];
    setSectionOrder(tmp);
  };

  const moveDown = (index: number) => () => {
    const tmp = [...sectionOrder];
    tmp[index] = sectionOrder[index + 1];
    tmp[index + 1] = sectionOrder[index];
    setSectionOrder(tmp);
  };

  const manageHandler = () => {
    notifications.toasts.addInfo('Manage homepage not implemented.');
  };

  const addSectionHandler = () => {
    setFlyoutVisible(true);
  };

  const manageButton = (
    <EuiLink onClick={manageHandler}>
      <EuiFlexGroup justifyContent="center" alignItems="center" gutterSize="s">
        <EuiFlexItem grow={false}>
          <EuiIcon type="home" />
        </EuiFlexItem>
        <EuiFlexItem>
          <FormattedMessage id="newHome.manage" defaultMessage="Manage homepage" />
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiLink>
  );

  return (
    <Router basename={basename}>
      <I18nProvider>
        <EuiPageTemplate
          template="empty"
          restrictWidth={1386}
          pageHeader={{
            alignItems: 'center',
            pageTitle: i18n.translate('newHome.title', {
              defaultMessage: 'Get Started with OpenSearch',
            }),
            rightSideItems: [manageButton],
            bottomBorder: false,
          }}
        >
          <EuiFlexGroup direction="column">
            {sections.map<ReactNode>((section, i) => (
              <Section
                key={section.id}
                section={section}
                notifications={notifications}
                first={i === 0}
                last={i === sections.length - 1}
                dismiss={dismiss(i)}
                moveUp={moveUp(i)}
                moveDown={moveDown(i)}
              />
            ))}
          </EuiFlexGroup>
          <EuiSpacer />
          <EuiButton fullWidth iconType="plusInCircle" onClick={addSectionHandler}>
            <FormattedMessage id="newHome.addsection" defaultMessage="Add custom content section" />
          </EuiButton>
          {isFlyoutVisible && (
            <AddSectionFlyout
              notifications={notifications}
              sections={sectionOrder}
              setFlyoutVisible={setFlyoutVisible}
              setSections={setSectionOrder}
            />
          )}
        </EuiPageTemplate>
      </I18nProvider>
    </Router>
  );
};
