import {
  HiCursorClick
} from 'react-icons/hi'
import './style.js'

import Content from '../../components/Content'
import SelectionInput from '../../components/SelectionInput'
import BigAddButton from '../../components/BigAddButton'
import { Button } from "../../components/Buttons";
import ItemCard from "../../components/ItemCard"

import {
  InputTitle,
  Header,
  InputSelectionArea,
  InputArea,
  AddButtonsArea,
  ItemsArea
} from "./style.js"
import AddItemCard from '../../components/AddItemCard/index.jsx'





export default function MenuEditor() {
    return (
      <Content>

        <Header>
          <InputArea>
            <InputSelectionArea>
              <InputTitle>
                <HiCursorClick color='#C60404'/>
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
            />
            <BigAddButton 
              text="Adicionar um novo cardápio"
              background="#930000"
            />
          </AddButtonsArea>


        </Header>

        <ItemsArea>

          <AddItemCard />

          <ItemCard editionMode={true}/>

          <ItemCard description="xiiiiiiii iiiiiiiiiiiiiii iiiiiiiiiiiii iiiiiiiiiiiiii iiiiiiiiiiiiii iiiiiiiiiiii iiiiiiiiiii iiiii iiiii"/>

          <ItemCard editionMode={true} description="la eleeee"/>

          
          

        </ItemsArea>


      </Content>
    )
  }