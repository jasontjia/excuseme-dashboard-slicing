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
        left-4 
        top-1/2 
        -translate-y-1/2 
        flex flex-col 
        items-center 
        justify-center 
        bg-[#1768B3] 
        text-white 
        py-4 
        space-y-5 
        w-12 
        h-[45vh] 
        rounded-3xl 
        shadow-lg

        /* Responsiveness */
        sm:left-2
        sm:w-11
        sm:h-[40vh]
        sm:py-3
        sm:space-y-4

        md:left-4
        md:w-12
        md:h-[45vh]

        lg:left-6
        lg:w-14
        lg:h-[50vh]
      "
    >
      {/* Home */}
      <button className="bg-[#88C6FF66] p-2 rounded-full shadow-md">
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

      {/* Chart kedua */}
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
