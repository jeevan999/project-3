import React from 'react';
import { Box, CssBaseline, Typography, Paper } from '@mui/material';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: { sm: '240px' },
          bgcolor: 'grey.100',
          minHeight: '100vh',
        }}
      >
        <Box sx={{ maxWidth: 'lg', mx: 'auto', mt: 8 }}>
          <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
            Welcome to Dashboard
          </Typography>
          <Paper sx={{ p: 3, mt: 3 }}>
            <Typography color="text.secondary">
              Click on "Team Members" or "More Options" in the sidebar to see the nested sidebar in action!
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

export default App;