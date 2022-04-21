const validateCountryIso = (countryIso: string | undefined) => {
  if (countryIso === undefined || countryIso.length !== 2) {
    throw new Error('Error ! Invalid country iso');
  }

  return true;
};

export default validateCountryIso;
