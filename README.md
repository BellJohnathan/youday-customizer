# Youday Interface Customizer

🎨 Modern interface customization for Youday CRM with enhanced UX, Lucide icons, and improved layouts.

## ✨ Features

### 🎯 Global Enhancements
- **Modern Navbar**: Dark slate background (#0f172a) with custom branding
- **Lucide Icons**: Beautiful, modern icon set replacing Font Awesome
- **Cleaner Account Menu**: Simplified "Mon compte" display without gravatar
- **Hidden Footer**: Removed unnecessary footer elements
- **Custom Typography**: Inter font family throughout

### 📊 Organismes Section (Customized)
- **Two-Column Toolbar Layout**: Clean separation of actions
- **Segmented View Switcher**: Tab-style List/Map toggle
- **Modern Button Styling**: Primary and secondary button hierarchy
- **Enhanced Table Design**: Improved scannability with "airy" rows
- **Semantic Badge System**: Color-coded status indicators
- **Typographic Hierarchy**: Visual weight for important data
- **Smart Search Tags**: Automatic hiding of redundant filters

## 📦 Installation

### Prerequisites
Install Tampermonkey browser extension:
- [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

### Install Script

**Option 1: Direct Install (Recommended)**
1. Click this link: [Install Youday Customizer](https://raw.githubusercontent.com/YOUR-GITHUB-USERNAME/youday-customizer/main/youday-customizer.user.js)
2. Tampermonkey will open automatically
3. Click **Install**
4. Refresh Youday → Done! ✨

**Option 2: Manual Install**
1. Copy the contents of `youday-customizer.user.js`
2. Open Tampermonkey → Create new script
3. Paste and save
4. Refresh Youday

## 🔄 Auto-Updates

Updates are automatically delivered to your team:
- Tampermonkey checks for updates **daily**
- When a new version is released, it auto-installs within 24 hours
- Or manually click "Check for updates" in Tampermonkey dashboard

## 🎨 Icon Mapping

The script replaces Font Awesome icons with modern Lucide icons:

| Menu Item | Lucide Icon |
|-----------|-------------|
| Accueil | `chart-column-big` |
| Planning | `calendar` |
| Organismes | `building` |
| Temps passé | `clock` |
| Contacts | `circle-user` |
| Cartes de visite | `id-card` |
| Conventions | `file-signature` |
| Aides financières | `euro` |
| Instances et Jurys | `graduation-cap` |
| Actions | `list-todo` |
| Fiche de temps | `file-clock` |
| Settings | `settings` |
| Folder | `layout-panel-left` |
| Logout | `log-out` |

## 🛠️ Development

### Version History

- **v2.1.0** - Initial internal release with auto-updates
  - Lucide icons integration
  - Account menu customization
  - Footer removal
  - Organismes section enhancements

### Making Updates

1. Edit `youday-customizer.user.js`
2. **Bump version number** in metadata (e.g., `2.1.0` → `2.1.1`)
3. Commit and push to GitHub
4. Team receives update automatically within 24 hours

### Version Numbering
- **Major** (X.0.0): Breaking changes or major redesigns
- **Minor** (2.X.0): New features, section customizations
- **Patch** (2.1.X): Bug fixes, small tweaks

## 🐛 Troubleshooting

### Script not working?
1. Check Tampermonkey is enabled
2. Verify script is enabled in Tampermonkey dashboard
3. Hard refresh the page (Ctrl+Shift+R / Cmd+Shift+R)
4. Check browser console for errors (F12)

### Icons not appearing?
- The script loads Lucide from CDN - check your internet connection
- Clear browser cache and reload

### Updates not installing?
- Manually check: Tampermonkey → Dashboard → Check for updates
- Verify `@updateURL` matches the raw GitHub URL

## 📝 Support

For issues or feature requests:
- Open an issue on GitHub
- Contact: [Your contact info]

## 📄 License

Internal use only - Technopole ATLAS

---

**Made with ❤️ for Technopole ATLAS team**
