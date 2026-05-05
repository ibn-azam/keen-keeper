import { useEffect, useState } from 'react';
import { useContact } from '../../Context/ContactContext';
import TbPhoneCall from '../../assets/call.png'
import TbMessage from '../../assets/text.png'
import TbVideo from '../../assets/video.png'
import { IoIosArrowDown } from 'react-icons/io';



const typeConfig = {
    Call:  { icon: TbPhoneCall},
    Text:  { icon: TbMessage},
    Video: { icon: TbVideo},
    
};

function formatDate(iso) {
    return new Date(iso).toLocaleDateString('en-US', {
        month: 'long', day: 'numeric', year: 'numeric'
    });
}


export default function TimelinePage() {
    const { timeline } = useContact();
    const [filter, setFilter] = useState("");
    console.log(setFilter,'sort')

    const filteredTimeline = filter
  ? timeline.filter(item => item.type === filter)
  : timeline;

  useEffect(() => { document.title = 'Timeline | KeenKeeper'; }, []);

    return (
        <div className="min-h-screen p-4 sm:p-6 md:p-10">
            <div className="max-w-2xl mx-auto">

                <h1 className="text-3xl font-bold text-gray-900 mb-6">Timeline</h1>

                {/* Filter dropdown */}
                <details className="dropdown">
  <summary className="btn m-1"> {filter || "All"} <IoIosArrowDown /></summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={()=>setFilter('')}><a>All</a></li>
    <li onClick={()=>setFilter('Call')}><a>Call</a></li>
    <li onClick={()=>setFilter('Text')}><a>Text</a></li>
    <li onClick={()=>setFilter('Video')}><a>Video</a></li>
  </ul>
</details>

                {/* Timeline list */}
                <div className="">
                    {timeline.length === 0 ? (
                        <div className="bg-white border border-gray-200 rounded-xl p-20 text-center text-gray-400">
                            <p className="text-base">No check-ins yet.</p>
                            <p className="text-sm mt-1">Go to a contact and tap Call, Text, or Video.</p>
                        </div>
                    ) : (
                        filteredTimeline.map((entry) => {
                            const config = typeConfig[entry.type] ?? typeConfig.Call;
                            const {icon} = config;
                            return (
                                <div key={entry.id} className="flex items-center gap-4 px-5 py-4 my-2 bg-white border border-gray-200 hover:bg-gray-50 rounded-xl cursor-pointer">

                                    {/* Icon */}
                                    <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0`}>
                                        <img src={icon} className="w-5 h-5 object-contain"/>
                                    </div>

                                    {/* Text */}
                                    <div>
                                        <p className="text-sm text-gray-900">
                                            <span className="font-semibold">{entry.type}</span>
                                            <span className="text-gray-400 font-normal"> with {entry.contactName}</span>
                                        </p>
                                        <p className="text-xs text-gray-400 mt-0.5">{formatDate(entry.date)}</p>
                                    </div>

                                </div>
                            );
                        })
                    )}
                </div>

            </div>
        </div>
    );
}