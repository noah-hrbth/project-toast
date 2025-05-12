import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);

  const createToast = (message, variant) => {
    const nextToastList = [
      ...toastList,
      {
        id: crypto.randomUUID(),
        message: message,
        type: variant,
      },
    ];

    setToastList(nextToastList);
  };

  const dismissToast = (id) => {
    const nextToastList = toastList.filter((toast) => {
      return toast.id !== id;
    });

    setToastList(nextToastList);
  };

  const dismissAllToasts = () => {
    setToastList([]);
  }

  return (
    <ToastContext.Provider value={{ toastList, createToast, dismissToast, dismissAllToasts }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
