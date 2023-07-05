"use client";
import { useEffect, useRef } from "react";

export default function onMount(effect?: () => void) {
  const mounted = useRef(false);

  useEffect(() => {
    if (effect) {
      effect();
    }

    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  return mounted;
}
