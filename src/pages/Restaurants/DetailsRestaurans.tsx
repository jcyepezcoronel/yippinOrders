import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { chevronBackSharp, chevronDown, chevronForward, close } from 'ionicons/icons';
import { useHistory } from 'react-router';
import CardRestaurant from '../../components/Cards/CardRestaurant';
import ModalGeneric from '../../components/Modals/ModalGeneric';
import { useState } from 'react';
import { options } from '../../models/optionsModal';
import './Restaurant.css'
import { option1 } from '../../models/optionTab';
import TabsGeneric from '../../components/Tabs/TabsGeneric';

const category = [{ name: 'Cozy', id: 1 }, { name: 'Terrace', id: 2 }]

const DetailsRestaurans: React.FC = () => {
    const navigatePush = useHistory()
    const [openModal, setOpenModal] = useState(false)

    const modalOpen = () => {
        setOpenModal(true)
    }
    const modalClose = () => {
        setOpenModal(false)
    }
    const goRoute = (routeUrl: string) => {
        setOpenModal(false)
        navigatePush.push(routeUrl)

    }
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonHeader>
                    <IonToolbar>
                        <IonIcon onClick={() => navigatePush.push('/app/restaurant')} size='large' icon={chevronBackSharp} slot='start' />
                        <IonTitle >Name Restaurant</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <IonContent>
                        <IonHeader>
                            <TabsGeneric options={option1} pathName='restaurant' />
                        </IonHeader>
                        <CardRestaurant
                            image=''
                            name=''
                            descripcion=''
                            location=''
                            time={4}
                            category={category}
                            funtion={modalOpen}
                        />
                    </IonContent>
                </IonContent>
                <div className='radius-modal'>
                    <ModalGeneric isActive={openModal} setActive={modalClose} heightPoint={1} header={false} modeClose={true}>
                        <IonContent className="ion-padding">
                            <div className='header-close'>
                                <div>
                                    <h6>Menu</h6>
                                    <p>Choose your meal, save time</p>
                                </div>
                                <IonIcon onClick={modalClose} size='large' icon={close}></IonIcon>
                            </div>

                            <div className='button-container'>
                                {
                                    options.map((op, index) => (
                                        <button key={index} onClick={() => goRoute(op.url)}>
                                            <p> {op.name} </p>
                                            <IonIcon color={'dark'} size='large' icon={chevronForward}></IonIcon>
                                        </button>
                                    ))
                                }
                            </div>
                        </IonContent>
                    </ModalGeneric>
                </div>
            </IonContent>
        </IonPage>

    );
};

export default DetailsRestaurans;
