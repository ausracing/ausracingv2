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
    url: "/models/CAR.glb",
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
    url: "/models/Pedal_box_assembly_v10.glb",
    label: "Electronics",
    camPos: [-3, 2, 8], camTarget: [-1, 0, 0], infoSide: "right",
    hotspots: [
      { position: [0.5, 0.8, 0.5], text: "TODO: needs real info - ECU and wiring harness" },
      { position: [0.7, 0.4, 0.5], text: "TODO: needs real info - Data acquisition and sensors" },
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
    url: "/models/Full_brake_assembly_with_wheel.glb",
    label: "Steering",
    scale: 3,
    camPos: [-3, 2, 8], camTarget: [-1, 0, 0], infoSide: "right",
    hotspots: [
      { position: [0.7, 0.35, 0.7], text: "TODO: needs real info - Steering rack and column" },
      { position: [0.7, 0.3, 0.7], text: "TODO: needs real info - Custom uprights and hubs" },
    ],
  },
  {
    url: "/models/Chassis.GLB",
    label: "Chassis",
    scale: 5,
    camPos: [-3, 2, 8], camTarget: [-1, 0, 0], infoSide: "right",
    hotspots: [
      { position: [0.5, 0.7, 0.5], text: "TODO: needs real info - Spaceframe steel chassis" },
      { position: [0.5, 0.3, 0.5], text: "TODO: needs real info - Impact attenuator and roll hoop" },
    ],
  },
  {
    url: "/models/Driveshaft.glb",
    label: "Drivetrain",
    scale: 5,
    camPos: [-3, 2, 8], camTarget: [-1, 0, 0], infoSide: "left",
    hotspots: [
      { position: [0.5, 0.7, 0.5], text: "TODO: needs real info - Chain drive and differential" },
      { position: [0.5, 0.3, 0.5], text: "TODO: needs real info - Gearbox and sprocket assembly" },
    ],
  },
  {
    label: "Cooling",
    camPos: [-3, 2, 8], camTarget: [-1, 0, 0], infoSide: "right",
    hotspots: [
      { position: [0.5, 0.7, 0.5], text: "TODO: needs real info - Radiator and cooling ducts" },
      { position: [0.5, 0.3, 0.5], text: "TODO: needs real info - Electric water pump and hoses" },
    ],
  },
  {
    label: "Power Delivery",
    camPos: [-3, 2, 8], camTarget: [-1, 0, 0], infoSide: "left",
    hotspots: [
      { position: [0.5, 0.7, 0.5], text: "TODO: needs real info - Motor controller and battery pack" },
      { position: [0.5, 0.3, 0.5], text: "TODO: needs real info - HV wiring and BMS" },
    ],
  },
];

export const MODEL_URLS = MODELS.map((m) => m.url).filter(Boolean) as string[];
export const HOTSPOTS = MODELS.map((m) => m.hotspots);
