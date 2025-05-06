/**
 * Represents information about an institution in Sector 1.
 */
export interface Institution {
  /**
   * The name of the institution.
   */
  name: string;
  /**
   * The address of the institution.
   */
  address: string;
  /**
   * The contact phone number of the institution.
   */
  phone: string;
  /**
   * The email address of the institution.
   */
  email: string;
}

/**
 * Represents information about alerts.
 */
export interface Alert {
  /**
   * The type of alert.
   */
  type: string;
  /**
   * The address of the alert.
   */
  address: string;
  /**
   * The description of the alert.
   */
  description: string;
}

/**
 * Represents information about selective collection points.
 */
export interface SelectiveCollectionPoint {
  /**
   * The address of the selective collection point.
   */
  address: string;
  /**
   * The type of materials collected.
   */
  materials: string[];
}

/**
 * Represents information about public toilets.
 */
export interface PublicToilet {
  /**
   * The address of the public toilet.
   */
  address: string;
  /**
   * Whether the public toilet is free or not.
   */
  free: boolean;
}

/**
 * Represents information about education institutions.
 */
export interface EducationInstitution {
  /**
   * The type of the education institution.
   */
  type: string;
  /**
   * The name of the education institution.
   */
  name: string;
  /**
   * The address of the education institution.
   */
  address: string;
}

/**
 * Represents information about services.
 */
export interface Service {
  /**
   * The type of the service.
   */
  type: string;
  /**
   * The name of the service.
   */
  name: string;
  /**
   * The address of the service.
   */
  address: string;
}




/**
 * Asynchronously retrieves a list of institutions in Sector 1.
 *
 * @returns A promise that resolves to a list of Institution objects.
 */
export async function getInstitutions(): Promise<Institution[]> {
  // TODO: Implement this by calling an API.

  return [
    {
      name: 'Primăria S1',
      address: 'Bd. Banu Manta nr. 9',
      phone: '021 319 1013',
      email: 'registratura@primarias1.ro',
    },
  ];
}

/**
 * Asynchronously retrieves a list of alerts in Sector 1.
 *
 * @returns A promise that resolves to a list of Alert objects.
 */
export async function getAlerts(): Promise<Alert[]> {
  // TODO: Implement this by calling an API.

  return [
    {
      type: 'Utilități',
      address: 'Str. Exemplu nr. 10',
      description: 'Pană de curent',
    },
  ];
}

/**
 * Asynchronously retrieves a list of selective collection points in Sector 1.
 *
 * @returns A promise that resolves to a list of SelectiveCollectionPoint objects.
 */
export async function getSelectiveCollectionPoints(): Promise<SelectiveCollectionPoint[]> {
  // TODO: Implement this by calling an API.

  return [
    {
      address: 'Str. Colectării Selective nr. 5',
      materials: ['plastic', 'sticlă', 'hârtie'],
    },
  ];
}

/**
 * Asynchronously retrieves a list of public toilets in Sector 1.
 *
 * @returns A promise that resolves to a list of PublicToilet objects.
 */
export async function getPublicToilets(): Promise<PublicToilet[]> {
  // TODO: Implement this by calling an API.

  return [
    {
      address: 'Parcul Nicolae Iorga',
      free: true,
    },
  ];
}

/**
 * Asynchronously retrieves a list of education institutions in Sector 1.
 *
 * @returns A promise that resolves to a list of EducationInstitution objects.
 */
export async function getEducationInstitutions(): Promise<EducationInstitution[]> {
  // TODO: Implement this by calling an API.

  return [
    {
      type: 'Școală',
      name: 'Școala Gimnazială nr. 1',
      address: 'Str. Școlii nr. 3',
    },
  ];
}

/**
 * Asynchronously retrieves a list of services in Sector 1.
 *
 * @returns A promise that resolves to a list of Service objects.
 */
export async function getServices(): Promise<Service[]> {
  // TODO: Implement this by calling an API.

  return [
    {
      type: 'Cafenea',
      name: 'Cafeneaua Veche',
      address: 'Str. Cafelei nr. 7',
    },
  ];
}
