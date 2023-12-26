'use client'
import React from 'react'
import { Recipe as RecipeType } from '@/interfaces/Recipe'
import RecipeBreadcrumbs from '@/components/RecipeBreadcrumbs'
import RecipeTitle from '@/components/RecipeTitle'
import RecipeMetadata from '@/components/RecipeMetadata'
import RecipeImage from '@/components/RecipeImage'
import RecipeDescription from '@/components/RecipeDescription'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import Grow from '@mui/material/Grow'
import Fade from '@mui/material/Fade'

interface RecipeProps {
  recipe: RecipeType
}

const recipe: RecipeType = {
  title: 'Whole-Grain Banana Bread',
  prepTime: '10 mins',
  cookTime: '1 hour to 1 hour 15 mins',
  totalTime: '1 hour 10 mins to 1 hour 25 mins',
  servings: '1 loaf, 12 generous servings',
  description: `This one-bowl banana bread — our 2018 Recipe of the Year — uses the simplest ingredients, but is incredibly moist and flavorful.
    While the recipe calls for a 50/50 mix of flours (all-purpose and whole wheat), we often make the bread 100% whole wheat, and honestly? No one can tell, it's that good! And not only is this bread delicious — it's versatile.`,
  imageUrl:
    'https://images.unsplash.com/photo-1497534547324-0ebb3f052e88?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}

const Recipes: React.FC<RecipeProps> = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'))
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 6
      }}
    >
      <Container maxWidth='lg'>
        <Grow in={true}>
          <Stack
            direction={isMobile ? 'column' : 'row'}
            spacing={4}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Fade in={true} timeout={1000}>
              <Stack direction='column' spacing={2}>
                <RecipeBreadcrumbs />
                <RecipeTitle title={recipe.title} />
                <RecipeDescription description={recipe.description} />
                <RecipeMetadata
                  prepTime={recipe.prepTime}
                  cookTime={recipe.cookTime}
                  totalTime={recipe.totalTime}
                  servings={recipe.servings}
                />
              </Stack>
            </Fade>
            <RecipeImage imageUrl={recipe.imageUrl} />
          </Stack>
        </Grow>
      </Container>
    </Box>
  )
}

export default Recipes
