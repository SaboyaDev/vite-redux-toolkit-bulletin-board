import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAdded } from './postsSlice'
import { selectAllUsers } from '../users/usersSlice'

const AddPostForm = () => {
	const dispatch = useDispatch()

	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const [userId, setUserId] = useState('')

	const users = useSelector(selectAllUsers)
	const userOptions = users.map(user => (
		<option
			key={user.id}
			value={user.id}
		>
			{user.name}
		</option>
	))

	const onTitleChanged = e => setTitle(e.target.value)
	const onContentChanged = e => setContent(e.target.value)
	const onAuthorChanged = e => setUserId(e.target.value)

	const handleSubmit = e => {
		e.preventDefault()
		if (title && content) {
			dispatch(postAdded(title, content, userId))
			setTitle('')
			setContent('')
			setUserId('')
		}
	}

	return (
		<section>
			<h2>Add a New Post</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor='postTitle'>Post Title</label>
				<input
					type='text'
					id='postTitle'
					name='postTitle'
					value={title}
					onChange={onTitleChanged}
				/>
				<label htmlFor='postAuthor'>Author:</label>
				<select
					id='postAuthor'
					value={userId}
					onChange={onAuthorChanged}
				>
					<option value=''></option>
					{userOptions}
				</select>
				<label htmlFor='postContent'>Content:</label>
				<input
					type='text'
					id='postContent'
					name='postContent'
					value={content}
					onChange={onContentChanged}
				/>
				<button type='submit'>Save Post</button>
			</form>
		</section>
	)
}
export default AddPostForm
