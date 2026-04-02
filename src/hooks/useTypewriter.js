import { useEffect, useMemo, useState } from "react";

export function useTypewriter({
  words,
  loop = true,
  typeSpeed = 70,
  deleteSpeed = 45,
  delaySpeed = 1400,
} = {}) {
  const safeWords = useMemo(() => {
    if (!Array.isArray(words) || words.length === 0) return [""];
    return words.map((w) => String(w));
  }, [words]);

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = safeWords[wordIndex] ?? "";

    // End condition when loop=false
    if (!loop && wordIndex === safeWords.length - 1 && text === currentWord && !isDeleting) {
      return;
    }

    const tick = () => {
      if (!isDeleting) {
        const next = currentWord.slice(0, text.length + 1);
        setText(next);

        if (next === currentWord) {
          // pause before delete
          setTimeout(() => setIsDeleting(true), delaySpeed);
        }
        return;
      }

      // deleting
      const next = currentWord.slice(0, Math.max(0, text.length - 1));
      setText(next);

      if (next.length === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => {
          const nextIndex = prev + 1;
          if (nextIndex >= safeWords.length) return loop ? 0 : prev;
          return nextIndex;
        });
      }
    };

    const speed = isDeleting ? deleteSpeed : typeSpeed;
    const id = window.setTimeout(tick, speed);
    return () => window.clearTimeout(id);
  }, [safeWords, wordIndex, text, isDeleting, loop, typeSpeed, deleteSpeed, delaySpeed]);

  return [text, { isDeleting, wordIndex }];
}
