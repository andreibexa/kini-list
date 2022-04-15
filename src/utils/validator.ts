const validateCountryIso = (countryIso: string | undefined) => {
  if (countryIso === undefined || countryIso.length !== 2) {
    throw new Error('Error ! Invalid country iso');
  }
  return 'dd';
};

export default validateCountryIso;
