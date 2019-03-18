# [nglPick]

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[nglPick]` | currently selected option value | any | |
| `[nglPickMultiple]` | whether multiple options can be selected. In this case `nglPick` value should be an array or object | boolean | `false` |
| `[nglPickActiveClass]` |  define a custom class to be used when any of the options is selected | string | |
| `(nglPickChange)` | the value that is going to be selected when a `nglPickOption` is selected | EventEmitter | |
| `(nglOptionDestroyed)` | emits the value of any *selected* option that is destroyed (ie `*ngIf`) | EventEmitter | |

# [nglPickOption]

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[nglPickOption]` | option's value | any | |
| `[nglPickActiveClass]` | define a custom class to be used when the option is selected. Overrides parent's `nglPick` active class if defined. | string | |
