import TicketForm from "@/app/{components}/TicketForm";
import React from "react";

const getTicketById = async (id: any) => {
  const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to get ticket");
  }

  return res.json();
};

const TicketPage = async ({ params }: any) => {
  let updateTicketData: any = {};
  const isNewTicket = params.id === "new";
  if (!isNewTicket) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.ticket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }
  return <TicketForm ticket={updateTicketData} />;
};

export default TicketPage;
