import styled from "styled-components";
import color from "../../../utils/colours";

const StyledExplanation= styled.main`
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
background: #FFFFFF;
height: 100%;
width: 50%;
box-shadow: 1px 1px 20px -10px black;
p{
    font-weight: 500;
}
h3{
    font-size: medium;
}
.container{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
}
.welcome{
    height: 20%;
    width: 75%;
}
.explanation{
    height: 70%;
    width: 75%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .options{
        display: flex;
        flex-direction: column; 
        gap: 20px;
        .opt{
            display: flex;
            align-items: center;
            background: ${color.main} ;
            color: #FFFFFF;
            height: 30px;
            padding: 10px;
            border-radius: 10px;
        }
    }
    .qr{
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${color.main} ;
        color: #FFFFFF;
        height: 150px;
        padding: 10px;
        border-radius: 10px;
        a{
            color: blue;
            text-decoration: none;
        }
        .text{
            width: 60%;
            padding: 10px;
        }
        .img{
            border-radius: 10px;
            width: 130px;
            height: 140px;
        }
    }
}
`;

function Explanation(){
    return(
        <StyledExplanation>
            <div className="container">
                <div className="welcome">
                    <h1>
                        Olá, quer facilitar o acesso as informações do seu pet?
                    </h1>
                </div>
                <div className="explanation">
                    <h2>
                    Aqui você vai conseguir:
                    </h2>
                    <div className="options">
                        <div className="opt">
                            <h3>
                                Cadastrar as informações do seu pet
                            </h3>
                        </div>
                        <div className="opt">
                            <h3>
                                Enviar um resumo ao seu veterinário
                            </h3>
                        </div>
                        <div className="opt">
                            <h3>
                                Ter um QR Code de identificação na coleira do seu Pet*
                            </h3>
                        </div>
                    </div>
                    <div className="qr">
                        <div className="text">
                            <h3>Veja como é legal!</h3>
                            <p>
                                Com essa ferramenta, caso ele se perca, você poderá compartilhar informações de contato e saúde do seu pet
                            </p>
                            <p>
                                Escaneie o exemplo ao lado
                            </p>
                            <p>
                                Ou <a href="#">clique aqui</a>
                            </p>
                        </div>
                        <img
                        src="./qr.png"
                        className="img"
                        alt="qr code exemplo para busca de animais"/>
                    </div>
                </div>
            </div>
        </StyledExplanation>
    )
}

export default Explanation