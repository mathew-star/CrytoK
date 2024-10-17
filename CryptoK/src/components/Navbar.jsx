import React from 'react';

import { SearchOutlined} from '@ant-design/icons';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-cyan-400">CryptoK</div>
        <div className="flex items-center space-x-4">

          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-700 text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <SearchOutlined className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;