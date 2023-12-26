import React from 'react'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import PrintIcon from '@mui/icons-material/Print'
import Stack from '@mui/material/Stack'

export const ActionButtons: React.FC = () => (
  <Stack
    direction={'row'}
    spacing={2}
    alignItems={'center'}
    justifyContent={'space-between'}
  >
    <Button
      variant='outlined'
      startIcon={<AddIcon />}
      sx={{
        borderRadius: '0',
        borderColor: '#000',
        color: '#000',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: '0.6rem',
        letterSpacing: '0.1rem'
      }}
    >
      Save Recipe
    </Button>
    <Button
      variant='outlined'
      startIcon={<PrintIcon />}
      sx={{
        borderRadius: '0',
        borderColor: '#000',
        color: '#000',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: '0.6rem',
        letterSpacing: '0.1rem'
      }}
    >
      Print
    </Button>
  </Stack>
)
