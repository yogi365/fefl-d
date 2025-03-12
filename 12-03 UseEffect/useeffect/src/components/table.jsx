export default function CreateTable({ comments })
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
                    comments.map(comment =>
                    {
                        return (
                            <tr>
                                <td>{comment.userId}</td>
                                <td>{comment.title}</td>
                                <td>{comment.body}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}