import { IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import { paths } from '../../models/path';
import { Redirect, Route } from 'react-router';
import Restaurant from '../../pages/Restaurants/Restaurant';


function Sidebar() {
    return (
        <IonPage>
            <IonSplitPane contentId='main'>
                <IonMenu contentId='main'>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Menu</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        {
                            paths.map((path, index) => (
                                <IonMenuToggle key={index}>
                                    <IonItem routerLink={path.url} routerDirection='none'>
                                        <IonIcon icon={path.icon} slot='start'>  </IonIcon>
                                        {path.name}
                                    </IonItem>
                                </IonMenuToggle>
                            ))
                        }
                    </IonContent>
                </IonMenu>
                <IonRouterOutlet id='main'>
                    <Route exact path="/app/restaurant" component={Restaurant} />
                    <Route exact path='/app'>
                        <Redirect to='/app/restaurant' />
                    </Route>
                </IonRouterOutlet>
            </IonSplitPane>
        </IonPage>

    );
}
export default Sidebar;