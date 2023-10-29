import {
  HiCursorClick,
  HiCheckCircle
} from 'react-icons/hi'

import Content from '../../components/Content'
import SelectionInput from '../../components/SelectionInput'
import BigAddButton from '../../components/BigAddButton'
import { Button } from "../../components/Buttons";
import ItemCard from "../../components/ItemCard"
import Input from "../../components/Input"


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
  ModalDescriptionArea
} from "./style.js"
import AddItemCard from '../../components/AddItemCard/index.jsx'
import { useState } from 'react'


export default function MenuEditor() {


  const [modalMenuDisplay, setModalMenuDisplay] = useState(false)
  const [modalItemDisplay, setModalItemDisplay] = useState(false)


  return (
    <Content>
      {
        modalMenuDisplay ?
          <ModalMenu>
            <ModalContent>
              <img src='https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?cs=srgb&dl=pizza-2619967.jpg&fm=jpg' />
              <Input placeholder='Título do cardápio...' />
              <button onClick={() => setModalMenuDisplay(false)}>
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
                <img src='https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?cs=srgb&dl=pizza-2619967.jpg&fm=jpg' />
                <div>
                  <ModalVerticalLine>
                    <h2>Nome do item:</h2>
                    <Input />
                  </ModalVerticalLine>

                  <ModalVerticalLine>
                    <h2>Preço unitário:</h2>
                    <Input />
                  </ModalVerticalLine>
                </div>
              </ModalTopside>

              <ModalMainContent>
                <ModalVerticalLine>
                  <h2>URL da imagem do item:</h2>
                  <Input />
                </ModalVerticalLine>

                <ModalHorizontalContent>
                  <ModalVerticalLine>
                    <h2>Grupo do item:</h2>
                    <SelectionInput />
                  </ModalVerticalLine>
                  <ModalVerticalLineCheckbox>
                    <h2>Prato do dia:</h2>
                    <input type='checkbox' />
                  </ModalVerticalLineCheckbox>
                </ModalHorizontalContent>

                <ModalDescriptionArea>
                  <h2>Descrição:</h2>
                  <Input />
                </ModalDescriptionArea>
              </ModalMainContent>
              <Button onClick={() => { setModalItemDisplay(false) }}>Salvar</Button>
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
            <SelectionInput />
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

        <AddItemCard />
        <ItemCard
          removeCloseButton={modalItemDisplay}
          editionMode={true}
        />
        <ItemCard description="xiiiiii" />
        <ItemCard
          closeButtonDisplay={!modalItemDisplay}
          editionMode={true}
          description="la eleeee"
        />

        <ItemCard
          closeButtonDisplay={!modalItemDisplay}
          editionMode={true}
          description="la eleeee"
        />

        <ItemCard
          closeButtonDisplay={!modalItemDisplay}
          editionMode={true}
          description="la eleeee"
        />

        <ItemCard
          closeButtonDisplay={!modalItemDisplay}
          editionMode={true}
          description="la eleeee"
        />

        <ItemCard
          closeButtonDisplay={!modalItemDisplay}
          editionMode={true}
          description="la eleeee"
        />

        <ItemCard
          closeButtonDisplay={!modalItemDisplay}
          editionMode={true}
          description="la eleeee"
        />

        <ItemCard
          closeButtonDisplay={!modalItemDisplay}
          editionMode={true}
          description="la eleeee"
        />

        <ItemCard
          closeButtonDisplay={!modalItemDisplay}
          editionMode={true}
          description="la eleeee"
        />

        <ItemCard
          closeButtonDisplay={!modalItemDisplay}
          editionMode={true}
          description="la eleeee"
        />

        <ItemCard
          closeButtonDisplay={!modalItemDisplay}
          editionMode={true}
          description="la eleeee"
        />



      </ItemsArea>




    </Content>
  )
}