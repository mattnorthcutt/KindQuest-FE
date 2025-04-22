import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function TypewriterEffect() {
  const textRef = useRef(null);
  const fullText = 'Welcome to KindQuest!';

  useEffect(() => {
    const container = textRef.current;
    const splitText = fullText.split('');

    container.innerHTML = '';

    splitText.forEach((char, i) => {
      const span = document.createElement('span');
      span.innerHTML = char;
      span.style.opacity = 0;
      container.appendChild(span);

      gsap.to(span, {
        opacity: 1,
        duration: 0.1,
        delay: i * 0.1,
      });
    });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <h1
        className="text-warning"
        ref={textRef}
        style={{
          fontFamily: 'monospace',
          whiteSpace: 'nowrap',
          position: 'relative',
        }}
      >
        {fullText.split('').map((char, index) => (
          <span key={`char-${String.fromCharCode(65 + index)}`} style={{ opacity: 0 }}>
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
}

export default TypewriterEffect;
