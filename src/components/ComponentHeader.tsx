import React from 'react';
import { Box, Typography } from "@mui/material";

interface ComponentHeaderProps {
  title: string;
}

const ComponentHeader: React.FC<ComponentHeaderProps> = ({ title }) => {
  return (
    <Box sx={{ padding: 2, borderRadius: 1, marginTop: 2 }}>
      <Typography variant="h5">
        {title}
      </Typography>
    </Box>
  );
};

export default ComponentHeader;