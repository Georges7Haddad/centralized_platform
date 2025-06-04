"use client";

import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

export default function Logo({ height = 40, marginBottom = 0, marginRight = 1 }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Box 
      component="img" 
      src="/images/logo.png" 
      alt="AUB Logo" 
      sx={{ 
        height,
        mb: marginBottom,
        mr: marginRight,
        cursor: 'pointer',
      }} 
    />
  );
}
