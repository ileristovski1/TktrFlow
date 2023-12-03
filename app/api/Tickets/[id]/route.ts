import Ticket from "@/app/{models}/Ticket";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { doc } from "@firebase/firestore"; // for creating a pointer to our Document
import { setDoc } from "firebase/firestore"; // for adding the Document to Collection
import { firestore } from "@/app/firebase/clientApp"; // firestore instance

// export async function DELETE(req: NextRequest, { params }: any) {
//   try {
//     const { id } = params;
//     await Ticket.findByIdAndDelete(id);
//     return NextResponse.json(
//       { message: "Ticket Deleted with id", id },
//       { status: 200 }
//     );
//   } catch (error) {
//     return NextResponse.json({ message: "Error", error }, { status: 500 });
//   }
// }

// export async function GET(req: NextRequest, { params }: any) {
//   try {
//     const { id } = params;
//     const ticket = await Ticket.findOne({ _id: id });
//     return NextResponse.json({ ticket }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ message: "Error", error }, { status: 500 });
//   }
// }

// export async function PUT(req: NextRequest, { params }: any) {
//   try {
//     const _ticket = doc(firestore);
//     const { id } = params;
//     const body = await req.json();
//     const ticketData = body.formData;
//     await Ticket.findByIdAndUpdate(id, {
//       ...ticketData,
//     });
//     return NextResponse.json({ message: "Ticket updated" }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ message: "Error", error }, { status: 500 });
//   }
// }
