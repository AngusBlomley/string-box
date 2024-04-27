import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import '../app/globals.css'
import Footer from "@/components/footer";
import Header_global from "@/components/headerGlobal";
import { useDispatch } from 'react-redux';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch({
            type: 'USER_LOGIN',
            payload: { username, password },
        });
    };

    return (
        <main>
            <Header_global />

        </main>
    );
};
