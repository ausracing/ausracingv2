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
  // --- Executive Board (Main Board) ---
  { name: "Saad Ibrahim", role: "Team Principal", isLeader: true, emoji: "👑", quote: "Driven by performance.", category: "Executive Board" },
  { name: "Saurav Gupte", role: "Vice Principal/Head of Engineering", isLeader: false, emoji: "👑", quote: "Driven by performance.", category: "Executive Board" },
  { name: "Shwetambari Abhirajan", role: "External Coordinator", isLeader: false, emoji: "👑", quote: "Driven by performance.", category: "Executive Board" },
  { name: "Mirra Swaminathan", role: "Head of Treasury", isLeader: false, emoji: "👑", quote: "Driven by performance.", category: "Executive Board" },
  { name: "Sameeksha Ramesh", role: "Executive Assistant", isLeader: false, emoji: "👑", quote: "Driven by performance.", category: "Executive Board" },

  // --- Electrical ---
  { name: "Syed Muneeb Ali", role: "Lead", isLeader: true, emoji: "👑", quote: "Driven by performance.", category: "Electrical" },
  { name: "Mohammed Baraa Adnan", role: "Advisor", isLeader: false, emoji: "🧠", quote: "Driven by performance.", category: "Electrical" },
  { name: "Mark Farag", role: "Advisor", isLeader: false, emoji: "🧠", quote: "Driven by performance.", category: "Electrical" },
  { name: "Ehab Taha Galal", role: "Team", isLeader: false, emoji: "⚡", quote: "Driven by performance.", category: "Electrical" },
  { name: "Hammad Ahmed Adil", role: "Team", isLeader: false, emoji: "⚡", quote: "Driven by performance.", category: "Electrical" },
  { name: "Mohammed Shakhawat Hossain", role: "Team", isLeader: false, emoji: "⚡", quote: "Driven by performance.", category: "Electrical" },
  { name: "Abdallah Yassin", role: "Team", isLeader: false, emoji: "⚡", quote: "Driven by performance.", category: "Electrical" },
  { name: "Abdullah Alnojoum", role: "Team", isLeader: false, emoji: "⚡", quote: "Driven by performance.", category: "Electrical" },
  // Power Delivery -> Mapped to Electrical
  { name: "Aria Habibagahi", role: "Team", isLeader: false, emoji: "⚡", quote: "Driven by performance.", category: "Electrical" },
  { name: "Mehdi Kermani", role: "Team", isLeader: false, emoji: "⚡", quote: "Driven by performance.", category: "Electrical" },

  // --- Powertrain (Drivetrain & Cooling) ---
  // Drivetrain
  { name: "Turki Khalid Algarawi", role: "Drivetrain Lead", isLeader: true, emoji: "👑", quote: "Driven by performance.", category: "Powertrain" },
  { name: "Saurav Gupte", role: "Team", isLeader: false, emoji: "⚙️", quote: "Driven by performance.", category: "Powertrain" },
  { name: "Farasha Imran", role: "Team", isLeader: false, emoji: "⚙️", quote: "Driven by performance.", category: "Powertrain" },
  { name: "Mohammed Abdulrahman", role: "Team", isLeader: false, emoji: "⚙️", quote: "Driven by performance.", category: "Powertrain" },
  // Cooling
  { name: "Nafiz Imteaz", role: "Cooling Lead", isLeader: true, emoji: "👑", quote: "Driven by performance.", category: "Powertrain" },
  { name: "Aria Habibagahi", role: "Team", isLeader: false, emoji: "❄️", quote: "Driven by performance.", category: "Powertrain" },
  { name: "Mohammed Mustafa Yaqoub Al Hinai", role: "Team", isLeader: false, emoji: "❄️", quote: "Driven by performance.", category: "Powertrain" },

  // --- Suspension & Steering ---
  // Suspension
  { name: "Nafiz Imteaz", role: "Lead", isLeader: true, emoji: "👑", quote: "Driven by performance.", category: "Suspension & Steering" },
  { name: "Saurav Gupte", role: "Team", isLeader: false, emoji: "🔧", quote: "Driven by performance.", category: "Suspension & Steering" },
  // Steering
  { name: "Saad Ibrahim", role: "Team", isLeader: false, emoji: "👑", quote: "Driven by performance.", category: "Suspension & Steering" },

  // --- Chassis ---
  { name: "Devansh Ajay Sapru", role: "Chassis Lead", isLeader: true, emoji: "👑", quote: "Driven by performance.", category: "Chassis" },
  { name: "Hammad Ahmed Adil", role: "Team", isLeader: false, emoji: "🔧", quote: "Driven by performance.", category: "Chassis" },
  { name: "Syed Ibrahim Abidi", role: "Team", isLeader: false, emoji: "🔧", quote: "Driven by performance.", category: "Chassis" },
  { name: "Abbas Murtaza", role: "Team", isLeader: false, emoji: "🔧", quote: "Driven by performance.", category: "Chassis" },
  { name: "Ethann Thomas Danthi", role: "Team", isLeader: false, emoji: "🔧", quote: "Driven by performance.", category: "Chassis" },
  { name: "Hazin Zahid", role: "Team", isLeader: false, emoji: "🔧", quote: "Driven by performance.", category: "Chassis" },
  { name: "Arjun Bomma", role: "Team", isLeader: false, emoji: "🔧", quote: "Driven by performance.", category: "Chassis" },

  // --- Aerodynamics (Bodywork/Aerodynamics) ---
  { name: "Zouheir Al Halabi", role: "Aerodynamics Lead", isLeader: true, emoji: "👑", quote: "Driven by performance.", category: "Aerodynamics" },
  { name: "Ali Diab", role: "Team", isLeader: false, emoji: "💨", quote: "Driven by performance.", category: "Aerodynamics" },
  { name: "Rakan", role: "Team", isLeader: false, emoji: "💨", quote: "Driven by performance.", category: "Aerodynamics" },

  // --- Brakes ---
  { name: "Mihir Avirneni", role: "Brakes Lead", isLeader: true, emoji: "👑", quote: "Driven by performance.", category: "Brakes" },
  { name: "Amritha Rajeev", role: "Team", isLeader: false, emoji: "🛑", quote: "Driven by performance.", category: "Brakes" },
  { name: "Safa Muhammed Umer", role: "Team", isLeader: false, emoji: "🛑", quote: "Driven by performance.", category: "Brakes" },
  { name: "Aboubakr Mohammad", role: "Team", isLeader: false, emoji: "🛑", quote: "Driven by performance.", category: "Brakes" },

  // --- Drivers (Vehicle Dynamics Drivers) ---
  { name: "Said Tayara", role: "Test Driver", isLeader: true, emoji: "🏎️", quote: "Driven by performance.", category: "Drivers" },
  { name: "Anas Saleh", role: "Test Driver", isLeader: false, emoji: "🏎️", quote: "Driven by performance.", category: "Drivers" },
  { name: "Hassan Eraky", role: "Test Driver", isLeader: false, emoji: "🏎️", quote: "Driven by performance.", category: "Drivers" },
  { name: "Saurav Gupte", role: "Test Driver", isLeader: false, emoji: "🏎️", quote: "Driven by performance.", category: "Drivers" },

  // --- Public Relations (External & Internal) ---
  // External Relations
  { name: "Syeda Suha Nawaz", role: "Head of External Relations", isLeader: true, emoji: "👑", quote: "Driven by performance.", category: "Public Relations" },
  { name: "Aisha Abu Sa'ad", role: "Assistant Head of External Relations", isLeader: false, emoji: "👑", quote: "Driven by performance.", category: "Public Relations" },
  { name: "Sidratul Sara", role: "Team", isLeader: false, emoji: "🤝", quote: "Driven by performance.", category: "Public Relations" },
  { name: "Mazin Zakki", role: "Team", isLeader: false, emoji: "🤝", quote: "Driven by performance.", category: "Public Relations" },
  { name: "Muhammad Adnan", role: "Team", isLeader: false, emoji: "🤝", quote: "Driven by performance.", category: "Public Relations" },
  { name: "Sameer Ahmed", role: "Team", isLeader: false, emoji: "🤝", quote: "Driven by performance.", category: "Public Relations" },
  // Internal Relations
  { name: "Brahmishtha Bhattacharjee", role: "Head of Internal Relations", isLeader: true, emoji: "👑", quote: "Driven by performance.", category: "Public Relations" },
  { name: "Sanaaz Aju Anoob", role: "Team", isLeader: false, emoji: "🤝", quote: "Driven by performance.", category: "Public Relations" },
  { name: "Amira", role: "Team", isLeader: false, emoji: "🤝", quote: "Driven by performance.", category: "Public Relations" },
  { name: "Hassan Eraky", role: "Team", isLeader: false, emoji: "🤝", quote: "Driven by performance.", category: "Public Relations" },
  { name: "Syed Musab", role: "Team", isLeader: false, emoji: "🤝", quote: "Driven by performance.", category: "Public Relations" },
  { name: "Pavan Lokesh", role: "Team", isLeader: false, emoji: "🤝", quote: "Driven by performance.", category: "Public Relations" },

  // --- Operations (Deputy Execs & Treasury) ---
  // Treasury
  { name: "Mirra Swaminathan", role: "Head of Treasury", isLeader: true, emoji: "👑", quote: "Driven by performance.", category: "Operations" },
  { name: "Toleen", role: "Team", isLeader: false, emoji: "💰", quote: "Driven by performance.", category: "Operations" },
  // Deputy Executive Assistants
  { name: "Adrish Hussein Danka", role: "Engineering", isLeader: false, emoji: "💼", quote: "Driven by performance.", category: "Operations" },
  { name: "Navaal Ghazanfar", role: "Commerce", isLeader: false, emoji: "💼", quote: "Driven by performance.", category: "Operations" },

  // --- Supply Chain ---
  { name: "Pranav Rajesh", role: "Head of Supply Chain", isLeader: true, emoji: "👑", quote: "Driven by performance.", category: "Supply Chain" },
  { name: "Aryan Agrawal", role: "Team", isLeader: false, emoji: "📦", quote: "Driven by performance.", category: "Supply Chain" },
  { name: "Abdullah Ashar", role: "Team", isLeader: false, emoji: "📦", quote: "Driven by performance.", category: "Supply Chain" },
  { name: "Noel Daniel", role: "Team", isLeader: false, emoji: "📦", quote: "Driven by performance.", category: "Supply Chain" },

  // --- Web Development ---
  { name: "Sidratul Sara", role: "Head of Web Dev", isLeader: true, emoji: "👑", quote: "Driven by performance.", category: "Web Development" },
  { name: "Muhammed Adnan", role: "Assistant Head", isLeader: false, emoji: "👑", quote: "Driven by performance.", category: "Web Development" },
  { name: "Ghazal Ghazi", role: "Team", isLeader: false, emoji: "💻", quote: "Driven by performance.", category: "Web Development" },
  { name: "Yusuf Sabuwala", role: "Team", isLeader: false, emoji: "💻", quote: "Driven by performance.", category: "Web Development" },
  { name: "Hashir Hameed", role: "Team", isLeader: false, emoji: "💻", quote: "Driven by performance.", category: "Web Development" },
  { name: "Adam Serhan", role: "Team", isLeader: false, emoji: "💻", quote: "Driven by performance.", category: "Web Development" },
  { name: "Yasmeen Khalaf", role: "Team", isLeader: false, emoji: "💻", quote: "Driven by performance.", category: "Web Development" },

  // --- Media & Marketing ---
  { name: "Hazin Zahid", role: "Head of Media & Marketing", isLeader: true, emoji: "👑", quote: "Driven by performance.", category: "Media & Marketing" },
  { name: "Mazin Rizvi", role: "Advisor", isLeader: false, emoji: "🧠", quote: "Driven by performance.", category: "Media & Marketing" },
  { name: "Samriddhi", role: "Team", isLeader: false, emoji: "📸", quote: "Driven by performance.", category: "Media & Marketing" },
  { name: "Abdulkadar Awad Muhammad Aslam", role: "Team", isLeader: false, emoji: "📸", quote: "Driven by performance.", category: "Media & Marketing" },
  { name: "Ahadali Suchedina", role: "Team", isLeader: false, emoji: "📸", quote: "Driven by performance.", category: "Media & Marketing" },
  { name: "Eyad Wafa", role: "Team", isLeader: false, emoji: "📸", quote: "Driven by performance.", category: "Media & Marketing" },
  { name: "Sarah D'Silva", role: "Team", isLeader: false, emoji: "📸", quote: "Driven by performance.", category: "Media & Marketing" },
  { name: "Edliyn Risshona", role: "Team", isLeader: false, emoji: "📸", quote: "Driven by performance.", category: "Media & Marketing" }
];