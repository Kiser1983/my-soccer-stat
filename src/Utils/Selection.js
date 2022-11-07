import { getLeagueMatches, getTeamMatches } from "./Api";

export const SelectedLeagueMatches = (leagueId, strDateFrom, strDateTo) => {
  //из fetch
  if (strDateFrom.length === 10 && strDateTo.length === 10) {
    return getLeagueMatches(leagueId, strDateFrom, strDateTo);
  } else {
    return getLeagueMatches(leagueId, "", "");
  }
};

export const SelectedTeamMatches = (teamId, strDateFrom, strDateTo, image) => {
  if (strDateFrom.length === 10 && strDateTo.length === 10) {
    return getTeamMatches(teamId, strDateFrom, strDateTo);
  } else {
    return getTeamMatches(teamId, "", "", image);
  }
};
 