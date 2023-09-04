import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { chevronBackSharp } from 'ionicons/icons';
import { useHistory } from 'react-router';
import './Options.css'
import { option2 } from '../../../models/optionTab';
import TabsGeneric from '../../../components/Tabs/TabsGeneric';
import ListCardMedium from '../../../components/List/ListCardMedium';
import imgExample from '../../../assets/mat-img.png'


const listCombos = [
    {
        img: imgExample,
        name: 'Item',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque dolorum reiciendis, nihil dicta ipsum officia expedita nobis quos consequatur repudiandae aperiam vitae laboriosam? Atque temporibus fuga provident ratione ullam ipsum.',
        price: '12€'
    },
    {
        img: imgExample,
        name: 'Item',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque dolorum reiciendis, nihil dicta ipsum officia expedita nobis quos consequatur repudiandae aperiam vitae laboriosam? Atque temporibus fuga provident ratione ullam ipsum.',
        price: '15€'
    },
    {
        img: imgExample,
        name: 'Item',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque dolorum reiciendis, nihil dicta ipsum officia expedita nobis quos consequatur repudiandae aperiam vitae laboriosam? Atque temporibus fuga provident ratione ullam ipsum.',
        price: '20€'
    },

]

const Combos: React.FC = () => {

    const navigatePush = useHistory()
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonHeader>
                    <IonToolbar>
                        <IonIcon onClick={() => navigatePush.goBack()} size='large' icon={chevronBackSharp} slot='start' />
                        <IonTitle  >Nombre del Restaurant</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <TabsGeneric options={option2} pathName='combos' />

                    <div className='contendListCard'>
                        {
                            listCombos.map((list, index) => (
                                <ListCardMedium key={index} image={list.img} name={list.name} info={list.info} price={list.price} />
                            ))
                        }
                    </div>
                    <div className='container-modal__button'>
                        <IonButton className='button-order'>
                            Preorder • €€
                        </IonButton>
                    </div>
                </IonContent>
            </IonContent >
        </IonPage>

    );
};

export default Combos;
