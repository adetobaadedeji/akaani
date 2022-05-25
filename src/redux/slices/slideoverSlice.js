import { createSlice,  } from '@reduxjs/toolkit'

export const slideoverSlice = createSlice({
	name: 'slideover',
	initialState: {
		isSlideoverOpen: false,
	},
	reducers: {
		toggleSlideover: (state) => {
			state.isSlideoverOpen = !state.isSlideoverOpen
		},
	},
})

export const { toggleSlideover } = slideoverSlice.actions

export const slideoverSelector = (state) => state.slideover.isSlideoverOpen

export default slideoverSlice.reducer
