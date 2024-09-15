'use client'

import Image from "next/image";
import TypeIt from "typeit-react";


export default function Home() {
  return (
    <div className="">
      <div className="navbar bg-neutral text-neutral-content">
        <button className="btn btn-ghost text-xl font-bold text-white">CUBE</button>
      </div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="text-5xl font-bold mb-2">
              <TypeIt as={"h1"}>CUBE</TypeIt>
            </div>
              <TypeIt as={"h3"} options={{speed: 30}}>CUBE, inteligenta kostka, która wyświetla wizualizację na żywo w webowym interfejsie</TypeIt>
              <a role="button" className="btn btn-primary" href="/pl/info">Dowiedz się więcej</a>
          </div>
        </div>
      </div>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} CUBE (cube.kerso.dev)</p>
        </aside>
      </footer>
    </div>
  );
}
