import { useEffect, useState } from "react";

 

const Blogs = () => {
    const [blogs,setBlogs]= useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/react-knowledge-cafe/refs/heads/main/public/blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div>
            <h3>Blogs:{blogs.length}</h3>
            
        </div>
    );
};

export default Blogs;