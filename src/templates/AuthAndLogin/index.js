import { Button } from "@chakra-ui/react";
import styled from "styled-components";
import color from "../../utils/colours";
import { useState } from "react";
import api from "../../hooks/useApi";
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'

const StyledAuthComponent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
width: 50%;
.form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 500px;
    width: 350px;
    background: transparent;
    .buttons{
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 10px;
        button{
            font-weight: 600;
            box-shadow: 1px 1px 20px -10px black;
            background: #FFFFFF;
            border: none;
            border-radius: 10px;
            width: 50%;
            height: 70px;
            &:hover{
                background: #F7F7F7;
            }
        }
    }

    .form-auth{
        box-shadow: 1px 1px 20px -10px black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #FFFFFF;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        gap: 10px;
        
        button{
            width: 250px;
        }
        .form-item{
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: fit-content;
                .run{
                    font-weight: 500;
                    height: 25px;
                    width: 260px;
                    background: ${color.main};
                    border-radius: 5px;
                    border: none;
                    color: #FFFFFF;
                }
                .nobg{
                    font-weight: 500;
                    height: 25px;
                    width: 260px;
                    background: transparent;
                    border-radius: 5px;
                    border: 1.4px solid ${color.main};
                    color: ${color.main};
                }
            label{font-weight: 500;}
            input{
                width: 250px;
                border-radius: 5px;
                border: 1.4px solid #E2E8F0;
            }
            label{
                font-size: x-small;
            }
            span{
                font-size: xx-small;
                color: red;
            }
            
            .password-input{
                width: 250px;
                display: flex;
                /* flex-direction: column; */
                justify-content: flex-start;
                align-items: center;
                input{
                    width: 100%;
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                }
                button{
                    border-radius: 5px;
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                    border: 1.4px solid #E2E8F0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 20px;
                    height: 100%;
                }
            }
        }
    }
}

`;


function AuthAndLogin() {

    const [moment, setMoment] = useState(1);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [displayPassword, setDisplayPassword] = useState('password');
    const [howMeetUs, setHowMeetUs] = useState();
    const [cellphone, setCellphone] = useState();
    const [icon, setIcon] = useState(false);

    const formatCellphone = () => {
        // let re = new RegExp(\^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$)
        let cell = String(cellphone)
        let formattedPhone = cell
        return formattedPhone
    }

    const displayPassHandler = () => {
        if (displayPassword == 'password') {
            setDisplayPassword('text');
            setIcon(true);
        }
        if (displayPassword == 'text') {
            setDisplayPassword('password')
            setIcon(false)
        }
    }

    const loginHandler = () => {
        api.post(
            'api/user/auth',
            { email: email, password: password },
            { headers: { 'Content-Type': 'application/json' } })
            .then((res) => {
                console.log(res.data)
                // window.location.reload()
            })
            .catch((error) => console.log(error))
    }

    const registerHandler = () => {
        api.post(
            'api/user/register',
            {
                email: email,
                cellphone: cellphone,
                howMeetUs: howMeetUs,
                password: password
            },
            { headers: { 'Content-Type': 'application/json' } })
            .then((res) => {
                console.log(res.data)
                // window.location.reload()
            })
            .catch((error) => console.log(error))
    }

    return (
        <StyledAuthComponent>
            <div className="form">
                <div className="buttons">
                    <button
                        style={{
                            backgroundColor: moment == 1 ? color.main : '#FFF',
                            color: moment == 1 ? "#FFF" : "#000"
                        }}
                        onClick={() => setMoment(1)}
                    >Crie sua conta</button>
                    <button
                        style={{
                            backgroundColor: moment == 2 ? color.main : '#FFF',
                            color: moment == 2 ? "#FFF" : "#000"
                        }}
                        onClick={() => setMoment(2)}
                    >Entre na sua conta</button>
                </div>

                {moment == 1 ?

                    <div className="form-auth">
                        <div className="title">
                            <h2>
                                Cadastro
                            </h2>
                        </div>
                        <div className="form-item">
                            <label>
                                Email *
                            </label>
                            <input type="email" onChange={(event) => setEmail(event.target.value)} />
                            {!email ? <span className="erro">obrigatório</span> : null}
                        </div>

                        <div className="form-item">
                            <label>
                                Seu Whatsapp *
                            </label>
                            <input type="text" onChange={(event) => setCellphone(event.target.value)} value={formatCellphone()} />
                            {!cellphone ? <span className="erro">obrigatório</span> : null}
                        </div>

                        <div className="form-item">
                            <label>
                                Como nos conheceu *
                            </label>
                            <input type="text" onChange={(event) => setHowMeetUs(event.target.value)} />
                            {!howMeetUs ? <span className="erro">obrigatório</span> : null}
                        </div>

                        <div className="form-item">
                            <label>
                                Crie sua senha *
                            </label>
                            <div className="password-input">
                                <input type={displayPassword} onChange={(event) => setPassword(event.target.value)} />
                                <button  type={'checkbox'} onClick={displayPassHandler}>{!icon ? <AiFillEye/> : <AiFillEyeInvisible/>}</button>                           </div>
                            {!password ? <span className="erro">obrigatório</span> : null}
                            {/* <div>
                            <input type="checkbox" />
                            
                            <input type="checkbox" />
                            
                            <input type="checkbox" />
                            
                            <input type="checkbox" />
                            
                        </div> */}
                        </div>
                        <div className="form-item">
                            <button className="run" onClick={registerHandler}>Cadastrar</button>
                        </div>
                    </div>

                    :

                    <div className="form-auth">
                        <div className="title">
                            <h2>
                                Entre na sua conta
                            </h2>
                        </div>
                        <div className="form-item">
                            <label>
                                Email *
                            </label>
                            <input type="email" onChange={(event) => {
                                setEmail(event.target.value)
                                console.log(email)
                            }} />
                            <span className="erro">Email inválido</span>
                        </div>
                        <div className="form-item">
                            <label>
                                Senha *
                            </label>
                            <input type={displayPassword} onChange={(event) => {
                                setPassword(event.target.value)
                                console.log(password)
                            }} />
                            <input type={'checkbox'} onChange={displayPassHandler} />
                            <span className="erro">Senha inválida</span>
                        </div>
                        <div className="form-item">
                            <button className="run" onClick={loginHandler}>Entrar</button>
                        </div>
                        <div className="form-item">
                            <button className="nobg">Esqueci a senha</button>
                        </div>
                    </div>

                }
            </div>
        </StyledAuthComponent>
    )
}
export default AuthAndLogin;