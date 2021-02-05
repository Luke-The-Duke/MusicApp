
import './Toolbar.css';
import SignInPage from '../pages/SignInPage'

import React, { useState } from 'react';

import {
    IonToolbar,
    IonTitle,
    IonButton,
    IonImg,
    IonItem,
    IonSearchbar,
    IonRow,
  } from '@ionic/react';

const Toolbar: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  return (
   
      <IonToolbar className="toolBar">
        <IonRow>
          <IonButton className="icon-button" routerLink="/Dashboard"> 
            <IonImg className="icon" src='assets/icon/MusicHuntIcon.png' /> 
          </IonButton>    
          <IonSearchbar className="searchBar" value={searchText} onIonChange={e => setSearchText(e.detail.value!)} />
        </IonRow>
        <IonButton routerLink="/signin" className="signInButton" fill="clear" color="light" slot="primary">Sign in</IonButton>
      </IonToolbar> 
      )
   
  };
  
  export default Toolbar;
  