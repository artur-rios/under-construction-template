#!/bin/sh
# The `lint` check: installs the locked dependencies and runs the site's `lint` script (eslint ., configured by
# eslint.config.js). Static checks only, nothing is built.
# yggdrasil.yml runs it in the Node image of the Dockerfile's build stage (Alpine: no bash, so this is POSIX sh),
# from the repository's root. By hand, from anywhere in the checkout:
#   docker run --rm -v "$PWD:/src" -w /src <image> sh ci/lint.sh
set -eu

# The repository's root, wherever this is run from.
cd "$(dirname "$0")/.."

npm ci --no-audit --no-fund
npm run lint
