# Bellevue College Globals
Globals is Bellevue College's unified style and reusable content library. Globals is deployed across all production and test webservers.

## Developer setup
As of version 3.10, Globals depends on NPM/Gulp for dependency management.

1. Install [Node.js](https://nodejs.org/en/download/) on your computer (needed for npm)
   * *Mac:* If you have Homebrew installed, try `brew install node`
2. From the command line, `cd` to the repository and run `npm install` to install dependencies
   * *Windows:* It is recommended that you use Command Prompt or PowerShell (not Git Bash)
3. Install Gulp globally so that your commands work- `npm install -g gulp`
4. The following commands will now be available:
   * `gulp` - Compiles for production
   * `gulp dev` - Compiles for dev
   * `gulp watch` - Watches for changes in SCSS files, and compiles to CSS (does not do other operations)

Other commands are available for specific operations, but these are run as part of `gulp` or `gulp dev`.
Commands are all configured in [gulpfile.js](gulpfile.js). Dependencies (and versions) are listed in [package.json](package.json).

As of version 3.15, gulp commands should be run from the source folder of the globals version you are compiling. For example, to compile a new version of globals 3, you would go to `./src/3/` and then run `gulp`.

## File structure

### Process Support
* browserlist-stats.json - contains browser usage from Google Analytics
  * This can be generated using [BrowserList-GA](https://github.com/browserslist/browserslist-ga) by running `npx browserslist-ga`
* gulpfile.js - Gulp processes
* package.json - npm dependancies

### Development Files
* `src/{version}/javascripts/`
  * `noisy-calls.js` - calls to Noisy.js library
  
* `src/{version}/sass/`
  * `g.scss` - master SCSS file; calls all partials
  * `partials/` - all SCSS partials
    * `_base.scss` - includes and configures outside libraries
    * `_bootstrap-accessibility-custom.scss` - modified SCSS from Bootstrap Accessibility plugin
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