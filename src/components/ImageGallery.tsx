import { useState, useCallback, memo } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { OptimizedImage } from "./OptimizedImage";

interface ImageGalleryProps {
  images: string[];
  title: string;
  video?: string;
}

// Memoized thumbnail component to prevent unnecessary re-renders
const GalleryThumbnail = memo(({ 
  image, 
  idx, 
  title, 
  onClick,
  priority 
}: { 
  image: string; 
  idx: number; 
  title: string; 
  onClick: () => void;
  priority: boolean;
}) => (
  <div
    className="relative aspect-video overflow-hidden rounded-lg group cursor-pointer"
    onClick={onClick}
  >
    <OptimizedImage
      src={image}
      alt={`${title} ${idx + 1}`}
      className="w-full h-full transition-smooth group-hover:scale-110"
      priority={priority}
    />
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-smooth flex items-center justify-center pointer-events-none">
      <span className="text-white opacity-0 group-hover:opacity-100 transition-smooth text-sm font-medium drop-shadow-md">
        Ver imagen
      </span>
    </div>
  </div>
));

GalleryThumbnail.displayName = "GalleryThumbnail";

export const ImageGallery = ({ images, title, video }: ImageGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handlePrevious = useCallback(() => {
    setSelectedImageIndex((prev) => 
      prev === null ? null : prev === 0 ? images.length - 1 : prev - 1
    );
  }, [images.length]);

  const handleNext = useCallback(() => {
    setSelectedImageIndex((prev) => 
      prev === null ? null : prev === images.length - 1 ? 0 : prev + 1
    );
  }, [images.length]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") setSelectedImageIndex(null);
  }, [handlePrevious, handleNext]);

  const handleClose = useCallback(() => setSelectedImageIndex(null), []);

  return (
    <>
      {video && (
        <div className="mb-6">
          <video
            controls
            preload="metadata"
            playsInline
            className="w-full rounded-lg shadow-md aspect-video bg-black"
            poster={images[0]}
          >
            <source src={video} type="video/mp4" />
            Tu navegador no soporta video HTML5.
          </video>
          <p className="text-sm text-muted-foreground mt-2 text-center">Video de operación</p>
        </div>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, idx) => (
          <GalleryThumbnail
            key={idx}
            image={image}
            idx={idx}
            title={title}
            onClick={() => setSelectedImageIndex(idx)}
            priority={idx < 4}
          />
        ))}
      </div>

      <Dialog open={selectedImageIndex !== null} onOpenChange={handleClose}>
        <DialogContent
          className="max-w-[95vw] max-h-[95vh] p-0 border-0 bg-black/95"
          onKeyDown={handleKeyDown}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 text-white hover:bg-white/10"
              onClick={handleClose}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 z-50 bg-black/50 text-white px-3 py-1 rounded-md text-sm">
              {selectedImageIndex !== null && `${selectedImageIndex + 1} / ${images.length}`}
            </div>

            {/* Previous Button */}
            {images.length > 1 && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 z-50 text-white hover:bg-white/10 h-12 w-12"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
            )}

            {/* Image */}
            {selectedImageIndex !== null && (
              <div className="w-full h-[95vh] flex items-center justify-center p-12">
                <img
                  src={images[selectedImageIndex]}
                  alt={`${title} ${selectedImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain animate-scale-in"
                />
              </div>
            )}

            {/* Next Button */}
            {images.length > 1 && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 z-50 text-white hover:bg-white/10 h-12 w-12"
                onClick={handleNext}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
