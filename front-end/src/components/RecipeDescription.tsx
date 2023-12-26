import React from 'react'
import Typography from '@mui/material/Typography'

interface RecipeDescriptionProps {
  description: string
}

const RecipeDescription: React.FC<RecipeDescriptionProps> = ({
  description
}) => (
  <Typography
    variant='body1'
    style={{
      marginTop: '4rem'
    }}
  >
    {description}
  </Typography>
)

export default RecipeDescription
