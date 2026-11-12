
import { useEffect, useRef } from "react";

import Background from "../components/Background";
import Section from "../components/Section";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";


export default function HomePage() {

  const musicaRef = useRef<HTMLAudioElement>(null);
  const btnAudioRef = useRef<HTMLButtonElement>(null);
  const volumenRef = useRef<HTMLInputElement>(null);

  useEffect(() => {

    const musica = musicaRef.current;
    const btnAudio = btnAudioRef.current;
    const volumen = volumenRef.current;

    if (!musica || !btnAudio || !volumen) return;

    // ------------------------------------
    // BOTÓN AUDIO
    // ------------------------------------

    const toggleAudio = async () => {

      if (musica.paused) {

        try {

          await musica.play();
          btnAudio.textContent = "🔊";

        } catch (error) {

          console.error(
            "No se pudo reproducir el audio:",
            error
          );

        }

      } else {

        musica.pause();
        btnAudio.textContent = "🔇";

      }

    };

    // ------------------------------------
    // VOLUMEN
    // ------------------------------------

    const cambiarVolumen = () => {

      musica.volume = Number(volumen.value);

      if (musica.volume === 0) {

        btnAudio.textContent = "🔇";

      } else if (!musica.paused) {

        btnAudio.textContent = "🔊";

      } else {

        btnAudio.textContent = "🔇";

      }

    };

    btnAudio.addEventListener("click", toggleAudio);
    volumen.addEventListener("input", cambiarVolumen);

    musica.volume = Number(volumen.value);

    // Limpieza de eventos
    return () => {
      btnAudio.removeEventListener("click", toggleAudio);
      volumen.removeEventListener("input", cambiarVolumen);
    };

  }, []);

  return (
    <div>

      <div id="container">
        <Section />
        <Section2 />
        <Section3 />
      </div>

      <div className="audio-control">

        <button id="btnAudio" ref={btnAudioRef}>
          🔇
        </button>

        <input
          type="range"
          id="volumen"
          ref={volumenRef}
          min="0"
          max="1"
          step="0.01"
          defaultValue="0.4"
        />

      </div>

      <audio id="musica" ref={musicaRef} loop>
        <source src="/pokemon-intro.mp3" type="audio/mpeg" />
      </audio>

      <Background />

    </div>
  );
}
