import React from 'react';
import './Header.css';
function Header(props) {
    const [color, setColor] = React.useState(`${props.color}`);

    const handleColor = () => {
        setColor('purple');
    }

    return (
        <div className='header' style={{
            backgroundColor: `${color}`
        }}>
            <button onClick={handleColor}>Жмякни</button>
        </div>
    )
}

export default Header
