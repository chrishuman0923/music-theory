export interface Mode {
  name: string;
  steps: number[];
}

export interface GetScale {
  root: string;
  mode: Mode['name'];
  scale: string[];
}
