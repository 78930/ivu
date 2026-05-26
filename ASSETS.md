Asset optimization notes
------------------------

Recommended commands to optimize images and video before adding to the repository.

Image optimization (lossy, good quality):

1) Install dependencies (run in `frontend`):

```bash
npm install
```

2) Run imagemin to compress images in `public/assets`:

```bash
npm run optimize:images
```

The script writes optimized images to `public/assets/optimized` — review and replace originals as needed.

Video optimization (ffmpeg):

Compress an MP4 for web delivery (faststart + reasonable quality):

```bash
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset medium -movflags +faststart -acodec aac -b:a 128k output.mp4
```

Tips:
- Aim for < 2MB for hero background videos where possible; shorter loops and lower resolution help.
- Place large media in `frontend/public/` (e.g. `frontend/public/bg.mp4`) so Vite serves them statically and they aren't bundled.
- Use `loading="lazy"` and `decoding="async"` on `<img>` elements (done in CaseStudiesGrid).
