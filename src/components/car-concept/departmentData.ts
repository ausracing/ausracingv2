export interface Department {
  id: string;
  icon: string;
  title: string;
  summary: string;
  detail: string;
  bullets: string[];
}

export const departments: Department[] = [
  {
    id: "electrical",
    icon: "⚡",
    title: "Electrical Systems",
    summary: "Telemetry, controls, sensor integration, and wiring architecture.",
    detail: "The electronics team designs the full wiring harness, data acquisition system, and ECU integration for real-time monitoring during testing and events. Every connector, sensor, and control module is specified, routed, and validated in-house.",
    bullets: ["Custom wiring harness design", "ECU integration and tuning interface", "Sensor suite: IMU, wheel speed, temps", "Real-time telemetry and data logging"],
  },
  {
    id: "powertrain",
    icon: "🔧",
    title: "Powertrain",
    summary: "Power delivery, cooling, reliability, and driveline efficiency.",
    detail: "The powertrain team manages the engine, exhaust, cooling circuit, and fuel system. We focus on reliability and peak performance through careful calibration and endurance testing sessions before every competition.",
    bullets: ["Custom 600cc inline-4 engine", "Turbocharged intake system", "Sequential 6-speed gearbox", "Dry-sump lubrication"],
  },
  {
    id: "aerodynamics",
    icon: "🌬️",
    title: "Aerodynamics",
    summary: "CFD, wings, undertray, and drag/downforce balance.",
    detail: "Our aero team uses CFD simulation and wind-tunnel correlation to develop wings, undertray, and body panels that balance downforce generation with drag. Every surface is validated before manufacture.",
    bullets: ["CFD-validated front and rear wing packages", "Carbon fibre composite monocoque panels", "Undertray and diffuser development", "Drag/downforce balance optimisation"],
  },
  {
    id: "vehicle-dynamics",
    icon: "🏎️",
    title: "Vehicle Dynamics",
    summary: "Suspension kinematics, damping, braking, and trackside setup.",
    detail: "From push-rod double wishbone geometry to bespoke damper tuning, the VD team ensures the car handles predictably and quickly. All decisions are validated with data acquisition from trackside testing.",
    bullets: ["Double wishbone front and rear geometry", "Bespoke damper specification and tuning", "OptimumKinematics simulation", "Tyre model integration for lap-sim"],
  },
  {
    id: "chassis",
    icon: "🏗️",
    title: "Chassis",
    summary: "Monocoque/spaceframe design, stiffness, safety, and compliance.",
    detail: "Our chassis engineers design the primary structure to meet both stiffness targets and FSG/FSAE safety requirements. Finite element analysis drives every design iteration from concept through manufacture.",
    bullets: ["FEA-driven structural design", "Torsional and bending stiffness targets", "Rollhoop and impact attenuator compliance", "Weight optimisation via material selection"],
  },
  {
    id: "sponsorships",
    icon: "🤝",
    title: "Sponsorships & Outreach",
    summary: "Sponsor relations, outreach, and research to grow partnerships.",
    detail: "The sponsorships team secures the funding and in-kind support that makes the programme possible. We manage partner relationships, produce reports and marketing materials, and represent AUS Racing at outreach events.",
    bullets: ["Partnership acquisition and management", "Technical and financial sponsor reporting", "Social media and brand presence", "University and community outreach events"],
  },
  {
    id: "operations",
    icon: "📦",
    title: "Operations & Logistics",
    summary: "Operations, logistics, research, and communications for smooth delivery.",
    detail: "Operations keeps the whole team running — from procurement and inventory to travel logistics for competition. The team also manages internal communications, documentation, and project timeline tracking.",
    bullets: ["Parts procurement and inventory management", "Competition travel and shipping logistics", "Internal documentation and scheduling", "Budget tracking and financial oversight"],
  },
];