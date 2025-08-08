import { useEffect, useState } from 'react';

export default function TypewriterText({ text = "", speed = 30 }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]); // ✅ Now includes speed

  return <p className="text-center text-xl leading-relaxed">{displayed}</p>;
}
