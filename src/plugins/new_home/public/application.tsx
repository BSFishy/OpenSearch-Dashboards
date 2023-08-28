import React from 'react';
import ReactDOM from 'react-dom';
import { AppMountParameters } from '../../../core/public';
import { NewHomeApp } from './components/app';
import { NewHomeServices } from './types';

export const renderApp = (
  { notifications }: NewHomeServices,
  { appBasePath, element }: AppMountParameters
) => {
  ReactDOM.render(<NewHomeApp basename={appBasePath} notifications={notifications} />, element);

  return () => ReactDOM.unmountComponentAtNode(element);
};
