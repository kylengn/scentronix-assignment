import React from 'react'
import Box from '@mui/material/Box'
import Slide from '@mui/material/Slide'

interface RecipeImageProps {
  imageUrl: string
}

const RecipeImage: React.FC<RecipeImageProps> = ({ imageUrl }) => (
  <Slide direction='left' in={true} timeout={1000}>
    <Box
      component='img'
      src={imageUrl}
      alt='Recipe Image'
      sx={{ width: '100%', maxHeight: 400, objectFit: 'contain' }}
    />
  </Slide>
)

export default RecipeImage
