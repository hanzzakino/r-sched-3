import '../styles/Navpane.css'
import {
    BsList,
    BsBoxArrowLeft,
    BsGearFill,
    BsChevronDoubleLeft,
    BsFillMoonFill,
    BsFillSunFill,
} from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'

import { useSettingsContext } from '../context/settingsContext'

export default function Navpane() {
    const { navExpanded, currentView, toggleNav, setView, theme, toggleTheme } =
        useSettingsContext()
    return (
        <div
            className={
                'nav-container' + (navExpanded ? ' nav-container-expanded' : '')
            }
        >
            <div>
                <button
                    className={
                        'nav-toggle' +
                        (!navExpanded ? ' nav-toggle-expanded' : '')
                    }
                    onClick={toggleNav}
                >
                    {!navExpanded ? <BsList /> : <BsChevronDoubleLeft />}
                </button>
                <button
                    className={
                        'nav-menu-item' +
                        (currentView === 'home'
                            ? ' nav-menu-item-selected'
                            : '')
                    }
                    onClick={() => setView('home')}
                >
                    <span>
                        <AiFillHome className="nav-menu-icon" />
                        <p>Home</p>
                    </span>
                </button>
            </div>

            <div>
                <button
                    className={
                        'nav-menu-item' +
                        (currentView === 'settings'
                            ? ' nav-menu-item-selected'
                            : '')
                    }
                    onClick={() => setView('settings')}
                >
                    <span>
                        <BsGearFill className="nav-menu-icon" />
                        <p>Settings</p>
                    </span>
                </button>

                <button className={'nav-menu-item'} onClick={toggleTheme}>
                    <span>
                        {theme === 'light' ? (
                            <BsFillSunFill className="nav-menu-icon toggle-light" />
                        ) : (
                            <BsFillMoonFill className="nav-menu-icon toggle-dark" />
                        )}
                        <p>{theme} mode</p>
                    </span>
                </button>
                <hr className="nav-separator" />
                <button className={'nav-menu-item'}>
                    <span>
                        <BsBoxArrowLeft className="nav-menu-icon" />
                        <p>Logout</p>
                    </span>
                </button>
            </div>
        </div>
    )
}
