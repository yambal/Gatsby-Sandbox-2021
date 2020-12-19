import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import { Layout } from '../../components/Layout';
import { AppProvider } from '../../app/AppProvider';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => (
  <AppProvider>
    {element}
  </AppProvider>
);
