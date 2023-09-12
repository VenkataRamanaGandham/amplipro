import React from 'react';
import './index.css';

import { HeroBanner } from './ui-components';
import { ListingBlock } from './ui-components';
import { SterlizedComponent } from './ui-components';
import { Ultraviolet } from './ui-components';
import { ContactUsCreateForm } from './ui-components';
import { SubscribeNowCreateForm } from './ui-components';

import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';

import awsconfig from './aws-exports';

import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";

Amplify.configure(awsconfig);

function App() {
  return (
      <React.StrictMode>
        <ThemeProvider theme={studioTheme}>
        <HeroBanner />
        <ListingBlock />
        <SterlizedComponent />
        <Ultraviolet />
        <ContactUsCreateForm />
        <HeroBanner />    
        <SubscribeNowCreateForm />
        </ThemeProvider>
      </React.StrictMode>
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

export default App;
