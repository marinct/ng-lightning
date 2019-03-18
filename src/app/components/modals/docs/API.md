# `<ngl-modal>`

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[header]` | heading text | string | |
| `[open]` | whether modal is visible or not | boolean | `true` |
| `[size]` | specifies the modal's width | 'medium' \| 'large' | |
| `[directional]` | whether buttons inside footer spread to both left and right | boolean | |
| `[dismissOnClickOutside]` | whether modal can be dismissed by clicking outside of it | boolean | `true` |
| `[closeButtonAssistiveText]` | text read aloud by screen readers when the user focuses on the Close Button | string | `'Close'` |
| `(openChange)` | emitted when modal's visibility is going to change to `false` | `EventEmitter<boolean>` | |

# <ng-template nglModalTagline>
  
Content underneath the title in the modal header.

# <ng-template nglModalFooter>

Contains buttons displayed on modal's footer.

# <ng-template nglModalHeader>

Custom header content template

| Variable | Description | Type |
| -------- | ----------- | ---- |
| `id` | Auto generated unique ID to be used for accessibility. | string |
