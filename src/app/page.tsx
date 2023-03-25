import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Hero from"@/app/components/widgets/Hero"
import CoreTracks from './components/widgets/CoreTracks'
import SpecializedTracks from './components/widgets/SpecializedTracks'
import ProgramOutcome from './components/widgets/ProgramOutcome'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<main>
    <Hero/>

    {/* // Core Tracks section3 */}
    <CoreTracks/>
    {/* Specialized Tracks */}
    <SpecializedTracks/>
    {/* Outcome Section */}
    <ProgramOutcome/>
    </main>
  )
}
