import React, { useState } from "react"

import {
    SiAddthis
} from "react-icons/si"

import { 
    Container, 
    Text 
} from "./style"


    export default function BigAddButton({text, background, whenClick}) {

        return (
            <Container style={{backgroundColor: background}} onClick={() => whenClick(true)}>
            <SiAddthis color="#03AC32"/>
            <Text>{text}</Text>
            </Container>
        )

    }
