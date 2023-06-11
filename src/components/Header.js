import React from "react"

function Header({ isDarkMode, onDarkModeClick }) {
    const headerClassName = isDarkMode ? "Dark" : "Light";
return (
    <header className={headerClassName}>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
        </button>
    </header>
    )
}

export default Header