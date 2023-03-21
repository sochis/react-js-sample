import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardActionArea, CardContent } from '@mui/material'

export const HomeCard = (props) => {
  return (
    <Card sx={{ width: 280, height: 240, backgroundColor: '#ECECEC', columnGap: '20px' }}>
      <CardActionArea sx={{ width: '100%', height: '100%' }} onClick={props.handleChange}>
        <CardContent sx={{ display: 'grid', gap: 4, paddingX: 6, textAlign: 'center' }}>
          <p className='font-bold text-4xl'>{props.mainText}</p>
          <p className='font-semibold text-base'>{props.subText}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

HomeCard.propTypes = {
  mainText: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  handleChange: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([undefined])]).isRequired
}
