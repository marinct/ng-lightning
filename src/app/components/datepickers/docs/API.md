# `<ngl-datepicker>`

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[date]` | currently selected date. | Date | |
| `[showToday]` | whether to show `Today` option | boolean | `true` |
| `[monthNames]` | month names | string[] | `['January', 'February', ...]` |
| `[dayNamesShort]` | short form of weekdays | string[] | `['Sun', 'Mon', ...]` |
| `[dayNamesLong]` | long form of weekdays | string[] | `['Sunday', 'Monday', ...]` |
| `[firstDayOfWeek]` | first day of the week. Sunday = 0, Monday = 1, ... | number | `0` |
| `(dateChange)` | emits date upon selection | EventEmitter<Date> | |
