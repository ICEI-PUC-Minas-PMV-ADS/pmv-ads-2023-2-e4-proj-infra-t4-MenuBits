import React, { useEffect, useState } from "react"
import {Picker} from '@react-native-picker/picker';
import {
    Container,
    Content,
    Title,
    Description,
    Button
} from "./style"

import {
    Form
} from "../../components/SelectionInput/style"

import IconAntDesign from 'react-native-vector-icons/AntDesign.js'

import axios from "axios";

export default function AddItemCard({ menuSelectedId, runAtualizator, atualization }) {

    const [items, setItems] = useState([])
    const [selectedOption, setSelectedOption] = useState('');
    const [errorMessage, setErrorMessage] = useState('Adicione um item já cadastrado ao menu selecionado')

    const config = {
        headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjgsImlhdCI6MTcwMjIzMDUwMiwiZXhwIjoxNzAyMzE2OTAyfQ.fQXEHpsUYSWUWPWsWCJ8szkQIoRFtu1ZONlGqdePwhc` },
    };

    useEffect(() => {
        axios
            .get(`https://menu-bits-backend.onrender.com/api/items/restaurant/28`)
            .then((response) => {
                setItems(response.data.data);
            }).catch((e) => {
                console.log(e)
            });

    }, [atualization])

    const handleSelectChange = (event) => {
        setSelectedOption(event);
    };

    function getThePositionInArrayByID(array, id) {
        for (let i = 0; i <= array.length; i++) {
            if (array[i].id === id) {

                return i;
            }
        }
    };

    return (
        <Container>

            <Content>

                <Title>Selecione um item</Title>

                <Form>
                    <Picker
                        selectedValue={selectedOption}
                        onValueChange={handleSelectChange}
                    >
                        <Picker.Item key={0} label={"Selecione"} value={0} />
                        {
                            items.map(e => (
                                <Picker.Item key={e.id} label={e.name} value={e.id} />
                            ))
                        }

                    </Picker>
                </Form>

                <Button onPress={
                    () => {

                        axios.post(`https://menu-bits-backend.onrender.com/api/menus/items`, {
                            itemId: items?.[getThePositionInArrayByID(items, parseInt(selectedOption))].id,
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
                    <IconAntDesign style={{fontSize: 60}} name="plussquare" color="#03AC32" />
                </Button>

                
                <Description>{errorMessage}</Description>


            </Content>



        </Container>
    )
}