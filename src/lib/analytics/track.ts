import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { AnalyticsEvent } from "./events";


export async function trackEvent(
  event: AnalyticsEvent,
  payload: Record<string, any> = {}
) {
  console.log("Tracking event:", event, payload);

  await addDoc(collection(db, "events"), {
    event,
    payload,
    createdAt: serverTimestamp(),
  });
}
