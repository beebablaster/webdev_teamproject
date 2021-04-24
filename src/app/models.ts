export interface Language {
  id: number;
  name: string;
}

export class Portfolio {
  constructor(public name: string,
              public surname: string,
              public age: number,
              public phoneNumber: string,
              public githubLink: string,
              public graph: any)
  { }
}

export class GithubData{
  response: any;

  constructor() {}
}
