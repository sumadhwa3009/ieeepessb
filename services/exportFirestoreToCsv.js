import fs from "fs";
import { Parser } from "json2csv";
import admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json" with { type: "json" };

// Initialize Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function exportToCSV() {
  const snapshot = await db.collection("members26").get();

  if (snapshot.empty) {
    console.log("⚠️ No documents found");
    return;
  }

  const data = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

  const parser = new Parser();
  const csv = parser.parse(data);

  fs.writeFileSync("members26.csv", csv);
  console.log("✅ CSV exported successfully");
}

exportToCSV().catch(console.error);
