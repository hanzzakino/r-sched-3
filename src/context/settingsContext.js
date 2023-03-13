import { createContext, useContext, useState, useEffect } from 'react'

const SettingsContext = createContext()

export const SettingsContextWrapper = ({ children }) => {
    const [currentView, setCurrentView] = useState('')
    const [navExpanded, setNavExpanded] = useState(true)
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        // 👇 add class to body element
        document.body.classList.add(theme)

        return () => {
            // 👇️ removing classes from body element
            // when the component unmounts
            document.body.classList.remove(theme)
        }
    }, [theme])

    const toggleNav = () => {
        setNavExpanded((prevState) => !prevState)
    }

    const toggleTheme = () => {
        setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'))
    }

    const setView = (pagename, datenow = 0) => {
        switch (pagename) {
            case 'home':
                setCurrentView('home')
                break
            case 'settings':
                setCurrentView('settings')
                break
            default:
                setCurrentView('dashboard')
                break
        }
    }

    return (
        <SettingsContext.Provider
            value={{
                navExpanded,
                currentView,
                theme,
                toggleNav,
                setView,
                toggleTheme,
            }}
        >
            {children}
        </SettingsContext.Provider>
    )
}

export const useSettingsContext = () => useContext(SettingsContext)
