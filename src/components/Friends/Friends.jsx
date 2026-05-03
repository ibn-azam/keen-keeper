// Friends.jsx
import React, { use } from 'react';
import FriendCard from './FriendCard/FriendCard';

const stats = [
  { value: 10, label: 'Total Friends' },
  { value: 3,  label: 'On Track' },
  { value: 6,  label: 'Need Attention' },
  { value: 12, label: 'Interactions This Month' },
];

const Friends = ({ friendsPromise }) => {
  const friendsData = use(friendsPromise);

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-8 ">
      
      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pb-6 border-b border-gray-200 mb-6">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="bg-white rounded-2xl p-4 md:p-6 text-center shadow-md hover:-translate-y-0.5 transition-transform"
          >
            <h4 className="text-2xl md:text-3xl font-bold text-[#244D3F]">{value}</h4>
            <p className="text-sm text-slate-500 mt-1 font-medium">{label}</p>
          </div>
        ))}
      </div>

      {/* Friends Grid */}
      <div>
        <h4 className="text-lg font-bold text-[#1E3A30] mb-4">Your Friends</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {friendsData.map(friendData => (
            <FriendCard key={friendData.id} friendData={friendData} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Friends;