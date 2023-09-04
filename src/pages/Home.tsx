import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
function Home() {
    const navigate = useIonRouter();
    const doRou = () => {
        navigate.push('/app', 'forward', 'replace')
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton expand='full' onClick={() => doRou()}>
                    Test
                </IonButton>
            </IonContent>
        </IonPage>

    );
}
export default Home;