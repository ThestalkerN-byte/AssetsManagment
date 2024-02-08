'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Managment from "@/components/forms/Managment/Managment";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [typeAsset, setTypeAsset] = useState<string>('')
  const handlerManagmentForm = (e: ChangeEvent<HTMLSelectElement>) => {
    setTypeAsset(e.target.value)
  }
  return (
    <main className={styles.main}>
      <select onChange={handlerManagmentForm}>
        <option value="001">Line</option>
        <option value="002">Trafo</option>
        <option value="003">Substation</option>
      </select>
      <Managment typeAsset={typeAsset} />
    </main>
  );
}
