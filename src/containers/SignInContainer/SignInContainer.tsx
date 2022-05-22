import { SignInContent } from './styles';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { SignInAvatar, SignInBox, SignInButton } from './styles';
import { Box, Container } from '@mui/material';

export function SignInContainer() {
  const navigate = useNavigate();

  function navigateToDashBoard() {
    navigate('/dashBoard');
  }

  return (
    <SignInContent>
      <Container maxWidth="sm">
        <SignInBox>
          <SignInAvatar>
            <LockOutlinedIcon />
          </SignInAvatar>
          <Typography color="textPrimary" variant="h4">
            Sign in
          </Typography>
        </SignInBox>
        <Typography color="textSecondary" variant="body2">
          Sign in on the internal platform
        </Typography>
        <Box>
          <SignInButton
            color="error"
            type="submit"
            fullWidth
            size="large"
            variant="contained"
            onClick={navigateToDashBoard}
          >
            <GoogleIcon />
            Login with Google
          </SignInButton>
          <SignInButton
            color="info"
            fullWidth
            size="large"
            variant="contained"
            onClick={navigateToDashBoard}
          >
            <FacebookIcon />
            Login with Facebook
          </SignInButton>
        </Box>
      </Container>
    </SignInContent>
  );
}
