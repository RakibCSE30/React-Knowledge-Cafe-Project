import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

 

const Blogs = ({handleToAddBookmark} ) => {
    const [blogs,setBlogs]= useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/react-knowledge-cafe/refs/heads/main/public/blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h3 className="text-4xl">Blogs:{blogs.length}</h3>
            {
                blogs.map(blog => <Blog
                key={blog.id}
                blog={blog}
                handleToAddBookmark={handleToAddBookmark}
                
                >

                </Blog>)
            }
            
        </div>
    );
};

export default Blogs;