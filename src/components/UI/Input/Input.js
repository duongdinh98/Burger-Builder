import React from 'react';
import styles from './Input.module.css';

const input = (props) => {
  let inputElement = null;
  const inputClass = [styles.InputElement];
  if (props.invalid && props.touched) {
    inputClass.push(styles.Invalid);
  }

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          className={inputClass.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;

    case 'textarea':
      inputElement = (
        <textarea
          className={inputClass.join('')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;

    case 'select':
      inputElement = (
        <select
          className={styles.InputElement}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;

    default:
      inputElement = (
        <input
          className={inputClass.join('')}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
  }

  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
