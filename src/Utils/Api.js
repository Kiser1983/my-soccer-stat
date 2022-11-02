const urlLeagues = "https://api.football-data.org/v2/competitions/";
const urlTeams = "https://api.football-data.org/v2/teams/";
const API_KEY = "09850ae2c50f405080a2e019a1801ca9";

export const getLeagues = async () => {
  const response = await fetch(urlLeagues, {
    headers: {
      "x-auth-token": API_KEY,
    },
  });
  if (response.ok) {
    const json = await response.json();
    return json;
  } else {
    console.error("Данные не получены");
    return null;
  }
};
export const getTeams = async () => {
  const response = await fetch(urlTeams, {
    headers: {
      "x-auth-token": API_KEY,
    },
  });
  if (response.ok) {
    const json = await response.json();
    return json;
  } else {
    console.error("Данные не получены");
    return null;
  }
};
export const getLeagueMatches = async (
  idLeague,
  dateFromLeague,
  dateToLeague
) => {
  const response = await fetch(
    `https://api.football-data.org/v2/competitions/${idLeague}/matches?dateFrom=${dateFromLeague}&dateTo=${dateToLeague}`,
    {
      headers: {
        "x-auth-token": API_KEY,
      },
    }
  );
  if (response.ok) {
    const json = await response.json();
    return json;
  } else {
    console.error("Данные не получены");
    return null;
  }
};
export const getTeamMatches = async (idTeam, dateFromTeam, dateToTeam) => {
  const response = await fetch(
    `https://api.football-data.org/v2/teams/${idTeam}/matches?dateFrom=${dateFromTeam}&dateTo=${dateToTeam}`,
    {
      headers: {
        "x-auth-token": API_KEY,
      },
    }
  );
  if (response.ok) {
    const json = await response.json();
    return json;
  } else {
    console.error("Данные не получены");
    return null;
  }
};
