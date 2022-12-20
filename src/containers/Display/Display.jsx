import React from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import './Display.css';
import Output from './Output/Output';

function Display({ theme, changeTheme, calc }) {

    return (
        <div className="display">
            <Toolbar theme={theme} changeTheme={changeTheme} />
            <Output calc={calc} />
        </div>
    );
}

export default Display;