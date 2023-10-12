import React from 'react'


const ColorModeListener: React.FC = () => {
  const changeTheme = ({ matches }: any) => {
    if (matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light')
    }
  }

  React.useEffect(() => {
    if (!window.matchMedia('(prefers-color-scheme: dark)').matches)
      document.documentElement.setAttribute('data-bs-theme', 'light')
      
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', changeTheme)

    return window.matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener('change', changeTheme)
  }, [])
  
  return <div />
}


export default ColorModeListener
