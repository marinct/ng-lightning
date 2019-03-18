# <ngl-tabset>

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[selected]` | desired tab to activate. This can be either the `index` number, the tab's id *(id="myid")* or the actual `NglTab` instance | string \| number \| NglTab | |
| `[variant]` | whether the tabset is [scoped](https://www.lightningdesignsystem.com/components/tabs#scoped) or not | 'default' \| 'scoped' | `'default'` |
| `(selectedChange)` | emits when a tab is selected | `EventEmitter<NglTab>` | |


# <ng-template ngl-tab> | <ngl-tab>

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[label]` | header text| string | |
| `[id]` | tab's ID in case you want to preselect or programmatically manipulate it | string | |
| `(activate)` | emits when a tab is becomes active | `EventEmitter<NglTab>` | |
| `(deactivate)` | emits when a tab is becomes inactive | `EventEmitter<NglTab>` | |


### Only when using `<ngl-tab>`

  * `<ng-template ngl-tab-label>`: contains header's content
  * `<ng-template ngl-tab-content>`: contains tabs's content
