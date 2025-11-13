import fs from "fs";
import { Parser } from "json2csv";
import admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json" with { type: "json" };

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function exportToCSV() {
  try {
    const collectionRef = db.collection("members");
    const snapshot = await collectionRef.get();

    if (snapshot.empty) {
      console.log("⚠️ No documents found in 'members' collection.");
      return;
    }

    // Prepare data
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Convert to CSV
    const parser = new Parser();
    const csv = parser.parse(data);

    // Write to file
    fs.writeFileSync("registrations.csv", csv);
    console.log("✅ Exported to registrations.csv successfully!");
  } catch (err) {
    console.error("❌ Error exporting Firestore data:", err);
  }
}

exportToCSV();
