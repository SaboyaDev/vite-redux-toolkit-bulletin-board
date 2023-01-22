import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
	{
		id: '1',
		title: 'Learning Redux Toolkit',
		content: "I've heard good things.",
		date: sub(new Date(), { minutes: 10 }).toISOString(),
		// reactions: {
		// 	thumbsUp: 0,
		// 	wow: 0,
		// 	heart: 0,
		// 	rocket: 0,
		// 	coffee: 0,
		// },
	},
]

// const initialState = []
const postSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		postAdded: {
			reducer(state, action) {
				state.push(action.payload)
			},
			prepare(title, content) {
				return {
					payload: {
						id: nanoid(),
						title,
						content,
						date: new Date().toISOString(),
					},
				}
			},
		},
	},
})

export const selectAllPosts = state => state.posts

export const { postAdded } = postSlice.actions

export default postSlice.reducer