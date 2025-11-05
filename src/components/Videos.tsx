import React from "react";

const Videos = () => {
  const shortVideos = [1, 2, 3, 4, 5,6];
  const longVideo = "longform.mp4";

  return (
    <section
      id="videos"
      className="py-20 bg-gradient-to-b from-[#0a0f1c] via-[#0e1625] to-[#0a0f1c] text-gray-100"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10 text-cyan-400">
         Short-Form Edits
        </h2>

        {/* Short-form videos grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {shortVideos.map((num) => (
            <div
              key={num}
              className="overflow-hidden rounded-xl shadow-lg bg-black aspect-[9/16] hover:scale-105 transition-transform duration-300"
            >
              <video
                src={`/videos/video${num}.mp4`}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Long-form video */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-cyan-300">
            Long-Form Video
          </h3>
          <div className="overflow-hidden rounded-2xl shadow-xl bg-black aspect-video hover:scale-[1.02] transition-transform duration-300">
            <video
              src={`/videos/${longVideo}`}
              controls
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
