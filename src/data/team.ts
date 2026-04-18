export const FILTERS = [
  "Executive Board", 
  "Electrical", 
  "Powertrain", // Combined Drivetrain & Cooling
  "Suspension & Steering", 
  "Chassis",
  "Aerodynamics",
  "Brakes",
  "Drivers", 
  "Public Relations", // Combined Internal & External
  "Operations", // Combined Treasury & Deputy Execs
  "Supply Chain",
  "Web Development", 
  "Media & Marketing"
];
export const TEAM_DESCRIPTIONS: Record<string, string> = {
  "Executive Board": "Guiding the strategic vision, operations, and ultimate success of the racing team.",
  "Electrical": "Designing the custom wiring harnesses and high-voltage systems that power our vehicle.",
  "Powertrain": "Optimizing battery output and energy efficiency for peak track performance.",
  "Suspension & Steering": "Engineering dynamic suspension geometry to maximize tire grip and driver handling.",
  "Chassis": "Fabricating a lightweight, structurally rigid frame to protect the driver and anchor the car.",
  "Aerodynamics": "Manipulating airflow to reduce drag and generate massive cornering downforce.",
  "Brakes": "Engineering high-performance stopping power and thermal management for precision cornering.",
  "Drivers": "Pushing the engineered vehicle to its absolute physical limits on the track.",
  "Public Relations": "Managing sponsor relationships, community outreach, and the team's professional image.",
  "Operations": "Managing team finances, logistics, and internal administration for peak operational efficiency.",
  "Supply Chain": "Procuring crucial components and managing logistics to keep manufacturing strictly on schedule.",
  "Web Development": "Building the digital track: developing our high-performance team platform.",
  "Media & Marketing": "Crafting our story and showcasing our speed to the world.",
};

