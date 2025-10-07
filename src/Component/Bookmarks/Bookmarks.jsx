 
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
     
   
    
    return (
        <div className='md:w-1/3 bg-gray-400 rounded-2xl m-2 p-3'>
           <h2 className='text-2xl font-bold'>Bookmarked Blogs:{bookmarks.length}</h2>
             
            {
                bookmarks.map(bookmark => <Bookmark 
                    key={bookmarks.id}
                     bookmark={bookmark} ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object
    
};

export default Bookmarks;