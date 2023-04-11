import Button from "../button/button"

const alertLabel = (label) => {
    console.log("fngljkhjfdg")
}

const Buttons = () => {
    return(
        <div>
            <h2>Desafio 2 - Mostrar mensagem com a label do botão</h2>

            <div>
                <Button>
                    <button label="React básico" alertLabel={alertLabel}>Primeiro label</button>
                </Button>
                <Button>
                    <button label = "Quest react básico" onClick={alertLabel}>Segunda label</button>
                </Button>
            </div>
        </div>
    )
}

export default Buttons