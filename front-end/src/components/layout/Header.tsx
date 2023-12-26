'use client'
import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { NAVIGATIONS } from '@/constants'
import Image from 'next/image'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

const Header: React.FC = () => {
  const [selectedNav, setSelectedNav] = useState(NAVIGATIONS[0])
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'))

  const handleNavClick = (nav: any) => {
    setSelectedNav(nav)
  }

  return (
    <AppBar position='static' color='default' elevation={0}>
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        sx={{
          padding: '1.5rem 0 0',
          backgroundColor: '#fff'
        }}
        width='100%'
      >
        <Image
          src='/assets/logo.png'
          alt='Logo'
          width={100}
          height={100}
          style={{
            objectFit: 'contain',
            position: 'absolute',
            top: '1rem',
            left: isMobile ? '8vw' : '18vw'
          }}
        />
        <Stack
          direction='column'
          justifyContent='center'
          alignItems='center'
          sx={{
            width: '100%'
          }}
        >
          <Stack
            direction='row'
            justifyContent='center'
            spacing={2}
            sx={{
              width: '100%'
            }}
          >
            <Toolbar
              disableGutters
              variant='dense'
              sx={{
                width: '75%',
                paddingBottom: '0.6rem',
                maxWidth: isMobile ? '40vw' : '50vw'
              }}
            >
              {/* Primary Navigation */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: 'flex', md: 'flex' },
                  justifyContent: 'start'
                }}
              >
                {NAVIGATIONS.map((nav, index) => (
                  <Link key={index} href={nav.path} passHref>
                    <Typography
                      variant='h6'
                      color='inherit'
                      noWrap
                      sx={{
                        marginRight: 8,
                        cursor: 'pointer',
                        borderBottom:
                          nav === selectedNav ? '2px solid #000' : 'none',
                        textTransform: 'uppercase',
                        letterSpacing: '0.15rem',
                        fontSize: '0.8rem',
                        fontWeight: 'bold'
                      }}
                      onClick={() => handleNavClick(nav)}
                    >
                      {nav.name}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Toolbar>
          </Stack>
          <Stack
            direction='row'
            justifyContent='center'
            spacing={2}
            sx={{
              backgroundColor: '#e7e5e4',
              width: '100%'
            }}
          >
            <Toolbar
              disableGutters
              variant='dense'
              sx={{
                width: '75%',
                paddingBottom: '1.5rem',
                paddingTop: '1.5rem',
                maxWidth: isMobile ? '40vw' : '50vw'
              }}
            >
              {/* Secondary Navigation */}
              {selectedNav.children &&
                selectedNav.children.map((child, index) => (
                  <Link key={index} href={child.path} passHref>
                    <Typography
                      variant='body2'
                      color='inherit'
                      noWrap
                      sx={{
                        marginRight: 4,
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1rem',
                        fontSize: '0.6rem',
                        fontWeight: 'bold'
                      }}
                    >
                      {child.name}
                    </Typography>
                  </Link>
                ))}
            </Toolbar>
          </Stack>
        </Stack>
      </Stack>
    </AppBar>
  )
}

export default Header
