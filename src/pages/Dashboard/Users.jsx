import React from 'react';

const Users = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] w-full my-5xl text-white">
      <div className="relative flex flex-column justify-center items-center text-center h-[500px] w-[500px] shadow-lg rounded-lg">
        <div>
          <h1>This is Users DASHBOARD</h1>
          <div className="flex justify-center items-center py-4 ">
            <h1>Hi!!, Welcome to dashboard pages</h1>
            <button type="submit" className="rounded-lg p-2  w-1/2 border-none  hover:bg-orange-500 hover:text-blue-300 transition-all duration-200 ">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
