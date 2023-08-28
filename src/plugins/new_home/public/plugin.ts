import { i18n } from '@osd/i18n';
import {
  AppMountParameters,
  CoreSetup,
  CoreStart,
  Plugin,
  DEFAULT_APP_CATEGORIES,
} from '../../../core/public';
import { NewHomePluginSetup, NewHomePluginStart, NewHomeServices } from './types';
import { PLUGIN_NAME } from '../common';
import { Storage } from '../../opensearch_dashboards_utils/public';

export class NewHomePlugin implements Plugin<NewHomePluginSetup, NewHomePluginStart> {
  public setup(core: CoreSetup): NewHomePluginSetup {
    // Register an application into the side navigation menu
    core.application.register({
      id: 'newHome',
      title: 'New Home',
      category: DEFAULT_APP_CATEGORIES.opensearchDashboards,
      async mount(params: AppMountParameters) {
        // Load application bundle
        const { renderApp } = await import('./application');
        // Get start services as specified in opensearch_dashboards.json
        const [coreStart] = await core.getStartServices();

        const services: NewHomeServices = {
          ...coreStart,
          localStorage: new Storage(localStorage),
        };

        // Render the application
        return renderApp(services, params);
      },
    });

    // Return methods that should be available to other plugins
    return {
      getGreeting() {
        return i18n.translate('newHome.greetingText', {
          defaultMessage: 'Hello from {name}!',
          values: {
            name: PLUGIN_NAME,
          },
        });
      },
    };
  }

  public start(core: CoreStart): NewHomePluginStart {
    return {};
  }

  public stop() {}
}
