import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}
const initialState: FavoritosState = {
  itens: []
}

export const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const itemFavorito = action.payload
      if (state.itens.find((produto) => produto.id === itemFavorito.id)) {
        alert('item já foi favoritado')
      } else {
        state.itens.push(itemFavorito)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
