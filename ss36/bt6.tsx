import React, { useEffect, useState } from 'react';

const Scroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const loremText = Array.from({ length: 50 }, () => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ").join(" ");

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      document.title = `Scroll Position: ${position}px`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const countWords = () => {
    const words = loremText.split(' ').filter(word => word !== '').length;
    setWordCount(words);
  };

  return (
    <div>
      <h1>Scroll down to see the effect</h1>
      <p>{loremText}</p>
      <button onClick={countWords}>Count Words</button>
      <p>Tổng: {wordCount}</p>
    </div>
  );
};

export default Scroll;
