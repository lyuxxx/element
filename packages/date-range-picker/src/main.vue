<template>
  <el-date-picker
      placeholder="请选择日期"
      :value="innerValue"
      :editable="false"
      :clearable="false"
      size="small"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      value-format="yyyy-MM-dd HH:mm:ss"
      :default-time="['00:00:00', '23:59:59']"
      :picker-options="pickerOptions"
      @input="change($event)"
  />
</template>

<script>
import dateUtil from 'element-ui/src/utils/date';
export default {
  name: 'DateRangePicker',
  model: {
    event: 'change'
  },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    // none: 不进行选中操作
    // today: 选中今天
    // month: 选中31天
    defaultSelect: {
      type: String,
      default: 'month'
    }
  },
  data() {
    return {
      selectDate: '',
      // 日期选择范围在一个月内
      pickerOptions: {
        onPick: ({maxDate, minDate}) => {
          this.selectDate = minDate.getTime();
          if (maxDate) {
            this.selectDate = '';
          }
        },
        disabledDate: (time) => {
          if (this.selectDate !== '') {
            const one = 31 * 24 * 3600 * 1000;
            const minTime = this.selectDate - one;
            const maxTime = this.selectDate + one;
            return time.getTime() < minTime || time.getTime() > maxTime;
          }
        }
      }
    };
  },
  methods: {
    change(val) {
      this.innerValue = val;
    },
    reset() {
      this.setDefault();
    },
    setDefault() {
      if (this.defaultSelect === 'month') {
        let date = new Date().getTime() - 31 * 24 * 60 * 60 * 1000;
        let dateRange = [
          `${dateUtil.format(new Date(date), 'yyyy-MM-dd hh:mm:ss').split(' ')[0]} 00:00:00`,
          dateUtil.format(new Date(), 'yyyy-MM-dd hh:mm:ss')
        ];
        this.$emit('change', dateRange);
      } else if (this.defaultSelect === 'today') {
        let dateRange = [
          `${dateUtil.format(new Date(), 'yyyy-MM-dd hh:mm:ss').split(' ')[0]} 00:00:00`,
          dateUtil.format(new Date(), 'yyyy-MM-dd hh:mm:ss')
        ];
        this.$emit('change', dateRange);
      } else {
        this.$emit('change', []);
      }
    }
  },
  computed: {
    innerValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('change', val);
      }
    }
  },
  mounted() {
    this.setDefault();
  }
};
</script>

<style scoped>

</style>
