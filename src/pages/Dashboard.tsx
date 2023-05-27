import React, { useState } from "react";
import Layout from "../components/Layout";
import SelectSection from "../components/Dashboard/SelectSection";
import TripsBoxes from "../components/Dashboard/TripsBoxes";
import TabSection from "../components/Dashboard/TabSection";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useDispatch } from "react-redux";
import { setTripsCardsData } from "../store/trips/tripsSlice";
import { tripsCardsType } from "../utils/data";



const Dashboard = () => {
  const tripsCards = useSelector((state:RootState)=> state.trips.tripsCardsData)
  const dispatch = useDispatch<AppDispatch>()
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, idx: number) => {
    console.log(idx, "start");
    e.dataTransfer.clearData();
    e.dataTransfer?.setData("dragItem", idx.toString());
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, idx: number) => {
    e.preventDefault();
    const dragItemIdx = parseInt(e.dataTransfer.getData("dragItem") ?? "0");
      const dragItem =
        tripsCards &&
        tripsCards?.filter((_, index) => index === dragItemIdx)[0];
      const dragOverItem = tripsCards.filter((_, index) => index === idx)[0];
      console.log(dragItem, "dragItem");
      const newTripsCards = [...tripsCards] as tripsCardsType[];
      newTripsCards[idx] = dragItem;
      newTripsCards[dragItemIdx] = dragOverItem;
      dispatch(setTripsCardsData(newTripsCards))
    
  };

  return (
    <Layout>
      <main className=" p-8 h-[calc(100vh-57px)] overflow-y-scroll">
        <TabSection />
        <SelectSection />
        <TripsBoxes />

        <section className="grid grid-cols-2 gap-8 mt-4">
          {tripsCards.map((item, idx) => {
            return (
              <div
                onDrop={(e) => handleDrop(e, idx)}
                onDragOver={(e) => e.preventDefault()}
                onDragStart={(e) => handleDragStart(e, idx)}
                draggable={true}
                className="shadow-lg bg-white w-full p-4 rounded-lg space-y-2"
                key={idx}
              >
                <div className="flex items-center justify-between text-sm">
                  <p className="font-semibold text-lg">{item.type}</p>
                  <p>
                    <span className="font-semibold text-lg">Value</span> :{" "}
                    <span className="">{item.value}Cr</span>
                  </p>
                </div>

                <section className="grid grid-cols-2 text-sm">
                  <div className="space-y-2">
                    <div className="">
                      <p>
                        <span className="text-base font-medium">Trip id</span> :{" "}
                        {item.tripId}
                      </p>
                      <p>
                        <span className="text-base font-medium">
                          Transporter
                        </span>{" "}
                        : {item.transporter}
                      </p>
                    </div>

                    <div>
                      <h2 className="text-base font-medium">Drivers Detail</h2>
                      <p>
                        <span>{item.driverDetail.name}</span>(
                        {item.driverDetail.number})
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p>
                        <span className="text-base font-medium">From</span>:{" "}
                        {item.from}
                      </p>
                      <p>
                        <span className="text-base font-medium">To</span>:{" "}
                        {item.to}
                      </p>
                    </div>

                    <div>
                      <h2 className="text-base font-medium">
                        CheckPoints Details
                      </h2>
                      <p>
                        <span>{item.checkpointDetail.address}</span>(
                        {item.checkpointDetail.time})
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default Dashboard;
