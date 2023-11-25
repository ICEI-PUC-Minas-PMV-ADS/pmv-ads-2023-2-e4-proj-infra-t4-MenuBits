import axios from 'axios'
import { useEffect, useState } from 'react'
import BigAddButton from '../../components/BigAddButton/index.jsx'
import ItemCard from "../../components/ItemCard/index.jsx"
import AddItemCard from '../../components/AddItemCard/index.jsx'
import { Pressable, Text, ScrollView } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import CheckBox from 'expo-checkbox';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons.js'


import {
    InputTitle,
    Header,
    TextTitle,
    InputSelectionArea,
    InputArea,
    AddButtonsArea,
    ItemsArea,
    ModalMenu,
    ModalContent,
    ModalItemContent,
    ModalMainContent,
    ModalVerticalLine,
    ButtonArea,
    TextDefault,
    MinorPressable,
    TextInput
} from "./style"

import {
    Form
} from "../../components/SelectionInput/style"

import {
    Input
} from '../../components/Input/style'

import {
    Content
} from '../../components/Content/style'



const MenuEditor = () => {

    const config = {
        headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImlhdCI6MTY5ODYxNDc4MiwiZXhwIjoxNjk4NzAxMTgyfQ.6MiLNhJrW1cEo0glX7VvQLSjcu0CkOLxZP7JCLCSM1E` },
    };

    const [modalMenuDisplay, setModalMenuDisplay] = useState(false)
    const [modalItemDisplay, setModalItemDisplay] = useState(false)
    const [atualizator, setAtualizator] = useState(false)

    const [menus, setMenus] = useState([])
    const [items, setItems] = useState([])
    const [groups, setGroups] = useState([])

    const [menuTitle, setMenuTitle] = useState('')

    const [selectedOption, setSelectedOption] = useState('');
    const [selectedGroup, setGroupSelected] = useState('');

    const [nameItem, setNameItem] = useState('')
    const [priceItem, setPriceItem] = useState('')
    const [urlItem, setUrlItem] = useState('')
    const [mealOfDayItem, setMealOfDayItem] = useState(false)
    const [descriptionItem, setDescriptionItem] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        axios
            .get(`https://menu-bits-backend.onrender.com/api/menus/restaurant/12`)
            .then((response) => {
                setMenus(response.data.menu);
            }).catch((e) => {
                console.log(e)
            });

    }, [])

    useEffect(() => {
        axios
            .get(`https://menu-bits-backend.onrender.com/api/groups`)
            .then((response) => {
                setGroups(response.data.data);
            }).catch((e) => {
                console.log(e)
            });

    }, [])

    useEffect(() => {
        axios
            .get(`https://menu-bits-backend.onrender.com/api/items/menus/${selectedOption}`)
            .then((response) => {
                setItems(response.data.data);
            }).catch((e) => {
                console.log(e)
            });

    }, [selectedOption, atualizator])

    const handleSelectChange = (event) => {
        setSelectedOption(event);
    };

    const handleSelectChangeGroup = (event) => {
        setGroupSelected(event);
    };

    useEffect(() => {
        axios
            .get(`https://menu-bits-backend.onrender.com/api/menus`)
            .then((response) => {
                setItems(response.data.data);
            }).catch((e) => {
                console.log(e)
            });

    }, [selectedOption, atualizator])

    return (
        <Content>
            {
                modalMenuDisplay ?
                    <ModalMenu>
                        <ModalContent>
                            <Text>{errorMessage}</Text>
                            <Input
                                placeholder="Título do cardápio"
                                type="text"
                                id="name"
                                value={menuTitle}
                                onChange={(event) => setMenuTitle(event.target.value)} />
                            <ButtonArea>
                                <MinorPressable onPress={
                                    () => {
                                        axios.post(`https://menu-bits-backend.onrender.com/api/menus`, {
                                            title: menuTitle,
                                            restaurantId: 12
                                        }, config)
                                            .then((response) => {
                                                setModalMenuDisplay(false)
                                            })
                                            .catch(function (error) {
                                                setErrorMessage(error.response.data.message)
                                            })
                                    }
                                }>
                                    <TextDefault>Adicionar</TextDefault>
                                </MinorPressable>
                                <MinorPressable onPress={() => setModalMenuDisplay(false)}><TextDefault>Voltar</TextDefault></MinorPressable>
                            </ButtonArea>
                        </ModalContent>
                    </ModalMenu>
                    : <></>
            }

            {
                modalItemDisplay ?
                    <ModalMenu>
                        <ModalItemContent>
                            <ModalMainContent>
                                <ModalVerticalLine>
                                    <TextInput>Nome do item:</TextInput>
                                    <Input
                                        placeholder="Nome"
                                        type="text"
                                        id="name"
                                        value={nameItem}
                                        onChange={(event) => setNameItem(event.target.value)} />
                                </ModalVerticalLine>

                                <ModalVerticalLine>
                                    <TextInput>Preço unitário:</TextInput>
                                    <Input
                                        placeholder="Preço: R$ 00,00"
                                        type="number"
                                        id="price"
                                        value={priceItem}
                                        onChange={(event) => setPriceItem(event.target.value)} />
                                </ModalVerticalLine>

                                <ModalVerticalLine>
                                    <TextInput>URL da imagem do item:</TextInput>
                                    <Input
                                        placeholder="https://image.png"
                                        type="url"
                                        id="url"
                                        value={urlItem}
                                        onChange={(event) => setUrlItem(event.target.value)} />
                                </ModalVerticalLine>

                                <ModalVerticalLine>
                                    <TextInput>Grupo do item:</TextInput>
                                    <Form>
                                        <Picker
                                            selectedValue={selectedGroup}
                                            onValueChange={handleSelectChangeGroup}
                                        >
                                            <Picker.Item key={0} label={"Selecione"} value={0} />
                                            {
                                                groups.map(e => (
                                                    <Picker.Item key={e.id} label={e.name} value={e.id} />
                                                ))
                                            }

                                        </Picker>
                                    </Form>
                                </ModalVerticalLine>

                                <ModalVerticalLine>
                                    <TextInput>Prato do dia:</TextInput>
                                    <CheckBox
                                        color={'#C75B00'}
                                        value={mealOfDayItem}
                                        style={{ alignSelf: 'center' }}
                                        onValueChange={() => setMealOfDayItem(!mealOfDayItem)}
                                    />
                                </ModalVerticalLine>

                                <ModalVerticalLine>
                                    <TextInput>Descrição:</TextInput>
                                    <Input
                                        placeholder="Descrição..."
                                        type="text"
                                        id="description"
                                        value={descriptionItem}
                                        onChange={(event) => setDescriptionItem(event.target.value)} />
                                </ModalVerticalLine>
                            </ModalMainContent>
                            <ButtonArea>
                                <MinorPressable onPress={
                                    () => {
                                        axios.post(`https://menu-bits-backend.onrender.com/api/items/`, {
                                            name: nameItem,
                                            price: parseFloat(priceItem),
                                            imageUrl: urlItem,
                                            description: descriptionItem,
                                            groupId: parseInt(selectedGroup),
                                            isItemOfDay: mealOfDayItem,
                                            restaurantId: 12
                                        }, config)
                                            .then((response) => {
                                                setModalItemDisplay(false)
                                            })
                                            .catch(function (error) {
                                                setErrorMessage(error.response.data.message)
                                            })
                                    }
                                }>
                                    <TextDefault>Salvar</TextDefault>
                                </MinorPressable>
                                <MinorPressable onPress={() => setModalItemDisplay(false)}><TextDefault>Voltar</TextDefault></MinorPressable>
                            </ButtonArea>

                        </ModalItemContent>
                    </ModalMenu>
                    : <></>
            }
            <ScrollView>
                <Header>
                    <InputArea>
                        <InputSelectionArea>
                            <InputTitle>
                                <Icon
                                    name='cursor-default-click'
                                    color="#930000"
                                />
                                <TextTitle>Selecione um cardápio</TextTitle>
                            </InputTitle>
                            <Form>
                                <Picker
                                    selectedValue={selectedOption}
                                    onValueChange={handleSelectChange}
                                >
                                    <Picker.Item key={0} label={"Selecione"} value={0} />
                                    {   
                                        menus.map(e => (
                                            <Picker.Item key={e.id} label={e.title} value={e.id} />
                                        ))
                                    }

                                </Picker>
                            </Form>
                        </InputSelectionArea>
                        <MinorPressable>
                            <TextDefault>Visualizar cardápio como o cliente</TextDefault>
                        </MinorPressable>
                    </InputArea>
                    <AddButtonsArea>
                        <BigAddButton
                            text="Adicionar um novo item"
                            background="#C75B00"
                            whenClick={setModalItemDisplay}
                        />
                        <BigAddButton
                            text="Adicionar um novo cardápio"
                            background="#930000"
                            whenClick={setModalMenuDisplay}

                        />
                    </AddButtonsArea>
                </Header>

                <ItemsArea>

                    <AddItemCard
                        menuSelectedId={selectedOption}
                        runAtualizator={() => { setAtualizator(!atualizator) }}
                    />

                    {
                        items.map(e => (
                            <ItemCard
                                key={e.id}
                                closeButtonDisplay={!modalItemDisplay}
                                editionMode={true}
                                name={e.name}
                                description={e.description}
                                price={e.price}
                                imageUrl={e.imageUrl}
                            />
                        ))
                    }
                </ItemsArea>
            </ScrollView>
        </Content>

    )
};

export default MenuEditor;