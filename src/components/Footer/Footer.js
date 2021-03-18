import React from 'react'
import { FooterContainer } from './styled'

export function Footer() {
    return (
        <FooterContainer>
            <p>SpaceX &copy;&nbsp;
                <a href="https://www.linkedin.com/in/murilomendonca/"
                    rel="noreferrer"
                    target='_blank' >Murilo Mendonca</a> -&nbsp;
                <a href="www.labenu.com.br" rel="noreferrer" target='_blank' >Labenu</a> 2021.
            </p>
        </FooterContainer>
    );
}