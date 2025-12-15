import styles from './animated-text.module.scss';

export default function AnimatedText({ text, baseDelay = 2.5 }) {
  // Split the text into words and wrap each word in a <span>
  const words = text.split(' ');

  return (
    <div className={styles['text-animate']}>
      {words.map((word, wordIndex) => (
        <span className={styles.word} key={wordIndex}>
          {word.split('').map((char, charIndex) => (
            <span
              key={charIndex}
              style={{
                '--index': charIndex,
                animationDelay: `calc(${charIndex} * 0.03s + ${baseDelay}s)`,
              }}
            >
              {char}
            </span>
          ))}
          <span>&nbsp;</span> {/* Add space between words */}
        </span>
      ))}
    </div>
  );
}
