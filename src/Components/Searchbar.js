import { Stack } from "@mui/system";
import { TextField } from "@mui/material";

function SearchName({ query, update }) {
  return (
    <Stack direction="row">
      <TextField
        sx={{
          input: { color: "primary.main" },
          margin: 3,
          width: 235,
        }}
        label="Поиск"
        variant="outlined"
        size="small"
        value={query}
        onChange={(e) => update(e.target.value)}
      />
    </Stack>
  );
}

export default SearchName;
