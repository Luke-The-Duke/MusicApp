import "./SignInPage.css"

import { IonContent,IonItem, IonText, IonHeader, IonPage, IonTitle, IonToolbar, IonInput } from '@ionic/react';

import React, { useState } from 'react';

const SignInPage: React.FC = () => {
  const [text, setText] = useState<string>();
    return (
        <IonPage className="signup-page-container">
          <IonContent className="signup-container">  
            <IonText className="signup-text"><h1>Sign up or log in</h1></IonText>
            <IonInput type="email" inputmode="email" className="email-input" value={text} placeholder="Enter email" onIonChange={e => setText(e.detail.value!)}></IonInput>
          </IonContent>
        </IonPage>
    );
  };
  
  export default SignInPage;