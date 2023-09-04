import './textField.css';

interface ContainerProps {
    onChange: any;
    value: any,
    labels: any,
    placeholder: any,
    name: any,
    type: any,
}

const TextField: React.FC<ContainerProps> = ({ labels, name, placeholder, type }) => {

    return (
        <div className='conten-input'>
            <label> {labels} </label>
            <input type={type} name={name} placeholder={placeholder} />
        </div>
    );
};

export default TextField;
