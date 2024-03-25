import React from 'react'

import { Link, NavLink } from 'react-router-dom'


type Props = {
  className?: string
  activeClassName?: string
  style?: object
  to?: string
  sameTab?: boolean
  children?: any
  onClick?: Function
  disabled?: boolean
  exact?: boolean
  outerRef?: any
}


const LinkWrapper: React.FunctionComponent<Props> = ({
  className,
  activeClassName,
  style,
  to,
  sameTab,
  children,
  onClick,
  disabled,
  exact,
  outerRef,
  ...other
}) => {
  const onClickWithAudio = (e: any) => {
    onClick?.(e)
    // playAudio()
  }

  return disabled || !to ? (
    <span
      ref={outerRef}
      className={`Link Link--disabled ${className}`}
      style={style}
      onClick={(e: any) => onClickWithAudio(e)}
      {...other}
    >
      {children}
    </span>
  ) : to.match(/http*|tel:*|mailto:*|#[a-zA-Z0-9]+/) ? (
    <a
      ref={outerRef}
      className={`Link ${className}`}
      style={style}
      href={to}
      target={sameTab ? '' : '_blank'}
      rel="noreferrer"
      onClick={(e: any) => onClickWithAudio(e)}
      {...other}
    >
      {children}
    </a>
  ) : activeClassName ? (
    <NavLink
      ref={outerRef}
      to={to}
      className={(isActive) =>
        isActive ? `Link--active ${activeClassName}` : `Link ${className}`
      }
      style={style}
      onClick={(e: any) => {
        window?.Telegram?.WebApp?.BackButton?.show?.()
        onClickWithAudio(e)
      }}
      {...other}
    >
      {children}
    </NavLink>
  ) : (
    <Link
      ref={outerRef}
      to={to}
      className={`Link ${className}`}
      style={style}
      onClick={(e: any) => {
        window?.Telegram?.WebApp?.BackButton?.show?.()
        onClickWithAudio(e)
      }}
      {...other}
    >
      {children}
    </Link>
  )
}


export default LinkWrapper
