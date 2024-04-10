import jsonData from "@/data/page_details.json";
import { PageDetails, Service } from "@/interfaces/PageDetails";

export const getHomePageDetails = (): PageDetails => {
  return jsonData as PageDetails;
};

export const getServiceDetails = (serviceSlug: string): Service | undefined => {
  return (jsonData as PageDetails).services.items.find(
    ({ slug }) => slug === serviceSlug
  );
};
