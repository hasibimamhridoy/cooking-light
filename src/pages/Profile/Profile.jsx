import React, { useContext } from 'react';
import { AuthContext } from '../../ContextProvider/AuthContextProvider';

const Profile = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <div className="bg-[#fffaf0] h-screen">
      <div className="banner  bg-[#fffaf0]   mb-10">
        <div className="bannerImg h-72">
          <img
            className="w-full h-full object-cover"
            src={user.photoURL&&user.photoURL}
            alt=""
          />
        </div>
        <div className="chefPicture -translate-y-32 mx-auto">
          <img
            className="w-60 text-center mx-auto  h-60 object-cover rounded-full"
            src={user.photoURL&&user.photoURL}
            alt=""
          />
          <div className="flex flex-col items-center gap-3 my-4">
            <h1 className="text-center w-[50%] lg:text-3xl text-xl">
              {user.displayName&&user.displayName}
            </h1>
            <h1 className="text-center w-[50%] lg:text-xl text-md">
              {user.email&&user.email}
            </h1>
          </div>

        </div>
      </div>
    </div>
    );
};

export default Profile;