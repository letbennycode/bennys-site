interface MusicEmbedProps {
  platform: 'soundcloud' | 'spotify' | 'youtube'
  embedUrl: string
  title: string
  description?: string
}

export default function MusicEmbed({ platform, embedUrl, title, description }: MusicEmbedProps) {
  const getEmbedCode = () => {
    switch (platform) {
      case 'soundcloud':
        return (
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={embedUrl}
            className="w-full"
          />
        )
      case 'spotify':
        return (
          <iframe
            src={embedUrl}
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="w-full"
          />
        )
      case 'youtube':
        return (
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={embedUrl}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="border border-black p-6">
      <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-black mb-4 leading-relaxed">
          {description}
        </p>
      )}
      <div className="mt-4">
        {getEmbedCode()}
      </div>
    </div>
  )
}
