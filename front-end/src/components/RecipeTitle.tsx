import React from 'react'
import Typography from '@mui/material/Typography'

interface RecipeTitleProps {
  title: string
}

const RecipeTitle: React.FC<RecipeTitleProps> = ({ title }) => (
  <Typography variant='h3' component='h1'>
    {title}
  </Typography>
)

export default RecipeTitle
