export class pets {
  ID?: string;
  Name: string;
  Gender: string;
  Age: number | string;
  Color: string;
  Characteristics: any;
  BreedID: string;
  SubBreedID?: string;
  VeterinarianID?: string;
}

export class breeds {
  ID: string;
  ScientificName: string;
  Commonname: string;
  keyWords: [string];
}

export class subbreeds {
  ID: string;
  ScientificName: string;
  Commonname: string;
  keyWords: [string];
}

export class veterinarians {
  ID: string;
  FirtsName: string;
  LastName: string;
  Phone: string;
  ProfesionalID: string;
}
