## CommaSelect 逗号拼接value选择器

组件背景是后台多选字段很多是逗号分隔的，而且el-select不支持全选

:::tip
该组件是el-select的封装，未列出的属性和方法请查看el-select文档
:::

### 基本用法
:::demo value值类似'1,2,3,4'
```html
<template>
    <comma-select :options="options" v-model="value"></comma-select>
</template>

<script>
  export default {
    data() {
      return {
          value: '',
          options: [{
              value: '1',
              label: '课别1'
          }, {
              value: '2',
              label: '课别2'
          }, {
              value: '3',
              label: '课别3'
          }, {
              value: '4',
              label: '课别4',
          }, {
              value: '5',
              label: '课别5'
          }],
      };
    }
  };
</script>
```
:::

### 指定字段映射
:::demo
```html
<template>
    <comma-select :options="options" v-model="value" :option-map="{label:'courseName',value:'courseId'}"></comma-select>
</template>

<script>
  export default {
    data() {
      return {
          value: '',
          options: [{
              courseId: '1',
              courseName: '课别1'
          }, {
              courseId: '2',
              courseName: '课别2'
          }, {
              courseId: '3',
              courseName: '课别3'
          }, {
              courseId: '4',
              courseName: '课别4',
          }, {
              courseId: '5',
              courseName: '课别5'
          }],
      };
    }
  };
</script>
```
:::

### 保留一些选项
:::demo
```html
<template>
    <comma-select :options="options" v-model="value" :reservation="['1', '2']" :collapse-tags="false"></comma-select>
</template>

<script>
  export default {
    data() {
      return {
          value: '1,2',
          options: [{
              value: '1',
              label: '课别1'
          }, {
              value: '2',
              label: '课别2'
          }, {
              value: '3',
              label: '课别3'
          }, {
              value: '4',
              label: '课别4',
          }, {
              value: '5',
              label: '课别5'
          }],
      };
    }
  };
</script>
```
:::

### Select Attributes
| 参数      | 说明                                     | 类型      | 可选值                           | 默认值                             |
|---------- |----------------------------------------|---------|--------------------------------  |---------------------------------|
| value / v-model | 绑定值                                    | string  | — | —                               |
| options | 选项                                     | array   | — | —                               |
| optionMap | 选项字段映射                                 | object  | — | {label: 'label',value: 'value'} |
| showAll | 是否显示“全部”这一行                            | boolean | — | true                            |
| allLabel | “全部”label值，比如可以改成“所有”                  | string  |  | 全部                              |
| divideAll | 是否显示“全部”分隔线                            | boolean | — | true                            |
| collapse-tags | 多选时是否将选中值按文字的形式展示                      | boolean | — | true                            |
| reservation | 需要保留的选项value集合，配合collapse-tags=false使用 | array   | — | []                              |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| change | 选中值发生变化时触发 | 目前的选中值 |
