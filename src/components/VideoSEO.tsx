import React from 'react';

interface VideoSEOProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl: string;
  duration?: string;
}

const VideoSEO: React.FC<VideoSEOProps> = ({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  contentUrl,
  duration,
}) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": name,
    "description": description,
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": uploadDate,
    "contentUrl": contentUrl,
    ...(duration && { "duration": duration }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default VideoSEO;
