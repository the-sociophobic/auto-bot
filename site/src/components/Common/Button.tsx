import React from 'react'


type ButtonProps = {
  children?: React.ReactNode
  left?: string | number | JSX.Element
  right?: string | number | JSX.Element
  onClick?: any
  disabled?: boolean
  green?: boolean
  pink?: boolean
  style?: 'green' | 'pink' | 'transparent'
  className?: string | boolean
}


const Button: React.FC<ButtonProps> = ({
  children,
  left,
  right,
  onClick,
  disabled,
  green,
  pink,
  style,
  className
}) => {
  return (
    <button
      disabled={disabled}
      className={`
      Button
      ${green && 'Button--green'}
      ${pink && 'Button--pink'}
      ${style && `Button--${style}`}
      ${disabled && 'Button--disabled'}
      ${children ? 'justify-content-center' : 'justify-content-between'}
      ${className}
    `}
      onClick={e => {
        onClick?.(e)
      }}
    >
      {children || (
        <>
          <p className="Button__left">{left}</p>
          <p className="Button__right">{right}</p>
        </>
      )}
    </button>
  )
}


export default Button
