import React, { useState } from "react"

import IconAntDesign from 'react-native-vector-icons/AntDesign.js'

import {
    Container,
    Text
} from "./style"


const BigAddButton = (props) => {

    return (
        <Container 
            style={{ backgroundColor: props.background }} 
            onPress={
                () => props.whenClick(true)
            }
        >
            <IconAntDesign style={{fontSize: 30}} name="plussquare" color="#03AC32" />
            <Text>{props.text}</Text>
        </Container>
    )

}

export default BigAddButton;