import car from "../public/images/car.png";
import avatar1 from "../public/images/avatar1.png";
import avatar2 from "../public/images/avatar2.png";
import avatar3 from "../public/images/avatar3.png";
import ui from "../public/images/ui.png";
import brand from "../public/images/branding.png";
import video from "../public/images/video.png";
import production from "../public/images/production.png";
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

type ServiceDetails = {
  readonly id: number;
  image: string | StaticImageData;
  title: string;
  description: string;
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
  {
    id: 5,
    title: "Discovery",
    description:
      "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.",
  },
  {
    id: 6, // Changed id to 2 to avoid duplication
    title: "Planning and Strategy",
    description:
      "Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision.",
  },
  {
    id: 7, // Changed id to 2 to avoid duplication
    title: "Design",
    description:
      "Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface, user experience, and overall design aesthetics. We iterate on the designs based on your feedback until we achieve the perfect look and feel.",
  },
  {
    id: 8, // Changed id to 2 to avoid duplication
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
  {
    id: 5,
    image: car,
    title: "Chic Boutique",
    link: "https:/www.chicboutique.com",
    details:
      "We developed a visually stunning and user-friendly e-commerce platform  , a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.",
  },
  {
    id: 6,
    image: car,
    title: "Chic Boutique",
    link: "https:/www.chicboutique.com",
    details:
      "We developed a visually stunning and user-friendly e-commerce platform  , a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.",
  },
  {
    id: 7,
    image: car,
    title: "Chic Boutique",
    link: "https:/www.chicboutique.com",
    details:
      "We developed a visually stunning and user-friendly e-commerce platform  , a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.",
  },
  {
    id: 8,
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

export const serviceDetails: ServiceDetails[] = [
  {
    id: 1,
    image: ui,
    title: "Ui/Ux Design",
    description:
      "At Qunar, our UX/UI design services focus on creating user-centric, visually appealing, and highly functional digital experiences. We start by conducting thorough research to understand your users' needs and behaviors, which informs our design decisions. We then develop a clear information architecture and wireframes to ensure seamless navigation and intuitive layouts. Our process includes creating interactive prototypes that bring the design to life, allowing for testing and refinement. Finally, we craft a polished visual design that aligns with your brand identity, ensuring that your digital product not only looks great but also delivers an exceptional user experience.",
  },
  {
    id: 2,
    image: brand,
    title: "Branding",
    description:
      "Our branding services are dedicated to building a strong, cohesive identity that resonates with your audience and sets your brand apart. We begin by developing a deep understanding of your brand’s mission, values, and target market, which guides us in crafting a unique brand strategy. This includes designing a memorable logo and visual identity that reflect your brand’s personality, as well as creating consistent messaging that communicates your value proposition effectively. Whether you’re launching a new brand or revitalizing an existing one, we ensure that every element, from visuals to voice, aligns with your business goals and connects with your audience.",
  },
  {
    id: 3,
    image: video,
    title: "Motion / 3D",
    description:
      "At Qunar, our Motion & 3D design services are all about bringing your ideas to life with dynamic and visually stunning content. We specialize in creating captivating motion graphics and realistic 3D models that grab attention and elevate your brand's storytelling. Whether it’s an animated explainer video, a detailed product render, or immersive visual effects, our team blends creativity and technical expertise to produce high-quality visuals that stand out in a crowded digital landscape. From concept to final production, we ensure that every project not only looks amazing but also effectively communicates your message and engages your audience.",
  },
  {
    id: 4,
    image: production,
    title: "Video promotion",
    description:
      "At Qunar, our Video Promotion services are designed to amplify your brand's message and connect with your audience through compelling visual content. We create impactful promotional videos that showcase your products, services, or brand story, driving engagement and conversions across digital platforms. Whether it's a product demo, a social media campaign, or an explainer video, our team crafts high-quality videos that resonate with viewers and deliver your key messages effectively. By blending creativity with strategic insights, we ensure that your videos not only capture attention but also inspire action, helping you achieve your marketing goals.",
  },
];
