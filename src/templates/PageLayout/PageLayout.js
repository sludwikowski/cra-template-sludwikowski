import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'

export const PageLayout = (props) => {
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
      
    </Box>
  )
}

PageLayout.propTypes = {
  sx: PropTypes.object
}

export default PageLayout
