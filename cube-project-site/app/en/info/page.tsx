'use client'

import TypeIt from "typeit-react"

export default function Page() {
    return (
        <div className="min-h-screen bg-base-200">
            <div className="navbar bg-neutral text-neutral-content">
                <button className="btn btn-ghost text-xl font-bold text-white">CUBE</button>
            </div>
            <div className="hero bg-base-200 h-52">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <div className="text-5xl font-bold mb-2">
                            <TypeIt as={"h1"}>Informations</TypeIt>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <h3 className="text-2xl">Here you can dowload project's docx file with project description and many more</h3>
                <a href="https://cube.kerso.dev/files/project-cube-EN-public.docx" className="btn btn-primary" download>Download docx file</a>
            </div>
        </div>
    )
}