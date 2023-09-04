import ButtonGeneric from '../Button/ButtonGeneric';
import imgRestaurant from '../../assets/mat-img.png'
import './Card.css';
import { chevronForward, locationSharp, star } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

interface ContainerProps {
    name: string;
    image: string,
    descripcion: string,
    location: string,
    time: Number,
    category: Array<any>,
    funtion: (values: any) => void;
}

const CardRestaurant: React.FC<ContainerProps> = ({ name, image, descripcion, location, time, category, funtion }) => {

    return (
        <div className="container">
            <div className='container__header'>

            </div>
            <div className='container__body'>
                <div className='container__body_img'>
                    <img src={imgRestaurant} alt="" />
                    <div>
                        <p>Save 20 min of waiting time</p>
                    </div>

                </div>
                <div className='container__body_info'>
                    <div className='container__body_info__raint'>
                        <div className='container__body_info__rating_start'>
                            4.5 (200)
                            <IonIcon icon={star}></IonIcon>
                        </div>
                        <div className='container__body_info__raint_category'>
                            {
                                category.map((item, index) => (
                                    <p key={index}>{item.name} </p>
                                ))
                            }
                        </div>

                    </div>
                    <div className='container__body_info__location'>
                        <p>Restaurant name</p>
                        <p>Style of food</p>
                        <div>
                            <IonIcon icon={locationSharp}></IonIcon>
                            <p>C. Compte de Urgell, 95 • 1.5 km</p>
                        </div>
                        <p>Table for 2 • <strong>In 15 min </strong> </p>
                    </div>
                    <div className='container__body_info__button'>
                        <ButtonGeneric click={funtion} name='Availability' icons={chevronForward} iconPosition='end' bgButton='dark' colorIcon='' />
                    </div>

                </div>

            </div>

        </div>
    );
};

export default CardRestaurant;