export const TEAM_MEMBERS = [
  // --- MAIN BOARD ---
  { name: "Saad Ibrahim", role: "Team Principal", isLeader: true, emoji: "👑", quote: "Driven by performance.", category: "Executive Board" },
  { name: "Saurav Gupte", role: "VP / Head of Engineering", isLeader: false, emoji: "⚙️", quote: "Driven by performance.", category: "Executive Board" },
  { name: "Shwetambari Abhirajan", role: "External Coordinator", isLeader: false, emoji: "🤝", quote: "Driven by performance.", category: "Executive Board" },
  { name: "Mirra Swaminathan", role: "Head of Treasury", isLeader: false, emoji: "💰", quote: "Driven by performance.", category: "Executive Board" },
  { name: "Sameeksha Ramesh", role: "Executive Assistant", isLeader: false, emoji: "📋", quote: "Driven by performance.", category: "Executive Board" },

  // --- ELECTRICAL ---
  { name: "Name6", role: "Lead", isLeader: true, emoji: "⚡", quote: "Driven by performance.", category: "Electrical" },
  { name: "Name7", role: "Advisor", isLeader: false, emoji: "⚡", quote: "Driven by performance.", category: "Electrical" },
  { name: "Name8", role: "Advisor", isLeader: false, emoji: "⚡", quote: "Driven by performance.", category: "Electrical" },
  { name: "Name9", role: "Team Member", isLeader: false, emoji: "⚡", quote: "Driven by performance.", category: "Electrical" },
  { name: "Name10", role: "Team Member", isLeader: false, emoji: "⚡", quote: "Driven by performance.", category: "Electrical" },
  { name: "Name11", role: "Team Member", isLeader: false, emoji: "⚡", quote: "Driven by performance.", category: "Electrical" },
  { name: "Name12", role: "Team Member", isLeader: false, emoji: "⚡", quote: "Driven by performance.", category: "Electrical" },
  { name: "Name13", role: "Team Member", isLeader: false, emoji: "⚡", quote: "Driven by performance.", category: "Electrical" },
  { name: "Name14", role: "Team Member", isLeader: false, emoji: "⚡", quote: "Driven by performance.", category: "Electrical" },

  // --- POWER DELIVERY ---
  { name: "Name15", role: "Advisor", isLeader: false, emoji: "🔋", quote: "Driven by performance.", category: "Power Delivery" },
  { name: "Name16", role: "Lead", isLeader: true, emoji: "🔋", quote: "Driven by performance.", category: "Power Delivery" },
  { name: "Name17", role: "Team Member", isLeader: false, emoji: "🔋", quote: "Driven by performance.", category: "Power Delivery" },
  { name: "Name18", role: "Team Member", isLeader: false, emoji: "🔋", quote: "Driven by performance.", category: "Power Delivery" },

  // --- SUSPENSION ---
  { name: "Name19", role: "Lead", isLeader: true, emoji: "🛠️", quote: "Driven by performance.", category: "Suspension" },
  { name: "Name20", role: "Team Member", isLeader: false, emoji: "🛠️", quote: "Driven by performance.", category: "Suspension" },

  // --- CHASSIS ---
  { name: "Name21", role: "Lead", isLeader: true, emoji: "🏗️", quote: "Driven by performance.", category: "Chassis" },
  { name: "Name22", role: "Team Member", isLeader: false, emoji: "🏗️", quote: "Driven by performance.", category: "Chassis" },
  { name: "Name23", role: "Team Member", isLeader: false, emoji: "🏗️", quote: "Driven by performance.", category: "Chassis" },
  { name: "Name24", role: "Team Member", isLeader: false, emoji: "🏗️", quote: "Driven by performance.", category: "Chassis" },
  { name: "Name25", role: "Team Member", isLeader: false, emoji: "🏗️", quote: "Driven by performance.", category: "Chassis" },
  { name: "Name26", role: "Team Member", isLeader: false, emoji: "🏗️", quote: "Driven by performance.", category: "Chassis" },
  { name: "Name27", role: "Team Member", isLeader: false, emoji: "🏗️", quote: "Driven by performance.", category: "Chassis" },

  // --- AERODYNAMICS ---
  { name: "Name28", role: "Lead", isLeader: true, emoji: "🌬️", quote: "Driven by performance.", category: "Aerodynamics" },
  { name: "Name29", role: "Team Member", isLeader: false, emoji: "🌬️", quote: "Driven by performance.", category: "Aerodynamics" },
  { name: "Name30", role: "Team Member", isLeader: false, emoji: "🌬️", quote: "Driven by performance.", category: "Aerodynamics" },

  // --- STEERING ---
  { name: "Name31", role: "Lead", isLeader: true, emoji: "🔄", quote: "Driven by performance.", category: "Steering" },

  // --- DRIVETRAIN ---
  { name: "Name32", role: "Lead", isLeader: true, emoji: "⚙️", quote: "Driven by performance.", category: "Drivetrain" },
  { name: "Name33", role: "Team Member", isLeader: false, emoji: "⚙️", quote: "Driven by performance.", category: "Drivetrain" },
  { name: "Name34", role: "Team Member", isLeader: false, emoji: "⚙️", quote: "Driven by performance.", category: "Drivetrain" },
  { name: "Name35", role: "Team Member", isLeader: false, emoji: "⚙️", quote: "Driven by performance.", category: "Drivetrain" },

  // --- BRAKES ---
  { name: "Name36", role: "Lead", isLeader: true, emoji: "🛑", quote: "Driven by performance.", category: "Brakes" },
  { name: "Name37", role: "Team Member", isLeader: false, emoji: "🛑", quote: "Driven by performance.", category: "Brakes" },
  { name: "Name38", role: "Team Member", isLeader: false, emoji: "🛑", quote: "Driven by performance.", category: "Brakes" },
  { name: "Name39", role: "Team Member", isLeader: false, emoji: "🛑", quote: "Driven by performance.", category: "Brakes" },

  // --- COOLING ---
  { name: "Name40", role: "Lead", isLeader: true, emoji: "❄️", quote: "Driven by performance.", category: "Cooling" },
  { name: "Name41", role: "Team Member", isLeader: false, emoji: "❄️", quote: "Driven by performance.", category: "Cooling" },

  // --- DRIVERS ---
  { name: "Name42", role: "Driver", isLeader: false, emoji: "🏎️", quote: "Driven by performance.", category: "Drivers" },
  { name: "Name43", role: "Driver", isLeader: false, emoji: "🏎️", quote: "Driven by performance.", category: "Drivers" },
  { name: "Name44", role: "Driver", isLeader: false, emoji: "🏎️", quote: "Driven by performance.", category: "Drivers" },
  { name: "Name45", role: "Driver", isLeader: false, emoji: "🏎️", quote: "Driven by performance.", category: "Drivers" },
  { name: "Name46", role: "Driver", isLeader: false, emoji: "🏎️", quote: "Driven by performance.", category: "Drivers" },

  // --- EXTERNAL RELATIONS ---
  { name: "Name47", role: "Head of External Relations", isLeader: true, emoji: "🤝", quote: "Driven by performance.", category: "External Relations" },
  { name: "Name48", role: "Assistant Head of External Relations", isLeader: false, emoji: "🤝", quote: "Driven by performance.", category: "External Relations" },
  { name: "Name49", role: "Team Member", isLeader: false, emoji: "🤝", quote: "Driven by performance.", category: "External Relations" },
  { name: "Name50", role: "Team Member", isLeader: false, emoji: "🤝", quote: "Driven by performance.", category: "External Relations" },
  { name: "Name51", role: "Team Member", isLeader: false, emoji: "🤝", quote: "Driven by performance.", category: "External Relations" },
  { name: "Name52", role: "Team Member", isLeader: false, emoji: "🤝", quote: "Driven by performance.", category: "External Relations" },

  // --- DEPUTY EXEC. ASSISTANTS ---
  { name: "Name53", role: "Engineering", isLeader: true, emoji: "📋", quote: "Driven by performance.", category: "Deputy Exec. Assistants" },
  { name: "Name54", role: "Commerce", isLeader: true, emoji: "📋", quote: "Driven by performance.", category: "Deputy Exec. Assistants" },

  // --- SUPPLY CHAIN ---
  { name: "Name55", role: "Head of Supply Chain", isLeader: true, emoji: "📦", quote: "Driven by performance.", category: "Supply Chain" },
  { name: "Name56", role: "Team Member", isLeader: false, emoji: "📦", quote: "Driven by performance.", category: "Supply Chain" },
  { name: "Name57", role: "Team Member", isLeader: false, emoji: "📦", quote: "Driven by performance.", category: "Supply Chain" },
  { name: "Name58", role: "Team Member", isLeader: false, emoji: "📦", quote: "Driven by performance.", category: "Supply Chain" },

  // --- WEB DEVELOPMENT ---
  { name: "Sidratul Sara", role: "Head of Web Dev", isLeader: true, emoji: "💻", quote: "Driven by performance.", category: "Web Development" },
  { name: "Muhammed Adnan", role: "Assistant Head", isLeader: false, emoji: "💻", quote: "Driven by performance.", category: "Web Development" },
  { name: "Ghazal Ghazi", role: "Team Member", isLeader: false, emoji: "💻", quote: "Driven by performance.", category: "Web Development" },
  { name: "Yusuf Sabuwala", role: "Team Member", isLeader: false, emoji: "💻", quote: "Driven by performance.", category: "Web Development" },
  { name: "Hashir Hameed", role: "Team Member", isLeader: false, emoji: "💻", quote: "Driven by performance.", category: "Web Development" },
  { name: "Adam Serhan", role: "Team Member", isLeader: false, emoji: "💻", quote: "Driven by performance.", category: "Web Development" },
  { name: "Yasmeen Khalaf", role: "Team Member", isLeader: false, emoji: "💻", quote: "Driven by performance.", category: "Web Development" },

  // --- MEDIA & MARKETING ---
  { name: "Mazin Rizvi", role: "Advisor", isLeader: true, emoji: "📸", quote: "Driven by performance.", category: "Media & Marketing" },
  { name: "Name67", role: "Head of Media & Marketing", isLeader: false, emoji: "📸", quote: "Driven by performance.", category: "Media & Marketing" },
  { name: "Name68", role: "Team Member", isLeader: false, emoji: "📸", quote: "Driven by performance.", category: "Media & Marketing" },
  { name: "Name69", role: "Team Member", isLeader: false, emoji: "📸", quote: "Driven by performance.", category: "Media & Marketing" },
  { name: "Name70", role: "Team Member", isLeader: false, emoji: "📸", quote: "Driven by performance.", category: "Media & Marketing" },
  { name: "Name71", role: "Team Member", isLeader: false, emoji: "📸", quote: "Driven by performance.", category: "Media & Marketing" },
  { name: "Name72", role: "Team Member", isLeader: false, emoji: "📸", quote: "Driven by performance.", category: "Media & Marketing" },
  { name: "Name73", role: "Team Member", isLeader: false, emoji: "📸", quote: "Driven by performance.", category: "Media & Marketing" },
  { name: "Name74", role: "Team Member", isLeader: false, emoji: "📸", quote: "Driven by performance.", category: "Media & Marketing" },

  // --- TREASURY ---
  { name: "Name75", role: "Head of Treasury", isLeader: true, emoji: "💰", quote: "Driven by performance.", category: "Treasury" },
  { name: "Name76", role: "Team Member", isLeader: false, emoji: "💰", quote: "Driven by performance.", category: "Treasury" },
  { name: "Name77", role: "Team Member", isLeader: false, emoji: "💰", quote: "Driven by performance.", category: "Treasury" },

  // --- INTERNAL RELATIONS (Inferred from prompt) ---
  { name: "Name78", role: "Team Member", isLeader: false, emoji: "👥", quote: "Driven by performance.", category: "Internal Relations" },
  { name: "Name79", role: "Team Member", isLeader: false, emoji: "👥", quote: "Driven by performance.", category: "Internal Relations" }
];