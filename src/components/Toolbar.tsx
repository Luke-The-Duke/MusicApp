
import './Toolbar.css';

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
   
      <IonToolbar>
        <IonRow>
         <IonImg className="icon" src='assets/icon/MusicHuntIcon.png' />
         <IonSearchbar className="searchBar" value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
        </IonRow>
        <IonButton className="signInButton" fill="clear" color="light" slot="primary">Sign in</IonButton>
      </IonToolbar> 
      )
  
  };
  
  export default Toolbar;
  