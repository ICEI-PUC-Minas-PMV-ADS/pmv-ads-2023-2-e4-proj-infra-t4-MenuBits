import React, { useEffect, useState } from "react"

import { Button } from "../Buttons";

import SelectionInput from "../SelectionInput";

import {
    Container,
    Content,
    ImageArea,
    Title,
    Description
} from "./style"

import {
    Form
} from "../SelectionInput/style"

import {
    GiHamburger
} from 'react-icons/gi'

import {
    SiAddthis
} from "react-icons/si"
import axios from "axios";

export default function AddItemCard({menuSelectedId, runAtualizator}) {

    const [items, setItems] = useState([{id: 0}])
    const [selectedOption, setSelectedOption] = useState('0');
    const [errorMessage, setErrorMessage] = useState('Adicione um item já cadastrado ao menu selecionado')

    const config = {
        headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjgsImlhdCI6MTcwMjIzMDUwMiwiZXhwIjoxNzAyMzE2OTAyfQ.fQXEHpsUYSWUWPWsWCJ8szkQIoRFtu1ZONlGqdePwhc` }, 
    };

    useEffect(() => {
        axios
        .get(`${import.meta.env.VITE_API_URL}/api/items/restaurant/28`)
        .then((response) => {
            setItems(response.data.data);
        });
      
    },[])

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    function getThePositionInArrayByID (array, id) {
        for(let i = 0; i <= array.length; i++) {
            if(array[i].id === id) {
                
                return i;
            }
        }
    };

    return (
        <Container>

            <Content>
                <ImageArea>

                    <GiHamburger color='#930000' />

                </ImageArea>

                <Title>Adicionar novo item</Title>

                <Form>
                    <select value={selectedOption} onChange={handleSelectChange}>
                        <option value="">Selecione...</option>
                        {
                            items.map(e => (
                                <option key={e.id} value={e.id}>{e.name}</option>
                            ))
                        }
                    </select>
                </Form>

                <button onClick={
                            () => {

                                axios.post(`${import.meta.env.VITE_API_URL}/api/menus/items`, {
                                    itemId: items[getThePositionInArrayByID(items, parseInt(selectedOption))].id,
                                    menuId: parseInt(menuSelectedId)
                                }, config)
                                .then((response) => {
                                    runAtualizator()
                                    setErrorMessage('Adicione um item já cadastrado ao menu selecionado')
                                })
                                .catch(function (error) {
                                    setErrorMessage(error.response.data.message)
                                })
                            }
                        }>
                    <SiAddthis color="#03AC32" />
                </button>


                <Description>{errorMessage}</Description>


            </Content>



        </Container>
    )
}