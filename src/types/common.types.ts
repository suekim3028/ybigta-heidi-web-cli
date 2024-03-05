export type EnvConfig = {
  FAST_API_SERVER: string;
};

export type Banner = {
  imageUrl: string;
  link: string;
};

export type Menu = {
  logoUrl?: string;
  id: string;
  title: string;
  path?: string;
  link?: string;
};
