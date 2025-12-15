import { useState, useEffect } from 'react';

export default function useSetElementMinWidth({ linkRef, title, hoverText }) {
  const [minWidth, setMinWidth] = useState(0);

  useEffect(() => {
    if (linkRef.current && hoverText) {
      // Create a temporary element to measure both text widths
      const temp = document.createElement('span');
      temp.style.position = 'absolute';
      temp.style.visibility = 'hidden';
      temp.style.height = '0';
      temp.style.overflow = 'hidden';
      temp.style.whiteSpace = 'pre';

      // Copy computed styles
      const computedStyle = window.getComputedStyle(linkRef.current);
      temp.style.fontFamily = computedStyle.fontFamily;
      temp.style.fontSize = computedStyle.fontSize;
      temp.style.fontWeight = computedStyle.fontWeight;
      temp.style.letterSpacing = computedStyle.letterSpacing;
      temp.style.textTransform = computedStyle.textTransform;

      document.body.appendChild(temp);

      // Measure original text width
      temp.textContent = title;
      const titleWidth = temp.offsetWidth;

      // Measure hover text width
      temp.textContent = hoverText;
      const hoverWidth = temp.offsetWidth;

      // Set minimum width to the larger of the two
      setMinWidth(Math.max(titleWidth, hoverWidth));

      document.body.removeChild(temp);
    }
  }, [linkRef, title, hoverText]);

  return minWidth;
}
