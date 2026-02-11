"use client";

import { useState, useRef, useEffect } from "react";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;

      // Auto-play on load
      const playAudio = () => {
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Autoplay blocked, wait for user interaction
          const handleFirstInteraction = () => {
            audio.play().then(() => setIsPlaying(true));
            document.removeEventListener("click", handleFirstInteraction);
          };
          document.addEventListener("click", handleFirstInteraction);
        });
      };

      playAudio();

      const handleEnded = () => {
        audio.currentTime = 0;
        audio.play();
      };

      audio.addEventListener("ended", handleEnded);
      return () => audio.removeEventListener("ended", handleEnded);
    }
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/audio/nasheed.mp3" preload="auto" loop />

      {/* Floating Audio Control */}
      <div className="fixed end-4 top-1/2 z-50 -translate-y-1/2">
        <div className="flex flex-col items-center gap-2">
          {/* Main Play/Pause Button */}
          <button
            onClick={togglePlay}
            className={`group flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
              isPlaying
                ? "bg-gold-500 text-primary-950 shadow-gold-500/30"
                : "bg-primary-950 text-gold-500 shadow-primary-950/30 hover:bg-primary-900"
            }`}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Sound Wave Animation when playing */}
          {isPlaying && (
            <div className="flex items-end gap-0.5 h-4">
              <span className="w-1 bg-gold-500 rounded-full animate-soundwave-1" />
              <span className="w-1 bg-gold-500 rounded-full animate-soundwave-2" />
              <span className="w-1 bg-gold-500 rounded-full animate-soundwave-3" />
              <span className="w-1 bg-gold-500 rounded-full animate-soundwave-1" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
