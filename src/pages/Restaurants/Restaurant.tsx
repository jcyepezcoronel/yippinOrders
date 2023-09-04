import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ListCard from '../../components/List/ListCard';
import img from '../../assets/mat-img.png'

const Restaurant: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">List Restaurant</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <ListCard
                        name='Restaurant name'
                        image={img}
                        location='C. Compte de Urgell, 95 • 1.5 km'
                    />
                </IonContent>
            </IonContent>
        </IonPage>
    );
};

export default Restaurant;
