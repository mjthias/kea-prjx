"use client";
import { useState } from "react";

export default function Number() {
  const [nr, setNr] = useState(0);
  return <p className="ml-10">{nr}</p>;
}
