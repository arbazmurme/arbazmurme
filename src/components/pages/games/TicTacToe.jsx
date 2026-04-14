"use client";

import { useEffect, useState } from "react";

const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function checkWinner(board) {
  for (const [a, b, c] of WIN_PATTERNS) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line: [a, b, c] };
    }
  }
  if (board.every(Boolean)) return { winner: "draw", line: [] };
  return null;
}

function minimax(board, isMax, alpha, beta) {
  const result = checkWinner(board);
  if (result) {
    if (result.winner === "O") return 10;
    if (result.winner === "X") return -10;
    return 0;
  }
  if (isMax) {
    let best = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (!board[i]) {
        board[i] = "O";
        best = Math.max(best, minimax(board, false, alpha, beta));
        board[i] = null;
        alpha = Math.max(alpha, best);
        if (beta <= alpha) break;
      }
    }
    return best;
  } else {
    let best = Infinity;
    for (let i = 0; i < 9; i++) {
      if (!board[i]) {
        board[i] = "X";
        best = Math.min(best, minimax(board, true, alpha, beta));
        board[i] = null;
        beta = Math.min(beta, best);
        if (beta <= alpha) break;
      }
    }
    return best;
  }
}

function getBestMove(board) {
  let bestVal = -Infinity;
  let bestMove = -1;
  for (let i = 0; i < 9; i++) {
    if (!board[i]) {
      board[i] = "O";
      const val = minimax(board, false, -Infinity, Infinity);
      board[i] = null;
      if (val > bestVal) {
        bestVal = val;
        bestMove = i;
      }
    }
  }
  return bestMove;
}

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0, draw: 0 });
  const [gameResult, setGameResult] = useState(null);

  const handleClick = (index) => {
    if (!isPlayerTurn || board[index] || gameResult) return;
    const newBoard = [...board];
    newBoard[index] = "X";
    const result = checkWinner(newBoard);
    setBoard(newBoard);
    if (result) {
      setGameResult(result);
      setScores((s) => ({ ...s, [result.winner]: s[result.winner] + 1 }));
    } else {
      setIsPlayerTurn(false);
    }
  };

  useEffect(() => {
    if (isPlayerTurn || gameResult) return;
    const timer = setTimeout(() => {
      setBoard((prevBoard) => {
        const newBoard = [...prevBoard];
        const move = getBestMove(newBoard);
        if (move === -1) return prevBoard;
        newBoard[move] = "O";
        const result = checkWinner(newBoard);
        if (result) {
          setGameResult(result);
          setScores((s) => ({ ...s, [result.winner]: s[result.winner] + 1 }));
        } else {
          setIsPlayerTurn(true);
        }
        return newBoard;
      });
    }, 450);
    return () => clearTimeout(timer);
  }, [isPlayerTurn, gameResult]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setGameResult(null);
  };

  const statusMsg = gameResult
    ? gameResult.winner === "draw"
      ? "It's a Draw!"
      : gameResult.winner === "X"
        ? "You Win! 🎉"
        : "AI Wins!"
    : isPlayerTurn
      ? "Your turn (X)"
      : "AI is thinking...";

  return (
    <div className="grid gap-8 lg:grid-cols-[auto_1fr]">
      {/* Board */}
      <div className="mx-auto flex flex-col items-center">
        <div className="grid grid-cols-3 gap-3">
          {board.map((cell, i) => {
            const isWinCell = gameResult?.line?.includes(i);
            return (
              <button
                key={i}
                onClick={() => handleClick(i)}
                className={`flex h-24 w-24 items-center justify-center rounded-2xl border text-5xl font-bold transition-all duration-200
                  ${isWinCell
                    ? "border-[#ffb400] bg-[#ffb400]/20 shadow-[0_0_20px_rgba(255,180,0,0.4)]"
                    : "border-white/10 bg-slate-950/40 hover:border-white/30 hover:bg-white/5"}
                  ${cell === "X" ? "text-cyan-400" : "text-pink-400"}
                  ${!cell && !gameResult && isPlayerTurn ? "cursor-pointer" : "cursor-default"}
                `}
              >
                {cell}
              </button>
            );
          })}
        </div>

        <div className="mt-4 w-full rounded-2xl border border-white/10 bg-slate-950/30 p-3 text-center text-sm text-slate-300">
          {statusMsg}
        </div>

        <button
          onClick={resetGame}
          className="mt-4 w-full rounded-full bg-[#ffb400] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#e4a200]"
        >
          New Game
        </button>
      </div>

      {/* Stats */}
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
        <p className="mb-4 text-lg font-semibold text-white">Scoreboard</p>
        <div className="grid gap-3">
          {[
            { label: "You (X)", value: scores.X, color: "text-cyan-400" },
            { label: "AI (O)", value: scores.O, color: "text-pink-400" },
            { label: "Draw", value: scores.draw, color: "text-slate-400" },
          ].map(({ label, value, color }) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/40 px-5 py-3"
            >
              <span className={`text-sm font-medium ${color}`}>{label}</span>
              <span className="text-2xl font-bold text-white">{value}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/30 p-5">
          <p className="text-lg font-semibold text-white">How to play</p>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            You are <span className="font-semibold text-cyan-400">X</span>. Click any empty
            cell to place your mark. The AI plays as{" "}
            <span className="font-semibold text-pink-400">O</span>. Get three in
            a row to win!
          </p>
        </div>
      </div>
    </div>
  );
}
