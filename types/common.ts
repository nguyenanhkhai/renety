export type Feature = {
  id: number;
  title: string;
  path: string;
};

export type WatchProps = {
  barcode?: string;
  brand?: string;
  case_depth_approx?: number;
  case_shape: string;
  case_width_approx?: number;
  clasp_type?: string;
  description?: string;
  dial_colour?: string;
  gender?: number;
  glass?: string;
  guarantee?: number;
  images?: Array<string>;
  movement_source: string;
  model_collection?: string;
  model_name?: string;
  movement?: string;
  pid?: string;
  price: number;
  primary_material: string;
  starRating: number;
  strap_colour: string;
  strap_type: string;
  title: string;
  water_resistance: string;
  weight: number;
};
