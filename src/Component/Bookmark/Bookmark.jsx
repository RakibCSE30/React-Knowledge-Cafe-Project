
import PropTypes from 'prop-types';
const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className=''>
            <div className='bg-slate-300 m-3 p-3 rounded-2xl'>

                <p className='font-bold'>{title}</p>
            </div>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark; 