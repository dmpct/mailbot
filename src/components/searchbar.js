import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ title, onSearch }) => {
    const [active, setActive] = useState(false);
    const [value, setValue] = useState('');
    const closeSearch = (e) => {
        e.preventDefault();
        setActive(false);
        setValue('');
    };
    let node = useRef(null);

    useEffect(() => {
        const handleInputEvent = (event) => {
            const { keyCode } = event;
            if (keyCode === 13 && active) {
                onSearch(value);
            } else if (keyCode === 27 && active) {
                closeSearch(event);
            } else {
                // do nothing;
            }
        }
        document.addEventListener('keyup', handleInputEvent);
        return () => {
            document.removeEventListener('keyup', handleInputEvent);
        }
    });
    useEffect(() => {
        if (active) {
            node.current.focus();
        }
    }, [active]);

    return (
        <div className='alert-primary d-flex justify-content-between align-items-center'>
            {
                !active &&
                <>
                    <span>{title}</span>
                    <button
                        type="button"
                        className='icon-button'
                        onClick={() => { setActive(true); }}
                    >
                        <FontAwesomeIcon title="搜索" size="lg" icon={faSearch} />
                    </button>
                </>
            }
            {
                active &&
                <>
                    <input
                        className='form-control'
                        value={value}
                        ref={node}
                        onChange={(e) => { setValue(e.target.value); }}
                    />
                    <button
                        type="button"
                        className='icon-button'
                        onClick={closeSearch}
                    >
                        <FontAwesomeIcon title="取消" size="lg" icon={faTimes} />
                    </button>
                </>
            }
        </div>
    );
}

export default SearchBar;