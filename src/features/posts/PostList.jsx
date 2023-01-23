import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'
import PostAuthor from './PostAuthor'

const PostList = () => {
	const posts = useSelector(selectAllPosts)

	const renderedPosts = posts.map(post => {
		console.log(post)
		const { id, title, content, userId } = post
		console.log(userId)
		return (
			<article key={id}>
				<h3>{title}</h3>
				<p>{content.substring(0, 100)}</p>
				<p className='postCredit'>
					<PostAuthor userId={userId} />
				</p>
			</article>
		)
	})

	return (
		<section>
			<h2>Posts</h2>
			{posts.length === 0 ? <p>No Posts Available</p> : renderedPosts}
		</section>
	)
}
export default PostList
