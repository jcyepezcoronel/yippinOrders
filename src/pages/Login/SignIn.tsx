
import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import TextField from '../../components/Inputs/TextField';
import './Login.css'
import ButtonGeneric from '../../components/Button/ButtonGeneric';
import { chevronBackSharp, logoApple, logoFacebook, logoGoogle } from 'ionicons/icons';
import { useHistory } from 'react-router';
function SignIn() {
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
                <h1>Log in to order</h1>
                <div className='container-inputs-in'>
                    <TextField labels={'Email'} name={'email'} onChange={''} placeholder={'janedoe@gmail.com '} type={'text'} value={''} />
                    <TextField labels={'Password'} name={'lastname'} onChange={''} placeholder={'Doe '} type={'text'} value={''} />
                    <div className='route-login'>
                        <p>Forgot password?</p>
                        <p >
                            Reset it
                        </p>
                    </div>
                    <ButtonGeneric name='Login' bgButton='dark' iconPosition='' colorIcon='' icons='' click={''} />
                    <div className='route-login center'>
                        <p>Don’t have an account?</p>
                        <p onClick={() => navigatePush.push('/signup')}>
                            Sign up
                        </p>
                    </div>
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
export default SignIn;