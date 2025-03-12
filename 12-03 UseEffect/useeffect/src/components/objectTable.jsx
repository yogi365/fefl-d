export default function ObjectTable({ post })
{
    return (
        <table border="1">
            <thead>
                <tr><th>User Id</th>
                    <th>Title</th>
                    <th>Comment</th></tr>
            </thead>
            <tbody>
                {
                    <tr>
                        <td>{post.userId}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
                }
            </tbody>
        </table>
    )
}