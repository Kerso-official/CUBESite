'use client'

import React from "react"
import TypeIt from "typeit-react"
import Link from 'next/link'
import "../../node_modules/flag-icons/css/flag-icons.min.css";

export default function Home() {
    return (
        <div className="text-center min-h-screen bg-base-200">
            <div className="App text-5xl">
            <TypeIt
                options={{
                strings: ["Wybierz język/Select language", " "],
                speed: 30,
                waitUntilVisible: true,
                }}
            /> 
            </div>
            <div className="text-4xl">
            <Link href="/pl"><span className="fi fi-pl"></span></Link>
            <Link href="/en"><span className="fi fi-gb"></span></Link>
            </div>
        </div>
    )
}