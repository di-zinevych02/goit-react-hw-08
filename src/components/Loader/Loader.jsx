import ClipLoader from "react-spinners/ClipLoader";
import { Box } from '@mui/material';

export default function Loader({ loading, color = "#6C9BCF", size = 80 }) {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
      <ClipLoader color={color} loading={loading} size={size} />
    </Box>
  );
}