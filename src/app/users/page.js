"use client";

import React, { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://6476954a9233e82dd53a26a9.mockapi.io/users", {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, [users]);
  return (
    <div>
      <Toaster position="top-right" richColors />
      <button onClick={() => toast.success("Event has been created")}>
        Give me a toast
      </button>

      {users ? <p>{JSON.stringify(users)}</p> : "Loading"}

      
    </div>
  );
}
