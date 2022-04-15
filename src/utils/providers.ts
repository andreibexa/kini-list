import { Provider } from 'types/api/watch';

export function findFavoriteProvider(favoriteProviders: Provider[], selectedId: number) {
  return favoriteProviders.find((favProvider) => favProvider.provider_id === selectedId);
}

export function filterActiveProviders(
  providers: Provider[] | undefined,
  favoriteProviders: Provider[],
  limit = 3,
): Provider[] {
  if (!providers || !favoriteProviders) {
    return [];
  }

  return (
    providers
      // eslint-disable-next-line max-len
      .filter((provider) => favoriteProviders.some((favorite) => favorite.provider_id === provider.provider_id))
      .slice(0, limit)
      .sort((a, b) => a.display_priority - b.display_priority)
  );
}
