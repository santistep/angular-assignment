// TODO
export interface CityList {
  cityData: CityData[];
}

export interface CityData {
  id?: number;
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
}
