export interface FormData {
  title?: string;
  firstName?: string;
  middleInitial?: string;
  lastName?: string;
  fullName?: string;
  company?: string;
  position?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  stateProvince?: string;
  country?: string;
  zip?: string;
  homePhone?: string;
  workPhone?: string;
  fax?: string;
  cellPhone?: string;
  email?: string;
  website?: string;
  userId?: string;
  password?: string;
  creditCardType?: string;
  creditCardNumber?: string;
  cardVerificationCode?: string;
  cardExpirationDate?: string;
  cardExpirationYear?: string;
  cardUserName?: string;
  cardIssuingBank?: string;
  cardCustomerServicePhone?: string;
  sex?: string;
  socialSecurityNumber?: string;
  driversLicenseNumber?: string;
  dayOfBirth?: string;
  monthOfBirth?: string;
  yearOfBirth?: string;
  age?: string;
  birthPlace?: string;
  income?: string;
  customMessage?: string;
  comments?: string;
}

export const baseGuestFormData: FormData = {
  title: "Guest",
  position: "Guest",
  country: "USA",
  workPhone: "n/a",
  website: "n/a",
  customMessage: "Guest users from USA",
};

export enum UserType {
  ADMIN = "admin",
  QAENGINEER = "qa-engineer",
  EXPORER = "explorer",
}
