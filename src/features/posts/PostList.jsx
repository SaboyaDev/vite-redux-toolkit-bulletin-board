import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'

const PostList = () => {
	const posts = useSelector(selectAllPosts)
	const orderedPosts = posts
		.slice()
		.sort((a, b) => b.date.localeCompare(a.date))

	const renderedPosts = orderedPosts.map(post => {
		const { id, title, content, userId, date } = post

		return (
			<article key={id}>
				<h3>{title}</h3>
				<p>{content.substring(0, 1000)}</p>
				<p className='postCredit'>
					<PostAuthor userId={userId} />
					<TimeAgo timestamp={date} />
				</p>
				<ReactionButtons post={post} />
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
