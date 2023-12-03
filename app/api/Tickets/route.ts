import Ticket from "../../{models}/Ticket";
import { NextResponse, NextRequest } from "next/server";
import { doc } from "@firebase/firestore"; // for creating a pointer to our Document
import { setDoc } from "firebase/firestore"; // for adding the Document to Collection
import { firestore } from "@/app/firebase/clientApp"; // firestore instance

// const addTicket = async (req: NextRequest) => {
//   const timestamp: string = Date.now().toString();
//   const body = await req.json();
//   const _ticket = doc(firestore, `tickets/${timestamp}`);

//   const ticketData = {
//     body: body.formData,
//     timestamp,
//   };

//   try {
//     await setDoc(_ticket, ticketData);
//     return NextResponse.json({ message: "Ticket created" }, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ message: "Error", error }, { status: 500 });
//   }
// };

export async function POST(req: NextRequest) {
  const timestamp: string = Date.now().toString();
  const body = await req.json();
  const _ticket = doc(firestore, `tickets/${timestamp}`);

  const ticketData = {
    body: body.formData,
    timestamp,
  };

  try {
    await setDoc(_ticket, ticketData);
    return NextResponse.json({ message: "Ticket created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
  // try {
  //   const body = await req.json();
  //   const ticketData = body.formData;
  //   await Ticket.create(ticketData);

  //   return NextResponse.json({ message: "Ticket created" }, { status: 201 });
  // } catch (error) {
  //   return NextResponse.json({ message: "Error", error }, { status: 500 });
  // }
}

// export async function GET(req: NextRequest) {
//   try {
//     const tickets = await Ticket.find();
//     return NextResponse.json({ tickets }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ message: "Error", error }, { status: 500 });
//   }
// }
