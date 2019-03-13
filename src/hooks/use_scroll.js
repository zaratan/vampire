import React, { useRef, useEffect } from 'react';

export function useScroll(hash) {
  const linkRef = useRef(null);
  useEffect(() => {
    if (window.location.hash === `#${hash}`) {
      linkRef.current.scrollIntoView();
    }
  }, [hash]);
  return linkRef;
}
