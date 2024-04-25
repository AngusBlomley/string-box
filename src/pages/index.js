import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import '../app/globals.css'
import Navigation from "@/components/navigation";

export default function Home() {
  return (<body>
    <Navigation />
    <video
      src="videos/video.mp4"
      className="w-full h-full object-cover absolute top-0 left-0 opacity-50"
      autoPlay
      loop
      muted
      playsInline
    />
  </body>
  );
}