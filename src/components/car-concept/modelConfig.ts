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
  initialRotation?: [number, number, number]; 
}

export const MODELS: ModelConfig[] = [
  {
    url: "/models/CAR_v2.glb",
    label: "AUS Racing Car",
    camPos: [0, 2, 10],
    camTarget: [0, 0, 0],
    hotspots: [],
  },
  {
    url: "/models/Rotor_with_caliper_and_hub.glb",
    label: "Braking System",
    camPos: [-3, 2, 8],
    camTarget: [-1, 0, 0],
    infoSide: "right",
    hotspots: [
      {
        position: [20.5, 80.8, 0.5], // Restored to your original exact CAD coordinate
        text: "Custom-designed high-carbon steel brake discs for maximum performance and reliability",
      },
      {
        position: [50.7, 40.4, 0.7], // Restored to your original exact CAD coordinate
        text: "High-performance Wilwood brake calipers and pads",
      },
    ],
  },
  {
    url: "/models/TSAC.glb",
    scale: 2.5,
    label: "Electronics",
    camPos: [-3, 2, 8],
    camTarget: [-1, 0, 0],
    infoSide: "right",
    initialRotation: [Math.PI / 2, 0, 0], // Keeps the model upright
    hotspots: [
      // These were originally small placeholders. You will need to increase these (e.g., [10, 20, 5]) 
      // if they are merged/floating, just like the brakes!
      { position: [0.5, 0.8, 0.5], text: "ECU and wiring harness" },
      { position: [0.7, 0.4, 0.5], text: "Data acquisition and sensors" },
    ],
  },
  {
    url: "/models/Nose_V3.glb",
    label: "Aerodynamics",
    scale: 3,
    camPos: [-3, 2, 8],
    camTarget: [-1, 0, 0],
    infoSide: "left",
    hotspots: [
      {
        position: [20.5, 0.9, 0.5], // Restored
        text: "Laser-cut aluminium panels, 2mm thick",
      },
      { position: [0.3, 0.5, 0.5], text: "Aluminium body with steel floor" }, // Restored
    ],
  },
  {
    url: "/models/steering_v2.glb",
    label: "Steering",
    scale: 4,
    camPos: [-3, 2, 8],
    camTarget: [-1, 0, 0],
    infoSide: "right",
    hotspots: [
      { position: [0.7, 0.35, 0.7], text: "Steering rack and column" }, // Restored
      { position: [0.7, 0.3, 0.7], text: "Custom uprights and hubs" }, // Restored
    ],
  },
  {
    url: "/models/Chassis.GLB",
    label: "Chassis",
    scale: 5,
    camPos: [-3, 2, 8],
    camTarget: [-1, 0, 0],
    infoSide: "right",
    hotspots: [
      { position: [0.5, 0.7, 0.5], text: "Spaceframe steel chassis" }, // Restored
      { position: [0.5, 0.3, 0.5], text: "Impact attenuator and roll hoop" }, // Restored
    ],
  },
  {
    url: "/models/Driveshaft.glb",
    label: "Drivetrain",
    scale: 5,
    camPos: [-3, 2, 8],
    camTarget: [-1, 0, 0],
    infoSide: "left",
    hotspots: [
      // Pushed the Y-axis way down (-40 and -20) to pull it out of the sky. 
      // Tweak these numbers until they sit perfectly on the axle and sprocket!
      { position: [0, -40, 0], text: "Chain drive and differential" },
      { position: [0, -20, 20], text: "Gearbox and sprocket assembly" },
    ],
  },
];

export const MODEL_URLS = MODELS.map((m) => m.url).filter(Boolean) as string[];
export const HOTSPOTS = MODELS.map((m) => m.hotspots);