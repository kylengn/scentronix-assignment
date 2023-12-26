import React from 'react'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const RecipeBreadcrumbs: React.FC = () => {
  return (
    <Breadcrumbs
      aria-label='breadcrumb'
      separator={<KeyboardArrowRightIcon fontSize='small' />}
      sx={{
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: '0.1rem',
        fontSize: '0.6rem'
      }}
    >
      <Link color='inherit' href='/recipes'>
        Recipes
      </Link>
      <Link color='inherit' href='/categories'>
        Bread
      </Link>
      <Typography
        color='textPrimary'
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'bold',
          letterSpacing: '0.1rem',
          fontSize: '0.6rem'
        }}
      >
        Quick Bread
      </Typography>
    </Breadcrumbs>
  )
}

export default RecipeBreadcrumbs
