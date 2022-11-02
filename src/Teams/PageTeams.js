import { Pagination, Stack } from "@mui/material";
import Searchbar from "../Components/Searchbar";
import { useState } from "react";
import ListTeams from "./ListTeams";
import Filter from "../Utils/Filter";

function PaginatorTeams({ teams }) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const update = (newQuery) => {
    setQuery(newQuery);
  };
  const filtred = Filter(query, teams);
  const contentPerPage = 10;
  const lastIndex = page * contentPerPage;
  const firstIndex = lastIndex - contentPerPage;
  const pageTeamCount = Math.ceil(filtred.length / contentPerPage);
  const teamArray = filtred.slice(firstIndex, lastIndex);

  return (
    <>
      <Searchbar query={query} update={update} />
      <Stack alignItems="center" >
        <ListTeams paginatedTeams={teamArray}  />
        <Pagination
          shape='circular'
          color="primary"
          size="large"
          count={pageTeamCount}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </>
  );
}
export default PaginatorTeams;
