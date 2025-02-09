'use client'

import { Button } from '@repo/ui'
import { logout } from 'app/actions/auth.action'
import React from 'react'

export function Logout() {
  return (
    <Button
      variant='contained'
      sx={{  width: 100,
        height: 40,
        bgcolor: '#910606',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: '8px',
        '&:hover': { bgcolor: '#660505' }, }}
      onClick={() => logout()}
    >
      Logout
    </Button>
  )
}
