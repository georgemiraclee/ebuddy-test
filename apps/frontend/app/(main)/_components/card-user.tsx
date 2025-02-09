import { User } from '@repo/entities/user'
import { Card, CardContent, Typography, Box } from '@repo/ui'
import { DialogEditUser } from './dialog-edit-user'
import React from 'react'

export function CardUser({ users }: { users: User[] }) {
  return (
    <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', padding: '16px' }}>
      {users.map(user => (
        <Card
          key={user.id}
          sx={{
            backgroundColor: 'white',
            color: '#052566',
            borderRadius: '12px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            padding: '16px',
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.02)',
              boxShadow: '0px 6px 14px rgba(0, 0, 0, 0.15)'
            }
          }}
        >
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <Box>
                <Typography variant='h5' sx={{ fontWeight: 'bold' }}>{user.firstName}</Typography>
                <Typography variant='body1' sx={{ fontSize: '16px' }}>{user.lastName}</Typography>
              </Box>
              <Typography variant='body2' sx={{ color: '#555', textAlign: 'right' }}>{user.email}</Typography>
            </Box>
            <DialogEditUser user={user} />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
