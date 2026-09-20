# Linea Moltved Portfolio

React and Tailwind CSS reconstruction of the Wix portfolio at [lineamoltved.wixsite.com/portfolio](https://lineamoltved.wixsite.com/portfolio).

## Structure

- `app/` contains the application entry point and global styles.
- `components/` contains one component per page section plus the reusable `ProjectCard`.
- `data/projects.json` is the content source for the project grid.
- `public/img/` is for general images.
- `public/projects/` is for project images referenced by the JSON data.

## Run locally

```bash
npm install
npm run dev
```

The initial project images are placeholders. Add matching files in `public/projects/` when the final visuals are available.
