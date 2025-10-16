// src/components/Sidebar.jsx
import {
  HomeIcon,
  BriefcaseIcon,
  ChartPieIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div
      className="
        fixed 
        left-6 
        top-1/2 
        -translate-y-1/2 
        flex flex-col 
        items-center 
        justify-center 
        bg-[#1E64B8] 
        text-white 
        py-6 
        space-y-6 
        w-14 
        h-[50vh] 
        rounded-full 
        shadow-lg
      "
    >
      {/* Home */}
      <button className="bg-[#2A75C6] p-2 rounded-full shadow-md">
        <HomeIcon className="h-5 w-5 text-white" />
      </button>

      {/* Briefcase */}
      <button className="hover:bg-[#2A75C6] p-2 rounded-full transition">
        <BriefcaseIcon className="h-5 w-5 text-white" />
      </button>

      {/* Chart */}
      <button className="hover:bg-[#2A75C6] p-2 rounded-full transition">
        <ChartPieIcon className="h-5 w-5 text-white" />
      </button>

      <button className="hover:bg-[#2A75C6] p-2 rounded-full transition">
        <ChartPieIcon className="h-5 w-5 text-white" />
      </button>

      {/* Clipboard */}
      <button className="hover:bg-[#2A75C6] p-2 rounded-full transition">
        <ClipboardDocumentListIcon className="h-5 w-5 text-white" />
      </button>
    </div>
  );
};

export default Sidebar;
