// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import reactToWebComponent from 'react-to-webcomponent';
import ReactDOM from 'react-dom';
import { inDev } from './utils/helpers';

const Greeting = ({ name }: { name?: string }) => {
  console.log(name);

  return <h1>Hello, {name}</h1>;
};

const WebGreeting = reactToWebComponent(Greeting, React, ReactDOM);

customElements.define('web-greeting', WebGreeting);

if (inDev() && module.hot) module.hot.accept();
