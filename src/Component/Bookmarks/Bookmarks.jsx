 
import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className='md:w-1/3'>
            <p>Bookmarks:{bookmarks.length}</p>
        </div>
    );
};

Bookmarks.propTypes = {
    
};

export default Bookmarks;