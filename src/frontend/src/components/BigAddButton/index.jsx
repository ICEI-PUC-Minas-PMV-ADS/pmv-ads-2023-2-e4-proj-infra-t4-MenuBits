import React from "react"

import {
    SiAddthis
} from "react-icons/si"

import { 
    Container, 
    Text 
} from "./style"

const BigAddButton = ({text, background}) => (
    <Container style={{backgroundColor: background}}>
        <SiAddthis color="#03AC32"/>
        <Text>{text}</Text>
    </Container>
)

export default BigAddButton;