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

  const headerCellStyle = {
    backgroundColor: '#1976D2',
    color: '#FFFFFF',
    fontWeight: 'bold',
  };

  const bodyCellStyle = {
    color: '#000000'
  };

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
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={headerCellStyle}>Click Count</TableCell>
              <TableCell sx={headerCellStyle}>Short Code</TableCell>
              <TableCell sx={headerCellStyle}>Full URL</TableCell>
              <TableCell sx={headerCellStyle}>Shortened URL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {urls.map((url) => (
              <TableRow key={url.short_code}>
                <TableCell sx={bodyCellStyle}>{url.click_count}</TableCell>
                <TableCell sx={bodyCellStyle}>{url.short_code}</TableCell>
                <TableCell sx={bodyCellStyle}>
                  <a href={url.full_url} target="_blank">
                    {url.full_url}
                  </a>
                </TableCell>
                <TableCell sx={bodyCellStyle}>
                  <a href={`http://localhost:3000/${url.short_code}`} target="_blank">
                    http://localhost:3000/{url.short_code}
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default UrlTable;
