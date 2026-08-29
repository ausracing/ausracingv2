// src/data/openings.ts

export type Category = {
  id: string;
  image: string | null;
};

export const CATEGORIES: Category[] = [
  { id: "All", image: null },
  { id: "Mechanical", image: "/images/hiring-bg/mechanical.webp" },
  { id: "Electrical", image: "/images/hiring-bg/electrical.webp" },
  { id: "Commerce", image: "/images/hiring-bg/commerce.webp" },
];

export const OPENINGS = [
  // ==========================================
  // MECHANICAL TEAM
  // ==========================================
  {
    name: "Chassis & Structural Design",
    category: "Mechanical",
    desc: "Design the frame, load paths, and mounting structures, focusing on vehicle packaging, driver ergonomics, and safety.",
    formLink: "https://forms.gle/zMaZztJ23XTnXunH6",
  },
  {
    name: "Suspension, Steering & Vehicle Dynamics",
    category: "Mechanical",
    desc: "Engineer the suspension geometry, kinematics, and alignment, focusing on precise steering, handling, and vehicle setup.",
    formLink: "https://forms.gle/zMaZztJ23XTnXunH6",
  },
  {
    name: "Braking Systems",
    category: "Mechanical",
    desc: "Develop the pedal box, hydraulics, and brake bias, managing rotors, calipers, mounting, and system validation.",
    formLink: "https://forms.gle/zMaZztJ23XTnXunH6",
  },
  {
    name: "Aerodynamics & Bodywork",
    category: "Mechanical",
    desc: "Design wings, undertrays, and ducting using CFD, optimizing cooling airflow, body panels, and composites.",
    formLink: "https://forms.gle/zMaZztJ23XTnXunH6",
  },
  {
    name: "Powertrain & Drivetrain Integration",
    category: "Mechanical",
    desc: "Manage motor and gearbox mounting, differentials, drive shafts, transmission, cooling, and powertrain packaging.",
    formLink: "https://forms.gle/zMaZztJ23XTnXunH6",
  },
  {
    name: "Manufacturing & Vehicle Assembly",
    category: "Mechanical",
    desc: "Execute machining, welding, fabrication, and composite work, ensuring precise fitment, fastener selection, and final assembly.",
    formLink: "https://forms.gle/zMaZztJ23XTnXunH6",
  },

  // ==========================================
  // ELECTRICAL & POWER DELIVERY
  // ==========================================
  {
    name: "Battery Systems",
    category: "Electrical",
    subcategory: "Hardware Engineering",
    desc: "Design and optimize the accumulator and energy storage systems for maximum track endurance and power delivery.",
    formLink: "https://forms.gle/NVBWwzfYUK9LHREK9",
  },
  {
    name: "High Voltage Systems",
    category: "Electrical",
    subcategory: "Hardware Engineering",
    desc: "Manage high-voltage power distribution and the core tractive electronics powering the vehicle.",
    formLink: "https://forms.gle/NVBWwzfYUK9LHREK9",
  },
  {
    name: "Embedded Electronics",
    category: "Electrical",
    subcategory: "Hardware Engineering",
    desc: "Develop custom PCBs, wiring harnesses, and low-voltage embedded electronics and sensor networks.",
    formLink: "https://forms.gle/NVBWwzfYUK9LHREK9",
  },
  {
    name: "Embedded Firmware",
    category: "Electrical",
    subcategory: "Software Engineering",
    desc: "Write high-performance, real-time code to control vehicle dynamics, battery management, and driver interfaces.",
    formLink: "https://forms.gle/NVBWwzfYUK9LHREK9",
  },
  {
    name: "Telemetry & Data Systems",
    category: "Electrical",
    subcategory: "Software Engineering",
    desc: "Build wireless data pipelines and software to monitor car health and track metrics in real-time.",
    formLink: "https://forms.gle/NVBWwzfYUK9LHREK9",
  },
  // ==========================================
  // COMMERCE & OPERATIONS
  // ==========================================
  {
    name: "Operations & Logistics",
    category: "Commerce",
    desc: "Manage bills of materials, procurement, supplier relations, inventory, costing, and the global supply chain.",
    formLink: "https://forms.gle/NVBWwzfYUK9LHREK9",
  },
  // {
  //   name: "Treasury & Administration",
  //   category: "Commerce",
  //   desc: "Oversee the team's financial strategy, budget allocation, and day-to-day organizational management.",
  //   formLink: "https://forms.gle/YOUR_FORM_LINK_HERE",
  // },
];