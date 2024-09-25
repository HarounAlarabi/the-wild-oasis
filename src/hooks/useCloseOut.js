import { useEffect, useRef } from "react";

export function useCloseOut(handler, listenCapture = true) {
  const ref = useRef();
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }

    document.addEventListener("mousedown", handleClickOutside, listenCapture);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
        listenCapture
      );
    };
  }, [handler, listenCapture]);
  return ref;
}
