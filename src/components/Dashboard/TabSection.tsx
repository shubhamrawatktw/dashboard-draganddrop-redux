import React from 'react'
const topTabs = [
    [
      {
        name: "All",
        num: 154,
      },
      {
        name: "FTL",
        num: 154,
      },
      {
        name: "LCl",
        num: 154,
      },
      {
        name: "Courier",
        num: 154,
      },
      {
        name: "Container",
        num: 154,
      },
    ],
    [
      {
        name: "Inbound",
        num: 154,
      },
      {
        name: "Outbound",
        num: 154,
      },
    ],
  ] as const;
const TabSection = () => {
  return (
    <section className="grid grid-cols-6 gap-10">
    <div className=" col-span-4 flex ">
      {topTabs[0].map((item, idx) => {
        return (
          <button
            key={idx}
            className="border border-gray-300  text-center px-11 py-2  text-blue-700 text-sm hover:bg-blue-700 hover:text-white "
          >
            {item.name} <span className="text-xs ml-1">({item.num})</span>
          </button>
        );
      })}
    </div>
    <div className=" col-span-2">
      {topTabs[1].map((item, idx) => {
        return (
          <button
            key={idx}
            className="border border-gray-300  text-center px-11 py-2  text-blue-700 text-sm hover:bg-blue-700 hover:text-white "
          >
            {item.name} <span className="text-xs ml-1">({item.num})</span>
          </button>
        );
      })}
    </div>
  </section>
  )
}

export default TabSection