import { ChatBubbleLeftIcon, Squares2X2Icon } from "@heroicons/react/24/outline";

const StatCard = () => {
  const cards = [
    {
      id: 1,
      title: "New Message",
      value: 85,
      progress: 75,
      type: "message",
    },
    {
      id: 2,
      title: "Leads",
      value: 85,
      progress: 63,
      type: "leads",
    },
    {
      id: 3,
      title: "New Message",
      value: 85,
      progress: 75,
      type: "message",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 w-full">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white rounded-2xl shadow-md p-5 w-full font-roboto transition-transform duration-200 hover:scale-105 hover:shadow-lg"
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-[14px] font-medium text-black">{card.title}</h3>
            {card.type === "message" ? (
              <ChatBubbleLeftIcon className="h-5 w-5 text-black" />
            ) : (
              <Squares2X2Icon className="h-5 w-5 text-black" />
            )}
          </div>

          {/* Value */}
          <p className="text-3xl font-semibold text-black">{card.value}</p>

          {/* Content */}
          {card.type === "message" && (
            <>
              <div className="relative mt-2">
                <div className="w-full h-2 bg-gray-100 rounded-full">
                  <div
                    className="absolute top-0 left-0 h-2 bg-[#1767B2] rounded-full"
                    style={{ width: `${card.progress}%` }}
                  ></div>
                </div>
                <span className="absolute right-0 -top-5 text-xs font-medium text-black">
                  {card.progress}%
                </span>
              </div>
              <p className="text-sm font-semibold mt-3 text-black">
                Response Rate
              </p>
            </>
          )}

          {card.type === "leads" && (
            <div className="flex items-center justify-between mt-2">
              <div>
                <p className="text-sm font-semibold text-black">
                  60%{" "}
                  <span className="font-normal text-black">Daily Goal</span>
                </p>
                <p className="text-sm font-semibold text-black">
                  72 <span className="font-normal text-black">This week</span>
                </p>
              </div>
              <div className="relative w-12 h-12">
                <svg className="w-12 h-12 transform -rotate-90">
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="#E5E7EB"
                    strokeWidth="4"
                    fill="none"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="#1767B2"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="125.6"
                    strokeDashoffset={125.6 - (card.progress / 100) * 125.6}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-black">
                  {card.progress}%
                </span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StatCard;
