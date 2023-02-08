import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PostList from "./components/PostList/PostList";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post/:postId" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
