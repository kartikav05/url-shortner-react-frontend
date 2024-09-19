import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Card, Typography } from '@mui/material';
import { getTopUrls } from '../service';

const UrlTable = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      const data = await getTopUrls();
      setUrls(data);
    };
    fetchUrls();
  }, []);
  return (
    <Card
      sx={{
        margin: '50px auto',
        padding: '20px',
        maxWidth: 900,
        backgroundColor: '#F6F6F6',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Top 100 Most Accessed URLs
      </Typography>
    </Card>
  );
};

export default UrlTable;
