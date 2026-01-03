"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("Home page loaded");
  }, []);

  return (
    <main style={{ padding: 40 }}>
      <h1>GrowthOps</h1>
      <p>Marketing home page</p>

      <button
    onClick={() => {
        console.log("sign up clicked");
      }}
        style={{
          marginTop: 20,
          padding: "10px 16px",
          background: "black",
          color: "white",
          borderRadius: 6,
        }}
      >
        Sign up
      </button>
    </main>
  );
}
