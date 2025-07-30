export interface Blog {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  thumbnail: string;
  userId: string;
  created: Date;
  updated: Date;
}
