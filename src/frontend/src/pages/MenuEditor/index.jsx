import {
  HiCursorClick,
  HiCheckCircle
} from 'react-icons/hi'

import axios from 'axios'
import { useEffect, useState } from 'react'
import Content from '../../components/Content'
import BigAddButton from '../../components/BigAddButton'
import { Button } from "../../components/Buttons";
import ItemCard from "../../components/ItemCard"
import AddItemCard from '../../components/AddItemCard/index.jsx'


import {
  InputTitle,
  Header,
  InputSelectionArea,
  InputArea,
  AddButtonsArea,
  ItemsArea,
  ModalMenu,
  ModalContent,
  ModalItemContent,
  ModalMainContent,
  ModalTopside,
  ModalVerticalLine,
  ModalHorizontalContent,
  ModalVerticalLineCheckbox,
  ModalDescriptionArea,
  ButtonArea
} from "./style.js"

import {
  Form
} from "../../components/SelectionInput/style"

import {
  Input
} from '../../components/Input/style'



export default function MenuEditor() {

  const config = {
    headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjgsImlhdCI6MTcwMjIzMDUwMiwiZXhwIjoxNzAyMzE2OTAyfQ.fQXEHpsUYSWUWPWsWCJ8szkQIoRFtu1ZONlGqdePwhc` },
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
      .get(`${import.meta.env.VITE_API_URL}/api/menus/restaurant/28`)
      .then((response) => {
        setMenus(response.data.menu);
      });

  }, [])

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/menus/restaurant/28`)
      .then((response) => {
        setMenus(response.data.menu);
      });

  }, [])

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/groups`)
      .then((response) => {
        setGroups(response.data.data);
      });

  }, [])

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/items/menus/${selectedOption}`)
      .then((response) => {
        setItems(response.data.data);
      });

  }, [selectedOption, atualizator])

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSelectChangeGroup = (event) => {
    setGroupSelected(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/menus`)
      .then((response) => {
        setItems(response.data.data);
      });

  }, [selectedOption, atualizator])


  return (
    <Content>
      {
        modalMenuDisplay ?
          <ModalMenu>
            <ModalContent>
              <h1>{errorMessage}</h1>
              <img src='https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?cs=srgb&dl=pizza-2619967.jpg&fm=jpg' />
              <Input
                placeholder="Título do cardápio"
                type="text"
                id="name"
                value={menuTitle}
                onChange={(event) => setMenuTitle(event.target.value)} />
              <button onClick={
                () => {
                  axios.post(`${import.meta.env.VITE_API_URL}/api/menus`, {
                    title: menuTitle,
                    restaurantId: 28
                  }, config)
                    .then((response) => {
                      setModalMenuDisplay(false)
                    })
                    .catch(function (error) {
                      setErrorMessage(error.response.data.message)
                    })
                }
              }>
                <HiCheckCircle color={'#03AC32'} />
              </button>
            </ModalContent>
          </ModalMenu>
          : <></>
      }

      {
        modalItemDisplay ?
          <ModalMenu>
            <ModalItemContent>
              <ModalTopside>
                <img src='https://th.bing.com/th/id/R.87b018cf61dc160bcafed41eb592e31b?rik=rXGq2IUERc82Fg&riu=http%3a%2f%2fwww.greenqueen.com.hk%2fwp-content%2fuploads%2f2016%2f02%2fNosh-HK-1.jpg&ehk=%2f8DynukGeR6W97bL6PaUGzSBWx56M6nM%2fiu4hv2ex1M%3d&risl=&pid=ImgRaw&r=0' />
                <div>
                  <ModalVerticalLine>
                    <h2>Nome do item:</h2>
                    <Input
                      placeholder="Nome"
                      type="text"
                      id="name"
                      value={nameItem}
                      onChange={(event) => setNameItem(event.target.value)} />
                  </ModalVerticalLine>

                  <ModalVerticalLine>
                    <h2>Preço unitário:</h2>
                    <Input
                      placeholder="Preço: R$ 00,00"
                      type="number"
                      id="price"
                      value={priceItem}
                      onChange={(event) => setPriceItem(event.target.value)} />
                  </ModalVerticalLine>
                </div>
              </ModalTopside>

              <ModalMainContent>
                <ModalVerticalLine>
                  <h2>URL da imagem do item:</h2>
                  <Input
                    placeholder="https://image.png"
                    type="url"
                    id="url"
                    value={urlItem}
                    onChange={(event) => setUrlItem(event.target.value)} />
                </ModalVerticalLine>

                <ModalHorizontalContent>
                  <ModalVerticalLine>
                    <h2>Grupo do item:</h2>
                    <Form>
                      <select value={selectedGroup} onChange={handleSelectChangeGroup}>
                        <option value="">Selecione...</option>
                        {
                          groups.map(e => (
                            <option key={e.id} value={e.id}>{e.name}</option>
                          ))
                        }
                      </select>
                    </Form>
                  </ModalVerticalLine>
                  <ModalVerticalLineCheckbox>
                    <h2>Prato do dia:</h2>
                    <input
                      type='checkbox'
                      id="mealofday"
                      value={mealOfDayItem}
                      onChange={(event) => setMealOfDayItem(event.target.value)} />
                  </ModalVerticalLineCheckbox>
                </ModalHorizontalContent>

                <ModalDescriptionArea>
                  <h2>Descrição:</h2>
                  <Input
                    placeholder="Descrição..."
                    type="text"
                    id="description"
                    value={descriptionItem}
                    onChange={(event) => setDescriptionItem(event.target.value)} />
                </ModalDescriptionArea>
              </ModalMainContent>
              <ButtonArea>
                <Button onClick={
                  () => {
                    axios.post(`${import.meta.env.VITE_API_URL}/api/items/`, {
                      name: nameItem,
                      price: parseFloat(priceItem),
                      imageUrl: urlItem,
                      description: descriptionItem,
                      groupId: parseInt(selectedGroup),
                      isItemOfDay: mealOfDayItem,
                      restaurantId: 28
                    }, config)
                      .then((response) => {
                        setModalItemDisplay(false)
                      })
                      .catch(function (error) {
                        setErrorMessage(error.response.data.message)
                      })
                  }
                }>
                  Salvar
                </Button>
                <Button onClick={() => setModalItemDisplay(false)}>Voltar</Button>
              </ButtonArea>

            </ModalItemContent>
          </ModalMenu>
          : <></>
      }
      <Header>
        <InputArea>
          <InputSelectionArea>
            <InputTitle>
              <HiCursorClick color='#C60404' />
              <h3>Selecione um cardápio</h3>
            </InputTitle>
            <Form>
              <select value={selectedOption} onChange={handleSelectChange}>
                <option value="">Selecione...</option>
                {
                  menus.map(e => (
                    <option key={e.id} value={e.id}>{e.title}</option>
                  ))
                }
              </select>
            </Form>
          </InputSelectionArea>
          <Button>Visualizar cardápio como o cliente</Button>
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
    </Content>
  )
}