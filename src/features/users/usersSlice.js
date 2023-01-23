import { createSlice } from '@reduxjs/toolkit'

const initialState = [
	{ id: '0', name: 'RogelioCodes' },
	{ id: '1', name: 'SaboyaDev' },
	{ id: '2', name: 'Coding Phase' },
]

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
})

export const selectAllUsers = state => state.users

export default userSlice.reducer
