import React from 'react'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import GroupWorkIcon from '@mui/icons-material/GroupWork'
import Divider from '@mui/material/Divider'
import { ActionButtons } from './ActionButtons'

interface RecipeMetadataProps {
  prepTime: string
  cookTime: string
  totalTime: string
  servings: string
}

const RecipeMetadata: React.FC<RecipeMetadataProps> = ({
  prepTime,
  cookTime,
  totalTime,
  servings
}) => (
  <>
    <Stack
      direction={'row'}
      spacing={2}
      alignItems={'center'}
      justifyContent={'start'}
    >
      <AccessTimeIcon fontSize='large' />
      <Stack direction='column' spacing={1}>
        <Typography
          variant='subtitle2'
          sx={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '0.1rem',
            fontSize: '0.6rem'
          }}
        >
          Prep
        </Typography>
        <Typography variant='body1'>{prepTime}</Typography>
      </Stack>
      <Stack direction='column' spacing={1}>
        <Typography
          variant='subtitle2'
          sx={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '0.1rem',
            fontSize: '0.6rem'
          }}
        >
          Bake
        </Typography>
        <Typography variant='body1'>{cookTime}</Typography>
      </Stack>
      <Stack direction='column' spacing={1}>
        <Typography
          variant='subtitle2'
          sx={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '0.1rem',
            fontSize: '0.6rem'
          }}
        >
          Total
        </Typography>
        <Typography variant='body1'>{totalTime}</Typography>
      </Stack>
    </Stack>
    <Divider variant='middle' />
    <Stack direction='row' spacing={1} justifyContent={'space-between'}>
      <Stack
        direction={'row'}
        spacing={2}
        alignItems={'center'}
        justifyContent={'start'}
      >
        <GroupWorkIcon fontSize='large' />
        <Stack direction='column' spacing={1}>
          <Typography
            variant='subtitle2'
            sx={{
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.1rem',
              fontSize: '0.6rem'
            }}
          >
            Yield
          </Typography>
          <Typography variant='body1'>{servings}</Typography>
        </Stack>
      </Stack>
      <ActionButtons />
    </Stack>
  </>
)

export default RecipeMetadata
