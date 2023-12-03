"use client";

import React, { Component, useEffect, useState } from "react";
import TicketCard from "../{components}/TicketCard";
import { firestore } from "../firebase/clientApp";
import {
  collection,
  QueryDocumentSnapshot,
  DocumentData,
  query,
  where,
  limit,
  getDocs,
} from "@firebase/firestore";

const MainView = () => {
  const ticketCollection = collection(firestore, "tickets");
  const [tickets, setTickets] = useState<QueryDocumentSnapshot<DocumentData>[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);
  //const { tickets } = await getTickets();

  const getTickets = async () => {
    const ticketQuery = query(ticketCollection, limit(10));

    const querySnapshot = await getDocs(ticketQuery);

    const result: QueryDocumentSnapshot<DocumentData>[] = [];
    querySnapshot.forEach((snapshot) => {
      result.push(snapshot);
    });
    setTickets(result);
  };

  const uniqueCategories = [
    //@ts-ignore
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  useEffect(() => {
    getTickets();

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket: any) => ticket.category === uniqueCategory)
                  .map((filteredTicket: any, _index: any) => (
                    <TicketCard
                      //@ts-ignore
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MainView;
