import React from 'react'

import useTitle from '../../hooks/useTitle'


export type TitleWrapperProps = {
  title?: string
  children: React.ReactElement
}


const TitleWrapper: React.FC<TitleWrapperProps> = ({
  title,
  children
}) => {
  useTitle(title)

  return children
}


export default TitleWrapper
