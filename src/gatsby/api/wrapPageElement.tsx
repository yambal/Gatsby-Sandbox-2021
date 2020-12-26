import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import { Layout } from '../../components/Layout';
import { AppProvider } from '../../app/AppProvider';

/**
 * Font Awesome よみこみ
 * See https://fontawesome.com/how-to-use/on-the-web/using-with/react
 */
import "@fortawesome/fontawesome-svg-core/styles.css" // a. CSSを静的に読み込む <--   b
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
config.autoAddCss = false  // b. ランタイムCSS追加を無効化（Gatsby での遅延を解消する）　https://blog.uhy.ooo/entry/2020-05-10/gatsby-fontawesome-ssg/
library.add(far, fas)

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => (
  <AppProvider>
    {element}
  </AppProvider>
);
