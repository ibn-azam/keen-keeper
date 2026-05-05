import { BsArchive } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbBellZ, TbPhoneCall, TbMessage, TbVideo } from "react-icons/tb";
import { useLoaderData, useNavigate } from "react-router";
import { useContact } from "../../../Context/ContactContext";
import { toast } from "react-toastify";
import { useEffect } from "react";

const FriendDetails = () => {
  const { logContact } = useContact();
  const navigate = useNavigate();

  const handleCheckIn = (type) => {
    logContact({ contactName: name, contactPicture: picture, type });
    navigate("/timeline");
    toast.success(`${name} ${type} To You`);
  };

  const {
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = useLoaderData();

  useEffect(() => {
    document.title = `${name} | KeenKeeper`;
  }, [name]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[340px_1fr] gap-3 ">
        {/* ── LEFT COLUMN ── */}
        <div className="flex flex-col gap-2">
          {/* Profile Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center gap-3 text-center">
            <figure className="w-20 h-20 rounded-full overflow-hidden">
              <img
                src={picture}
                alt={name}
                className="w-full h-full object-cover"
              />
            </figure>
            <h2 className="text-xl font-bold text-gray-900">{name}</h2>
            <span
              className={`text-white text-xs font-semibold py-1 px-4 rounded-full ${
                status === "overdue"
                  ? "bg-red-500"
                  : status === "on_track"
                    ? "bg-[#244D3F]"
                    : "bg-amber-400"
              }`}
            >
              {status === "on_track"
                ? "On Track"
                : status === "overdue"
                  ? "Overdue"
                  : status}
            </span>
            <div className="flex flex-wrap gap-1 justify-center">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#DCFCE7] text-[#166534] text-[11px] font-semibold py-0.5 px-3 rounded-full uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-500 italic">"{bio}"</p>
            <p className="text-xs text-gray-400">Preferred: {email}</p>
          </div>

          {/* Snooze */}
          <button className="bg-white border border-gray-200 rounded-xl p-2 flex justify-center items-center gap-3 text-gray-800 font-medium hover:bg-gray-50 transition-all cursor-pointer">
            <TbBellZ className="text-xl shrink-0" />
            <span>Snooze 2 Weeks</span>
          </button>

          {/* Archive */}
          <button className="bg-white border border-gray-200 rounded-xl p-2 flex justify-center items-center gap-3 text-gray-800 font-medium hover:bg-gray-50 transition-all cursor-pointer">
            <BsArchive className="text-xl shrink-0" />
            <span>Archive</span>
          </button>

          {/* Delete */}
          <button className="bg-white border border-gray-200 rounded-xl p-2 flex justify-center items-center gap-3 text-red-500 font-medium hover:bg-red-50 transition-all cursor-pointer">
            <RiDeleteBinLine className="text-xl shrink-0" />
            <span>Delete</span>
          </button>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="flex flex-col justify-between  gap-3">
          {/* Stats — 3 separate cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center gap-1 text-center">
              <h4 className="text-4xl font-semibold text-[#244D3F]">
                {days_since_contact}
              </h4>
              <p className="text-sm text-gray-400">Days Since Contact</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center gap-1 text-center">
              <h4 className="text-4xl font-semibold text-[#244D3F]">{goal}</h4>
              <p className="text-sm text-gray-400">Goal (Days)</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center gap-1 text-center">
              <h4 className="text-2xl font-semibold text-[#244D3F]">
                {new Date(next_due_date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </h4>
              <p className="text-sm text-gray-400">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-center justify-between gap-4 flex-1">
            <div>
              <h4 className="text-base font-bold text-gray-900">
                Relationship Goal
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                Connect every{" "}
                <span className="font-bold text-gray-900">{goal} days</span>
              </p>
            </div>
            <button className="border border-gray-200 text-sm text-gray-500 px-4 py-1.5 rounded-lg hover:bg-gray-50 transition-all shrink-0">
              Edit
            </button>
          </div>

          {/* Quick Check-In */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4 ">
            <h4 className="text-base font-bold text-gray-900">
              Quick Check-In
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Call", Icon: TbPhoneCall },
                { label: "Text", Icon: TbMessage },
                { label: "Video", Icon: TbVideo },
              ].map(({ label, Icon }) => (
                <button
                  onClick={() => handleCheckIn(label)}
                  key={label}
                  className="flex flex-col items-center justify-center gap-2 border border-gray-200 rounded-xl py-6 hover:bg-gray-50 transition-all"
                >
                  <Icon className="text-2xl text-gray-700" />
                  <span className="text-sm text-gray-700">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
