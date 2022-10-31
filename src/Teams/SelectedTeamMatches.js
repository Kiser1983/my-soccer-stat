import { getTeamMatches } from "../API/fetch";

const SelectedTeamMatches = (TeamId, strDateFrom, strDateTo, image) => {
  if (strDateFrom.length === 10 && strDateTo.length === 10) {
    return getTeamMatches(TeamId, strDateFrom, strDateTo);
  } else {
    return getTeamMatches(TeamId, "", "", image);
  }
};

export default SelectedTeamMatches;
