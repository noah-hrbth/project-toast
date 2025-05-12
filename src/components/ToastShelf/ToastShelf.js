import React, { useContext, useEffect } from 'react';

import { ToastContext } from '../ToastProvider/ToastProvider';

import Toast from '../Toast';

import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toastList, dismissToast, dismissAllToasts } = useContext(ToastContext);

  useEffect(() => {
    const handleDismissAllToastsOnEsc = (event) => {
      if (event.code !== 'Escape') return;

      dismissAllToasts();
    }

    window.addEventListener('keydown', handleDismissAllToastsOnEsc);

    return () => {
      window.removeEventListener('keydown', handleDismissAllToastsOnEsc)
    }
  }, [dismissAllToasts])

  return (
    <ul className={styles.wrapper} role="region"
      aria-live="polite"
      aria-label="Notification">
      {toastList.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast
            id={toast.id}
            message={toast.message}
            type={toast.type}
            dismissToast={dismissToast}
          />
        </li>
      ))}
    </ul>
  );
}

export default ToastShelf;
