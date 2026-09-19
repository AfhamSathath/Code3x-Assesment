import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" fill="#4285F4"/>
    <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.29v3.15C3.26 21.3 7.31 24 12 24z" fill="#34A853"/>
    <path d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.29C.47 8.21 0 10.05 0 12s.47 3.79 1.29 5.42l3.99-3.15z" fill="#FBBC05"/>
    <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.58l3.99 3.15c.95-2.83 3.6-4.98 6.72-4.98z" fill="#EA4335"/>
  </svg>
);

const AppleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.35c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.36-.58.67-1.09 1.75-.95 2.79 1.01.08 2.06-.55 2.68-1.3"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export const SocialButtons: React.FC = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    await signInWithGoogle();
    navigate('/dashboard');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justify: 'center',
        gap: 2,
        mt: 1,
        mb: 2,
      }}
    >
      <Tooltip title="Sign in with Google">
        <IconButton
          onClick={handleGoogleClick}
          aria-label="Google Sign In"
          sx={{
            width: 48,
            height: 48,
            bgcolor: '#000000',
            color: '#ffffff',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              bgcolor: '#27272A',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            },
          }}
        >
          <GoogleIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Sign in with Apple">
        <IconButton
          onClick={handleGoogleClick}
          aria-label="Apple Sign In"
          sx={{
            width: 48,
            height: 48,
            bgcolor: '#000000',
            color: '#ffffff',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              bgcolor: '#27272A',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            },
          }}
        >
          <AppleIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Sign in with Facebook">
        <IconButton
          onClick={handleGoogleClick}
          aria-label="Facebook Sign In"
          sx={{
            width: 48,
            height: 48,
            bgcolor: '#000000',
            color: '#ffffff',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              bgcolor: '#27272A',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            },
          }}
        >
          <FacebookIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
