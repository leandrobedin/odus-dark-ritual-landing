import { useState } from 'react';
import { Play } from 'lucide-react';

interface VSLEmbedProps {
  videoId?: string;
  posterImage?: string;
  title?: string;
}

const VSLEmbed = ({ 
  videoId = "dQw4w9WgXcQ", // Placeholder video ID
  posterImage = "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=450&fit=crop&crop=center",
  title = "Ritual Odus VIP - Vídeo Revelação"
}: VSLEmbedProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handlePlayClick = () => {
    console.log('[OdusLanding] VSL play clicked');
    setIsLoaded(true);
  };

  const handleIframeLoad = () => {
    console.log('[OdusLanding] VSL iframe loaded successfully');
  };

  const handleIframeError = () => {
    console.log('[OdusLanding] VSL iframe load error');
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className="w-full aspect-video bg-card border border-border rounded-lg flex items-center justify-center">
        <div className="text-center">
          <Play className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">Vídeo temporariamente indisponível</p>
          <p className="text-sm text-muted-foreground mt-2">Recarregue a página para tentar novamente</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full aspect-video relative rounded-lg overflow-hidden shadow-lg glow-effect">
      {!isLoaded ? (
        <div 
          className="w-full h-full bg-cover bg-center relative cursor-pointer group"
          style={{ backgroundImage: `url(${posterImage})` }}
          onClick={handlePlayClick}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="bg-primary bg-opacity-90 rounded-full p-6 group-hover:scale-110 transition-transform duration-300 glow-effect">
              <Play className="w-12 h-12 text-primary-foreground fill-current" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-playfair text-lg font-semibold drop-shadow-lg">
              {title}
            </h3>
            <p className="text-white text-sm opacity-90 drop-shadow">
              Clique para assistir e descobrir o segredo
            </p>
          </div>
        </div>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          className="w-full h-full"
        />
      )}
    </div>
  );
};

export default VSLEmbed;