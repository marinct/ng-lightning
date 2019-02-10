# <table ngl-datatable>

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[data]` | array of data to be displayed as rows in the table | any[] | |
| `[sort]` | sorting state object as `{ key: '<column key>', order: '<asc|desc>'}` | INglDatatableSort | |
| `[trackByKey]` | unique object property of `data`, useful for internal tracking. | string | |
| `[loading]` | whether loading overlay should be displayed | boolean | false |
| `(sortChange)` | requested sort event as `{ key: '<column key>', order: '<asc|desc>'}` | INglDatatableSort | |
| `(rowClick)` | invoked when a row is clicked passing original `Event` and row's data, as `{event: Event, data: any}` | INglDatatableRowClick | |

# <ngl-datatable-column>

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[heading]` | header text of column. It will also be used as `title` and as header on small screens even if a custom header template is used | string | |
| `ng-template[nglDatatableHeading]` | provide a custom header template | TemplateRef | |
| `[key]` | property of `data` to display. If not specified you should provide a custom template | string | |
| `[truncate]` | adds truncate to every cell of this column | boolean | false |
| `[sortable]` | whether it is sortable. `key` should be always defined for sortable columns | boolean | |
| `[headClass]` | style class(es) for header cell of this column. Use as `ngClass` | string / Array / Object | |
| `[cellClass]` | style class(es) for each cell of of this column. Use as `ngClass` | string / Array / Object | |


# <ng-template nglDatatableCell>

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `$implicit` | Cell value, if `key` has been defined for this column. | any | |
| `row` | object data for this row | any | |
| `index` | row index number, starting from `0` | number | |

# <ng-template nglLoadingOverlay>

  * Display a custom overlay template while `[loading]` is `true`. 

# <ng-template nglNoRowsOverlay>

  * Display a custom template while `[data]` is empty. 


