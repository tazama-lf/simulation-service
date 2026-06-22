<!-- SPDX-License-Identifier: Apache-2.0 -->
# simulation-service

Simulation services in support of the Tazama Rule Studio

## Overview

Describe what this component does and where it sits in the Tazama platform.

## Prerequisites

- Node.js 20+
- npm configured for the `@tazama-lf` GitHub Packages registry (see `.npmrc`)
- A `GH_TOKEN` with `read:packages` to install `@tazama-lf/*` dependencies

## Getting started

```bash
npm install
npm run build
npm test
```

## Configuration

Copy `.env.template` to `.env` and populate the values for your environment.

## Contributing

This repository follows the Tazama contribution standards:

- Conventional Commit PR titles
- DCO sign-off on every commit (`git commit -s`)
- Husky hooks run lint, formatting, commit-message and test checks locally

## License

Apache-2.0
