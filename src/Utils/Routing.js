import { Routes, Route, Navigate } from "react-router-dom";
import { getLeagues, getTeams } from "./Api";
import { useEffect, useState } from "react";
import PageLeagues from "../Leagues/PageLeagues";
import PageTeams from "../Teams/PageTeams";
import PageLeagueMatches from "../Leagues/PageLeagueMatches";
import PageTeamMatches from "../Teams/PageTeamMatches";
import Loading from "../Components/Loading";

function Routing() {
  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    const fetchDataLeagues = async () => {
      const jsonLeagues = await getLeagues();

      if (!jsonLeagues) return;
      console.log("jsonLeagues", jsonLeagues.competitions);

      setLeagues(jsonLeagues.competitions);
    };
    fetchDataLeagues();
  }, []);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchDataTeams = async () => {
      const jsonTeams = await getTeams();
      if (!jsonTeams) return;
      setTeams(jsonTeams.teams);
    };
    fetchDataTeams();
  }, []);

  const leagueMatchesRoute = leagues.map((league) => (
    <Route
      path={`/leagues/${league.id}/matches`}
      element={<PageLeagueMatches league={league} />}
      key={league.id}
    />
  ));
  const teamsMatchesRoute = teams.map((team) => (
    <Route
      path={`/teams/${team.id}/matches`}
      element={<PageTeamMatches team={team} />}
      key={team.id}
    />
  ));

  if (!teams.length) {
    return <Loading />;
  }
  if (!leagues.length) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route path="/leagues" element={<PageLeagues leagues={leagues} />} />
      <Route path="/teams" element={<PageTeams teams={teams} />} />
      {leagueMatchesRoute}
      {teamsMatchesRoute}
      <Route path="*" element={<Navigate to="/leagues" />} />
    </Routes>
  );
}
export default Routing;
