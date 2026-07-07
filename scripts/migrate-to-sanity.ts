/**
 * Migration script: Import team members + newsletter articles into Sanity
 * 
 * Run: npx tsx scripts/migrate-to-sanity.ts
 */
import {createClient} from '@sanity/client'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({path: path.resolve(__dirname, '../.env.local')})

const client = createClient({
  projectId: 'uhkqli5p',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

// ─── TEAM MEMBERS ───

const TEAM_MEMBERS = [
  { name: "Saad Ibrahim", role: "Team Principal", isLeader: true, category: "Executive Board", gender: "m"},
  { name: "Saurav Gupte", role: "Vice Principal/Head of Engineering", isLeader: false, category: "Executive Board", gender: "m"},
  { name: "Shwetambari Abhirajan", role: "External Coordinator", isLeader: false, category: "Executive Board", gender: "f"},
  { name: "Mirra Swaminathan", role: "Head of Treasury", isLeader: false, category: "Executive Board", gender: "f"},
  { name: "Sameeksha Ramesh", role: "Executive Assistant", isLeader: false, category: "Executive Board", gender: "f"},
  { name: "Syed Muneeb Ali", role: "Electrical Lead", isLeader: true, category: "Electrical", gender: "m"},
  { name: "Mohammed Baraa Adnan", role: "Advisor", isLeader: false, category: "Electrical", gender: "m"},
  { name: "Mark Farag", role: "Advisor", isLeader: false, category: "Electrical", gender: "m"},
  { name: "Ehab Taha Galal", role: "Team", isLeader: false, category: "Electrical", gender: "m"},
  { name: "Hammad Ahmed Adil", role: "Team", isLeader: false, category: "Electrical", gender: "m"},
  { name: "Mohammed Shakhawat Hossain", role: "Team", isLeader: false, category: "Electrical", gender: "m"},
  { name: "Abdallah Yassin", role: "Team", isLeader: false, category: "Electrical", gender: "m"},
  { name: "Abdullah Alnojoum", role: "Team", isLeader: false, category: "Electrical", gender: "m"},
  { name: "Aria Habibagahi", role: "Team", isLeader: false, category: "Electrical", gender: "m"},
  { name: "Mehdi Kermani", role: "Team", isLeader: false, category: "Electrical", gender: "m"},
  { name: "Turki Khalid Algarawi", role: "Drivetrain Lead", isLeader: true, category: "Powertrain", gender: "m"},
  { name: "Farasha Imran", role: "Team", isLeader: false, category: "Powertrain", gender: "f"},
  { name: "Mohammed Abdulrahman", role: "Team", isLeader: false, category: "Powertrain", gender: "m"},
  { name: "Nafiz Imteaz", role: "Cooling Lead", isLeader: true, category: "Powertrain", gender: "m"},
  { name: "Mohammed Al Hinai", role: "Team", isLeader: false, category: "Powertrain", gender: "m"},
  { name: "Devansh Ajay Sapru", role: "Chassis Lead", isLeader: true, category: "Chassis", gender: "m"},
  { name: "Syed Ibrahim Abidi", role: "Team", isLeader: false, category: "Chassis", gender: "m"},
  { name: "Abbas Murtaza", role: "Team", isLeader: false, category: "Chassis", gender: "m"},
  { name: "Ethann Thomas Danthi", role: "Team", isLeader: false, category: "Chassis", gender: "m"},
  { name: "Hazin Zahid", role: "Team", isLeader: false, category: "Chassis", gender: "m"},
  { name: "Arjun Bomma", role: "Team", isLeader: false, category: "Chassis", gender: "m"},
  { name: "Zouheir Al Halabi", role: "Aerodynamics Lead", isLeader: true, category: "Aerodynamics", gender: "m"},
  { name: "Ali Diab", role: "Team", isLeader: false, category: "Aerodynamics", gender: "m"},
  { name: "Rakan Amar", role: "Team", isLeader: false, category: "Aerodynamics", gender: "m"},
  { name: "Mihir Avirneni", role: "Brakes Lead", isLeader: true, category: "Brakes", gender: "m"},
  { name: "Amritha Rajeev", role: "Team", isLeader: false, category: "Brakes", gender: "f"},
  { name: "Safa Muhammed Umer", role: "Team", isLeader: false, category: "Brakes", gender: "f"},
  { name: "Aboubakr Mohammad", role: "Team", isLeader: false, category: "Brakes", gender: "m"},
  { name: "Said Tayara", role: "Test Driver", isLeader: true, category: "Drivers", gender: "m"},
  { name: "Anas Saleh", role: "Test Driver", isLeader: false, category: "Drivers", gender: "m"},
  { name: "Hassan Eraky", role: "Test Driver", isLeader: false, category: "Drivers", gender: "m"},
  { name: "Syeda Suha Nawaz", role: "Head of Public Relations", isLeader: true, category: "Public Relations", gender: "f"},
  { name: "Aisha Abu Sa'ad", role: "Assistant Head of Public Relations", isLeader: false, category: "Public Relations", gender: "f"},
  { name: "Sidratul Sara", role: "Team", isLeader: false, category: "Public Relations", gender: "f"},
  { name: "Mazin Zakki", role: "Team", isLeader: false, category: "Public Relations", gender: "m"},
  { name: "Muhammad Adnan", role: "Team", isLeader: false, category: "Public Relations", gender: "m"},
  { name: "Sameer Ahmed", role: "Team", isLeader: false, category: "Public Relations", gender: "m"},
  { name: "Brahmishtha Bhattacharjee", role: "Head of Internal Relations", isLeader: true, category: "Internal Relations", gender: "f"},
  { name: "Sanaaz Aju Anoob", role: "Team", isLeader: false, category: "Internal Relations", gender: "f"},
  { name: "Amira", role: "Team", isLeader: false, category: "Internal Relations", gender: "f"},
  { name: "Syed Musab", role: "Team", isLeader: false, category: "Internal Relations", gender: "m"},
  { name: "Pavan Lokesh", role: "Team", isLeader: false, category: "Internal Relations", gender: "m"},
  { name: "Toleen", role: "Team", isLeader: false, category: "Operations", gender: "f"},
  { name: "Adrish Hussein Danka", role: "Engineering", isLeader: false, category: "Operations", gender: "m"},
  { name: "Navaal Ghazanfar", role: "Commerce", isLeader: false, category: "Operations", gender: "f"},
  { name: "Pranav Rajesh", role: "Head of Supply Chain", isLeader: true, category: "Supply Chain", gender: "m"},
  { name: "Aryan Agrawal", role: "Team", isLeader: false, category: "Supply Chain", gender: "m"},
  { name: "Abdullah Ashar", role: "Team", isLeader: false, category: "Supply Chain", gender: "m"},
  { name: "Noel Daniel", role: "Team", isLeader: false, category: "Supply Chain", gender: "m"},
  { name: "Muhammed Adnan", role: "Assistant Head", isLeader: false, category: "Web Development", gender: "m"},
  { name: "Ghazal Ghazi", role: "Team", isLeader: false, category: "Web Development", gender: "f"},
  { name: "Yusuf Sabuwala", role: "Team", isLeader: false, category: "Web Development", gender: "m"},
  { name: "Hashir Hameed", role: "Team", isLeader: false, category: "Web Development", gender: "m"},
  { name: "Adam Serhan", role: "Team", isLeader: false, category: "Web Development", gender: "m"},
  { name: "Yasmeen Khalaf", role: "Team", isLeader: false, category: "Web Development", gender: "f"},
  { name: "Hazin Zahid", role: "Head of Media & Marketing", isLeader: true, category: "Media & Marketing", gender: "m"},
  { name: "Mazin Rizvi", role: "Advisor", isLeader: false, category: "Media & Marketing", gender: "m"},
  { name: "Samriddhi", role: "Team", isLeader: false, category: "Media & Marketing", gender: "f"},
  { name: "Abdulkadar Awad Muhammad Aslam", role: "Team", isLeader: false, category: "Media & Marketing", gender: "m"},
  { name: "Eyad Wafa", role: "Team", isLeader: false, category: "Media & Marketing", gender: "m"},
  { name: "Ahadali Suchedina", role: "Team", isLeader: false, category: "Media & Marketing", gender: "m"},
  { name: "Sarah D'Silva", role: "Team", isLeader: false, category: "Media & Marketing", gender: "f"},
  { name: "Edliyn Risshona", role: "Team", isLeader: false, category: "Media & Marketing", gender: "f"},
]

async function migrateTeamMembers() {
  console.log(`Migrating ${TEAM_MEMBERS.length} team members...`)
  
  for (const member of TEAM_MEMBERS) {
    try {
      const result = await client.create({
        _type: 'teamMember',
        name: member.name,
        role: member.role,
        isLeader: member.isLeader,
        category: member.category,
        gender: member.gender,
        order: 0,
      })
      console.log(`  ✓ ${member.name} (${result._id})`)
    } catch (err) {
      console.error(`  ✗ ${member.name}:`, err)
    }
  }
  
  console.log(`\n✅ Team migration complete!`)
}

// ─── NEWSLETTER ARTICLES ───

const NEWSLETTER_ARTICLES = [
  {
    slug: "Jun-News",
    title: "June News",
    shortDescription: "In our first installment, you can read about our choice of wheels and tires or learn about how a suspension and steering system are designed!",
    date: "2024-07-01",
    imageCount: 11,
    imagePrefix: "june_news",
    folder: "June24",
  },
  {
    slug: "Jul-News",
    title: "July News",
    shortDescription: "In our second installment, you can read about our choice of wheels and tires or learn about battery design or how suspension geometries are tuned.",
    date: "2024-08-01",
    imageCount: 10,
    imagePrefix: "july_news",
    folder: "July24",
  },
  {
    slug: "Aug-News",
    title: "August News",
    shortDescription: "In our August 2024 edition, we dive deeper into the dynamics of our car, and introduce a new and rather unexpected dimension to it- environmental conscience.",
    date: "2024-09-01",
    imageCount: 9,
    imagePrefix: "aug_news",
    folder: "Aug24",
  },
  {
    slug: "Sep-News",
    title: "September News",
    shortDescription: "In the September 2024 edition, AUS Racing is shaking things up with cell management, high-stakes meetings, and a game-changing new team.",
    date: "2024-10-01",
    imageCount: 11,
    imagePrefix: "sep_news",
    folder: "Sep24",
  },
  {
    slug: "Oct-News",
    title: "October News",
    shortDescription: "Our October roundup is here! Take a closer look at our engineering insights, like stress analysis on control arms and optimized braking.",
    date: "2024-11-01",
    imageCount: 9,
    imagePrefix: "october_news",
    folder: "Oct24",
  },
  {
    slug: "Nov-News",
    title: "November News",
    shortDescription: "November newsletter out now! Check out our DIY testing rigs, how we plan for longevity, and more.",
    date: "2024-12-01",
    imageCount: 9,
    imagePrefix: "nov_news",
    folder: "Nov24",
  },
  {
    slug: "Feb-News",
    title: "February News",
    shortDescription: "February 2025 newsletter — catch up on the latest developments from AUS Racing.",
    date: "2025-02-01",
    imageCount: 9,
    imagePrefix: "feb_news",
    folder: "Feb25",
  },
  {
    slug: "Mar-News",
    title: "March News",
    shortDescription: "March 2025 newsletter — updates on our ongoing engineering efforts and team progress.",
    date: "2025-03-01",
    imageCount: 10,
    imagePrefix: "march_news",
    folder: "Mar25",
  },
  {
    slug: "Apr-News",
    title: "April News",
    shortDescription: "April 2025 newsletter — spring update from the AUS Racing team.",
    date: "2025-04-01",
    imageCount: 9,
    imagePrefix: "april_2025",
    folder: "Apr25",
  },
  {
    slug: "May-News",
    title: "May News",
    shortDescription: "May 2025 newsletter — latest news and developments from AUS Racing.",
    date: "2025-05-01",
    imageCount: 7,
    imagePrefix: "may_2025_news",
    folder: "May25",
  },
]

async function migrateNewsletter() {
  console.log(`\nMigrating ${NEWSLETTER_ARTICLES.length} newsletter articles...`)
  
  for (const article of NEWSLETTER_ARTICLES) {
    try {
      const sections = Array.from({length: article.imageCount}, (_, i) => ({
        _type: 'page',
        _key: `page${i + 1}`,
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: `image-newsletter_${article.folder}_${article.imagePrefix}-${i + 1}`,
          },
        },
      }))

      const result = await client.create({
        _type: 'newsletterArticle',
        title: article.title,
        slug: {_type: 'slug', current: article.slug},
        shortDescription: article.shortDescription,
        date: article.date,
        sections,
      })
      console.log(`  ✓ ${article.title} (${result._id})`)
    } catch (err) {
      console.error(`  ✗ ${article.title}:`, err)
    }
  }
  
  console.log(`\n✅ Newsletter migration complete!`)
}

async function main() {
  console.log('=== Sanity Migration ===\n')
  
  if (!process.env.SANITY_API_TOKEN) {
    console.error('❌ SANITY_API_TOKEN not set in .env.local')
    process.exit(1)
  }
  
  await migrateTeamMembers()
  // await migrateNewsletter()
  console.log('\n✅ Migration complete!')
}

main().catch(console.error)
