import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatCard from "./components/StatCard";
import LineChart from "./components/LineChart";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#DBE8F4]">
      <div className="w-[1300px] h-[800px] bg-white rounded-3xl shadow-2xl overflow-hidden flex mx-auto mt-10 mb-10 p-6">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex-1 flex flex-col p-6">
          {/* Topbar */}
          <Topbar />

          {/* Konten utama */}
          <div className="flex-1 mt-6 space-y-6">
            {/* StatCard */}
            <StatCard />

            {/* Line chart */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <LineChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
