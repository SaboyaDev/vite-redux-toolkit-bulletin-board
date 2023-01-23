import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'

const PostAuthor = ({ userId }) => {
	const users = useSelector(selectAllUsers)

	const author = users.find(user => {
		console.log(user.id)
		return user.id === userId
	})
	console.log(userId)
	// console.log(users)
	console.log(author)
	return <span>by {author ? author.name : 'Unknown Author'}</span>
}
export default PostAuthor
