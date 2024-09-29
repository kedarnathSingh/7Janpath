"use client";
import React from "react"
import { useEffect, useState } from "react";

const aboutUsContent = () => {
  const [data, setPageData] = useState([]);
  let updatedData: any;
  useEffect (() => {
    fetch(`${process.env.basePath}/settings/about_us`)
    .then((res) => res.json())
    .then((data) => {
      setPageData(data)
    })
}, []);

  return(
    <div>
      {/* {data.map((val: any) => (
          {val.title}
      ))} */}
  </div>
    
  )
}

export default aboutUsContent;