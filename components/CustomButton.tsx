'use client'

import React, {FC} from 'react'
import Image from 'next/image'
import {CustomButtonProps} from '@/types'

const CustomButton: FC<CustomButtonProps> = ({
  title,
  containerStyles,
  btnType = 'button',
  handleClick,
}) => {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton
