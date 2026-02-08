import type { ITeams } from './types.js';
export enum Api {
  GET_TEAMS = '/teams',
}

export function useTeamsFetch() {
  function loadTeams() {
    const response = useApiFetch<ITeams[]>(Api.GET_TEAMS);
    return response;
  }
  return { loadTeams };
}
