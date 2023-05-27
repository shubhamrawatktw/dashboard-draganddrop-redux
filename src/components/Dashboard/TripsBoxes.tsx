import React from 'react'
type TripsBoxesTypes = {
    type: string;
    value: number;
    cr: number;
    crPercent: number;
    valuePercent: number;
    color:string
  };
  
  const tripsBoxes = [
    {
      type: "Total trips",
      value: 54,
      cr: 100,
      crPercent: 9.9,
      valuePercent: 8,
      color:"#0000FF"
    },
    {
      type:"Time",
      value: 26,
      cr: 100,
      crPercent: 9.9,
      valuePercent: 8,
      color:"#00FF00"
    },
    {
      type:"Delayed",
      value: 26,
      cr: 100,
      crPercent: 9.9,
      valuePercent: 8,
      color:"#808080"
    },
    {
      type:"Devaited",
      value: 26,
      cr: 100,
      crPercent: 9.9,
      valuePercent: 8,
      color:"#000000"
    },
    {
      type:"Missing",
      value: 26,
      cr: 100,
      crPercent: 9.9,
      valuePercent: 8,
      color:"#FF0000"
    },
    {
      type:"Untracked",
      value: 26,
      cr: 100,
      crPercent: 9.9,
      valuePercent: 8,
      color:"#87CEEB"
    },
  ] as TripsBoxesTypes[]
const TripsBoxes = () => {
  return (
    <section className="gap-4 flex ">
      {
        tripsBoxes.map((item,idx) => {
            return <div key={idx} style={{backgroundColor:item.color}} className=" px-4 py-2 w-full text-white font-medium text-base rounded-lg space-y-2">
          <p>{item.type}</p>
           <div className="flex items-center justify-between">
            <p>{item.value}</p>
            <p>{item.cr}Cr</p>
           </div>
           <div className="flex items-center justify-between">
            <p>{item.valuePercent}%</p>
            <p>{item.crPercent}%</p>
           </div>
            </div>
        })
      }

        </section>
  )
}

export default TripsBoxes