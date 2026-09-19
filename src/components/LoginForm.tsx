import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Link,
  Divider,
  Alert,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { SocialButtons } from './SocialButtons';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});
  const [formError, setFormError] = useState<string | null>(null);

  const { loginWithEmail } = useAuth();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: { username?: string; password?: string } = {};

    if (!username.trim()) {
      newErrors.username = 'Username or Email is required';
    } else if (username.includes('@') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)) {
      newErrors.username = 'Please enter a valid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (validateForm()) {
      try {
        const emailToUse = username.includes('@') ? username : `${username.toLowerCase()}@tugasapp.com`;
        await loginWithEmail(emailToUse);
        navigate('/dashboard');
      } catch {
        setFormError('Failed to sign in. Please check your credentials.');
      }
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        width: '100%',
        maxWidth: 420,
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header text */}
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: 800,
          fontSize: { xs: '1.85rem', sm: '2.25rem' },
          mb: 1.5,
          color: '#000000',
        }}
      >
        Welcome back!
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: '0.9rem',
          color: '#71717A',
          mb: 4,
          lineHeight: 1.5,
        }}
      >
        Simplify your workflow and boost your productivity with{' '}
        <Box component="span" sx={{ fontWeight: 700, color: '#18181B' }}>
          Tuga's App
        </Box>
        . Get started for free.
      </Typography>

      {formError && (
        <Alert severity="error" sx={{ mb: 2, borderRadius: 2 }}>
          {formError}
        </Alert>
      )}

      {/* Username Field */}
      <Box sx={{ mb: 2.5 }}>
        <TextField
          fullWidth
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            if (errors.username) setErrors({ ...errors, username: undefined });
          }}
          error={!!errors.username}
          helperText={errors.username}
          autoComplete="username"
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '28px',
            },
          }}
        />
      </Box>

      {/* Password Field */}
      <Box sx={{ mb: 1 }}>
        <TextField
          fullWidth
          id="password"
          placeholder="Password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (errors.password) setErrors({ ...errors, password: undefined });
          }}
          error={!!errors.password}
          helperText={errors.password}
          autoComplete="current-password"
          variant="outlined"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    sx={{ color: '#71717A', mr: 0.5 }}
                  >
                    {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '28px',
            },
          }}
        />
      </Box>

      {/* Forgot Password */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
        <Link
          underline="hover"
          href="#"
          onClick={(e) => e.preventDefault()}
          sx={{
            fontSize: '0.8rem',
            color: '#71717A',
            fontWeight: 500,
            '&:hover': { color: '#000000' },
          }}
        >
          Forgot Password?
        </Link>
      </Box>

      {/* Login Button */}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          bgcolor: '#000000',
          color: '#ffffff',
          borderRadius: '28px',
          py: 1.6,
          fontSize: '0.95rem',
          fontWeight: 600,
          boxShadow: 'none',
          '&:hover': {
            bgcolor: '#1F1F23',
            boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
          },
        }}
      >
        Login
      </Button>

      {/* Divider */}
      <Box sx={{ display: 'flex', alignItems: 'center', my: 3.5 }}>
        <Divider sx={{ flexGrow: 1, borderColor: '#E4E4E7' }} />
        <Typography
          variant="body2"
          sx={{
            px: 2,
            color: '#71717A',
            fontSize: '0.825rem',
            fontWeight: 500,
          }}
        >
          or continue with
        </Typography>
        <Divider sx={{ flexGrow: 1, borderColor: '#E4E4E7' }} />
      </Box>

      {/* Social Logins */}
      <SocialButtons />

      {/* Register Footer */}
      <Typography
        variant="body2"
        align="center"
        sx={{
          color: '#71717A',
          fontSize: '0.85rem',
          mt: 4,
        }}
      >
        Not a member?{' '}
        <Link
          underline="hover"
          href="#"
          onClick={(e) => e.preventDefault()}
          sx={{
            color: '#18181B',
            fontWeight: 700,
            cursor: 'pointer',
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          Register now
        </Link>
      </Typography>
    </Box>
  );
};
