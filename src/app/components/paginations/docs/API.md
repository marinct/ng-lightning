# <ngl-pagination>

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[page]` | current page number | number | |
| `[total]` | total number of **items** in all pages | number | |
| `[limit]` | limit number of visible pages. A value less than 1 indicates that there is no limitation | number |  0 |
| `[boundaryLinks]` | whether to display First and Last buttons | boolean | `false` |
| `[boundaryNumbers]` | define how many of the first and last page numbers to always show | boolean | 0 |
| `[perPage]` | maximum number of items per page | boolean | 10 |
| `[firstText]` | displayed string for First button | string | `'First'` |
| `[previousText]` | displayed string for Previous button | string | `'Previous'` |
| `[previousText]` | displayed string for Previous button | string | `'Previous'` |
| `[nextText]` | displayed string for Next button | string | `'Next'` |
| `[lastText]` | displayed string for Last button | string | `'Last'` |
| `(pageChange)` | the page clicked in order to select | `EventEmitter<number>` | |

# Export API

| Name | Description | Type |
| -------- | ----------- | ---- |
| `start` | starting row index of current page | number |
| `end` | last row index of current page | number |
