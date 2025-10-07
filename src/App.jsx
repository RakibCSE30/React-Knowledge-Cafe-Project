import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Header from './Component/Header/Header'

function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const [readingTime , setReadingTime] = useState(0);

  const handleToAddBookmark = blog =>{
   const newBookmarks = [...bookmarks,blog];
   setBookmarks(newBookmarks);
    
  }

  const handleMarkAsRead = time =>
  {

  
    
    setReadingTime( time+ readingTime);
  }
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto pl-40 pt-10 gap-6">
        <Blogs handleToAddBookmark={handleToAddBookmark}
        handleMarkAsRead={handleMarkAsRead} 
        
        />
         <Bookmarks bookmarks={bookmarks}
         readingTime={readingTime}
          ></Bookmarks>   
      </div>
    </>
  );
}

export default App;


 
