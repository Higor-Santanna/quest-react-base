import "./button.css"

const Button = ({children, label, alertLabel}) => {
    return(
        <div className = "button" onClick={() => alertLabel(label)}>   
            {children}
        </div>
    )
}

export default Button