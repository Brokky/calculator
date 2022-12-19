import React from 'react';
import HistoryBtn from './HistoryBtn/HistoryBtn';
import Toggler from './Toggler/Toggler';

import './Toolbar.css';


function Toolbar({ theme, changeTheme }) {
    return (
        <div className='toolbar'>
            <div></div> {/*  blank div for correct justify-content */}
            <Toggler theme={theme} changeTheme={changeTheme} />
            <HistoryBtn theme={theme} />
        </div>
    )
}

export default Toolbar;