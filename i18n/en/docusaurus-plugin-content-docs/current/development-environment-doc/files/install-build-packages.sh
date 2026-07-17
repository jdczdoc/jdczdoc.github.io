#!/usr/bin/env bash
set -u

PACKAGE_FILE="${1:-build-packages.txt}"
FAILED_FILE="${2:-build-packages-failed.txt}"

if [[ ! -f "${PACKAGE_FILE}" ]]; then
    echo "Package list not found: ${PACKAGE_FILE}" >&2
    exit 1
fi

: > "${FAILED_FILE}"

sudo apt-get update

while IFS= read -r package; do
    [[ -n "${package}" ]] || continue

    echo
    echo "==== Installing ${package} ===="

    if ! sudo apt-get install -y "${package}"; then
        echo "${package}" | tee -a "${FAILED_FILE}"
    fi
done < "${PACKAGE_FILE}"

echo
if [[ -s "${FAILED_FILE}" ]]; then
    echo "Some packages failed. See: ${FAILED_FILE}"
    exit 2
fi

echo "All exported package names were installed successfully."
