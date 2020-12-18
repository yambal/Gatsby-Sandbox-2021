import React, { FunctionComponent } from 'react';
import { PageProps } from 'gatsby';
import { ReactComponent as Logo } from '../assets/svg/gatsby.svg';
import styles from '../style/pages/index.module.scss';
import { Button } from '../components/atom/Button';

const Index: FunctionComponent<PageProps> = () => (
  <div>
    <Button>Button</Button>
  </div>
);

export default Index;
