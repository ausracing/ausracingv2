export interface Hotspot {
  position: [number, number, number];
  text: string;
}

export interface ModelConfig {
  url?: string;
  label: string;

  camPos: [number, number, number];
  camTarget: [number, number, number];
  infoSide?: "left" | "right";
  hotspots: Hotspot[];
  scale?: number;
}

export const MODELS: ModelConfig[] = [
  {
    url: "/models/CAR_v2.glb",
    label: "AUS Racing Car",
    camPos: [0, 2, 10], camTarget: [0, 0, 0],
    hotspots: [],
  },
  {
    url: "/models/Rotor_with_caliper_and_hub.glb",
    label: "Braking System",
    camPos: [-3, 2, 8], camTarget: [-1, 0, 0], infoSide: "right",
    hotspots: [
      { position: [20.5, 80.8, 0.5], text: "Custom-designed high-carbon steel brake discs for maximum performance and reliability" },
      { position: [50.7, 40.4, 0.7], text: "High-performance Wilwood brake calipers and pads" },
    ],
  },
  {
    url: "/models/TSAC.glb",
    scale: 2.5,
    label: "Electronics",
    camPos: [-3, 2, 8], camTarget: [-1, 0, 0], infoSide: "right",
    hotspots: [
      { position: [0.5, 0.8, 0.5], text: "ECU and wiring harness" },
      { position: [0.7, 0.4, 0.5], text: "Data acquisition and sensors" },
    ],
  },
  {
    url: "/models/Nose_V3.glb",
    label: "Aerodynamics",
    scale: 3,
    camPos: [-3, 2, 8], camTarget: [-1, 0, 0], infoSide: "left",
    hotspots: [
      { position: [20.5, 0.9, 0.5], text: "Laser-cut aluminium panels, 2mm thick" },
      { position: [0.3, 0.5, 0.5], text: "Aluminium body with steel floor" },
    ],
  },
  {
    url: "/models/steering_v2.glb",
    label: "Steering",
    scale: 4,
    camPos: [-3, 2, 8], camTarget: [-1, 0, 0], infoSide: "right",
    hotspots: [
      { position: [0.7, 0.35, 0.7], text: "Steering rack and column" },
      { position: [0.7, 0.3, 0.7], text: "Custom uprights and hubs" },
    ],
  },
  {
    url: "/models/Chassis.GLB",
    label: "Chassis",
    scale: 5,
    camPos: [-3, 2, 8], camTarget: [-1, 0, 0], infoSide: "right",
    hotspots: [
      { position: [0.5, 0.7, 0.5], text: "Spaceframe steel chassis" },
      { position: [0.5, 0.3, 0.5], text: "Impact attenuator and roll hoop" },
    ],
  },
  {
    url: "/models/Driveshaft.glb",
    label: "Drivetrain",
    scale: 5,
    camPos: [-3, 2, 8], camTarget: [-1, 0, 0], infoSide: "left",
    hotspots: [
      { position: [0.5, 0.7, 0.5], text: "Chain drive and differential" },
      { position: [0.5, 0.3, 0.5], text: "Gearbox and sprocket assembly" },
    ],
  },
  // No 3D model file yet — commented out until models are ready
  // {
  //   label: "Cooling",
  //   camPos: [-3, 2, 8], camTarget: [-1, 0, 0], infoSide: "right",
  //   hotspots: [],
  // },
  // {
  //   label: "Power Delivery",
  //   camPos: [-3, 2, 8], camTarget: [-1, 0, 0], infoSide: "left",
  //   hotspots: [],
  // },
];

export const MODEL_URLS = MODELS.map((m) => m.url).filter(Boolean) as string[];
export const HOTSPOTS = MODELS.map((m) => m.hotspots);
