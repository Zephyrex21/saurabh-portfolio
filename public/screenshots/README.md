# Project Screenshots

Each project needs TWO screenshots — one per theme.
Drop them here with these exact filenames:

| Dark mode file             | Light mode file             | Project                  |
|-----------------------------|------------------------------|---------------------------|
| upstream-dark.webp          | upstream-light.webp          | GitHub Radar              |
| urban-heat-dark.webp        | urban-heat-light.webp        | Urban Heat Mitigation     |
| cryptex-dark.webp           | cryptex-light.webp           | Cryptex                   |
| automata-lab-dark.webp      | automata-lab-light.webp      | Automata Lab              |

The portfolio automatically shows the correct screenshot based on the active theme.
When the user toggles light/dark mode the images swap instantly.

## Format: WebP (not PNG)
WebP compresses screenshot content (UI, gradients, text) far better than PNG —
typically 90%+ smaller at the same visual quality. This keeps the site loading fast.

If you only have a PNG, convert it first:
```bash
# Using Python/Pillow
python3 -c "from PIL import Image; Image.open('shot.png').save('shot.webp', 'WEBP', quality=82)"

# Or using cwebp (if installed)
cwebp -q 82 shot.png -o shot.webp
```

Recommended max width: **1280px** (don't go larger — these display at ~700-900px on
screen, so anything wider just adds load time with zero visible benefit).

If a file is missing the portfolio shows a styled gradient fallback automatically.
