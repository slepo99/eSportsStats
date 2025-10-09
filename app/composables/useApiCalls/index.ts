interface ITeams {
  team_id: number;
  name: string;
}
export function useApiCalls() {
  const { $api } = useNuxtApp();

  async function getTeams() {
    return await $api<ITeams[]>(Api.GET_TEAMS);
  }
  async function loadTeams() {
    const response = await useApiFetch(Api.GET_TEAMS);
    return response;
  }
  return { getTeams, loadTeams };
}
