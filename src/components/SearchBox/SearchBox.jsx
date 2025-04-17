import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import { TextField, Box, Typography } from '@mui/material';

const SearchBox = () => {
  const dispatch = useDispatch();
  const valueFilter = useSelector(selectFilterValue);

  const handleInput = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="body1" mb={1}>Find contacts by name</Typography>
      <TextField
        fullWidth
        variant="outlined"
        value={valueFilter}
        onChange={handleInput}
        placeholder="Enter name"
      />
    </Box>
  );
};

export default SearchBox;
