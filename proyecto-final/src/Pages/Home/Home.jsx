import styled from "styled-components";
import React, { useState } from 'react';
import { AiOutlinePrinter } from 'react-icons/ai'
import { AiOutlineWifi } from 'react-icons/ai'
import { BiHomeHeart } from 'react-icons/bi'
import { MdOutlineSocialDistance } from 'react-icons/md'
import { IoIosPeople } from 'react-icons/io'
import { BsFillLockFill } from 'react-icons/bs'
import { MdMicrowave } from 'react-icons/md'
import { GiKeyCard } from 'react-icons/gi'


const Home = () => {
    const [textStatus, setTextStatus] = useState(false)
    const textIconChange = () => {
        setTextStatus(!textStatus)
    }

    return (
        <>
            <Information>
                <div className="info-container">
                    <div className="img-container">
                        <h1>Reinventa tu forma de trabajar</h1>
                        <h2>Coworking a medida para empresas y autonomos</h2>
                    </div>

                    <div className="form-container">
                        <h3>Que tipo de puesto de coworking necesitas?</h3>
                        <div className="form-1">
                            <div className="form-11">
                                <div className="classCheckBox">
                                    <input type="checkbox" />
                                    <span className="text-checkbox">Smart work</span>
                                </div>
                                <div className="classCheckBox">
                                    <input type="checkbox" />
                                    <span className="text-checkbox">Despachos</span>
                                </div>
                                <div className="classCheckBox">
                                    <input type="checkbox" />
                                    <span className="text-checkbox">Puestos flexibles</span>
                                </div>
                            </div>
                            <div className="form-12">
                                <div className="classCheckBox">
                                    <input type="checkbox" />
                                    <span className="text-checkbox">Oficina virtual</span>
                                </div>
                                <div className="classCheckBox">
                                    <input type="checkbox" />
                                    <span className="text-checkbox">Bono 10 dias</span>
                                </div>
                                <div className="classCheckBox">
                                    <input type="checkbox" />
                                    <span className="text-checkbox">Bono Bussines</span>
                                </div>
                            </div>
                        </div>

                        <h3>En que espacio?</h3>
                        <div className="form-2">
                            <div className="form-21">
                                <div className="classCheckBox">
                                    <input type="checkbox" />
                                    <span className="text-checkbox">Smart work</span>
                                </div>
                                <div className="classCheckBox">
                                    <input type="checkbox" />
                                    <span className="text-checkbox">Smart work</span>
                                </div>
                                <div className="classCheckBox">
                                    <input type="checkbox" />
                                    <span className="text-checkbox">Smart work</span>
                                </div>
                            </div>
                            <div className="form-22">
                                <div className="classCheckBox">
                                    <input type="checkbox" />
                                    <span className="text-checkbox">Smart work</span>
                                </div>
                                <div className="classCheckBox">
                                    <input type="checkbox" />
                                    <span className="text-checkbox">Smart work</span>
                                </div>
                                <div className="classCheckBox">
                                    <input type="checkbox" />
                                    <span className="text-checkbox">Smart work</span>
                                </div>
                            </div>
                        </div>

                        <div className="input-container">
                            <input placeholder="Tu nombre" type="text" className="form-control" />
                            <input placeholder="Email" type="text" className="form-control" />
                            <input placeholder="Telefono" type="text" className="form-control" />
                        </div>

                        <div className="condiciones">
                            <p>Spot at Work trata tus datos unicamente para tramitar tu solicitud. Puedes conocer como ejercer tus derechos de acceso, rectificacion y supervision en nuestra politica de privacidad</p>

                            <div className="checkbox-container">
                                <div className="classCheckBox2">
                                    <input type="checkbox" />
                                    <span className="text-checkbox2">Recibir noticias e invitaciones o eventos de Spot at Work</span>
                                </div>
                                <div className="classCheckBox2">
                                    <input type="checkbox" />
                                    <span className="text-checkbox2">Recibir comunicaciones comerciales que puedan ser de tu interes</span>
                                </div>

                                <button> Me interesa</button>
                            </div>
                        </div>

                    </div>
                </div>
            </Information>

            <Texto>
                <h2>Encuentra la oficina que mejor se adapte a ti o a tu equipo</h2>
                <p>Hoy el mundo nos demanda flexibilidad. Además, hemos descubierto otras maneras de tener una oficina, con muchas ventajas y gran ahorro de costes fijos.</p>
                <p>Por ello, creamos Smart Work, la fórmula de trabajo inteligente. Trabaja dónde y cuándo quieras en espacios profesionales y seguros, ubicados en zonas premium de Madrid, dotados con salas de reuniones y todos los servicios llave en mano para tu empresa. Combina teletrabajo y oficina como mejor te convenga. Con la posibilidad de rotar a tu equipo en el espacio, máxima flexibilidad, total seguridad y sin compromiso.</p>
                <p>Podrás elegir entre despacho privado, puestos fijos o zona abierta de coworking en 5 espacios en Madrid. Configura tu propia tarifa o adquiere un bono de días para trabajar o reunirte días sueltos.</p>
                <img src="https://madrid.impacthub.net/wp-content/uploads/2019/10/IMPACT_HUB_PIAMONTE_Despachos-1024x683.jpg" alt="espacio de trabajo" />

            </Texto>

            <Servicios>

                <div className="incluidos">
                    <h1>Servicios Incluidos</h1>
                    <div className="incluidos-iconos">
                        <div className="iconos">
                            <HostIcon onClick={textIconChange} />
                            <PrintIcon onClick={() => setTextStatus(true)} />
                            <WifiIcon onClick={() => setTextStatus(true)} />
                            <SocialIcon onClick={() => setTextStatus(true)} />
                            <MeetingIcon onClick={() => setTextStatus(true)} />
                            <LockIcon onClick={() => setTextStatus(true)} />
                            <AreaIcon onClick={() => setTextStatus(true)} />
                            <KeyIcon onClick={() => setTextStatus(true)} />
                        </div>
                        <div className="texto">
                            <p>{textStatus ? "Acceso Seguro" : "Selecciona algo que te interese"}</p>
                            <p>{textStatus ? "Accede al espacio con la tarjeta" : ""}</p>
                        </div>
                    </div>
                </div>

                <div className="carta">
                    <h1>Servicios a la carta</h1>
                    <div className="carta-iconos">
                        <div className="iconos">
                            <KeyIcon onClick={() => setTextStatus(true)} />

                        </div>
                        <div className="texto">

                        </div>
                    </div>
                </div>

                <div className="map-container">
                    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=148O7f5leFm19kzdHAYmvkchFf3EWeVWm&ehbc=2E312F" width="640" height="480"></iframe>
                </div>


            </Servicios>
        </>
    )
}

