export interface Hotspot {
  position: [number, number, number]; // 0..1 fractions of bounding box (x, y, z)
  text: string;
}

export interface ModelConfig {
  url: string;
  label: string;

  camPos: [number, number, number];
  camTarget: [number, number, number];
  infoSide?: "left" | "right";
  hotspots: Hotspot[];
}

export const MODELS: ModelConfig[] = [
  {
    url: "/models/CAR.glb",
    label: "AUS Racing Car",
    camPos: [0, 2, 10], camTarget: [0, 0, 0],
    hotspots: [
      { position: [0.5, 0.7, 0.5], text: "Every component designed, analysed, manufactured and tested by students" },
    ],
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
    url: "/models/Bodywork_V9_assembly.glb",
    label: "Bodywork",

    camPos: [-3, 2, 8], camTarget: [-1, 0, 0], infoSide: "left",
    hotspots: [
      { position: [20.5, 0.9, 0.5], text: "Laser-cut aluminium panels, 2mm thick" },
      { position: [0.3, 0.5, 0.5], text: "Aluminium body with steel floor" },
    ],
  },
  {
    url: "/models/Pedal_box_assembly_v10.glb",
    label: "Electronics",

    camPos: [-3, 2, 8], camTarget: [-1, 0, 0], infoSide: "right",
    hotspots: [
      { position: [0.5, 0.8, 0.5], text: "Lorem ipsum dolor sit amet consectetur adipiscing elit" },
      { position: [0.7, 0.4, 0.5], text: "Lorem ipsum dolor sit amet consectetur adipiscing elit" },
    ],
  },
  {
    url: "/models/Nose_V3.glb",
    label: "Aerodynamics",

    camPos: [-3, 2, 8], camTarget: [-1, 0, 0], infoSide: "left",
    hotspots: [
      { position: [200.5, 0.9, 0.5], text: "Lorem ipsum dolor sit amet consectetur adipiscing elit" },
      { position: [0.5, 0.3, 0.5], text: "Lorem ipsum dolor sit amet consectetur adipiscing elit" },
    ],
  },
  {
    url: "/models/Full_brake_assembly_with_wheel.glb",
    label: "Steering",

    camPos: [-3, 2, 8], camTarget: [-1, 0, 0], infoSide: "right",
    hotspots: [
      { position: [0.7, 0.35, 0.7], text: " amet consectetur adipiscing elit" },
      { position: [0.7, 0.3, 0.7], text: "Lorem ipsus amet consectetur adipiscing elit" },
    ],
  },
];

export const MODEL_URLS = MODELS.map((m) => m.url);
export const HOTSPOTS = MODELS.map((m) => m.hotspots);
