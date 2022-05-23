import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { SignInAvatar, SignInButton } from './styles';
import { ButtonBox, SignHeaderBox, SignInBox, SignInContent } from './styles';

export function SignInContainer() {
  const navigate = useNavigate();

  function navigateToDashBoard() {
    navigate('/dashBoard');
  }

  return (
    <SignInContent>
      <SignInBox>
        <Box>
          <SignHeaderBox>
            <SignInAvatar>
              <LockOutlinedIcon />
            </SignInAvatar>
            <Typography color="textPrimary" variant="h4">
              Sign in
            </Typography>
          </SignHeaderBox>
          <Typography color="textSecondary" gutterBottom variant="body2">
            Sign in on the internal platform
          </Typography>
        </Box>
        <ButtonBox>
          <SignInButton
            color="info"
            fullWidth
            startIcon={<FacebookIcon />}
            size="large"
            variant="contained"
          >
            Login with Facebook
          </SignInButton>
          <SignInButton
            fullWidth
            color="error"
            startIcon={<GoogleIcon />}
            size="large"
            variant="contained"
          >
            Login with Google
          </SignInButton>
        </ButtonBox>
      </SignInBox>
    </SignInContent>
  );
}
