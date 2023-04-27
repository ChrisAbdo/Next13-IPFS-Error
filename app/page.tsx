"use client";

import React from "react";

import client from "@/hooks/useIPFSClient";

export default function page() {
  async function onChange(e: any) {
    // upload image to IPFS

    const file = e.target.files[0];
    try {
      const added = await client.add(file, {
        progress: (prog: any) => console.log(`received: ${prog}`),
      });
      const url = `https://ipfs.io/ipfs/${added.path}`;
      console.log(url);

      // @ts-ignore
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }
  return (
    <div>
      <input type="file" onChange={onChange} />
    </div>
  );
}
