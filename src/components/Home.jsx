import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Divform } from '../style/styls'
import { ContainerStyle } from '../style/styls'

export default class Home extends Component {
    render() {
        return (
            <Divform>
                <ContainerStyle>
                    <h2>Inicio</h2>
                    <p>{
                        `Realiza este cuestionario para descrubir que tan friki eres, encontrarás preguntas de video juegos y de peliculas que un friki de corazón ha visto más de 2 veces.`
                    }
                    </p>
                    <Image src="https://www.pngkit.com/png/full/192-1923288_octocat-github-logo-transparent-octdrey-catburn.png" rounded width="250px" style={{ textAlign: "center" }} />
                    <Link to="/question" className="nav-link">Comienza el formulario aquí</Link>
                </ContainerStyle>
            </Divform>
        )
    }
}
