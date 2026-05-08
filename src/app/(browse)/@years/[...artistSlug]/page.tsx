import YearsColumn from '@/components/YearsColumn';
import { DEFAULT_ARTIST_SLUG } from '@/lib/defaultArtist';

export default async function YearsArtistSlot({ params }) {
  const artistSlug = (await params).artistSlug ?? DEFAULT_ARTIST_SLUG;

  return <YearsColumn artistSlug={artistSlug} />;
}
