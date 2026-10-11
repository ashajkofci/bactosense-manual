#!/bin/sh
set -eu

manual_image_action=${1:-build}
if [ "$#" -gt 1 ]; then
    echo "Usage: sh scripts/ci-image.sh [build|publish]" >&2
    exit 1
fi
case "$manual_image_action" in
    build) manual_image_tag=ci ;;
    publish)
        : "${BNOVATE_REGISTRY_USERNAME:?Set BNOVATE_REGISTRY_USERNAME in secured repository variables.}"
        : "${BNOVATE_REGISTRY_PASSWORD:?Set BNOVATE_REGISTRY_PASSWORD in secured repository variables.}"
        manual_image_tag=${VERSION-latest}
        ;;
    *)
        echo "Usage: sh scripts/ci-image.sh [build|publish]" >&2
        exit 1
        ;;
esac
case "$manual_image_tag" in
    ''|[.-]*|*[!A-Za-z0-9_.-]*)
        echo "VERSION must be a valid Docker tag." >&2
        exit 1
        ;;
esac
if [ "${#manual_image_tag}" -gt 128 ]; then
    echo "VERSION must contain at most 128 characters." >&2
    exit 1
fi

manual_image="registry.bactocloud.com/bactosense-manual:$manual_image_tag"
# Match the existing self-hosted runner's Docker build configuration.
export DOCKER_BUILDKIT="${DOCKER_BUILDKIT:-0}"

if [ "$manual_image_action" = publish ]; then
    manual_docker_config=$(mktemp -d)
    export DOCKER_CONFIG="$manual_docker_config"
    trap 'rm -rf "$manual_docker_config"' EXIT
    trap 'exit 129' HUP
    trap 'exit 130' INT
    trap 'exit 143' TERM
    printf '%s' "$BNOVATE_REGISTRY_PASSWORD" | docker login registry.bactocloud.com \
        --username "$BNOVATE_REGISTRY_USERNAME" --password-stdin
fi

docker build --pull \
    --build-arg "MANUAL_SITE_URL=${MANUAL_SITE_URL:-https://manual.bnovate.net}" \
    --build-arg "MANUAL_BASE_PATH=${MANUAL_BASE_PATH:-/}" \
    -t "$manual_image" .
docker run --rm --entrypoint nginx "$manual_image" -t

if [ "$manual_image_action" = publish ]; then
    docker push "$manual_image"
    docker manifest inspect "$manual_image" > /dev/null
fi
