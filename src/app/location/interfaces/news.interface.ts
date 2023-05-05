export interface TechNewsData {
  status: string;
  copyright: string;
  response: Response;
}

export interface Response {
  docs: Doc[];
  meta: Meta;
}

export interface Doc {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  source: string;
  multimedia: Multimedia[];
  headline: Headline;
  keywords: Keyword[];
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  byline: Byline;
  type_of_material: string;
  _id: string;
  word_count: number;
  uri: string;
}

export interface Byline {
  original: null;
  person: any[];
  organization: null;
}

export interface Headline {
  main: string;
  kicker: null | string;
  content_kicker: null;
  print_headline: null | string;
  name: null;
  seo: null;
  sub: null;
}

export interface Keyword {
  name: Name;
  value: string;
  rank: number;
  major: Major;
}

export enum Major {
  N = 'N',
}

export enum Name {
  Glocations = 'glocations',
  Organizations = 'organizations',
  Persons = 'persons',
  Subject = 'subject',
}

export interface Multimedia {
  rank: number;
  subtype: string;
  caption: null;
  credit: null;
  type: Type;
  url: string;
  height: number;
  width: number;
  legacy: Legacy;
  subType: string;
  crop_name: string;
}

export interface Legacy {
  widewidth?: number;
  wideheight?: number;
  wide?: string;
  xlarge?: string;
  xlargewidth?: number;
  xlargeheight?: number;
  thumbnail?: string;
  thumbnailwidth?: number;
  thumbnailheight?: number;
}

export enum Type {
  Image = 'image',
}

export interface Meta {
  hits: number;
  offset: number;
  time: number;
}
