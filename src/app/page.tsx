'use client';

import React from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [formUrl, setFormUrl] = React.useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const urlPattern = /^https:\/\/.*\.google\.com\/.+$/;
    if (!urlPattern.test(formUrl)) {
      alert('The URL must begin with https:// and end with .google.com.');
      return;
    }
    const encodedUrl = encodeURIComponent(transformGoogleFormsUrl(formUrl));
    const newUrl = `https://accounts.google.com/AccountChooser?continue=${encodedUrl}`;
    router.push(newUrl);
  };

  const handleSecondaryButtonClick = () => {
    const modifiedUrl = transformGoogleFormsUrl(
      formUrl.replace(/\/u\/\d+\//, '/')
    );
    router.push(modifiedUrl);
  };

  function transformGoogleFormsUrl(url: string): string {
    const googleFormsPattern =
      /https:\/\/docs\.google\.com\/forms\/d\/e\/([a-zA-Z0-9_-]+)/;
    const match = url.match(googleFormsPattern);
    if (match) {
      const id = match[1];
      return `https://docs.google.com/forms/d/e/${id}/viewform`;
    }
    return url;
  }

  return (
    <main>
      <Container
        maxWidth="sm"
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom align="center">
          URL input form
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Google Form URL"
              variant="outlined"
              value={formUrl}
              size="large"
              onChange={(e) => setFormUrl(e.target.value)}
            />
          </Box>
          <Box mb={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Open account switching screen
            </Button>
          </Box>
          <Button
            type="button"
            variant="outlined"
            fullWidth
            onClick={handleSecondaryButtonClick}
          >
            Automatically opens in an authorized account.
          </Button>
        </form>
      </Container>
    </main>
  );
}
