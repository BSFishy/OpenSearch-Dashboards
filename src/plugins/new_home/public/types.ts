import { CoreStart } from 'src/core/public';

export interface NewHomePluginSetup {
  getGreeting: () => string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NewHomePluginStart {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppPluginStartDependencies {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NewHomeServices extends CoreStart {}
