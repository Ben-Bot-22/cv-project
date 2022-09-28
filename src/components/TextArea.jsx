import React from 'react';

const styles = {
  resize: 'none',
  width: '95%',
  color: 'blue',
};

const TextArea = (props) => {
  const { name, placeholder, value, onChange } = props;
  return (
    <div>
      <textarea
        style={styles}
        rows="5"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;
