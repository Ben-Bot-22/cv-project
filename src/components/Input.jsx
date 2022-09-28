import React from 'react';

const styles = {
  color: 'blue',
  width: '98%',
  height: '25px',
};

const Input = (props) => {
  const { name, type, placeholder, onChange } = props;
  return (
    <div>
      <input
        style={styles}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
