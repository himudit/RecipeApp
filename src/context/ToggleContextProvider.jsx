import React, { useState } from 'react'
import ToggleContext from './ToggleContext';

const ToggleContextProvider = ({ children }) => {
    const [toggle, setToggle] = useState(true);
    return (
        <ToggleContext.Provider value={{ toggle, setToggle }}>
            {children}
        </ToggleContext.Provider>
    )
}

export default ToggleContextProvider