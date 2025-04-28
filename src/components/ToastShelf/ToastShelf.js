import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toastList, setToastList }) {
	const handleDismissToast = (id) => {
		const nextToastList = toastList.filter((toast) => {
			return toast.id !== id;
		});

		setToastList(nextToastList);
	};

	return (
		<ol className={styles.wrapper}>
			{toastList.map((toast) => (
				<li className={styles.toastWrapper} key={toast.id}>
					<Toast
						id={toast.id}
						message={toast.message}
						type={toast.type}
						dismissToast={handleDismissToast}
					/>
				</li>
			))}
		</ol>
	);
}

export default ToastShelf;
