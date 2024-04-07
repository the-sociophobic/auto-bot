import React from 'react'
import { toast } from 'react-hot-toast'

import clamp from '../../utils/clamp'
import Button from './Button'


type EnterThresholdProps = {
  value: number
  onChange: (value: number) => void
  min: number
  max: number
  label?: string
  className?: string
}


const EnterThreshold: React.FC<EnterThresholdProps> = ({
  value,
  onChange,
  min,
  max,
  label,
  className
}) => {
  React.useEffect(() => {
    // toast.error(value + '' + max)
    console.log(value, max)
  }, [max])

  return (
    <div className={`EnterThreshold ${className}`}>
      <div className="EnterThreshold__text">{label}</div>
      <Button
        onClick={() => onChange(clamp(value - 1, min, max))}
        disabled={value <= min}
        className="EnterThreshold__button"
      >
        —
      </Button>
      <div className="EnterThreshold__value">{value}</div>
      <Button
        onClick={() => onChange(clamp(value + 1, min, max))}
        disabled={value >= max}
        className="EnterThreshold__button"
      >
        +
      </Button>
    </div>
  )
}


export default EnterThreshold
