

const PersonCard =(props) => {
    const incrementAge = () => {
        props.setAge(props.age + 1);
    }

    return (
        <div>
            <h2> {props.lastName} {props.firstName} </h2>
            <p> Age: {props.age}</p>
            <p> Hari Color: {props.hairColor} </p>
            <button onClick={incrementAge}>Bithday button for {props.firstName} </button>
        </div>
    )
}

export default PersonCard;