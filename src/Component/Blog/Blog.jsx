 import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    console.log(blog);
    
  return (
    <div>
     
    </div>
  );
};

// ✅ Correct: it's "propTypes", not "protoType"
Blog.propTypes = {
  // ✅ Correct: it's "PropTypes", not "ProtoType"
  blog: PropTypes.object.isRequired,
};

export default Blog;
