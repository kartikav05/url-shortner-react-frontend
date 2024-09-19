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
    <>
      URL Form
    </>
  );
};

export default UrlForm;
