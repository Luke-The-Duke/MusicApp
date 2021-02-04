
import './Toolbar.css';

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
          <IonButton className="signInButton" fill="clear" color="light" slot="primary">Sign in</IonButton>
      </IonToolbar>
 );
  
  export default Toolbar;
  