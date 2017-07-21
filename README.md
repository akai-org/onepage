## Project structure convention
- app/ - back-end source directory
- gulp/config/ - project configuration
- gulp/tasks/ - gulp tasks directory
- spec/ - spec directory
- src/ - front-end source directory
- src/ - front-end source directory

### Configurations
- gulp/config/paths.js - project paths
- gulp/config/servers.js - credentials
- spec/support/jasmine.json - jasmine configuration
- .babelrc - babel configuration
- .eslintrc - eslint configuration
- .stylelintrc - stylelint configuration
- .travis.yml - travis configuration

### Default front-end source directories:
- src/img/ - images
- src/js/ - scripts
- src/scss/ - styles

### Default output directories:
- build/ - development build
- public/ - optimized for publish build

## Repository organization
- master - recent stable release
- starter - recent stable release with sample data
- develop - development here

## Add to existing repository
You can merge this repository to your project by adding it as a remote.
```
git remote add base --allow-unrelated-histories
```
Then you can update starter using this command:
```
git pull base master
```