import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Card, Typography } from '@mui/material';
import { getTopUrls } from '../service';

const UrlTable = () => {
  const [urls, setUrls] = useState([]);

  return (
    <>
      URL Table
    </>
  );
};

export default UrlTable;
