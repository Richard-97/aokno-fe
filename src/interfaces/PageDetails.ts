import { StaticImageData } from "next/image";

export interface PromoButtonProps {
  title: string;
  href: string;
  variant?: string;
}

export interface StepDetail {
  title: string;
  value: string;
}

export interface StepItem {
  id: string;
  imageSrc: string | StaticImageData;
  title: string;
  description: string;
  details: StepDetail[];
  hasObjectFit?: boolean;
}

export interface Step {
  id: string;
  index: number;
  title: string;
  description: string;
  items: StepItem[];
}

export interface ServiceDescription {
  title: string;
  subtitle: string;
  steps: Step[];
  references: Reference;
}

export interface Service {
  slug: string;
  title: string;
  href: string;
  salePercentage?: number;
  imageSrc: string | StaticImageData;
  subtitle: string;
  primary_button: PromoButtonProps;
  secondary_button: PromoButtonProps;
  promoBar: string;
  description: ServiceDescription;
  catalogUrl?: string;
}

export interface Reference {
  images: string[];
}

export interface PageDetails {
  services: {
    references: Reference;
    items: Service[];
  };
}
