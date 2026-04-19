export interface Department {
  id: string;
  icon: string;
  title: string;
  summary: string;
  detail: string;
  bullets: string[];
  /** 3D world-space position for the hotspot pin — omit for non-car departments */
  position?: [number, number, number];
}

export const departments: Department[] = [
  {
    id: "electrical",
    icon: "⚡",
    title: "Electrical Systems",
    summary: "Telemetry, controls, sensor integration, and wiring architecture.",
    detail:
      "The electronics team designs the full wiring harness, data acquisition system, and ECU integration for real-time monitoring during testing and events. Every connector, sensor, and control module is specified, routed, and validated in-house.",
    bullets: [
      "Custom wiring harness design",
      "ECU integration and tuning interface",
      "Sensor suite: IMU, wheel speed, temps",
      "Real-time telemetry and data logging",
    ],
    position: [0.2, 0, 0],
  },
{
  id: "powertrain",
  icon: "⚡",
  title: "Powertrain",
  summary: "Electric drivetrain, motor controller, accumulator, and reliability.",
  detail:
    "The powertrain team manages the electric motor, motor controller, accumulator, and drivetrain system. We focus on reliability and peak performance through careful calibration and endurance testing sessions before every competition.",
  bullets: [
    "ME1616 PMAC electric motor (25–50kW)",
    "Sevcon Gen4 motor controller",
    "100.9V accumulator — 616 cells, 28s 22p",
    "Chain-driven single-speed drivetrain",
  ],
  position: [-1.4, -0.3, 0],
},
{
  id: "aerodynamics",
  icon: "🌬️",
  title: "Aerodynamics & Bodywork",
  summary: "Body design, nose aerodynamics, and lightweight panel manufacturing.",
  detail:
    "Our aero team designs and manufactures the car's bodywork and nose using 2mm laser-cut aluminium panels rivnutted to 3D printed brackets. The nose is shaped to direct air toward the undertray for downforce.",
  bullets: [
    "2mm laser-cut aluminium body panels",
    "Nose designed to push air to undertray",
    "3D printed brackets and rivnut connections",
    "CFD simulations for aerodynamic validation",
  ],
  position: [2, -0.5, 0],
},
{
  id: "chassis",
  icon: "🏗️",
  title: "Chassis",
  summary: "Spaceframe steel chassis, TIG welded, FEA validated.",
  detail:
    "Our chassis engineers designed a spaceframe steel chassis using ASTM A500 Grade A mild steel tubing, TIG welded throughout. Over 60 tubes with 33.45mm outer diameter and varying wall thicknesses optimise weight while meeting all FSUK safety requirements.",
  bullets: [
    "ASTM A500 Grade A spaceframe steel chassis",
    "60+ TIG welded tubes, 33.45mm OD",
    "1.2mm max deflection under 300N torsional load",
    "Rollhoop, firewall, and impact attenuator compliant",
  ],
  position: [-0.2, -0.6, 0.6],
},
  {
    id: "vehicle-dynamics",
    icon: "🏎️",
    title: "Vehicle Dynamics",
    summary: "Suspension kinematics, damping, braking, and trackside setup.",
    detail:
      "From push-rod double wishbone geometry to bespoke damper tuning, the VD team ensures the car handles predictably and quickly. All decisions are validated with data acquisition from trackside testing.",
    bullets: [
      "Double wishbone front and rear geometry",
      "Bespoke damper specification and tuning",
      "OptimumKinematics simulation",
      "Tyre model integration for lap-sim",
    ],
    position: [0.4, -0.4, 0.5],
  },
 
  {
    id: "sponsorships",
    icon: "🤝",
    title: "Sponsorships & Outreach",
    summary: "Sponsor relations, outreach, and research to grow partnerships.",
    detail:
      "The sponsorships team secures the funding and in-kind support that makes the programme possible. We manage partner relationships, produce reports and marketing materials, and represent AUS Racing at outreach events.",
    bullets: [
      "Partnership acquisition and management",
      "Technical and financial sponsor reporting",
      "Social media and brand presence",
      "University and community outreach events",
    ],
  },
  {
    id: "operations",
    icon: "📦",
    title: "Operations & Logistics",
    summary: "Operations, logistics, research, and communications for smooth delivery.",
    detail:
      "Operations keeps the whole team running — from procurement and inventory to travel logistics for competition. The team also manages internal communications, documentation, and project timeline tracking.",
    bullets: [
      "Parts procurement and inventory management",
      "Competition travel and shipping logistics",
      "Internal documentation and scheduling",
      "Budget tracking and financial oversight",
    ],
  },
];

/** Departments that have a 3D hotspot position on the car model. */
export const hotspots = departments.filter(
  (d): d is Department & { position: [number, number, number] } => !!d.position
);