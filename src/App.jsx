import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Header from './Component/Header/Header'

function App() {
  const [bookmaks,setBookmarks]=useState([]);

  const handleToAddBookmark = blog =>{
    console.log('to add the bookmark');
    
  }
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto pl-40 pt-10 gap-6">
        <Blogs handleToAddBookmark={handleToAddBookmark} />
        <Bookmarks />
      </div>
    </>
  );
}

export default App;


 
