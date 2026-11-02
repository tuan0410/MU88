# MU88 — Online Gambling Awareness Website

A Vietnamese-language informational website that encourages readers to verify information and understand the risks of online gambling.

## About the Project

MU88 presents introductory information, reading guidance, and risk-awareness content in a responsive single-page layout branded as **Bảo Tuấn — Góc nhìn & thông tin**. Visitors can explore the overview, read articles, review important cautions, and contact the project author.

The project focuses on clear typography, structured content, and comfortable reading in both light and dark modes. It does not provide gambling services, payments, user accounts, or a backend.

### Features

- Light and dark themes with a toggle in the header.
- Initial theme based on the operating system preference, unless a saved preference exists.
- Theme persistence through `localStorage`, with graceful handling when storage is unavailable.
- Responsive layouts and a collapsible navigation menu on smaller screens.
- In-page navigation to articles, information, cautions, and contact details.
- Keyboard focus indicators, a skip-to-content link, and accessible button labels.
- Mobile menu dismissal through a navigation link, an outside click, or the Escape key.
- Reduced-motion support and an automatically updated footer year.

## Table of Contents

- [Technology](#technology)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Project Structure](#project-structure)
- [Design Considerations](#design-considerations)
- [Verification](#verification)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)

## Technology

| Technology | Purpose |
| --- | --- |
| HTML5 | Page structure, article sections, and semantic navigation. |
| CSS3 | Responsive grids, theme variables, decorative artwork, and interaction states. |
| Vanilla JavaScript | Theme switching, preference storage, mobile menu behavior, and footer year. |
| Google Fonts | The Be Vietnam Pro typeface, with a sans-serif fallback. |

The site uses browser-native technologies to keep setup simple and avoid a framework or build process. CSS custom properties keep the two themes consistent, while CSS-generated illustrations avoid additional image dependencies for the current layout.

## Getting Started

### Requirements

- A modern browser with JavaScript enabled for theme switching and the mobile menu.
- Git, if you want to clone the repository.
- An internet connection to load Google Fonts and open external links. The layout falls back to a system sans-serif font if Google Fonts is unavailable.

No package installation, API keys, environment variables, or database setup is required.

### Download and Open

1. Clone the repository:

   ```bash
   git clone https://github.com/tuan0410/MU88.git
   cd MU88
   ```

2. Open `index.html` in your browser.

You can also download the repository ZIP from GitHub, extract it, and open `index.html`.

### Optional Local Server

If Python is installed, run the following from the project folder:

```bash
python -m http.server 8000
```

Open `http://localhost:8000`. Stop the server with `Ctrl+C`.

Using a local server provides a consistent origin for browser storage. Storage behavior when opening files directly may vary by browser.

## How to Use

1. Start with **Tổng quan** to read the introduction.
2. Select **Khám phá bài viết** or **Bài viết** to browse the featured article and reading cards.
3. Follow article links to the corresponding information sections.
4. Use **Nền tối** or **Nền sáng** in the header to switch themes. On small screens, the control displays an icon with an accessible label.
5. On mobile, use the menu button to show or hide navigation. Press Escape to close an open menu and return focus to the button.
6. Read **Lưu ý** for risk-awareness information and use **Liên hệ Bảo Tuấn** to open the author's Facebook profile in a new tab.

No login or credentials are needed. Your theme preference is stored in your browser when storage is available. Until you choose a theme manually, the site follows changes to your system theme.

## Project Structure

```text
MU88/
├── index.html   # Vietnamese content, page structure, and initial theme selection
├── main.css     # Layout, light/dark palettes, responsive styles, and artwork
├── main.js      # Theme persistence, menu interactions, and footer year
└── README.md    # Project documentation
```

The local workspace also contains an `img/` folder from the earlier version. The current page does not reference it.

## Design Considerations

The implementation addresses three practical UI concerns:

- **Readable themes:** shared color variables define backgrounds, text, borders, and accents for both modes.
- **Theme initialization:** a small script in the document head applies the theme before the stylesheet loads to reduce an initial flash of the wrong theme.
- **Mobile navigation:** the menu updates its expanded state, closes after navigation, and resets when returning to a desktop viewport.

The interface uses a green accent palette, restrained decorative elements, and grouped reading cards to establish a clear visual hierarchy.

## Verification

There is currently no committed automated test suite or test runner configuration.

If Node.js is installed, check JavaScript syntax with:

```bash
node --check main.js
```

Before publishing changes, manually check:

- Both themes on desktop and mobile viewport widths.
- Theme persistence after reloading when browser storage is available.
- System theme changes before a manual preference is selected.
- Mobile menu opening, closing, Escape handling, and keyboard focus.
- Internal article links, contact navigation, and the skip-to-content link.
- Readability with keyboard navigation, browser zoom, and reduced motion enabled.

A syntax check alone does not verify the visual layout or browser interactions.

## Future Improvements

These are proposed additions, not existing features:

- Add verified sources and review dates to informational articles.
- Add screenshots of the desktop and mobile layouts in both themes.
- Add browser-based checks for theme and navigation behavior.
- Expand the article collection while keeping the reading experience simple.

## Contributing

Report issues or suggest improvements through the [GitHub repository](https://github.com/tuan0410/MU88).

For code contributions, fork the repository, make focused changes, and open a pull request explaining the change and how you verified it. Keep the documentation aligned with the implementation, check both themes, and preserve Vietnamese text encoding.

## Credits

- **Project author:** [Bảo Tuấn / tuan0410](https://github.com/tuan0410).
- **Contact:** [Facebook](https://www.facebook.com/profile.php?id=100033979733043).
- **Typography:** Be Vietnam Pro, loaded through Google Fonts.

## License

No project license has been added to this repository. Do not assume that the code is available under MIT, GPL, or another open-source license. Contact the author to clarify permission before reusing or redistributing it.

