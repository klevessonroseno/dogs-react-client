import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, name, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <label
        className={styles.label}
        htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        type="text"
        name={name}
        id={name}
        {...props}
      />
      <p className={styles.error}>Error</p>
    </div>
  )
}

export default Input