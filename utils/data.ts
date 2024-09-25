type Data = {
    readonly id: number;
    title: string;
    description: string;
  };
  
  // Corrected array structure with proper typing
  export const workProcess: Data[] = [
    {
      id: 1,
      title: "Discovery",
      description: "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy."
    },
    {
      id: 2, // Changed id to 2 to avoid duplication
      title: "Planning and Strategy",
      description: "Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision."
    },
    {
      id: 3, // Changed id to 2 to avoid duplication
      title: "Design",
      description: "Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface, user experience, and overall design aesthetics. We iterate on the designs based on your feedback until we achieve the perfect look and feel."
    },
    {
      id: 4, // Changed id to 2 to avoid duplication
      title: "Development",
      description: "Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products. Throughout the development phase, we maintain open lines of communication to keep you updated on progress and address any questions or concerns."
    },
  
    
  ];