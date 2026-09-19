import React from 'react';
import { Box, Container, Paper } from '@mui/material';
import { LoginForm } from '../components/LoginForm';
import { IllustrationCard } from '../components/IllustrationCard';

export const LoginPage: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#F9FAFB',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 1.5, sm: 3, md: 4 },
      }}
    >
      <Container maxWidth="lg" disableGutters sx={{ width: '100%' }}>
        <Paper
          elevation={0}
          sx={{
            borderRadius: '28px',
            bgcolor: '#FFFFFF',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)',
            overflow: 'hidden',
            p: { xs: 2, sm: 3, md: 3 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'stretch',
              gap: { xs: 2, md: 3 },
            }}
          >
            {/* Left Column - Login Form */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: { xs: 2, sm: 4, md: 5 },
              }}
            >
              <LoginForm />
            </Box>

            {/* Right Column - Hero Illustration Card */}
            <Box
              sx={{
                flex: 1,
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IllustrationCard />
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};
