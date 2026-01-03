"use client";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase/client";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase/client";

type EventDoc = {
  id: string;
  event: string;
  createdAt?: any;
};

export default function EventsDashboard() {
  const [events, setEvents] = useState<EventDoc[]>([]);
  const [loading, setLoading] = useState(true);

const router = useRouter();

useEffect(() => {
  const unsub = onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.push("/login");
    }
  });

  return () => unsub();
}, []);


  useEffect(() => {
    async function fetchEvents() {
      const q = query(
        collection(db, "events"),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<EventDoc, "id">),
      }));

      setEvents(data);
      setLoading(false);
    }

    fetchEvents();
  }, []);

  if (loading) {
    return <p style={{ padding: 40 }}>Loading events…</p>;
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>Events Dashboard</h1>

      {events.length === 0 ? (
        <p>No events yet</p>
      ) : (
        <ul style={{ marginTop: 20 }}>
          {events.map((e) => (
            <li key={e.id} style={{ marginBottom: 10 }}>
              <strong>{e.event}</strong>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
