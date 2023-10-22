import React from "react";
import style from "./style.module.css";

function Input({ name, id, type, state, setState }) {
  return (
    <div className={style.container}>
      <label htmlFor={id} className={style.label}>
        {name}
      </label>
      <input
        type={type}
        id={id}
        className={style.inputForm}
        value={state.value}
        onChange={(e) => setState({ ...state, value: e.target.value })}
        required
        autoComplete="off"
      />
    </div>
  );
}

export default Input;
