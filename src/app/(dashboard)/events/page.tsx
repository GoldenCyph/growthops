"use client";



import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



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

const counts: Record<string, number> = {};

events.forEach((e) => {
  const day = e.createdAt?.toDate?.().toDateString();
  if (!day) return;
  counts[day] = (counts[day] || 0) + 1;
});

const chartData = Object.entries(counts).map(([day, count]) => ({
  day,
  count,
}));

  const buttonStyle = {
  padding: "8px 14px",
  borderRadius: 6,
  border: "1px solid #e5e7eb",
  background: "#111827",
  color: "#ffffff",
  fontSize: 14,
};


<div style={{ width: "100%", height: 300, marginTop: 40 }}>
  <ResponsiveContainer>
    <BarChart data={chartData}>
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" />
    </BarChart>
  </ResponsiveContainer>
</div>


  return (
    <main style={{ padding: 40 }}>
      <h1>Events Dashboard</h1>

<h1 style={{ fontSize: 24, marginBottom: 4 }}>
  Events Dashboard
</h1>
<p style={{ color: "#6b7280", marginBottom: 30 }}>
  Track and monitor user conversion activity
</p>


      {events.length === 0 ? (
        <p>No events yet</p>
      ) : (
        <ul style={{ marginTop: 20 }}>
  {events.map((e) => (
    <li
      key={e.id}
      style={{
        padding: 12,
        border: "1px solid #e5e7eb",
        borderRadius: 6,
        marginBottom: 10,
        fontSize: 14,
      }}
    >
      <strong>{e.event}</strong>
    </li>
  ))}
</ul>

      )}
    </main>
  );
}
