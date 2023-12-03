import admin from "firebase-admin";

const serviceAccount = require("path/to/your/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-firebase-project-id.firebaseio.com",
});

const db = admin.database();
const ticketsRef = db.ref("tickets");

const Ticket = {
  getAll: async () => {
    const snapshot = await ticketsRef.once("value");
    return snapshot.val();
  },
  create: async (ticketData: any) => {
    const newTicketRef = ticketsRef.push();
    await newTicketRef.set(ticketData);
    return newTicketRef.key;
  },
  // Add other CRUD operations as needed
};

export default Ticket;
