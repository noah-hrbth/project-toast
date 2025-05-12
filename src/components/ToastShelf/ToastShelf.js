import React, { useContext } from 'react';

import { ToastContext } from '../ToastProvider/ToastProvider';

import Toast from '../Toast';

import styles from './ToastShelf.module.css';
import useKeyDownEvent from '../../hooks/useKeyDownEvent';

function ToastShelf() {
  const { toastList, dismissToast, dismissAllToasts } = useContext(ToastContext);

  useKeyDownEvent('Escape', dismissAllToasts);

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
