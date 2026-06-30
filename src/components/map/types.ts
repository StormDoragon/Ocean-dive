export interface MapPoint {
  slug: string;
  title: string;
  lat: number;
  lng: number;
  color: string;
  categoryName: string;
  categoryEmoji: string;
  year: number;
  depthMeters?: number;
}
