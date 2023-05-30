import './emailBadgeInput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function EmailBadgeInput() {

  const [items, setItems] = useState([]);
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  /**
   *
   *
   */
  const isInList = email => {
    return items.includes(email);
  }

  /**
   *
   *
   */
  const isEmail = email => {
    return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
  }

  /**
   *
   *
   */
  const isValid = email => {
    if (isInList(email)) {
      setError(prev => `${email} has already been added.`);
      return false;
    }
    if (!isEmail(email)) {
      setError(prev => `${email} is not a valid email address.`);
      return false;
    }
    return true;
  }

  /**
   *
   *
   */
  const handleKeyDown = event => {
    if (['Enter', 'Tab', ','].includes(event.key)) {
      event.preventDefault();
      if (value && isValid(value)) {
        setItems(prev => [...prev, value.trim()]);
        setValue(prev => '');
      }
    }
  };

  /**
   *
   *
   */
  const handleChange = event => {
    setValue(prev => event.target.value);
    setError(prev => null);
  };

  /**
   *
   *
   */
  const handleDelete = item => {
    setItems(prev => prev.filter(i => i !== item));
  };

  /**
   *
   *
   */
  const handlePaste = event => {
    event.preventDefault();
    const paste = event.clipboardData.getData('text');
    setValue(prev => paste);
  };

  /**
   *
   *
   */
  const inputStyle = `
    w-full rounded-lg font-light text-sm py-1 px-4
    bg-white text-black hover:bg-slate-200 border mt-2
    ${error ? 'border-red-500' : 'border-black'}
  `;

  /**
   *
   *
   */
  const badgeStyle = `
    inline-flex  text-xs font-light border rounded-lg px-2 py-0.5
    bg-[#89B3D9] border-[#89B3D9] m-1 flex items-center
    hover:bg-[#2B448C] hover:text-white hover:border-[#393073] 
  `;

  return (
  <>
    {items.map(item => (
      <div id='badge' className={badgeStyle} key={item}>
        <div className='text-xs pb-0.5'>
          {item}
        </div>
        <button onClick={() => handleDelete(item)}>
          <FontAwesomeIcon
            id='x_mark'
            className='text-black text-xs pl-2'
            icon={faXmark}
          />
        </button>
      </div>
    ))}

    <input
      className={inputStyle}
      value={value}
      placeholder='Escriba la dirección de correo electrónico y presione `Enter`...'
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      onPaste={handlePaste}
    />
    { error && <p className='m-0 font-light text-sm py-1 px-4 text-red-500'>{error}</p> }
  </>
 );
};
