import './List.css'
interface ContainerProps {
    name: string;
    image: string,
    info: string,
    price: any
}

const ListCardMedium: React.FC<ContainerProps> = ({ name, image, info, price }) => {
    return (
        <div className='container-card'>
            <img src={image} alt="" />
            <div className='container-card__info'>
                <p> {name} </p>
                <p>{info}</p>
            </div>
            <div className='container-card__price'>
                <p>{price} </p>
                <p>+</p>
            </div>
        </div>
    );
};

export default ListCardMedium;
