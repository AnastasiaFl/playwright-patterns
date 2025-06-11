export class Adapter {
  public adaptName(fullName: string): {
    firstName: string;
    middleInitial: string;
    lastName: string;
  } {
    const parts = fullName.split(" ").map((part) => part.trim());
    return {
      firstName: parts[0] || "",
      middleInitial: parts.length > 2 ? parts[1].charAt(0) : "",
      lastName: parts.length > 2 ? parts.slice(2).join(" ") : parts[1] || "",
    };
  }
  public adaptAddress(address: string): {
    addressLine1: string;
    addressLine2: string;
    city: string;
    stateProvince: string;
    country: string;
    zip: string;
  } {
    const parts = address.split(",").map((part) => part.trim());
    return {
      addressLine1: parts[0] || "",
      addressLine2: parts[1] || "",
      city: parts[2] || "",
      stateProvince: parts[3] || "",
      country: parts[4] || "",
      zip: parts[5] || "",
    };
  }
  public adaptCardExpiration(cardExpiration): { month: string; year: string } {
    const parts = cardExpiration.split(",").map((part) => part.trim());
    return {
      month: parts[0] || "",
      year: parts[1] || "",
    };
  }
  public adaptDateOfBirth(dateOfBirth): {
    dayOfBirth: string;
    monthOfBirth: string;
    yearOfBirth: string;
  } {
    const parts = dateOfBirth.split("-").map((part) => part.trim());
    return {
      dayOfBirth: parts[0] || "",
      monthOfBirth: parts[1] || "",
      yearOfBirth: parts[2] || "",
    };
  }
}
