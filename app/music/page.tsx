import MusicEmbed from '@/components/MusicEmbed'

interface MusicItem {
  id: string
  title: string
  description?: string
  platform: 'soundcloud' | 'spotify' | 'youtube'
  embedUrl: string
}

const musicItems: MusicItem[] = [
  // Add your music items here
  // Example:
  // {
  //   id: '1',
  //   title: 'Track Title',
  //   description: 'Description of the track',
  //   platform: 'soundcloud',
  //   embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/...',
  // },
]

export const metadata = {
  title: 'Music',
  description: 'Explore music productions and creative works.',
  openGraph: {
    title: 'Music | Benny\'s Site',
    description: 'Explore music productions and creative works.',
  },
}

export default function MusicPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-12">
        Music
      </h1>

      {musicItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-black text-lg">
            Music content coming soon. Check back later!
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {musicItems.map((item) => (
            <MusicEmbed
              key={item.id}
              platform={item.platform}
              embedUrl={item.embedUrl}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      )}
    </div>
  )
}
