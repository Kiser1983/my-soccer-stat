import { Pagination, Stack} from "@mui/material";
import Searchbar from "../Components/Searchbar";
import { useState } from "react";
import LeaguesList from "./ListLeagues";
import Filter from "../Utils/Filter";

function PaginatorLeagues({ leagues }) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const update = (newQuery) => {
    setQuery(newQuery);
  };

  const filtred = Filter(query, leagues);
  const contentPerPage = 9;
  const lastIndex = page * contentPerPage;
  const firstIndex = lastIndex - contentPerPage;

  const pageLeagueCount = Math.ceil(filtred.length / contentPerPage);
  const leagueArray = filtred.slice(firstIndex, lastIndex);

  return (
    <>
      <Searchbar query={query} update={update} />

      <LeaguesList paginatedLeagues={leagueArray} />

      <Stack alignItems="center" justify="center">
        <Pagination
          align="center"
          color="primary"
          size="large"
          count={pageLeagueCount}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </>
  );
}
export default PaginatorLeagues;
