## StoreSelect 门店组件

组件背景是公司组件不支持默认选中

:::tip
登录[beta portal](http://portal-new.beta1.fn/)后才能查看组件效果
该组件是公司门店组件的封装，未列出的属性和方法请查看[公司门店组件文档](http://ued.dev.fn.com/frontend-spec/doc-rvc/select-store-operation.html)
:::

### 基本用法

:::demo 

```html
<store-select
        v-model="storeId"
        default-select="first"
        @default-select="defaultSelectStore"
        @change="storeChange"
        :clearable="false"
>
</store-select>

<script>
  export default {
    data() {
      return {
          storeId: ''
      }
    },
      methods: {
          defaultSelectStore() {

          },
          storeChange() {

          }
      }
  };
</script>
```
:::

### Attributes

| 参数      | 说明                                             | 类型      | 可选值               | 默认值 |
|---------- |------------------------------------------------|---------|-------------------|-----|
| value / v-model | 绑定值                                  | string  | — | —    |
| default-select | 默认选择项，默认single为单门店时进行选中，first为选中第一个门店，none为不选中 | string  | none,first,single | single |

### Events
| 事件名称      | 说明     | 回调参数 |
|---------- |--------|------|
| default-select  | 默认选中回调 | 门店的值 |
| change  | 门店选中回调 | 门店的值 |


