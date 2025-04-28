import React from 'react';

import Button from '../Button';
import Toast from '../Toast';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
	const [message, setMessage] = React.useState('');
	const [selectedVariant, setSelectedVariant] = React.useState('');
	const [isToastVisible, setIsToastVisible] = React.useState(false);

	const handleMessageChange = (event) => {
		setMessage(event.target.value);
	};

	const handleVariantChange = (event) => {
		setSelectedVariant(event.target.value);
	};

	const handleShowToastButtonClick = () => {
		if (!isToastVisible) {
			setIsToastVisible(true);
		}
	};

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt='Cute toast mascot' src='/toast.png' />
				<h1>Toast Playground</h1>
			</header>

			<Toast
				message={message}
				type={selectedVariant}
				isVisible={isToastVisible}
				setIsVisible={setIsToastVisible}
			/>

			<div className={styles.controlsWrapper}>
				<div className={styles.row}>
					<label
						htmlFor='message'
						className={styles.label}
						style={{ alignSelf: 'baseline' }}
					>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							id='message'
							className={styles.messageInput}
							onChange={handleMessageChange}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						{VARIANT_OPTIONS.map((option, idx) => (
							<label htmlFor={`variant-${option}`} key={option}>
								<input
									id={`variant-${option}`}
									type={'radio'}
									name={'variant'}
									value={option}
									onChange={handleVariantChange}
								/>
								{option}
							</label>
						))}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button onClick={handleShowToastButtonClick}>Pop Toast!</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ToastPlayground;
