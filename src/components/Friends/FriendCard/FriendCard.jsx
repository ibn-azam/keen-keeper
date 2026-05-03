import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({friendData}) => {
    const {id,name, status, picture, tags, days_since_contact} = friendData;
    return (
        <Link to={`/friends/${id}`} className="bg-white rounded-2xl p-6 text-center shadow-md hover:-translate-y-1 hover:shadow-lg transition-all cursor-pointer flex flex-col items-center">

            <figure className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 mx-auto">
                <img
                    src={picture}
                    alt={name}
                    className="w-full h-full object-cover rounded-full" />
            </figure>

            <div className="flex flex-col items-center text-center w-full mt-2 gap-1">
                <h2 className="text-sm font-bold text-[#1E3A30] leading-tight truncate w-full">{name}</h2>
                <p className='text-xs text-slate-400'>{days_since_contact} days ago</p>

                <div className="flex flex-wrap gap-1 justify-center">
                    {tags.map((tag, i) =>
                        <h4 key={i} className='bg-[#CBFADB] text-[#244D3F] text-[10px] font-semibold py-0.5 px-2 rounded-full'>{tag}</h4>
                    )}
                </div>

                <div className='mt-1'>
                    <h4 className={`text-white text-[11px] font-semibold py-1 px-3 rounded-full ${status === "overdue" ? "bg-[#EF4444]" : status === "on_track" ? "bg-[#244D3F]" : "bg-[#EFAD44]"}`}>
                        {status}
                    </h4>
                </div>
            </div>

        </Link>
    );
};

export default FriendCard;