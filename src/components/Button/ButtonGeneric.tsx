import { IonButton, IonIcon } from '@ionic/react';
import './Button.css';
interface ContainerProps {
    name: any;
    icons: any,
    iconPosition: any,
    colorIcon: any,
    bgButton: any,
    click: any,
}

const ButtonGeneric: React.FC<ContainerProps> = ({ name, icons, iconPosition, bgButton, colorIcon, click }) => {

    return (
        <IonButton
            onClick={click}
            className='button-contend'
            expand='block'
            color={bgButton}
        >
            {
                icons && <IonIcon slot={iconPosition} size='large' color={colorIcon} icon={icons}></IonIcon>
            }

            {name}
        </IonButton>
    );
};

export default ButtonGeneric;
