![GitHub commit activity](https://img.shields.io/github/commit-activity/m/thkruz/iris?style=flat-square) ![language](https://img.shields.io/github/languages/top/thkruz/iris?style=flat-square) ![Languages](https://img.shields.io/github/languages/count/thkruz/iris?style=flat-square) ![GitHub issues](https://img.shields.io/github/issues/thkruz/iris?style=flat-square) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) ![License](https://img.shields.io/github/license/thkruz/iris?style=flat-square)

# Mad Tea Party

Description goes here...

## Table of Contents

-   [Setting up a Local Copy](#Setting-up-a-Local-Copy)
-   [Versioning](#Versioning)
-   [Tests](#Tests)
-   [License](#License)

### Setting up a Local Copy

```bash
git clone https://github.com/thkruz/mad-tea-party        #Clone the github files.
cd ./mad-tea-party/                                      #Switch into the directory.
npm install                                              #Install the dependencies.
npm start                                                #Start the application.
```

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Tests

### Unit/Functional

Currently we are using Jest for ui unit and functional tests that should ideally cover at least 80% of the functions. All of these tests can be run using:

```bash
npm run test
```

### End-To-End

For end-to-end (E2E) testing we will be using the cypress framework. This is on the to-do list.

### Security

For security testing we are using SonarCloud automatically in the CI/CD pipeline.

## License

Copyright (C) 2022 Theodore Kruczek

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.

[Full License](https://github.com/thkruz/iris/blob/master/LICENSE.md)
