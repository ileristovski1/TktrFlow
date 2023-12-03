import React from "react";
import MainView from "./{components}/MainView";

//   try {
//     const res = await fetch("http://localhost:3000/api/Tickets", {
//       cache: "no-store",
//     });
//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

const Dashboard = async () => {
  return <MainView />;
};

export default Dashboard;
