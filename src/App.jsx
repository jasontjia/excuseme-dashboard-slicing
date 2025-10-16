// src/App.jsx
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatCard from "./components/StatCard";
import LineChart from "./components/LineChart";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#DBE8F4]">
      {/* 🟩 Box besar pembungkus semua komponen */}
      <div className="w-[1300px] h-[800px] bg-white rounded-3xl shadow-2xl overflow-hidden flex mx-auto mt-10 mb-10 p-6">
        
        {/* Sidebar */}
        <Sidebar />

        {/* Area kanan (semua konten selain sidebar) */}
        <div className="flex-1 flex flex-col p-6">
          {/* Topbar */}
          <Topbar />

          {/* Konten utama */}
          <div className="flex-1 mt-6 grid grid-cols-3 gap-6">
            {/* Contoh komponen di dalam box */}
            <StatCard title="Revenue" value="$42,000" />
            <StatCard title="Users" value="1,200" />
            <StatCard title="Orders" value="350" />

            <div className="col-span-3 bg-white rounded-2xl p-6">
              <LineChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
