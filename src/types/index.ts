export type MemberType = {
  id: number;
  name: string;
  lastName: string;
  position: string;
  textMain: string;
  textFirst: string;
  textSecond: string;
  twit: string;
  linkedIn: string;
  email: string;
  image: string;
};

export type ProductType = {
  id: number;
  name: string;
  product_type: string;
  price: string;
  image_link: string;
  brand: string;
  description: string;
};

export type TestimonialType = {
  id: number;
  title: string;
  url: string;
};

export type TabContentType = {
  id: number;
  image: string;
  title: string;
  text: string;
  link: string;
};

export type SlideType = {
  title: string;
  desc: string;
  image: string;
  link: string;
};

export type FaqItem = {
  id: string;
  title: string;
  text: string;
};

export type SocialProps = {
  link: string;
  icon: string;
};
