import { Provider } from 'types/api/watch';

const filterActiveProviders = (
  providers: Provider[] | undefined,
  favoriteProviders: Provider[]
): Provider[] => {
  if (!providers || !favoriteProviders) {
    return [];
  }

  const foundActive = providers.filter((provider) =>
    favoriteProviders.some((favProvider) => favProvider.provider_id === provider.provider_id)
  );

  return foundActive || [];
};

export default filterActiveProviders;
