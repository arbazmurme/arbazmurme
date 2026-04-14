"use client";

import { useState } from "react";

const CARD_EMOJIS = ["🔥", "💡", "🎯", "🚀", "⚡", "🎲", "🌙", "⭐"];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function createDeck() {
  return shuffle([...CARD_EMOJIS, ...CARD_EMOJIS]).map((emoji, index) => ({
    id: index,
    emoji,
    matched: false,
  }));
}

export default function MemoryMatch() {
  const [cards, setCards] = useState(createDeck);
  const [flipped, setFlipped] = useState([]);
  const [moves, setMoves] = useState(0);
  const [matched, setMatched] = useState(0);
  const [isChecking, setIsChecking] = useState(false);

  const isWon = matched === CARD_EMOJIS.length;

  const handleFlip = (index) => {
    if (isChecking || flipped.includes(index) || cards[index].matched) return;

    if (flipped.length === 0) {
      setFlipped([index]);
    } else if (flipped.length === 1 && index !== flipped[0]) {
      const firstIndex = flipped[0];
      const newFlipped = [firstIndex, index];
      setFlipped(newFlipped);
      setMoves((m) => m + 1);
      setIsChecking(true);

      const firstEmoji = cards[firstIndex].emoji;
      const secondEmoji = cards[index].emoji;

      setTimeout(() => {
        if (firstEmoji === secondEmoji) {
          setCards((prev) =>
            prev.map((c, i) =>
              i === firstIndex || i === index ? { ...c, matched: true } : c
            )
          );
          setMatched((m) => m + 1);
        }
        setFlipped([]);
        setIsChecking(false);
      }, 800);
    }
  };

  const resetGame = () => {
    setCards(createDeck());
    setFlipped([]);
    setMoves(0);
    setMatched(0);
    setIsChecking(false);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[auto_1fr]">
      {/* Card Grid */}
      <div className="mx-auto flex flex-col items-center">
        <div className="grid grid-cols-4 gap-3">
          {cards.map((card, index) => {
            const isFlipped = flipped.includes(index) || card.matched;
            return (
              <button
                key={card.id}
                onClick={() => handleFlip(index)}
                className={`flex h-16 w-16 items-center justify-center rounded-2xl border text-3xl transition-all duration-300
                  ${card.matched
                    ? "border-[#ffb400]/50 bg-[#ffb400]/10 shadow-[0_0_12px_rgba(255,180,0,0.3)]"
                    : isFlipped
                      ? "border-white/20 bg-white/8"
                      : "cursor-pointer border-white/10 bg-slate-900 hover:border-white/30 hover:bg-slate-800"
                  }`}
              >
                {isFlipped ? (
                  card.emoji
                ) : (
                  <span className="text-2xl text-slate-600">?</span>
                )}
              </button>
            );
          })}
        </div>

        {isWon && (
          <div className="mt-4 w-full rounded-2xl border border-[#ffb400]/50 bg-[#ffb400]/10 p-3 text-center text-sm font-semibold text-[#ffb400]">
            🎉 Completed in {moves} moves!
          </div>
        )}

        <button
          onClick={resetGame}
          className="mt-4 w-full rounded-full bg-[#ffb400] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#e4a200]"
        >
          New Game
        </button>
      </div>

      {/* Stats */}
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Moves</p>
            <p className="mt-2 text-3xl font-bold text-white">{moves}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Pairs</p>
            <p className="mt-2 text-3xl font-bold text-[#ffb400]">
              {matched} / {CARD_EMOJIS.length}
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/30 p-5">
          <p className="text-lg font-semibold text-white">How to play</p>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Click any card to flip it. Find the matching emoji pair. Match all{" "}
            <span className="font-semibold text-[#ffb400]">{CARD_EMOJIS.length} pairs</span>{" "}
            in as few moves as possible!
          </p>
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/20 p-4">
          <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-2 rounded-full bg-[#ffb400] transition-all duration-500"
              style={{ width: `${(matched / CARD_EMOJIS.length) * 100}%` }}
            />
          </div>
          <p className="mt-2 text-center text-xs text-slate-400">
            {Math.round((matched / CARD_EMOJIS.length) * 100)}% complete
          </p>
        </div>
      </div>
    </div>
  );
}
