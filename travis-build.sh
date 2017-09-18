#!/bin/bash
set -e
./gradlew clean
EXIT_STATUS=0
echo "Publishing docs for branch $TRAVIS_BRANCH"
if [[ $TRAVIS_PULL_REQUEST == 'false' ]]; then
    echo "Publishing docs"
    ./gradlew docs || EXIT_STATUS=$?
fi

exit $EXIT_STATUS