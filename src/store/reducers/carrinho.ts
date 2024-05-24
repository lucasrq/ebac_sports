import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

export const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const item = action.payload

      if (state.itens.some((produto) => produto.id === item.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(item)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
