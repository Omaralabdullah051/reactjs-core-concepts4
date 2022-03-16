import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Count></Count>
      <LoadPost></LoadPost>
    </div>
  );
}

function Count() {
  // initial state:when we initialize our state 
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div style={{ backgroundColor: 'lightgreen', margin: '20px', padding: '20px', border: '3px solid red', borderRadius: '20px' }}>
      {/*read state: when we include our state anywhere in the component*/}
      <h1>Count: {count}</h1>
      {/*update state: when we update our state by state updater function*/}
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

function LoadPost() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPost(data))
  }, [])
  return (
    <div style={{ marginTop: '60px' }}>
      <h1 >Posts: {posts.length}</h1>
      {
        posts.map(post => <DisplayPost id={post.id} title={post.title} body={post.body}></DisplayPost>)
      }
    </div>
  )
}

function DisplayPost(props) {
  return (
    <div style={{ backgroundColor: 'aquamarine', margin: '20px', padding: '20px', border: '3px solid red', borderRadius: '20px' }}>
      <h2>ID: {props.id}</h2>
      <h5>Title: {props.title}</h5>
      <p>Body: {props.body}</p>
    </div>
  )
}

export default App;
