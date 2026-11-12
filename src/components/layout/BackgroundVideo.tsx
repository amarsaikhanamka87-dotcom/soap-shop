import { siteConfig } from "@/config/site";

// Full-site steppe video behind every page.
// The source clip was filmed sideways, so CSS (.bg-video) turns it upright
// and anchors it to the ground so the top of the sky is what gets cropped.
export function BackgroundVideo() {
  return (
    <div className="bg-video" aria-hidden="true">
      <video
        className="bg-video__media"
        src={siteConfig.heroVideo.src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
    </div>
  );
}
