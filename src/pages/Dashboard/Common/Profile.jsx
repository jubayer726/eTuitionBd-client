import useAuth from '../../../hooks/useAuth'
import coverImg from '/logo-square.png'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

const Profile = () => {
  const { user } = useAuth()
  const [userData, setUserData] = useState(null);

   useEffect(() => {
    if (user?.email) {
      axios.get(`${import.meta.env.VITE_API_URL}/users/${user.email}`)
        .then(res =>{
          setUserData(res.data);
        })
        .catch()
    }
  }, [user]);
  const {_id, displayName, role, email, photoURL} = userData || {};
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-gray-100 shadow-lg rounded-2xl md:w-4/5 lg:w-3/5'>
        <img
          alt='cover photo'
          src={coverImg}
          className='w-full mt-2 rounded h-56 px-20'
        />
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
              src={photoURL}
              className='mx-auto object-cover rounded-full h-44 w-44  border-2 border-white '
            />
          </a>

          <p className='p-2 px-4 text-xs text-white bg-purple-600 rounded-full'>
            {role}
          </p>
          <p className='mt-2 text-xl font-medium text-gray-800 '>
            User Id: {_id}
          </p>
          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
              <p className='flex flex-col'>
                Name
                <span className='font-bold text-gray-600 '>
                  {displayName}
                </span>
              </p>
              <p className='flex flex-col'>
                Email
                <span className='font-bold text-gray-600 '>{email}</span>
              </p>

              <div>
                <Link to='/dashboard/update-profile' className='bg-purple-500  px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-purple-800 block mb-1'>
                  Update Profile
                </Link>
                <button className='bg-purple-500 px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-purple-800'>
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
