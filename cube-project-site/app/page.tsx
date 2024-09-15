'use client'

import React from "react"
import TypeIt from "typeit-react"
import Link from 'next/link'

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
            <Link href="/pl">Polski </Link>
            <Link href="/en">English</Link>
            </div>
        </div>
    )
}
