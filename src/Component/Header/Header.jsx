 
import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between mx-4 p-4 border-b-1 items-center'>
            <p className='text-4xl font-bold' >Knowledge cage</p>
            <img src={Profile} alt="" />


            
        </div>
    );
};

export default Header;