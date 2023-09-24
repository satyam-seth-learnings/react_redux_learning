import './App.css';
import { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } from './services/post';

function App() {
  const newPost = {
    title: "This is New Title",
    body: "This is New Body",
    userId: 1,
  };
  const updatePostData = {
    id: 1,
    title: "This is Update Title",
    body: "This is Update Body",
    userId: 1,
  };

  // const responseInfo = useGetAllPostQuery();
  // const responseInfo = useGetPostByIdQuery(11);
  // const responseInfo = useGetPostByLimitQuery(5);
  // const [deletePost, responseInfo] = useDeletePostMutation();
  // console.log(deletePost);
  // const [createPost, responseInfo] = useCreatePostMutation();
  const [updatePost, responseInfo] = useUpdatePostMutation();


  console.log("Response Information: ", responseInfo);
  console.log("Data: ", responseInfo.data);
  console.log("isSuccess: ", responseInfo.isSuccess);
  console.log("isLoading: ", responseInfo.isLoading);

  if (responseInfo.isLoading) return <div>Loading...</div>
  if (responseInfo.isError) return <h1>An error occurred {responseInfo.error.error}</h1>

  return (
    // // Get All Data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Get All Data)</h1>
    //   {
    //     responseInfo.data.map((post) => (
    //       <div key={post.id}>
    //         <h2>{post.id} {post.title}</h2>
    //         <p>{post.body}</p>
    //         <hr />
    //       </div>
    //     ))
    //   }
    // </div>

    // // Get Single Data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Get Single Data)</h1>
    //   <h2>{responseInfo.data.id} {responseInfo.data.title}</h2>
    //   <p>{responseInfo.data.body}</p>
    // </div >

    // // Get Limited Data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Get Limited Data)</h1>
    //   {
    //     responseInfo.data.map((post) => (
    //       <div key={post.id}>
    //         <h2>{post.id} {post.title}</h2>
    //         <p>{post.body}</p>
    //         <hr />
    //       </div>
    //     ))
    //   }
    // </div>

    // // Delete Data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query ( Delete Data)</h1>
    //   <button onClick={() => { deletePost(2) }}>Delete Post</button>
    // </div>

    // // Create Data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query ( Create Data)</h1>
    //   <button onClick={() => { createPost(newPost) }}>Add Post</button>
    // </div>

    // Update Data
    <div className="App">
      <h1>Redux Toolkit - RTK Query ( Update Data)</h1>
      <button onClick={() => { updatePost(updatePostData) }}>Update Post</button>
    </div>
  );
}

export default App;
