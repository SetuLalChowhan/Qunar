import car from "../public/images/car.png";
import avatar1 from "../public/images/avatar1.png";
import avatar2 from "../public/images/avatar2.png";
import avatar3 from "../public/images/avatar3.png";
import { StaticImageData } from "next/image";
type Work = {
  readonly id: number;
  title: string;
  description: string;
};

type CarDetails = {
  readonly id: number;
  image: string | StaticImageData;
  title: string;
  link: string;
  details: string;
};

type ReviewCard = {
  readonly id: number;
  review: string;
  image: string | StaticImageData;
  name: string;
  dep: string;
};

// Corrected array structure with proper typing
export const workProcess: Work[] = [
  {
    id: 1,
    title: "Discovery",
    description:
      "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.",
  },
  {
    id: 2, // Changed id to 2 to avoid duplication
    title: "Planning and Strategy",
    description:
      "Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision.",
  },
  {
    id: 3, // Changed id to 2 to avoid duplication
    title: "Design",
    description:
      "Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface, user experience, and overall design aesthetics. We iterate on the designs based on your feedback until we achieve the perfect look and feel.",
  },
  {
    id: 4, // Changed id to 2 to avoid duplication
    title: "Development",
    description:
      "Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products. Throughout the development phase, we maintain open lines of communication to keep you updated on progress and address any questions or concerns.",
  },
];

export const cars: CarDetails[] = [
  {
    id: 1,
    image: car,
    title: "Chic Boutique",
    link: "https:/www.chicboutique.com",
    details:
      "We developed a visually stunning and user-friendly e-commerce platform  , a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.",
  },
  {
    id: 1,
    image: car,
    title: "Chic Boutique",
    link: "https:/www.chicboutique.com",
    details:
      "We developed a visually stunning and user-friendly e-commerce platform  , a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.",
  },
  {
    id: 1,
    image: car,
    title: "Chic Boutique",
    link: "https:/www.chicboutique.com",
    details:
      "We developed a visually stunning and user-friendly e-commerce platform  , a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.",
  },
  {
    id: 1,
    image: car,
    title: "Chic Boutique",
    link: "https:/www.chicboutique.com",
    details:
      "We developed a visually stunning and user-friendly e-commerce platform  , a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.",
  },
];

export const reviews: ReviewCard[] = [
  {
    id: 1,
    review:
      "“ Qunar's video promotion strategy significantly boosted our engagement and sales. Their expertise made a noticeable difference in our online presence.”",
    image: avatar1,
    name: "Emily R.",
    dep: "GreenLeaf Organics",
  },
  {
    id: 2,
    review:
      "“ The website Qunar designed for us is sleek, user-friendly, and perfectly aligned with our brand. We've seen a considerable increase in online traffic since its launch. ”",
    image: avatar2,
    name: "Floyd Miles",
    dep: "UrbanEdge Clothing",
  },
  {
    id: 3,
    review:
      "“ The 3D modeling and animation work Qunar did for our product launch was exceptional. It really set our campaign apart from the competition. ”",
    image: avatar3,
    name: "Emily R.",
    dep: "GreenLeaf Organics",
  },
  {
    id: 4,
    review:
      "“ Qunar's video promotion strategy significantly boosted our engagement and sales. Their expertise made a noticeable difference in our online presence ”",
    image: avatar1,
    name: "Emily R.",
    dep: "GreenLeaf Organics",
  },
  {
    id: 4,
    review:
      "“ Qunar's video promotion strategy significantly boosted our engagement and sales. Their expertise made a noticeable difference in our online presence ”",
    image: avatar1,
    name: "Emily R.",
    dep: "GreenLeaf Organics",
  },
];
