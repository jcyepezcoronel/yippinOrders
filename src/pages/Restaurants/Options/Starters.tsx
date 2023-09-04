import { IonButton, IonContent, IonHeader, IonIcon, IonItemDivider, IonItemGroup, IonPage, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { chevronBackSharp, close } from 'ionicons/icons';
import { useHistory } from 'react-router';
import { useState } from 'react';
import './Options.css'
import ModalGeneric from '../../../components/Modals/ModalGeneric';
import { option2 } from '../../../models/optionTab';
import TabsGeneric from '../../../components/Tabs/TabsGeneric';

const Starters: React.FC = () => {
    const navigatePush = useHistory()
    const [openModal, setOpenModal] = useState(true)
    const [person, setPerson] = useState(1)
    const [activeSelect, setActiveSelect] = useState(false)



    const modalClose = () => {
        setOpenModal(false)
        navigatePush.goBack()
    }
    const counter = (suma: string) => {
        if (suma === '+') {
            setPerson(person + 1)
        } else if (person >= 1) {
            setPerson(person - 1)
        }

    }
    const preOrder = () => { }
    const handle = (e: any) => {
        if (e.detail.checked) {
            setActiveSelect(true)
        } else {
            setActiveSelect(false)
        }

    }
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonHeader>
                    <IonToolbar>
                        <IonIcon onClick={() => navigatePush.goBack()} size='large' icon={chevronBackSharp} slot='start' />
                        <IonTitle  >Nombre del Restaurant</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <IonContent>
                        <TabsGeneric options={option2} pathName='starters' />
                    </IonContent>
                </IonContent>
                <ModalGeneric isActive={openModal} setActive={modalClose} heightPoint={0.85} header={false} modeClose={false}>
                    <div className='container-contend' >
                        <div className='container-modal'>
                            <div className='header-close'>
                                <div>
                                    <h6>Your preorder</h6>
                                    <p>How many people are going?</p>
                                </div>
                                <IonIcon onClick={modalClose} size='large' icon={close}></IonIcon>
                            </div>

                            <div className='container-modal__counter'>
                                <p>
                                    {person} person
                                </p>
                                <div className='container-modal__counter_button'>
                                    <p onClick={() => counter('-')}>-</p>
                                    <p>{person}</p>
                                    <p onClick={() => counter('+')}>+</p>
                                </div>
                            </div>
                            <div className='container-modal__select'>
                                <p>When are you going</p>
                                <div className="select-dropdown">
                                    <select>
                                        <option value="Option 1">I’m already here</option>
                                        <option value="Option 2">Option 2</option>
                                        <option value="Option 3">In 30 minutes</option>
                                        <option value="Option 4">In 45 minutes</option>
                                    </select>
                                </div>

                            </div>
                            <div className='container-modal__toggle'>
                                <p>Do you have any allergies?</p>
                                <IonToggle class='custom-toggle' color='success' onIonChange={(e) => handle(e)} />
                            </div>
                            {
                                activeSelect && (
                                    <div className='select-active'>
                                        <p>Select as many as you need</p>
                                        <div className="select-dropdown">
                                            <select>
                                                <option value="Option 1">Option 1</option>
                                                <option value="Option 2">Option 2</option>
                                                <option value="Option 3">Option 3</option>
                                                <option value="Option 4">Option 4</option>
                                            </select>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div className='container-modal__button'>
                            <IonButton className='button-order'>
                                Preorder • €€
                            </IonButton>
                        </div>
                    </div>
                </ModalGeneric>
            </IonContent >
        </IonPage>
    );
};

export default Starters;
