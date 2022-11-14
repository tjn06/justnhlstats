import axios from 'axios'

const BASE_URL = 'https://statsapi.web.nhl.com/api/v1/'

const CONFERENCES = 'conferences'
const TEAMS = 'teams'


export async function getConferences() {
  try {
    const confernecesUrl = BASE_URL + CONFERENCES;
    console.log("ConfUrl: ", confernecesUrl)
    const response = await axios.get(confernecesUrl)
    return response.data.conferences
  } catch(error) {
    console.log("Conference-request error" , error)
  }
}

export async function getAllTeams() {
  try {
    const teamsUrl = BASE_URL + TEAMS;
    console.log("TeamsUrl: ", teamsUrl)
    const response = await axios.get(teamsUrl)
    return response.data.teams
  } catch(error) {
    console.log("Teams-request error" , error)
  }
}

export async function getTeamPlayers(teamId) {
  // this.error = this.players = null
  // this.loading = true
  // `https://statsapi.web.nhl.com/api/v1/teams/${team}?expand=team.roster`
  try {
    const teamPlayersUrl = BASE_URL + TEAMS + teamId + '?expand=team.roster';
    const response = await axios.get(teamPlayersUrl)
    console.log('TeamPlayersResponse: ', response)
    /* this.teamName = response.data.teams[0].name.toUpperCase() */
    return response.data.teams[0].roster.roster

  } catch(error) {
      console.log("TeamPlayers-response error", error)
  }
}
