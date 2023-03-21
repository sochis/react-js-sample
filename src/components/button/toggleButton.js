import React from 'react'
import PropTypes from 'prop-types'
import { ToggleButtonGroup, ToggleButton } from '@mui/material'

export const DualButton = (props) => {
  const [alignment, setAlignment] = React.useState(props.alignment)

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment)
    newAlignment === props.leftButton.value ? props.leftButton.handleChange() : props.rightButton.handleChange()
  }

  return (
    <ToggleButtonGroup color="primary" value={alignment} exclusive onChange={handleChange}>
      <ToggleButton value={props.leftButton.value}>{props.leftButton.text}</ToggleButton>
      <ToggleButton value={props.rightButton.value}>{props.rightButton.text}</ToggleButton>
    </ToggleButtonGroup>
  )
}

DualButton.propTypes = {
  alignment: PropTypes.string.isRequired,
  leftButton: PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    handleChange: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([undefined])]).isRequired
  }).isRequired,
  rightButton: PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    handleChange: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([undefined])]).isRequired
  }).isRequired
}
