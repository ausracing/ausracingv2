import {createClient} from '@sanity/client'
import fs from 'fs'
import path from 'path'

const client = createClient({
  projectId: 'uhkqli5p',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

interface NewsletterDef {
  slug: string
  title: string
  shortDescription: string
  date: string
  folder: string
  pages: number
}

const NEWSLETTERS: NewsletterDef[] = [
  { slug: 'Jan-News', title: 'January News', shortDescription: 'January 2024 newsletter — introducing AUS Racing\'s first newsletter covering our initial progress and team formation.', date: '2024-01-01', folder: '2024/January-2024', pages: 9 },
  { slug: 'Jun-News', title: 'June News', shortDescription: 'In our first installment, you can read about our choice of wheels and tires or learn about how a suspension and steering system are designed!', date: '2024-06-01', folder: '2024/June-2024', pages: 11 },
  { slug: 'Jul-News', title: 'July News', shortDescription: 'In our second installment, you can read about our choice of wheels and tires or learn about battery design or how suspension geometries are tuned.', date: '2024-07-01', folder: '2024/July-2024', pages: 10 },
  { slug: 'Aug-News', title: 'August News', shortDescription: 'In our August 2024 edition, we dive deeper into the dynamics of our car, and introduce a new and rather unexpected dimension to it- environmental conscience.', date: '2024-08-01', folder: '2024/August-2024', pages: 9 },
  { slug: 'Sep-News', title: 'September News', shortDescription: 'In the September 2024 edition, AUS Racing is shaking things up with cell management, high-stakes meetings, and a game-changing new team.', date: '2024-09-01', folder: '2024/September-2024', pages: 11 },
  { slug: 'Oct-News', title: 'October News', shortDescription: 'Our October roundup is here! Take a closer look at our engineering insights, like stress analysis on control arms and optimized braking.', date: '2024-10-01', folder: '2024/October-2024', pages: 9 },
  { slug: 'Nov-News', title: 'November News', shortDescription: 'November newsletter out now! Check out our DIY testing rigs, how we plan for longevity, and more.', date: '2024-11-01', folder: '2024/November-2024', pages: 9 },
  { slug: 'Feb-News', title: 'February News', shortDescription: 'February 2025 newsletter — catch up on the latest developments from AUS Racing.', date: '2025-02-01', folder: '2025/February-2025', pages: 9 },
  { slug: 'Mar-News', title: 'March News', shortDescription: 'March 2025 newsletter — updates on our ongoing engineering efforts and team progress.', date: '2025-03-01', folder: '2025/March-2025', pages: 10 },
  { slug: 'Apr-News', title: 'April News', shortDescription: 'April 2025 newsletter — spring update from the AUS Racing team.', date: '2025-04-01', folder: '2025/April-2025', pages: 9 },
  { slug: 'May-News', title: 'May News', shortDescription: 'May 2025 newsletter — latest news and developments from AUS Racing.', date: '2025-05-01', folder: '2025/May-2025', pages: 7 },
]

async function uploadImage(filePath: string): Promise<string | null> {
  try {
    const absPath = path.resolve(__dirname, '..', 'public', 'newsletter', filePath)
    if (!fs.existsSync(absPath)) {
      console.error(`  ✗ File not found: ${filePath}`)
      return null
    }
    const asset = await client.assets.upload('image', fs.createReadStream(absPath), {
      filename: path.basename(filePath),
    })
    return asset._id
  } catch (err) {
    console.error(`  ✗ Upload failed: ${filePath}`, err)
    return null
  }
}

function pad(n: number): string {
  return String(n).padStart(2, '0')
}

async function main() {
  if (!process.env.SANITY_API_TOKEN) {
    console.error('❌ SANITY_API_TOKEN not set')
    process.exit(1)
  }

  for (const nl of NEWSLETTERS) {
    console.log(`\n--- ${nl.title} ---`)

    // Upload cover image (page-01)
    const coverPath = `${nl.folder}/${path.basename(nl.folder)}-page-01.webp`
    const coverAssetId = await uploadImage(coverPath)
    if (!coverAssetId) {
      console.error(`  ✗ Skipping ${nl.slug} — cover image failed`)
      continue
    }
    console.log(`  ✓ Cover: ${coverAssetId}`)

    // Upload each page
    const sections: any[] = []
    for (let i = 1; i <= nl.pages; i++) {
      const pagePath = `${nl.folder}/${path.basename(nl.folder)}-page-${pad(i)}.webp`
      const assetId = await uploadImage(pagePath)
      if (!assetId) {
        console.warn(`  ⚠ Page ${i} upload failed, skipping`)
        continue
      }
      sections.push({
        _key: `page${i}`,
        _type: 'page',
        heading: '',
        text: '',
        image: {
          _type: 'image',
          asset: { _type: 'reference', _ref: assetId },
        },
      })
      console.log(`  ✓ Page ${i}: ${assetId}`)
    }

    if (sections.length === 0) {
      console.error(`  ✗ No sections uploaded for ${nl.slug}`)
      continue
    }

    // Create the newsletter article document
    try {
      const doc = await client.create({
        _type: 'newsletterArticle',
        title: nl.title,
        slug: { _type: 'slug', current: nl.slug },
        shortDescription: nl.shortDescription,
        date: nl.date,
        coverImage: {
          _type: 'image',
          asset: { _type: 'reference', _ref: coverAssetId },
        },
        sections,
      })
      console.log(`  ✅ Created: ${nl.slug} (${doc._id})`)
    } catch (err) {
      console.error(`  ✗ Failed to create document: ${nl.slug}`, err)
    }
  }

  console.log('\n✅ Newsletter migration complete!')
}

main().catch(console.error)
