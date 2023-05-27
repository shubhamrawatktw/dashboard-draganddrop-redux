export type tripsCardsType = {
    type: string;
    value: 5;
    transporter: string;
    driverDetail: {
      name: string;
      number: number;
    };
    checkpointDetail: {
      address: string;
      time: string;
    };
    from: string;
    to: string;
    tripId: string;
  };
  
  export const tripsCardsData = [
    {
      type: "Missing Truck",
      value: 5,
      transporter: "Vrl Logistics",
      driverDetail: {
        name: "Rahul",
        number: 6577887678,
      },
      checkpointDetail: {
        address: "Kolhapur",
        time: "26-Oct-2023",
      },
      from: "Mumbai",
      to: "Banglore",
      tripId: "7184rjdjbsad",
    },
    {
      type: "Detention Truck",
      value: 5,
      transporter: "Vrl Logistics",
      driverDetail: {
        name: "Rahul",
        number: 6577887678,
      },
      checkpointDetail: {
        address: "Kolhapur",
        time: "26-Oct-2023",
      },
      from: "Mumbai",
      to: "Banglore",
      tripId: "7184rjdjbsad",
    },
    {
      type: "High Value Shipment",
      value: 5,
      transporter: "Vrl Logistics",
      driverDetail: {
        name: "Rahul",
        number: 6577887678,
      },
      checkpointDetail: {
        address: "Kolhapur",
        time: "26-Oct-2023",
      },
      from: "Mumbai",
      to: "Banglore",
      tripId: "7184rjdjbsad",
    },
  ] as tripsCardsType[];