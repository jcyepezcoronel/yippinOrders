import './Modal.css'
import { IonButtons, IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle } from '@ionic/react';
interface ContainerProps {
    isActive: boolean;
    setActive: (values: any) => void;
    children: React.ReactNode,
    heightPoint: number,
    header: boolean,
    modeClose: boolean
}
const ModalGeneric: React.FC<ContainerProps> = ({ isActive, setActive, children, heightPoint, header, modeClose }) => {
    return (
        <IonContent>
            <IonModal backdropDismiss={modeClose} isOpen={isActive} initialBreakpoint={heightPoint} className='modal-custom'>
                {
                    header &&
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Modal</IonTitle>
                            <IonButtons slot="end">
                                <IonButton onClick={setActive}>Close</IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                }
                <IonContent>
                    {children}
                </IonContent>
            </IonModal>
        </IonContent>

    );
}
export default ModalGeneric;