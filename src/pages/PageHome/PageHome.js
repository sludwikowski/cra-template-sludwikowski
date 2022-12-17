import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'

export const PageHome = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx
      }}
      {...otherProps}
    >
      Hello
    </Box>
  )
}

PageHome.propTypes = {
  sx: PropTypes.object
}

export default PageHome
