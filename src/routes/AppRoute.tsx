import { Route } from 'react-router-dom';
import {
    IonApp,
    IonRouterOutlet,
    setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import '../theme/variables.css';
import Sidebar from '../components/Menu/Sidebar';
import DetailsRestaurans from '../pages/Restaurants/DetailsRestaurans';
import Starters from '../pages/Restaurants/Options/Starters';
import Combos from '../pages/Restaurants/Options/Combos';
import Home from '../pages/Home';
import SignUp from '../pages/Login/SignUp';
import SignIn from '../pages/Login/SignIn';

setupIonicReact();

const AppRoute: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonRouterOutlet>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/signin" component={SignIn} />
                <Route path="/app" component={Sidebar} />
                <Route exact path="/restaurant/:id" component={DetailsRestaurans} />
                <Route exact path="/starters" component={Starters} />
                <Route exact path="/combos" component={Combos} />
            </IonRouterOutlet>
        </IonReactRouter>
    </IonApp>
);

export default AppRoute;