import React from 'react';
import { Button, TextField, Container, Box, Stack } from '@mui/material';
import Cookies from 'js-cookie';
import { StyledButton, StyledTextField } from '@/app/components/Styles';

export default function Cookie() {

  const [cookieName, setCookieName] = React.useState('');
  const [cookieValue, setCookieValue] = React.useState('');
  const [retrievedCookie, setRetrievedCookie] = React.useState('');

  const handleInputChange = (event: any) => {
    setRetrievedCookie('');
    const { name, value } = event.target;
    switch (name) {
      case 'cookieName':
        setCookieName(value);
        break;
      case 'cookieValue':
        setCookieValue(value);
        break;
    }
  };

  const setCookie = () => {
    Cookies.set(cookieName, cookieValue);
    
    console.log(Cookies.get(cookieName));
    console.log(Cookies.get(cookieValue));

    setCookieName('');
    setCookieValue('');
  };

  const getCookie = () => {
    const revCookie = Cookies.get(cookieName);
    if (revCookie != undefined) {
      setRetrievedCookie(revCookie);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Stack spacing={2} direction="column" sx={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Stack spacing={2} direction="row" sx={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <StyledTextField
            label="Cookie Name"
            name="cookieName"
            value={cookieName}
            onChange={handleInputChange}
          />
          <StyledTextField
            label="Cookie Value"
            name="cookieValue"
            value={cookieValue}
            onChange={handleInputChange}
          />
        </Stack>
        <StyledButton variant="contained" color="primary" onClick={setCookie}>
          Set Cookie
        </StyledButton>
        <StyledButton variant="contained" color="secondary" onClick={getCookie}>
          Get Cookie
        </StyledButton>
        {retrievedCookie && (
          <p>Retrieved Cookie Value: {retrievedCookie}</p>
        )}
      </Stack>
    </Box>
  );
}
