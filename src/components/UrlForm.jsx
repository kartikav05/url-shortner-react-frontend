import React, { useState } from 'react';
import { TextField, Button, Typography, Alert, Card } from '@mui/material';
import { shortenUrl } from '../service';

const UrlForm = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState(null);
  const [error, setError] = useState(null);

  return (
    <>
      URL Form
    </>
  );
};

export default UrlForm;
