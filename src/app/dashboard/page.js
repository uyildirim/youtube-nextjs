"use client"
import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState();
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const data1 = fetch("http://localhost:8002/posts")
    console.log(data1);
  }, []);
  
  return <div>Dashboard</div>;
}
