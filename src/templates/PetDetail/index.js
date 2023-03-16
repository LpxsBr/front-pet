import { useEffect, useState } from "react"
import api from "../../hooks/useApi"

const stylePet = {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'lightblue',
    alignItems: 'center'
}

const pagePetDatailsStyle = {
    height: '100vh',
    backgroundColor: 'aliceblue',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px'
}

const styleAvatar = {
    height: '50px',
    width: '50px',
    backgroundColor: 'black',
    borderRadius: 100
}


function PetDetails({ ...props }) {
    const [pet, setPet] = useState()

    useEffect(() => {
        api.get('api/pet/view/64133142458e3fdb4fd4ab9f')
            .then((response) => setPet(response.data))
            .catch((err) => console.log(err))
    }, [])

    console.log(pet)
    return (
        <section className="PetDetails" style={pagePetDatailsStyle}>
            <div className="information">
                <div className="personal">
                    {(!pet
                        ? <h1>Nada aqui</h1>
                        : <div className="about" style={stylePet}>
                            <div className="avatar">
                                <div className="img-place" style={styleAvatar}></div>
                            </div>
                            <div className="pet-informations">
                                <div className="name" style={{display: 'flex', flexDirection: 'column'}}>
                                    <label htmlFor="name">Name</label>
                                    <span>{pet.name}</span>
                                </div>
                                <div className="age" style={{display: 'flex', flexDirection: 'column'}}>
                                    <label htmlFor="age">age</label>
                                    <span>{pet.age}</span>
                                </div>
                                <div className="another" style={{display: 'flex', flexDirection: 'column'}}>
                                    <label htmlFor="another">another</label>
                                    <span>{pet.animal}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default PetDetails;