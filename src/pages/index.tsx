import LinkWrapper from 'components/LinkWrapper'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

const Map = dynamic(() => import('components/Map'), { ssr: false })
const place = {
  id: '1',
  name: 'Petrópolis',
  slug: 'petropolis',
  location: {
    latitude: 51.505,
    longitude: -0.09
  }
}

const placeTwo = {
  id: '1',
  name: 'Reykjavik',
  slug: 'reykjavik',
  location: {
    latitude: 51.505,
    longitude: -0.09
  }
}

export default function Home() {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={[place, placeTwo]} />
    </>
  )
}
