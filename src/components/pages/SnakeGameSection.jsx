"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const GRID_SIZE = 14;
const INITIAL_SNAKE = [
  { x: 6, y: 7 },
  { x: 5, y: 7 },
  { x: 4, y: 7 },
];
const INITIAL_DIRECTION = { x: 1, y: 0 };

const randomFood = (snake) => {
  while (true) {
    const candidate = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };

    if (!snake.some((segment) => segment.x === candidate.x && segment.y === candidate.y)) {
      return candidate;
    }
  }
};

export default function SnakeGameSection() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(() => randomFood(INITIAL_SNAKE));
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const directionRef = useRef(INITIAL_DIRECTION);

  useEffect(() => {
    const storedBest = Number(window.localStorage.getItem("snake-best-score") || 0);
    setBestScore(storedBest);
  }, []);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    directionRef.current = INITIAL_DIRECTION;
    setFood(randomFood(INITIAL_SNAKE));
    setScore(0);
    setIsGameOver(false);
    setIsPlaying(false);
  };

  const updateDirection = (nextDirection) => {
    const isOpposite =
      directionRef.current.x + nextDirection.x === 0 &&
      directionRef.current.y + nextDirection.y === 0;

    if (isOpposite) {
      return;
    }

    directionRef.current = nextDirection;
    setIsPlaying(true);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const keyMap = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
        w: { x: 0, y: -1 },
        s: { x: 0, y: 1 },
        a: { x: -1, y: 0 },
        d: { x: 1, y: 0 },
      };

      const nextDirection = keyMap[event.key];

      if (!nextDirection) {
        return;
      }

      event.preventDefault();
      updateDirection(nextDirection);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!isPlaying || isGameOver) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setSnake((currentSnake) => {
        const nextHead = {
          x: currentSnake[0].x + directionRef.current.x,
          y: currentSnake[0].y + directionRef.current.y,
        };

        const hitWall =
          nextHead.x < 0 ||
          nextHead.y < 0 ||
          nextHead.x >= GRID_SIZE ||
          nextHead.y >= GRID_SIZE;
        const hitBody = currentSnake.some(
          (segment) => segment.x === nextHead.x && segment.y === nextHead.y
        );

        if (hitWall || hitBody) {
          setIsGameOver(true);
          setIsPlaying(false);
          return currentSnake;
        }

        const hasEatenFood = nextHead.x === food.x && nextHead.y === food.y;
        const nextSnake = hasEatenFood
          ? [nextHead, ...currentSnake]
          : [nextHead, ...currentSnake.slice(0, -1)];

        if (hasEatenFood) {
          setScore((currentScore) => {
            const nextScore = currentScore + 1;
            setBestScore((currentBest) => {
              const updatedBest = Math.max(currentBest, nextScore);
              window.localStorage.setItem("snake-best-score", String(updatedBest));
              return updatedBest;
            });
            return nextScore;
          });
          setFood(randomFood(nextSnake));
        }

        return nextSnake;
      });
    }, 140);

    return () => {
      window.clearInterval(timer);
    };
  }, [food, isGameOver, isPlaying]);

  const cells = useMemo(
    () =>
      Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, index) => {
        const x = index % GRID_SIZE;
        const y = Math.floor(index / GRID_SIZE);
        const snakeIndex = snake.findIndex((segment) => segment.x === x && segment.y === y);

        return {
          x,
          y,
          isHead: snakeIndex === 0,
          isSnake: snakeIndex >= 0,
          isFood: food.x === x && food.y === y,
        };
      }),
    [food, snake]
  );

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#ffb400]">
            Game Section
          </p>
          <h2 className="text-4xl font-extrabold md:text-5xl">
            Play <span className="text-[#ffb400]">Snake</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-400 md:text-base">
            A fun little game built into the portfolio. Use your keyboard or the
            on-screen controls and try to beat your best score.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#07101d] p-5 shadow-[0_24px_90px_rgba(2,6,23,0.45)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,180,0,0.15),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.12),_transparent_28%)]" />
            <div
              className="relative grid aspect-square w-full gap-1 rounded-[1.5rem] bg-slate-950/80 p-3"
              style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))` }}
            >
              {cells.map((cell) => (
                <div
                  key={`${cell.x}-${cell.y}`}
                  className={`rounded-[0.45rem] transition-all duration-100 ${
                    cell.isHead
                      ? "bg-[#ffb400] shadow-[0_0_18px_rgba(255,180,0,0.7)]"
                      : cell.isSnake
                        ? "bg-cyan-400/90"
                        : cell.isFood
                          ? "bg-pink-500 shadow-[0_0_16px_rgba(236,72,153,0.8)]"
                          : "bg-white/[0.035]"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Score
                </p>
                <p className="mt-2 text-3xl font-bold text-white">{score}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Best
                </p>
                <p className="mt-2 text-3xl font-bold text-[#ffb400]">{bestScore}</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/30 p-5">
              <p className="text-lg font-semibold text-white">Controls</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Use <span className="text-[#ffb400]">Arrow Keys</span> or{" "}
                <span className="text-[#ffb400]">W A S D</span> to move. Eat the
                pink food and avoid touching the wall or your own tail.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => setIsPlaying(true)}
                className="rounded-full bg-[#ffb400] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#e4a200]"
              >
                {isGameOver ? "Play Again" : isPlaying ? "Playing..." : "Start Game"}
              </button>
              <button
                onClick={resetGame}
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#ffb400] hover:text-[#ffb400]"
              >
                Reset
              </button>
            </div>

            <div className="mt-8 grid max-w-[14rem] grid-cols-3 gap-2">
              <div />
              <button
                onClick={() => updateDirection({ x: 0, y: -1 })}
                className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-lg text-white transition hover:border-[#ffb400] hover:text-[#ffb400]"
              >
                ↑
              </button>
              <div />
              <button
                onClick={() => updateDirection({ x: -1, y: 0 })}
                className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-lg text-white transition hover:border-[#ffb400] hover:text-[#ffb400]"
              >
                ←
              </button>
              <button
                onClick={() => updateDirection({ x: 0, y: 1 })}
                className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-lg text-white transition hover:border-[#ffb400] hover:text-[#ffb400]"
              >
                ↓
              </button>
              <button
                onClick={() => updateDirection({ x: 1, y: 0 })}
                className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-lg text-white transition hover:border-[#ffb400] hover:text-[#ffb400]"
              >
                →
              </button>
            </div>

            <div className="mt-8 rounded-2xl border border-dashed border-white/10 bg-slate-950/20 p-4 text-sm text-slate-300">
              {isGameOver
                ? "Game over. Press Play Again and try to beat your best score."
                : isPlaying
                  ? "Snake is moving. Collect food and keep the streak alive."
                  : "Press Start Game to begin."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
