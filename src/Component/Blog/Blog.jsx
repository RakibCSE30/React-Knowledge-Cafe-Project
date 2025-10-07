 import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    console.log(blog);
    const {id,cover,title}=blog;
    
  return (
    <div>
     <p>{id}</p>
     <img src={cover} alt="" />
     <p>{title}</p>
    </div>
  );
};

 
Blog.propTypes = {
  
  blog: PropTypes.object.isRequired,
};

export default Blog;
