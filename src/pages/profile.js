import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import '../app/globals.css'
import Footer from "@/components/footer";
import Header_global from "@/components/headerGlobal";
import ProfileIndex from "@/components/profileIndex";

export default function Profile() {
    return (
        <main>
            <Header_global />
            <ProfileIndex />
        </main>
    );
};
