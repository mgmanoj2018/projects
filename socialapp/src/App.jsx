import "./App.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer";
import CreatePost from "./component/CreatePost";
import { useState } from "react";
import PostListProvider from "./store/PostListContext";
import PostList from "./component/PostList";

function App() {
  const [selectedTab,setSelectedTab] = useState("Home")
  const clickChangeHandle = (tab)=>{
    // console.log(tab)
    setSelectedTab(tab)
  }
  return (
    <>  
      <PostListProvider>
      <div className="mainContainer">
        <div className="rightcontainer">
          <Sidebar selectedTab={selectedTab}  clickChangeHandle={clickChangeHandle}/>
        </div>
        <div className="containerLeft">
          <Header />
          {selectedTab ==="Home" ? <PostList/> :<CreatePost/>}
          <Footer />
        </div>
      </div>
      </PostListProvider>
    </>
  );
}

export default App;
