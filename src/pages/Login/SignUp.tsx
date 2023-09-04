
import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import TextField from '../../components/Inputs/TextField';
import './Login.css'
import ButtonGeneric from '../../components/Button/ButtonGeneric';
import { chevronBackSharp, logoApple, logoFacebook, logoGoogle } from 'ionicons/icons';
import { useHistory } from 'react-router';
function SignUp() {
    const navigatePush = useHistory()
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonIcon onClick={() => navigatePush.goBack()} size='large' icon={chevronBackSharp} slot='start' />
                    <IonTitle >Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h1>Create an account</h1>
                <div className='container-inputs'>
                    <TextField labels={'First name'} name={'name'} onChange={''} placeholder={'Jane '} type={'text'} value={''} />
                    <TextField labels={'Last name'} name={'lastname'} onChange={''} placeholder={'Doe '} type={'text'} value={''} />
                    <TextField labels={'Phone number'} name={'phone'} onChange={''} placeholder={'+34123000000 '} type={'text'} value={''} />
                    <TextField labels={'Password'} name={'name'} onChange={''} placeholder={'Jane '} type={'text'} value={''} />
                    <TextField labels={'Confirm password'} name={'name'} onChange={''} placeholder={'Jane '} type={'text'} value={''} />
                    <ButtonGeneric name='Create account' bgButton='dark' iconPosition='' colorIcon='' icons='' click={''} />
                    <div className='divider'> Or</div>
                    <div className='container-inputs__butons'>
                        <ButtonGeneric name='Continue with Apple' bgButton='dark' iconPosition='' colorIcon='' icons={logoApple} click={''} />
                        <ButtonGeneric name='Continue with Google' bgButton='dark' iconPosition='' colorIcon='' icons={logoGoogle} click={''} />
                        <ButtonGeneric name='Continue with Facebook' bgButton='dark' iconPosition='' colorIcon='' icons={logoFacebook} click={''} />
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}
export default SignUp;