export type Benefit = {
  name: string;
  bronze: boolean;
  silver: boolean;
  gold: boolean;
  platinum: boolean;
};

export const benefits: Benefit[] = [
  {
    name: "Company logo on bodywork",
    bronze: true,
    silver: true,
    gold: true,
    platinum: true,
  },
  {
    name: "Acknowledgement on publications like newsletters",
    bronze: true,
    silver: true,
    gold: true,
    platinum: true,
  },
  {
    name: "Company logo on website",
    bronze: true,
    silver: true,
    gold: true,
    platinum: true,
  },
  {
    name: "Invitation to team events",
    bronze: true,
    silver: true,
    gold: true,
    platinum: true,
  },
  {
    name: "Featured article on website",
    bronze: false,
    silver: true,
    gold: true,
    platinum: true,
  },
  {
    name: "VIP access to team events",
    bronze: false,
    silver: true,
    gold: true,
    platinum: true,
  },
  {
    name: "Access to team members and car for promotional content",
    bronze: false,
    silver: false,
    gold: true,
    platinum: true,
  },
  {
    name: "Featured advertisement on team social media",
    bronze: false,
    silver: false,
    gold: true,
    platinum: true,
  },
  {
    name: "Access to car for company events",
    bronze: false,
    silver: false,
    gold: true,
    platinum: true,
  },
  {
    name: "Sponsor branded car livery",
    bronze: false,
    silver: false,
    gold: false,
    platinum: true,
  },
  {
    name: "Customized branding across all team platforms",
    bronze: false,
    silver: false,
    gold: false,
    platinum: true,
  },
  {
    name: "High visibility in all team promotional material",
    bronze: false,
    silver: false,
    gold: false,
    platinum: true,
  },
];