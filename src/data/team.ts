export const FILTERS = [
  "Executive Board", 
  "Electrical", 
  "Powertrain", // Combined Drivetrain & Cooling
  "Suspension & Steering", 
  "Chassis",
  "Aerodynamics",
  "Brakes",
  "Drivers", 
  "Public Relations",
  "Internal Relations",
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
  "Internal Relations": "Overseeing internal communications, team dynamics, and organizational culture.",
  "Operations": "Managing team finances, logistics, and internal administration for peak operational efficiency.",
  "Supply Chain": "Procuring crucial components and managing logistics to keep manufacturing strictly on schedule.",
  "Web Development": "Building the digital track: developing our high-performance team platform.",
  "Media & Marketing": "Crafting our story and showcasing our speed to the world.",
};

export const TEAM_MEMBERS = [
  // --- Executive Board (Main Board) ---
  { name: "Saad Ibrahim", role: "Team Principal", isLeader: true, category: "Executive Board", hasPhoto: true, gender: "m"},
  { name: "Saurav Gupte", role: "Vice Principal/Head of Engineering", isLeader: false, category: "Executive Board", hasPhoto: true, gender: "m"},
  { name: "Shwetambari Abhirajan", role: "External Coordinator", isLeader: false, category: "Executive Board", hasPhoto: true, gender: "f"},
  { name: "Mirra Swaminathan", role: "Head of Treasury", isLeader: false, category: "Executive Board", hasPhoto: true, gender: "f"},
  { name: "Sameeksha Ramesh", role: "Executive Assistant", isLeader: false, category: "Executive Board", hasPhoto: true, gender: "f"},

  // --- Electrical ---
  { name: "Syed Muneeb Ali", role: "Electrical Lead", isLeader: true, category: "Electrical", hasPhoto: true, gender: "m"},
  { name: "Mohammed Baraa Adnan", role: "Advisor", isLeader: false, category: "Electrical", hasPhoto: true, gender: "m"},
  { name: "Mark Farag", role: "Advisor", isLeader: false, category: "Electrical", hasPhoto: true, gender: "m"},
  { name: "Ehab Taha Galal", role: "Team", isLeader: false, category: "Electrical", hasPhoto: true, gender: "m"},
  { name: "Hammad Ahmed Adil", role: "Team", isLeader: false, category: "Electrical", hasPhoto: true, gender: "m"},
  { name: "Mohammed Shakhawat Hossain", role: "Team", isLeader: false, category: "Electrical", hasPhoto: true, gender: "m"},
  { name: "Abdallah Yassin", role: "Team", isLeader: false, category: "Electrical", hasPhoto: true, gender: "m"},
  { name: "Abdullah Alnojoum", role: "Team", isLeader: false, category: "Electrical", hasPhoto: true, gender: "m"},
  // Power Delivery -> Mapped to Electrical
  { name: "Aria Habibagahi", role: "Team", isLeader: false, category: "Electrical", hasPhoto: true, gender: "m"},
  { name: "Mehdi Kermani", role: "Team", isLeader: false, category: "Electrical", hasPhoto: true, gender: "m"},

  // --- Powertrain (Drivetrain & Cooling) ---
  // Drivetrain
  { name: "Turki Khalid Algarawi", role: "Drivetrain Lead", isLeader: true, category: "Powertrain", hasPhoto: true, gender: "m"},
  { name: "Saurav Gupte", role: "Team", isLeader: false, category: "Powertrain", hasPhoto: true, gender: "m"},
  { name: "Farasha Imran", role: "Team", isLeader: false, category: "Powertrain", hasPhoto: true, gender: "f"},
  { name: "Mohammed Abdulrahman", role: "Team", isLeader: false, category: "Powertrain", hasPhoto: false, gender: "m"},
  // Cooling
  { name: "Nafiz Imteaz", role: "Cooling Lead", isLeader: true, category: "Powertrain", hasPhoto: false, gender: "m"},
  { name: "Aria Habibagahi", role: "Team", isLeader: false, category: "Powertrain", hasPhoto: true, gender: "m"},
  { name: "Mohammed Al Hinai", role: "Team", isLeader: false, category: "Powertrain", hasPhoto: true, gender: "m"},

  // --- Suspension & Steering ---
  // Suspension
  { name: "Nafiz Imteaz", role: "Suspension Lead", isLeader: true, category: "Suspension & Steering", hasPhoto: false, gender: "m"},
  { name: "Saurav Gupte", role: "Team", isLeader: false, category: "Suspension & Steering", hasPhoto: true, gender: "m"},
  // Steering
  { name: "Saad Ibrahim", role: "Team", isLeader: false, category: "Suspension & Steering", hasPhoto: true, gender: "m"},

  // --- Chassis ---
  { name: "Devansh Ajay Sapru", role: "Chassis Lead", isLeader: true, category: "Chassis", hasPhoto: true, gender: "m"},
  { name: "Hammad Ahmed Adil", role: "Team", isLeader: false, category: "Chassis", hasPhoto: true, gender: "m"},
  { name: "Syed Ibrahim Abidi", role: "Team", isLeader: false, category: "Chassis", hasPhoto: true, gender: "m"},
  { name: "Abbas Murtaza", role: "Team", isLeader: false, category: "Chassis", hasPhoto: true, gender: "m"},
  { name: "Ethann Thomas Danthi", role: "Team", isLeader: false, category: "Chassis", hasPhoto: true, gender: "m"},
  { name: "Hazin Zahid", role: "Team", isLeader: false, category: "Chassis", hasPhoto: true, gender: "m"},
  { name: "Arjun Bomma", role: "Team", isLeader: false, category: "Chassis", hasPhoto: true, gender: "m"},

  // --- Aerodynamics (Bodywork/Aerodynamics) ---
  { name: "Zouheir Al Halabi", role: "Aerodynamics Lead", isLeader: true, category: "Aerodynamics", hasPhoto: true, gender: "m"},
  { name: "Ali Diab", role: "Team", isLeader: false, category: "Aerodynamics", hasPhoto: true, gender: "m"},
  { name: "Rakan Amar", role: "Team", isLeader: false, category: "Aerodynamics", hasPhoto: true, gender: "m"},

  // --- Brakes ---
  { name: "Mihir Avirneni", role: "Brakes Lead", isLeader: true, category: "Brakes", hasPhoto: true, gender: "m"},
  { name: "Amritha Rajeev", role: "Team", isLeader: false, category: "Brakes", hasPhoto: true, gender: "f"},
  { name: "Safa Muhammed Umer", role: "Team", isLeader: false, category: "Brakes", hasPhoto: true, gender: "f"},
  { name: "Aboubakr Mohammad", role: "Team", isLeader: false, category: "Brakes", hasPhoto: true, gender: "m"},

  // --- Drivers (Vehicle Dynamics Drivers) ---
  { name: "Said Tayara", role: "Test Driver", isLeader: true, category: "Drivers", hasPhoto: true, gender: "m"},
  { name: "Anas Saleh", role: "Test Driver", isLeader: false, category: "Drivers", hasPhoto: true, gender: "m"},
  { name: "Hassan Eraky", role: "Test Driver", isLeader: false, category: "Drivers", hasPhoto: true, gender: "m"},
  { name: "Saurav Gupte", role: "Test Driver", isLeader: false, category: "Drivers", hasPhoto: true, gender: "m"},

  // --- Public Relations ---
  { name: "Syeda Suha Nawaz", role: "Head of Public Relations", isLeader: true, category: "Public Relations", hasPhoto: false, gender: "f"},
  { name: "Aisha Abu Sa'ad", role: "Assistant Head of Public Relations", isLeader: false, category: "Public Relations", hasPhoto: false, gender: "f"},
  { name: "Sidratul Sara", role: "Team", isLeader: false, category: "Public Relations", hasPhoto: true, gender: "f"},
  { name: "Mazin Zakki", role: "Team", isLeader: false, category: "Public Relations", hasPhoto: false, gender: "m"},
  { name: "Muhammad Adnan", role: "Team", isLeader: false, category: "Public Relations", hasPhoto: false, gender: "m"},
  { name: "Sameer Ahmed", role: "Team", isLeader: false, category: "Public Relations", hasPhoto: false, gender: "m"},

  // --- Internal Relations ---
  { name: "Brahmishtha Bhattacharjee", role: "Head of Internal Relations", isLeader: true, category: "Internal Relations", hasPhoto: true, gender: "f"},
  { name: "Sanaaz Aju Anoob", role: "Team", isLeader: false, category: "Internal Relations", hasPhoto: true, gender: "f"},
  { name: "Amira", role: "Team", isLeader: false, category: "Internal Relations", hasPhoto: true, gender: "f"},
  { name: "Hassan Eraky", role: "Team", isLeader: false, category: "Internal Relations", hasPhoto: true, gender: "m"},
  { name: "Syed Musab", role: "Team", isLeader: false, category: "Internal Relations", hasPhoto: true, gender: "m"},
  { name: "Pavan Lokesh", role: "Team", isLeader: false, category: "Internal Relations", hasPhoto: true, gender: "m"},

  // --- Operations (Deputy Execs & Treasury) ---
  // Treasury
  { name: "Mirra Swaminathan", role: "Head of Treasury", isLeader: true, category: "Operations", hasPhoto: true, gender: "f"},
  { name: "Toleen", role: "Team", isLeader: false, category: "Operations", hasPhoto: false, gender: "f"},
  // Deputy Executive Assistants
  { name: "Adrish Hussein Danka", role: "Engineering", isLeader: false, category: "Operations", hasPhoto: true, gender: "m"},
  { name: "Navaal Ghazanfar", role: "Commerce", isLeader: false, category: "Operations", hasPhoto: true, gender: "f"},

  // --- Supply Chain ---
  { name: "Pranav Rajesh", role: "Head of Supply Chain", isLeader: true, category: "Supply Chain", hasPhoto: true, gender: "m"},
  { name: "Aryan Agrawal", role: "Team", isLeader: false, category: "Supply Chain", hasPhoto: true, gender: "m"},
  { name: "Abdullah Ashar", role: "Team", isLeader: false, category: "Supply Chain", hasPhoto: true, gender: "m"},
  { name: "Noel Daniel", role: "Team", isLeader: false, category: "Supply Chain", hasPhoto: true, gender: "m"},

  // --- Web Development ---
  { name: "Sidratul Sara", role: "Head of Web Dev", isLeader: true, category: "Web Development", hasPhoto: true, gender: "f"},
  { name: "Muhammed Adnan", role: "Assistant Head", isLeader: false, category: "Web Development", hasPhoto: false, gender: "m"},
  { name: "Ghazal Ghazi", role: "Team", isLeader: false, category: "Web Development", hasPhoto: true, gender: "f"},
  { name: "Yusuf Sabuwala", role: "Team", isLeader: false, category: "Web Development", hasPhoto: false, gender: "m"},
  { name: "Hashir Hameed", role: "Team", isLeader: false, category: "Web Development", hasPhoto: true, gender: "m"},
  { name: "Adam Serhan", role: "Team", isLeader: false, category: "Web Development", hasPhoto: true, gender: "m"},
  { name: "Yasmeen Khalaf", role: "Team", isLeader: false, category: "Web Development", hasPhoto: false, gender: "f"},

  // --- Media & Marketing ---
  { name: "Hazin Zahid", role: "Head of Media & Marketing", isLeader: true, category: "Media & Marketing", hasPhoto: true, gender: "m"},
  { name: "Mazin Rizvi", role: "Advisor", isLeader: false, category: "Media & Marketing", hasPhoto: true, gender: "m"},
  { name: "Samriddhi", role: "Team", isLeader: false, category: "Media & Marketing", hasPhoto: false, gender: "f"},
  { name: "Abdulkadar Awad Muhammad Aslam", role: "Team", isLeader: false, category: "Media & Marketing", hasPhoto: true, gender: "m"},
  { name: "Eyad Wafa", role: "Team", isLeader: false, category: "Media & Marketing", hasPhoto: true, gender: "m"},
  { name: "Ahadali Suchedina", role: "Team", isLeader: false, category: "Media & Marketing", hasPhoto: true, gender: "m"},
  { name: "Sarah D'Silva", role: "Team", isLeader: false, category: "Media & Marketing", hasPhoto: true, gender: "f"},
  { name: "Edliyn Risshona", role: "Team", isLeader: false, category: "Media & Marketing", hasPhoto: true, gender: "f" }
];