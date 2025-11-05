# How to Add Offline Videos to Your Portfolio

There are several ways to add your actual video files to the portfolio:

## Option 1: Using Video Files Directly (Recommended for smaller videos)

1. **Add video files to your project:**
   - Place video files in `public/videos/` folder (create it if it doesn't exist)
   - Example: `public/videos/project1.mp4`

2. **Update the Projects component:**
   ```typescript
   const projects = [
     {
       id: 1,
       title: "Your Project Title",
       description: "Project description",
       videoSrc: "/videos/project1.mp4",  // Add this instead of thumbnail
       thumbnail: "path/to/thumbnail.jpg", // Keep thumbnail for preview
       duration: "8:22",
       client: "Client Name",
       tags: ["Your Tag"],
       date: "8/1/2025"
     },
   ];
   ```

3. **Modify the card to play videos:**
   - Replace the image with a video element
   - Or create a modal/lightbox that plays the video when clicked

## Option 2: Host Videos Externally (Recommended for larger videos)

1. **Upload videos to:**
   - YouTube (can be unlisted)
   - Vimeo
   - Cloud storage (Google Drive, Dropbox with public links)

2. **Embed them:**
   - For YouTube: Use YouTube embed URLs
   - For Vimeo: Use Vimeo embed URLs
   - For cloud storage: Use direct video URLs

## Option 3: Video Element in Cards

Replace the image in the project card with an HTML5 video element:

```typescript
<video 
  src={project.videoSrc}
  className="w-full h-48 object-cover"
  controls={false}
  muted
  loop
  onMouseEnter={(e) => e.currentTarget.play()}
  onMouseLeave={(e) => {
    e.currentTarget.pause();
    e.currentTarget.currentTime = 0;
  }}
/>
```

## Current Setup

Right now, your portfolio uses placeholder images. To replace them with your actual videos:

1. Tell me if you want to use local video files or embed from YouTube/Vimeo
2. I can add a video player modal that opens when clicking on project cards
3. Or I can add inline video players that autoplay on hover

**What would you prefer?**
