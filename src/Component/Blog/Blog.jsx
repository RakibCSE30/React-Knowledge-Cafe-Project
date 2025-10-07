import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog,handleToAddBookmark }) => {
    console.log(blog);
    const {  cover, title, hashtags, reading_time, posted_date, author, author_img } = blog;

    return (
        <div className='mt-10'>

            <img className='w-full rounded-2xl' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex my-10 items-center '>
                    <div className='mr-3 '>
                        <img className='w-14' src={author_img} alt="" />

                    </div>
                    <div>
                        <p>{author}</p>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div className='flex items-center gap-3'>
                    <div>
                        <h1>{reading_time} min read</h1>
                    </div>
                    <div>
                        <button onClick={()=>handleToAddBookmark(blog)}
                         className='text-red-600'><FaBookmark></FaBookmark></button>
                    </div>

                </div>
            </div>

            <p className='text-2xl font-bold'>{title}</p>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx} ><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};


Blog.propTypes = {

    blog: PropTypes.object.isRequired,
    handleToAddBookmark: PropTypes.func
};

export default Blog;
