# Matthew Euliano Portfolio

A build-free, data-driven static portfolio for GitHub Pages.

## Why this structure

The old site was a single large Bootstrap template, which made routine updates risky and slow. This version keeps the deployment model simple while separating content from presentation:

- `index.html` contains the page structure.
- `assets/site.css` contains all styling.
- `assets/site.js` loads the data and renders repeated UI.
- `data/profile.json` contains headline, bio, contact text, and links.
- `data/projects.json` contains project cards, filters, images, tags, and links.
- `data/skills.json` contains skill groups.

GitHub Pages can serve this directly. No build step is required.

## Updating content

### Profile

Edit `data/profile.json` for:

- headline and summary
- about text
- email, GitHub, LinkedIn, and resume links
- location and contact text

To add a resume button, put the PDF somewhere like `docs/resume.pdf`, then add this object to the `links` array:

```json
{
  "label": "Resume",
  "url": "docs/resume.pdf",
  "external": false
}
```

To add an email button, add this object to the `links` array:

```json
{
  "label": "Email",
  "url": "mailto:your.email@example.com",
  "external": false
}
```

### Projects

Edit `data/projects.json`. Each project is a self-contained object with summary text, tags, media, highlights, and useful links. The page builds the card and detail modal automatically.

```json
{
  "title": "Surgical Robotics Digital Twin",
  "year": "Recent",
  "status": "Featured",
  "summary": "One tight paragraph about the work and impact.",
  "featured": true,
  "categories": ["Robotics", "Visualization"],
  "tags": ["Unity", "C#", "DDS"],
  "media": [
    {
      "type": "image",
      "src": "img/example.jpg",
      "alt": "Useful description of the image",
      "caption": "Short caption shown in the project details modal."
    },
    {
      "type": "video",
      "src": "img/projects/demo.mp4",
      "poster": "img/projects/demo-poster.jpg",
      "alt": "Demo video",
      "caption": "Local video clip."
    },
    {
      "type": "youtube",
      "src": "https://www.youtube.com/embed/example",
      "alt": "YouTube demo",
      "caption": "Embedded demo video."
    }
  ],
  "highlights": [
    "Specific implementation detail or result.",
    "Another useful note for recruiters or collaborators."
  ],
  "resources": [
    {
      "label": "GitHub",
      "type": "github",
      "url": "https://github.com/example/project",
      "external": true
    }
  ]
}
```

The first item in `media` becomes the project card preview. The rest appear in the project details modal. Resource `type` controls the icon; common values are `github`, `report`, `paper`, `presentation`, `source`, `demo`, `video`, `resume`, and `document`.

Use categories to keep the data organized. The current page shows projects in the order they appear in `data/projects.json`, so put the strongest/recent work first.

- `Robotics`
- `Visualization / XR`
- `Simulation`
- `AI / CV`
- `Hardware`
- `Personal Project`

### Images

Keep images and videos in `img/` or a subfolder of `img/`. For portfolio cards, prefer compressed JPG/WebP/PNG assets under roughly 500 KB when possible. Several legacy GIFs and videos are still large; replacing them with smaller poster images will make the page noticeably faster.

## Local preview

Because the page loads JSON files with `fetch()`, preview it through a small local server instead of opening `index.html` directly:

```powershell
python -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

Opening `index.html` from File Explorer uses a `file://` URL. Most browsers restrict JavaScript from loading nearby JSON files from `file://`, so the page shell may appear without the project/profile data. The local server gives the same files an HTTP origin, which is how GitHub Pages will serve them.

## GitHub Pages deployment

For a user or organization GitHub Pages site:

1. Push these files to the repository.
2. In GitHub, open `Settings` -> `Pages`.
3. Set the source to deploy from the main branch root.
4. Visit the published `github.io` URL.

For a project site, GitHub Pages may serve from a subpath. This site uses relative paths, so it should still work without changing asset URLs.
