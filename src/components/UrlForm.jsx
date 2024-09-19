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
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter URL"
          variant="outlined"
          name="full_url"
          fullWidth
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          sx={{ marginBottom: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>

        {shortUrl && (
          <Alert severity="success" style={{ marginTop: 16 }}>
            {`${shortUrl.message} with code: ${shortUrl.short_code}`}
          </Alert>
        )}

        {error && (
          <Alert severity="error" style={{ marginTop: 16 }}>
            {error.map((msg, index) => (
              <div key={index}>{msg}</div>
            ))}
          </Alert>
        )}
      </form>
    </Card>
  );
};

export default UrlForm;
