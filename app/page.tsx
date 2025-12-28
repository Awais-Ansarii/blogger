"use client";
import { useEffect } from "react";
import Comp from "./Comp";


export default  function Home() {
  

  const getData = async () => {
    const req = await fetch("/api/get-blogs");
    console.log(req.status)
  }

  useEffect(() => {
    getData();
  },[])

  return <Comp/>
}