export default Home

const Information = styled.div`

    .info-container{
        width: 100%;
        display: flex;
        .img-container{
            width: 60%;
            background-image: url('https://madrid.impacthub.net/wp-content/uploads/2020/06/Smart-work-scaled-800.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            min-height: 700px;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

            h1{
                text-align: center;
                max-width: 647px;
                font-size: 71px;
            }

            h2{
                text-align: center;
                font-size: 35px;
            }
        }

        .form-container{
            background-color: #F6B401;
            width: 40%;
            height: 100%;
            min-height: 700px;
            display: flex;
            flex-direction: column;
            align-items: center;

            .form-1{
                display: flex;
            }

            .form-2{
                display: flex;
            }

            .input-container{
                display: flex;
                flex-direction: column;
            }

            .condiciones{
                
            }

        }
    }
    
`

const Texto = styled.div`

    img{
        max-width: 40%;
    }
    
`

const Servicios = styled.div`

    .incluidos{
        
        width: 100%;
        height: 100%;
        background-color: #F6B401;
        .incluidos-iconos{
            display: flex;
            align-items: center;
            justify-content: space-around;
            max-width: 1240px;
        }
        

    }

    .carta{
        h1{
            display: flex;
            justify-content: flex-end;
        }
    }
`

const PrintIcon = styled(AiOutlinePrinter)`
    font-size: 45px;
    cursor: pointer;
`

const WifiIcon = styled(AiOutlineWifi)`
    font-size: 45px;
    cursor: pointer;
`
const HostIcon = styled(BiHomeHeart)`
    font-size: 45px;
    cursor: pointer;
`
const SocialIcon = styled(MdOutlineSocialDistance)`
    font-size: 45px;
    cursor: pointer;
`

const MeetingIcon = styled(IoIosPeople)`
    font-size: 45px;
    cursor: pointer;
`
const LockIcon = styled(BsFillLockFill)`
    font-size: 45px;
    cursor: pointer;
`
const AreaIcon = styled(MdMicrowave)`
    font-size: 45px;
    cursor: pointer;
`
const KeyIcon = styled(GiKeyCard)`
    font-size: 45px;
    cursor: pointer;
`