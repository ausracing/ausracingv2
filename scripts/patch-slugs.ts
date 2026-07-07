import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'uhkqli5p',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

const slugMap: Record<string, string> = {
  'Jan-News': 'January-2024',
  'Jun-News': 'June-2024',
  'Jul-News': 'July-2024',
  'Aug-News': 'August-2024',
  'Sep-News': 'September-2024',
  'Oct-News': 'October-2024',
  'Nov-News': 'November-2024',
  'Feb-News': 'February-2025',
  'Mar-News': 'March-2025',
  'Apr-News': 'April-2025',
  'May-News': 'May-2025',
}

async function main() {
  if (!process.env.SANITY_API_TOKEN) {
    console.error('SANITY_API_TOKEN not set')
    process.exit(1)
  }

  const docs = await client.fetch('*[_type == "newsletterArticle"] { _id, title, "oldSlug": slug.current }')
  
  for (const doc of docs) {
    const newSlug = slugMap[doc.oldSlug]
    if (!newSlug) {
      console.log(`  ⚠ No mapping for "${doc.oldSlug}" (${doc.title})`)
      continue
    }
    await client.patch(doc._id).set({slug: {_type: 'slug', current: newSlug}}).commit()
    console.log(`  ✓ ${doc.oldSlug} → ${newSlug}`)
  }

  console.log('\nDone!')
}

main().catch(console.error)
