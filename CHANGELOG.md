# Changelog

All notable changes to the Youday Interface Customizer will be documented here.

## [2.1.0] - 2025-01-26

### Added
- 🎨 Lucide icons replacing Font Awesome across entire interface
- 👤 Simplified account menu: "Mon compte" text instead of full name
- 🚫 Removed gravatar image from account menu
- 🗑️ Hidden page footer for cleaner interface
- 🎯 Account menu text color: #5b9bd1
- 🖱️ Hover states for navbar with semi-transparent gray (hsl(222deg 10% 36% / 40%))
- 📦 Auto-update mechanism via GitHub

### Changed
- 📐 Navbar menu padding increased to 12px 16px for better spacing
- 🔄 Fixed infinite loop issues with MutationObserver
- ⚡ Performance improvements: debouncing and proper event cleanup
- 🛡️ Added error handling for Lucide CDN loading failures

### Fixed
- 🐛 Resolved page freezing issues caused by icon replacement
- 🔧 Proper observer disconnect/reconnect during DOM modifications
- ✅ Prevented duplicate event listeners

## [2.0.0] - 2025-01-25

### Added - Organismes Section
- 📊 Two-column toolbar layout (List/Map left, actions right)
- 🎛️ Segmented view switcher with tab-style 2px underline
- 🆕 Primary "New" button with dark slate background (#0f172a)
- 🔘 Secondary buttons with white background and gray borders
- ➗ Vertical dividers between button groups
- 🔍 Modernized search bar styling
- 📋 Smart hiding of redundant search filter tags

### Added - Table Enhancements
- 📏 "Airy" table rows with improved padding (14px 12px)
- 🎨 Row hover effects with blue left border accent
- 🏷️ Semantic "soft" badge system with color coding:
  - Green: Success/Active states
  - Blue: Info/Standard states
  - Yellow: Warning states
  - Red: Error/Critical states
  - Purple: Special categories
  - Gray: Neutral/Inactive states
- 📝 Typographic hierarchy for data weight
- 🎯 Uppercase table headers with letter spacing

### Added - Global Styles
- 🌐 Inter font family across entire interface
- 🎨 Dark navbar background (#0f172a)
- 🖼️ Custom Technopole ATLAS logo
- 🎭 Selected tab styling (#334155)

## [1.0.0] - 2025-01-20

### Added
- Initial release with basic customizations
- Navbar color changes
- Logo replacement

---

## Version Guidelines

- **Major (X.0.0)**: Breaking changes, major redesigns
- **Minor (X.Y.0)**: New features, section customizations
- **Patch (X.Y.Z)**: Bug fixes, small improvements
