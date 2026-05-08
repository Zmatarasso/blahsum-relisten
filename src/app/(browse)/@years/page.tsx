import YearsColumn from '@/components/YearsColumn';
import { DEFAULT_ARTIST_SLUG } from '@/lib/defaultArtist';
import { isMobile } from '@/lib/isMobile';

export default async function YearsArtistSlot() {
  if (await isMobile()) return null;

  return <YearsColumn artistSlug={DEFAULT_ARTIST_SLUG} />;
}
