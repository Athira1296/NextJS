const Post = ({params}) => {
    return <main>
        <h1>This is blog: {params.slug}</h1>
    </main>
};

export default Post;