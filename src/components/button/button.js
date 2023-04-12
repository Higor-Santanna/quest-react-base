import "./button.css"

function alertLabel(label){
    alert("A label desse botão é " + label)
}

const Button = (props) => {
    return(
        <div className = "button">
            <button onClick={() => alertLabel(props.label)}>Botões label</button>
        </div>
    )
}

export default Button