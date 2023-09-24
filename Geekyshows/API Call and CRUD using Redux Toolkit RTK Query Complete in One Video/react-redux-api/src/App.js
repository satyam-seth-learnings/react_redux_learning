import './App.css';
import { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery } from './services/post';

function App() {
  // const responseInfo = useGetAllPostQuery();
  // const responseInfo = useGetPostByIdQuery(11);
  const responseInfo = useGetPostByLimitQuery(5);

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

    // Get Limited Data
    <div className="App">
      <h1>Redux Toolkit - RTK Query (Get Limited Data)</h1>
      {
        responseInfo.data.map((post) => (
          <div key={post.id}>
            <h2>{post.id} {post.title}</h2>
            <p>{post.body}</p>
            <hr />
          </div>
        ))
      }
    </div>
  );
}

export default App;
