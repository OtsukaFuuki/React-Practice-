import React from "react";
import { Box, SxProps } from "@mui/material";

interface ChildProps {
  title: string;
  sx: SxProps;
}

const Children: React.FC<ChildProps> = ({ title, sx }) => {
  return (
    <>
      <Box sx={sx}>{title}</Box>
    </>
  );
};

export default Children;
