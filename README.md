# Student Developer Portfolio

A single-page portfolio built with plain HTML, CSS and JavaScript. No frameworks, no build step.

## Run it
Open `index.html` in your browser. To publish, push the folder to GitHub and turn on GitHub Pages.

## File structure
- `index.html`: all content (text, projects, skills, links)
- `style.css`: all styling. Colors and spacing live in `:root` at the top.
- `script.js`: mobile menu and scroll fade-in
- `assets/images/profile/`: empty; for a profile photo if you add one later
- `assets/images/projects/`: project screenshots
- `assets/icons/`: icons or certificates you add later

## Where to edit (in `index.html`)
Search for `EDIT:` comments to find each editable block.

| What | Where |
|---|---|
| Name | Logo, Hero heading, `<title>`, Footer |
| Bio | Hero paragraph and About Me section |
| Projects | Projects section: use the commented `TEMPLATE` card |
| Skills | Skills section: add or remove `<li>` items; copy a `skill-group` for a new category |
| Education | Education section |
| Activities | Activities section: copy one `<li class="activity">` |
| Contact | Contact section and the social icons in Hero |
| Images | Project screenshots go in `assets/images/projects/` (see Add a project) |

## Add a project
The Projects section currently shows three "In Progress" cards with no links. When a project is ready:
1. Save a 16:9 screenshot in `assets/images/projects/`.
2. In `index.html`, copy the commented `TEMPLATE` card above the cards and remove the comment markers.
3. Fill in the image path, alt text, title, description, tags, both links and both `aria-label`s (screen readers read these).
4. Delete the GitHub or Live Demo link if the project does not have one, then delete one "In Progress" card.

## Change the theme
`style.css` starts with two blocks of color variables: `:root` (dark, the default) and `:root[data-theme="light"]`. Edit both. The Dark/Light switch saves the visitor's choice in `localStorage`. On a first visit the site follows the visitor's system setting.

Hero visual: the MK monogram is an inline SVG in `index.html`. Change the letters in its `<text>` element, or swap the whole `hero-visual` block for a photo later.
