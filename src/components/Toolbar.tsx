
import './Toolbar.css';
import SignInPage from '../pages/SignInPage'

import {
    IonToolbar,
    IonTitle,
    IonButton,
    IonImg,
    IonItem
  } from '@ionic/react';

const Toolbar: React.FC = () => (
   
      <IonToolbar>
          <IonImg className="icon" src='assets/icon/MusicHuntIcon.png' />
          <IonButton routerLink="/signin" className="signInButton" fill="clear" color="light" slot="primary">Sign in</IonButton>
      </IonToolbar>
 );
  
  export default Toolbar;
  