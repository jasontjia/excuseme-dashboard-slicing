const StatCard = ({ title, value, percent, label, type }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex-1 text-center">
      <h2 className="text-gray-600 text-sm mb-2">{title}</h2>
      <p className="text-3xl font-semibold">{value}</p>

      {type === "bar" ? (
        <>
          <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 rounded-full"
              style={{ width: `${percent}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-1">{label}</p>
        </>
      ) : (
        <div className="flex flex-col items-center mt-4">
          <div className="relative w-16 h-16">
            <svg className="absolute inset-0" viewBox="0 0 36 36">
              <path
                className="text-gray-200"
                strokeWidth="3.8"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-blue-600"
                strokeWidth="3.8"
                strokeDasharray={`${percent}, 100`}
                stroke="currentColor"
                fill="none"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center font-medium text-gray-600">
              {percent}%
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">{label}</p>
        </div>
      )}
    </div>
  );
};

export default StatCard;
