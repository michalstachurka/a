#!/usr/bin/env bash
# Launcher for the Playwright MCP server (see .mcp.json).
#
# In the Claude Code remote sandbox, browser downloads are blocked by the
# network policy, but a Chromium build is preinstalled at
# /opt/pw-browsers/chromium (and there is no display, so run headless).
# On local machines that path doesn't exist and the server uses its defaults.
set -eu

extra=()
if [ -x /opt/pw-browsers/chromium ]; then
  extra+=(--executable-path /opt/pw-browsers/chromium --headless)
fi

exec npx -y @playwright/mcp@0.0.77 ${extra[@]+"${extra[@]}"} "$@"
