import React, { useContext } from 'react';

import { ToastContext } from '../ToastProvider/ToastProvider';

import Toast from '../Toast';

import styles from './ToastShelf.module.css';

function ToastShelf() {
	const { toastList, dismissToast } = useContext(ToastContext);

	return (
		<ol className={styles.wrapper}>
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
		</ol>
	);
}

export default ToastShelf;
