import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { checkmarkSharp } from 'ionicons/icons';
import './Tabs.css'
interface ContainerProps {
    options: Array<any>,
    pathName: string

}
const TabsGeneric: React.FC<ContainerProps> = ({ options, pathName }) => {
    return (
        <div className='tabs-contend'>
            {
                options.map((tab, index) => (
                    <IonButton key={index} className={`${tab.path === pathName && 'button-active'} button-tab `}>
                        {
                            tab.path === pathName && <IonIcon icon={checkmarkSharp} size='small' className='icon'></IonIcon>
                        }
                        {tab.name}
                    </IonButton>
                ))
            }
        </div>
    );
}
export default TabsGeneric;