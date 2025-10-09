import { useI18n } from 'vue-i18n';
export function useMain() {
  const { t } = useI18n();
  const routes = ref([
    { name: t('mainHeader.links.matches'), path: '/matches' },
    { name: t('mainHeader.links.heroes'), path: '/heroes' },
    { name: t('mainHeader.links.players'), path: '/players' },
    { name: t('mainHeader.links.teams'), path: '/teams' },
  ]);
  return { routes };
}
