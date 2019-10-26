// @flow

import React, { useRef, useEffect } from 'react';

export function useScroll(hash: string) {
  const linkRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (window.location.hash === `#${hash}`) {
      if (linkRef.current) linkRef.current.scrollIntoView();
    }
  }, [hash]);
  return linkRef;
}
