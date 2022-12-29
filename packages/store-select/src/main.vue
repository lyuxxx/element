<template>
  <rvc-emp-store-select
      v-bind="$attrs"
      v-on="listeners"
      mode="store-s"
      :options-type="2"
      v-model="innerValue"
      @hook:updated="mock"
      ref="rvc"
  >
  </rvc-emp-store-select>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  name: 'StoreSelect',
  props: {
    value: {
      type: String,
      default: ''
    },
    // none: 不进行选中操作
    // first: 默认选中第一个
    // single: 只有一个门店时选中这个门店
    defaultSelect: {
      type: String,
      default: 'single'
    }
  },
  data() {
    return {
      // 第一次初始化
      first: true
    };
  },
  methods: {
    change(val) {
      this.$emit('change', val);
    },
    mock() {
      let dataList = this.$refs.rvc.dataList;
      if (dataList.length > 0 && this.first && this.defaultSelect) {
        const firstValue = dataList[0].value;
        if (this.defaultSelect === 'single' && dataList.length === 1) {
          this.$set(this.$refs.rvc.$data, 'innerValue', firstValue);
          this.$emit('change', firstValue);
          this.$emit('default-select', firstValue);
        } else if (this.defaultSelect === 'first') {
          this.$set(this.$refs.rvc.$data, 'innerValue', firstValue);
          this.$emit('change', firstValue);
          this.$emit('default-select', firstValue);
        }
        this.first = false;
      }
    }
  },
  computed: {
    innerValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('update:value', val);
      }
    },
    listeners() {
      return Object.assign({}, this.$listeners, {
        change: this.change
      });
    }
  }
};
</script>

<style scoped>

</style>
