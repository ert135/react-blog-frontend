interface IPost {
    id: string,
    title: string,
    postBody: string,
    dateCreated: string
}

interface IPostDetailProps { compiler: string; framework: string; }

interface IPostDetailState {
    loadingPost: boolean,
    post: IPost,
    error: string
}

interface IndexPageProps { compiler: string; framework: string; }

interface IMainpageState {
    loadingPosts: boolean
    posts: IPost[],
    error: string
}

