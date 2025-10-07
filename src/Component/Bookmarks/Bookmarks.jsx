 
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks ,readingTime}) => {
     
   
    
    return (
        <div className='md:w-1/3 bg-gray-400 rounded-2xl m-2 p-3'>
            <p className='text-2xl bg-blue-400 font-bold m-2 p-2 rounded-xl'>Spent time on read : {readingTime}</p>
           <h2 className='text-2xl font-bold m-2'>Bookmarked Blogs:{bookmarks.length}</h2>
             
            {
                bookmarks.map(bookmark => <Bookmark 
                    key={bookmarks.id}
                     bookmark={bookmark} ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object, 
    readingTime: PropTypes.number
    
};

export default Bookmarks;