# `<ngl-avatar>`

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[src]` | image URL | string | |
| `[size]` | image size | 'x-small' \| 'small' \| 'medium' \| 'large' | `medium` |
| `[variant]` | image URL | 'square' \| 'circle' | `square` |
| `[alternativeText]` | assistive text | string | |
| `[initials]` | if image is unavailable, this text will be shown instead | string | |
| `[initials]` | `initials` fallback relies on this for its background color. Names are written in the format `standard:account` where `standard` is the category, and `account` is the specific icon to be displayed | string | |
| `(error)` | emits when image fails to load. In this case initials will be displayed, if set | EventEmitter | |
