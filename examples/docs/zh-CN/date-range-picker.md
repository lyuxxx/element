## DateRangePicker 日期范围选择器

### 基本用法
:::demo
```html
<template>
    <date-range-picker v-model="dateRange" default-select="today" @change="dateChange"></date-range-picker>
</template>

<script>
  export default {
    data() {
      return {
          dateRange: []
      };
    },
      methods: {
          dateChange(val) {

          }
      }
  };
</script>
```
:::

### Attributes

| 参数      | 说明                                   | 类型     | 可选值              | 默认值   |
|---------- |--------------------------------------|--------|------------------|-------|
| value / v-model | 绑定值                                  | array  | — | []    |
| default-select | 默认选择项，默认month选中一月，today选中当天，none为不选中 | string | none,today,month | month |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| change | 选中值发生变化时触发 | 目前的选中值 |

### Methods
| 方法名   | 说明  | 参数 |
|-------|-----| ---- |
| reset | 重置  | - |
