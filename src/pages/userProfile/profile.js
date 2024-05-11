import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import '../app/globals.css'
import Footer from "@/components/globals/footer";
import Header_global from "@/components/globals/headerGlobal";
import ProfileIndex from "@/components/userDetails/profileIndex";

export default function Profile() {
    return (
        <main>
            <Header_global />
            <ProfileIndex />
            <Footer />
        </main>
    );
};
