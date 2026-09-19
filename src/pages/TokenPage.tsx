import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Avatar,
  Button,
  Chip,
  Tooltip,
  Snackbar,
  Alert,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LogoutIcon from '@mui/icons-material/Logout';
import CheckIcon from '@mui/icons-material/Check';
import KeyIcon from '@mui/icons-material/Key';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const TokenPage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const handleCopyToken = () => {
    if (user?.accessToken) {
      navigator.clipboard.writeText(user.accessToken);
      setCopied(true);
      setSnackbarOpen(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  if (!user) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#F9FAFB',
        }}
      >
        <Paper sx={{ p: 4, borderRadius: 4, textAlign: 'center', maxWidth: 400 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            No Active Session Found
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Please log in to view your Firebase authentication token.
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate('/')}
            sx={{ bgcolor: '#000000', borderRadius: '24px', px: 4 }}
          >
            Go to Login
          </Button>
        </Paper>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#F4F4F5',
        py: { xs: 4, md: 8 },
        px: 2,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: '24px',
            bgcolor: '#FFFFFF',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.05)',
          }}
        >
          {/* Header Banner */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'flex-start', sm: 'center' },
              justifyContent: 'space-between',
              pb: 3,
              mb: 4,
              borderBottom: '1px solid #E4E4E7',
              gap: 2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar
                src={user.photoURL || undefined}
                alt={user.displayName || 'User'}
                sx={{
                  width: 56,
                  height: 56,
                  bgcolor: '#6BC48A',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  border: '2px solid #000000',
                }}
              >
                {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
              </Avatar>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#18181B' }}>
                    {user.displayName || 'Authenticated User'}
                  </Typography>
                  <Chip
                    icon={<VerifiedUserIcon style={{ fontSize: 14 }} />}
                    label="Verified"
                    size="small"
                    sx={{
                      bgcolor: '#EAF4EC',
                      color: '#27272A',
                      fontWeight: 700,
                      fontSize: '0.7rem',
                    }}
                  />
                </Box>
                <Typography variant="body2" sx={{ color: '#71717A' }}>
                  {user.email || 'No email provided'}
                </Typography>
              </Box>
            </Box>

            <Button
              variant="outlined"
              startIcon={<LogoutIcon />}
              onClick={handleLogout}
              sx={{
                borderRadius: '24px',
                borderColor: '#E4E4E7',
                color: '#18181B',
                px: 3,
                '&:hover': {
                  borderColor: '#18181B',
                  bgcolor: '#F4F4F5',
                },
              }}
            >
              Sign Out
            </Button>
          </Box>

          {/* Token Display Section */}
          <Box sx={{ mb: 4 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: 1.5,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <KeyIcon sx={{ color: '#18181B', fontSize: 20 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#18181B' }}>
                  Firebase Access Token (JWT)
                </Typography>
              </Box>

              <Tooltip title={copied ? 'Copied!' : 'Copy token'}>
                <Button
                  size="small"
                  startIcon={copied ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
                  onClick={handleCopyToken}
                  sx={{
                    borderRadius: '16px',
                    bgcolor: copied ? '#EAF4EC' : '#F4F4F5',
                    color: copied ? '#15803D' : '#18181B',
                    px: 2,
                    fontSize: '0.8rem',
                  }}
                >
                  {copied ? 'Copied' : 'Copy'}
                </Button>
              </Tooltip>
            </Box>

            {/* Formatted Code Block */}
            <Paper
              elevation={0}
              sx={{
                p: 2.5,
                bgcolor: '#09090B',
                color: '#4ADE80',
                borderRadius: '16px',
                fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
                fontSize: '0.85rem',
                wordBreak: 'break-all',
                maxHeight: 220,
                overflowY: 'auto',
                border: '1px solid #27272A',
                lineHeight: 1.6,
                position: 'relative',
              }}
            >
              {user.accessToken}
            </Paper>
          </Box>

          {/* Session Details Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: 2,
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 2,
                bgcolor: '#FAFAFA',
                borderRadius: '16px',
                border: '1px solid #F4F4F5',
              }}
            >
              <Typography variant="caption" sx={{ color: '#71717A', fontWeight: 600 }}>
                USER ID (UID)
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 700, color: '#18181B', mt: 0.5 }}>
                {user.uid}
              </Typography>
            </Paper>

            <Paper
              elevation={0}
              sx={{
                p: 2,
                bgcolor: '#FAFAFA',
                borderRadius: '16px',
                border: '1px solid #F4F4F5',
              }}
            >
              <Typography variant="caption" sx={{ color: '#71717A', fontWeight: 600 }}>
                AUTHENTICATION METHOD
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 700, color: '#18181B', mt: 0.5 }}>
                Firebase Auth (Google OAuth2 / Password)
              </Typography>
            </Paper>
          </Box>
        </Paper>
      </Container>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ borderRadius: 3, fontWeight: 600 }}>
          Access Token copied to clipboard!
        </Alert>
      </Snackbar>
    </Box>
  );
};
