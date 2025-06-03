import { FormData } from "../types";
import * as fs from "fs";
import * as path from "path";

export class DatabaseSingleton {
  private static instance: DatabaseSingleton;
  private database: Partial<FormData> = {};

  private constructor() {
    const dbPath = path.resolve(__dirname, "../data/database.txt");
    // Split by comma, but ignore commas inside double quotes
    const fileContent = fs.readFileSync(dbPath, "utf-8");
    const lines = fileContent.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g)?.map((line) => {
      // Remove leading/trailing whitespace and quotes
      return line.trim().replace(/^"(.*)"$/, "$1");
    }) || [];
    const userKeys: (keyof FormData)[] = [
      "title",
      "firstName",
      "lastName",
      "fullName",
      "company",
      "position",
      "addressLine1",
      "addressLine2",
      "city",
      "stateProvince",
      "country",
      "zip",
      "homePhone",
      "workPhone",
      "fax",
      "cellPhone",
      "email",
      "website",
      "userId",
      "password",
      "creditCardType",
      "creditCardNumber",
      "cardVerificationCode",
      "cardExpirationDate",
      "cardExpirationYear",
      "cardUserName",
      "cardIssuingBank",
      "cardCustomerServicePhone",
      "sex",
      "socialSecurityNumber",
      "driversLicenseNumber",
      "dayOfBirth",
      "monthOfBirth",
      "yearOfBirth",
      "age",
      "birthPlace",
      "income",
      "customMessage",
      "comments"
    ];

    userKeys.forEach((key, index) => {
      const rawValue = lines[index];
      const value = rawValue.replace(/^"(.*)"$/, "$1");
      this.database[key] = value;
    });
  }

  public static getInstance(): DatabaseSingleton {
    if (!DatabaseSingleton.instance) {
      DatabaseSingleton.instance = new DatabaseSingleton();
    }
    return DatabaseSingleton.instance;
  }

  public getDatabase(): FormData {
    return this.database;
  }
}
