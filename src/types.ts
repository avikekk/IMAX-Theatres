export interface IMAXVenue {
  Location: string;
  City: string;
  Projection: string;
  "Aspect Ratio": string;
  Width: string;
  Height: string;
  Seats: string;
  Year: string;
  Status: string;
  Audio: string;
  Video: string;
}

export type FilterType = 'all' | 'city' | 'projection';