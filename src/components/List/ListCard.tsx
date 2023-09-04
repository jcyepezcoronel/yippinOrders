import { IonContent, IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/react';

import './List.css'
import { useHistory } from 'react-router';
interface ContainerProps {
    name: string;
    image: string,
    location: string,
}

const ListCard: React.FC<ContainerProps> = ({ name, image, location }) => {
    const navigate = useHistory()

    return (
        <IonContent color="light">
            <IonList inset={true}>
                <IonItem className='h-full' button onClick={() => navigate.push(`/restaurant/${1}`)}>
                    <IonThumbnail slot="start" className='conted-img'>
                        <img alt="Silhouette of mountains" src={image} />
                    </IonThumbnail>
                    <IonLabel>{name} </IonLabel>
                    <IonLabel>{location} </IonLabel>
                </IonItem>
            </IonList>
        </IonContent>
    );
};

export default ListCard;
