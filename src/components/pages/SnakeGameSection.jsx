"use client";

import { useState } from "react";
import SnakeGame from "./games/SnakeGame";
import TicTacToe from "./games/TicTacToe";
import MemoryMatch from "./games/MemoryMatch";

const GAMES = [
  { id: "snake", label: "Snake", icon: "🐍", desc: "Classic snake — eat food, grow longer." },
  { id: "tictactoe", label: "Tic‑Tac‑Toe", icon: "⭕", desc: "Beat the AI in a game of noughts & crosses." },
  { id: "memory", label: "Memory Match", icon: "🃏", desc: "Flip cards and find all matching emoji pairs." },
];

export default function SnakeGameSection() {
  const [active, setActive] = useState("snake");

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#ffb400]">
            Game Section
          </p>
          <h2 className="text-4xl font-extrabold md:text-5xl">
            Play <span className="text-[#ffb400]">Games</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-400 md:text-base">
            A collection of fun mini‑games built into the portfolio. Pick one below and start playing.
          </p>
        </div>

        {/* Game selector tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {GAMES.map((g) => (
            <button
              key={g.id}
              onClick={() => setActive(g.id)}
              className={`flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-200
                ${active === g.id
                  ? "border-[#ffb400] bg-[#ffb400] text-black shadow-[0_0_24px_rgba(255,180,0,0.35)]"
                  : "border-white/15 bg-white/5 text-white hover:border-[#ffb400]/60 hover:text-[#ffb400]"
                }`}
            >
              <span>{g.icon}</span>
              {g.label}
            </button>
          ))}
        </div>

        {/* Active game */}
        {active === "snake" && <SnakeGame />}
        {active === "tictactoe" && <TicTacToe />}
        {active === "memory" && <MemoryMatch />}
      </div>
    </section>
  );
}
