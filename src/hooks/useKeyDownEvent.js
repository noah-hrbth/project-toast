import { useCallback, useEffect } from "react";


function useKeyDownEvent(eventKeyCode, actionCallback) {
  const handleDismissAllToastsOnEsc = useCallback((event) => {
    if (event.code !== eventKeyCode) return;

    actionCallback();
  }, [eventKeyCode, actionCallback]);

  useEffect(() => {


    window.addEventListener('keydown', handleDismissAllToastsOnEsc);

    return () => {
      window.removeEventListener('keydown', handleDismissAllToastsOnEsc)
    }
  }, [handleDismissAllToastsOnEsc]);
}

export default useKeyDownEvent;