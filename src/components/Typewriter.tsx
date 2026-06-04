'use client';

import { useEffect, useRef, useState } from 'react';

interface TypewriterProps {
  lines: string[];
  speed?: number;
  pauseBetween?: number;
  className?: string;
  onComplete?: () => void;
}

export default function Typewriter({
  lines,
  speed = 50,
  pauseBetween = 800,
  className = '',
  onComplete,
}: TypewriterProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentLine >= lines.length) {
      onComplete?.();
      return;
    }

    const line = lines[currentLine];

    if (currentChar < line.length) {
      timerRef.current = setTimeout(() => {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          updated[currentLine] = (updated[currentLine] || '') + line[currentChar];
          return updated;
        });
        setCurrentChar((prev) => prev + 1);
      }, speed + Math.random() * 20);
    } else {
      timerRef.current = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
        setCurrentChar(0);
      }, pauseBetween);
    }

    return () => clearTimeout(timerRef.current);
  }, [currentLine, currentChar, lines, speed, pauseBetween, onComplete]);

  return (
    <div className={className}>
      {displayedLines.map((text, i) => (
        <p
          key={i}
          className="leading-relaxed"
          style={{ minHeight: '1.5em' }}
        >
          {text}
          {i === currentLine && i < lines.length && (
            <span
              className="inline-block w-[2px] ml-1 align-middle"
              style={{
                height: '1.1em',
                background: 'var(--rose)',
                opacity: showCursor ? 1 : 0,
                transition: 'opacity 0.1s',
              }}
            />
          )}
        </p>
      ))}
      {currentLine > displayedLines.length - 1 && displayedLines.length === lines.length && (
        <span
          className="inline-block w-[2px] ml-1 align-middle"
          style={{
            height: '1.1em',
            background: 'var(--rose)',
            opacity: showCursor ? 1 : 0,
          }}
        />
      )}
    </div>
  );
}
