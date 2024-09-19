import React, { useState } from 'react';
import { TextField, Button, Typography, Alert, Card } from '@mui/material';
import { shortenUrl } from '../service';

const UrlForm = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(shortUrl){
      setShortUrl(null)
    }
    try {
      const response = await shortenUrl(url);
      setShortUrl({ short_code: response.short_code, message: response.message });
      setError(null);
      setUrl('');
    } catch (err) {
      setError(err.errors);
    }
  };

  return (
    <Card
      sx={{
        margin: '50px auto',
        padding: '20px',
        maxWidth: 600,
        backgroundColor: '#F6F6F6',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Shorten Your URL
      </Typography>
    </Card>
  );
};

export default UrlForm;
