# <ngl-rating>

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[rate]` | current rate value | number | 0 |
| `[max]` | maximum rate number | number | 5 |
| `[isReadonly]` | prevent user's interaction | boolean | `false` |
| `[icon]` | LDS icon used to display the available rates | string | `'favorite'` |
| `[size]` | icon sizes | string | |
| `[colorOn]` | color when active | string | `'#FFB75D'` |
| `[colorOff]` | color when not active | string | `'#54698D'` |
| `(rateChange)` | the clicked rate | `EventEmitter<number>` | |
| `(hover)` | the currently hovered rate | `EventEmitter<number>` | |

# <ng-template nglRatingIcon>

| Variable | Description | Type |
| -------- | ----------- | ---- |
| `$implicit` | Whether icon should be active or not | boolean |
| `index` | icon index | number |
| `fill` | Fill percentage. An integer value between 0 and 100. | number |
