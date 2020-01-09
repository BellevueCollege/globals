# Bellevue College Globals
Globals is Bellevue College's unified style and reusable content library. Globals is deployed across all production and test web servers.

## Versions
### Globals 2 — **❌ Deprecated**  
Based on [Bootstrap 2](https://getbootstrap.com/2.3.2/), Globals 2 was our first Bootstrap-based version of Globals. Globals 2 does not use any build framework, and exists entirely within the `/g/2/` directory.

### Globals 3 — **🔶 Production - Deprecated**  
Based on [Bootstrap 3](https://getbootstrap.com/docs/3.3/), Globals 3 is our current primary framework for public-facing sites. Globals 3 uses the [Bootstrap Sass](https://github.com/twbs/bootstrap-sass) official fork of Bootstrap 3, with [Gulp](https://gulpjs.com/) being used as a build system.

**Deprecated**: While Globals 3 is still maintained, any new projects should be built on Globals 4, and older projects should be converted where possible.
  
#### Included Projects:
* [Bootstrap Sass](https://github.com/twbs/bootstrap-sass) is the core of Globals 3
* [Bootstrap Accessibility Plugin](https://paypal.github.io/bootstrap-accessibility-plugin/). Globals 3 uses significant parts of the Bootstrap Accessibility Plugin, but does not include the entire project.
* [Modernizr](https://modernizr.com/) is used for feature detection to provide fallback for elements like FlexBox.
* [Swiftype Autocomplete JQuery Plugin](https://github.com/swiftype/swiftype-autocomplete-jquery). Globals 3 uses a forked version of this plugin to allow for additional query caching and styling.
* [Respond JS](https://github.com/scottjehl/Respond) Media Query polyfill
* In addition, the following development tools are used:
  * [Node Package Manager](https://www.npmjs.com/) for package management
  * [Gulp](https://gulpjs.com/) for build tasks
     * Gulp Notify - desktop notifications
     * Gulp Sourcemaps - sourcemaps to allow for troubleshooting
     * Gulp Autoprefixer - browser prefixing
     * Gulp Concat - merge files
     * Gulp Rename - rename files
     * Gulp Uglify - minify CSS and JS
     * Uglify Save License - save license comments when minifying

### Globals 4 — **✅ Production**  
Based on [Bootstrap 4](https://getbootstrap.com/docs/4.3/), Globals 4 is ready for production use. Globals 4 Boostrap's native Sass implementation, with [Gulp](https://gulpjs.com/) being used as a build system. 

* [Bootstrap](https://github.com/twbs/bootstrap) is the core of Globals 4
* [FontAwesome Free](https://fontawesome.com) provides icons (replacing Glyphicons in Globals 3)
* [Swiftype Autocomplete JQuery Plugin](https://github.com/swiftype/swiftype-autocomplete-jquery). Globals 4 uses a forked version of this plugin to allow for additional query caching and styling.
* In addition, the following development tools are used:
  * [Node Package Manager](https://www.npmjs.com/) for package management
  * [Gulp](https://gulpjs.com/) for build tasks
     * Gulp Notify - desktop notifications
     * Gulp Sourcemaps - sourcemaps to allow for troubleshooting
     * Gulp Autoprefixer - browser prefixing
     * Gulp Concat - merge files
     * Gulp Rename - rename files
     * Gulp Uglify - minify CSS and JS
     * Uglify Save License - save license comments when minifying
* **Modernizr**, **Respond JS** and **Bootstrap Accessibility Plugin** have been removed from Globals 4

## File structure

### Process Support
* browserlist-stats.json - contains browser usage from Google Analytics
  * This can be generated using [BrowserList-GA](https://github.com/browserslist/browserslist-ga) by running `npx browserslist-ga`
* /src/{version}/gulpfile.js - Gulp processes
* package.json - npm dependancies

### Development Files
* `src/{version}/javascripts/`
  * `jquery.swiftype.autocomplete.js` - forked version of Swiftype Autocomplete.
  * `custom.js` - Custom JS
  
* `src/{version}/sass/`
  * `g.scss` - master SCSS file; calls all partials
  * `partials/` - all SCSS partials
    * `_base.scss` - includes and configures variables and outside libraries
    * `_bootstrap-overrides.scss` - core over-rides of bootstrap
    * ... etc

### Production Files
* `g/` - production files
  * `2/` - legacy globals 2 files
  * `3/` - globals 3 files
     * `c/` - css
         * `g.css` - primary CSS file
         * `p.css` - print CSS
     * `f/` - fonts from Bootstrap
     * `h/` - HTML assets
     * `i/` - Image assets
     * `j/` - JavaScript assets
         * `bootstrap.min.js` - bootstrap js
         * `g.js` - globals footer scripts (without bootstrap included)
         * `gfoot-full.js` / gfoot-full.min.js - combined footer scripts
         * `ghead-full.js` / ghead-full.min.js - combined header scripts
         * `ghead.js` - Modernizr
         * `respond.js` - respond library
  * `4/` - globals 4 files
     * `c/` - css
         * `g.css` - primary CSS file
     * `f/` - fonts from FontAwesome
     * `h/` - HTML assets
     * `i/` - Image assets
     * `j/` - JavaScript assets
         * `gfoot-full.js` / `gfoot-full.min.js` - combined footer scripts
         * `ghead-full.js` / `ghead-full.min.js` - combined header scripts

## Developer setup
Globals 3 and 4 depend on NPM and Gulp for dependency and build management.

1. Install [Node.js](https://nodejs.org/en/download/) on your computer (needed for npm)
   * *Mac:* If you have Homebrew installed, try `brew install node`
2. From the command line, `cd` to the repository and run `npm install` to install dependencies
   * *Windows:* It is recommended that you use Command Prompt or PowerShell (not Git Bash)
3. Install Gulp globally so that your commands work- `npm install gulp-cli -g`
4. The following commands will now be available from within `/src/3` and `/src/4`:
   * `gulp` - Compiles for production
   * `gulp dev` - Compiles for dev
   * `gulp watch` - Watches for changes in SCSS files, and compiles to CSS and JS.

Commands are all configured in [gulpfile.js](gulpfile.js). Dependencies (and versions) are listed in [package.json](package.json). Note that Gulp is configured separately for Globals 3 and 4, but package management is centralized.

**Example Commands**

```bash
cd src/4
gulp watch
```