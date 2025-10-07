import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    console.log(blog);
    const {  cover, title, hashtags, reading_time, posted_date, author, author_img } = blog;

    return (
        <div>

            <img src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex my-10 '>
                    <div className='mr-3 '>
                        <img className='w-14' src={author_img} alt="" />

                    </div>
                    <div>
                        <p>{author}</p>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div>
                    <p>{reading_time} min read</p>
                    <button></button>

                </div>
            </div>

            <p className='text-2xl'>{title}</p>
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
};

export default Blog;
