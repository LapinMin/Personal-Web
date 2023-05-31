import Image from "next/image";
import styles from "./page.module.css";
import TopBar from "@/components/topbar.js";
import { SessionProvicer } from "next-auth/react";
export default function Page() {
  let name = "par";
  return (
    <div>
      <TopBar />
    </div>
  );
}
