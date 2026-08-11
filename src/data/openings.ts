// src/data/openings.ts

export type Category = {
  id: string;
  image: string | null;
};

export const CATEGORIES: Category[] = [
  { id: "All", image: null },
  { id: "Mechanical", image: "/images/teams/mechanical.png" },
  { id: "Electrical", image: "/images/teams/electrical.png" },
  { id: "Concept Class", image: "/images/teams/concept-class.png" },
  { id: "Commerce", image: "/images/teams/commerce.png" },
];

export const OPENINGS = [
  // ==========================================
  // MECHANICAL TEAM
  // ==========================================
  { 
    name: "Chassis", 
    category: "Mechanical", 
    desc: "Engineer the structural foundation of the vehicle, focusing on weight reduction, torsional rigidity, and driver safety.",
    formLink: "https://forms.gle/YOUR_FORM_LINK_HERE"
  },
  { 
    name: "Suspension", 
    category: "Mechanical", 
    desc: "Design the vehicle's dynamic handling systems to ensure maximum mechanical grip and responsive cornering.",
    formLink: "https://forms.gle/YOUR_FORM_LINK_HERE"
  },
  { 
    name: "Steering", 
    category: "Mechanical", 
    desc: "Develop precise and highly responsive steering mechanisms connecting the driver to the track.",
    formLink: "https://forms.gle/YOUR_FORM_LINK_HERE"
  },
  { 
    name: "Drivetrain", 
    category: "Mechanical", 
    desc: "Optimize the mechanical power transfer from the motor to the wheels for maximum track performance.",
    formLink: "https://forms.gle/YOUR_FORM_LINK_HERE"
  },
  { 
    name: "Brakes", 
    category: "Mechanical", 
    desc: "Develop high-performance stopping systems, focusing on thermal management and hydraulic efficiency.",
    formLink: "https://forms.gle/YOUR_FORM_LINK_HERE"
  },

  // ==========================================
  // ELECTRICAL & POWER DELIVERY (Hardware & Software)
  // ==========================================
  { 
    name: "Battery Systems", 
    category: "Electrical",
    subcategory: "Hardware",
    desc: "Design and optimize the accumulator and energy storage systems for maximum track endurance.",
    formLink: "https://forms.gle/YOUR_FORM_LINK_HERE"
  },
  { 
    name: "High Voltage Systems", 
    category: "Electrical",
    subcategory: "Hardware",
    desc: "Manage high-voltage power distribution and the core tractive systems powering the vehicle.",
    formLink: "https://forms.gle/YOUR_FORM_LINK_HERE"
  },
  { 
    name: "Embedded Systems", 
    category: "Electrical",
    subcategory: "Hardware",
    desc: "Develop custom PCBs, wiring harnesses, and low-voltage sensor integration networks.",
    formLink: "https://forms.gle/YOUR_FORM_LINK_HERE"
  },
  { 
    name: "Embedded Firmware", 
    category: "Electrical",
    subcategory: "Software",
    desc: "Write high-performance, real-time code to control vehicle dynamics and driver interfaces.",
    formLink: "https://forms.gle/YOUR_FORM_LINK_HERE"
  },
  { 
    name: "Telemetry & Data Systems", 
    category: "Electrical",
    subcategory: "Software",
    desc: "Build wireless data pipelines to monitor car health and track metrics in real-time.",
    formLink: "https://forms.gle/YOUR_FORM_LINK_HERE"
  },

  // ==========================================
  // CONCEPT CLASS
  // ==========================================
  { 
    name: "Concept Class Engineering", 
    category: "Concept Class", 
    desc: "Research, design, and simulate future vehicle iterations and advanced aerodynamic packages for our upcoming campaigns.",
    formLink: "https://forms.gle/YOUR_FORM_LINK_HERE"
  },

  // ==========================================
  // COMMERCE & OPERATIONS
  // ==========================================
  { 
    name: "Procurement & Supply Chain", 
    category: "Commerce", 
    desc: "Coordinate global part sourcing, shipping logistics, and inventory management to keep the build strictly on schedule.",
    formLink: "https://forms.gle/YOUR_FORM_LINK_HERE"
  },
  { 
    name: "Operations & Treasury", 
    category: "Commerce", 
    desc: "Oversee the team's financial strategy, budget allocation, and day-to-day organizational management.",
    formLink: "https://forms.gle/YOUR_FORM_LINK_HERE"
  }
];