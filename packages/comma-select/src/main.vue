<template>
  <el-select
      v-bind="$attrs"
      v-on="listeners"
      v-model="values"
      :multiple="multiple"
      :collapse-tags="collapseTags"
      :popper-append-to-body="false"
      placeholder="请选择"
      v-reservation="[values, reservation]"
      ref="select"
      class="all-select-box"
  >
    <el-option
        v-if="showAll && multiple && options.length"
        id="select-all"
        ref="all"
        :class="{'selected': isSelectedAll, 'divide-line': divideAll}"
        value="@all"
        :label="allLabel"
        @click.stop.native="isSelectedAll = !isSelectedAll"
    >
    </el-option>
    <el-option
        v-for="item in options"
        :key="item[label] + item[_value]"
        :label="item[label]"
        :value="item[_value]"
        :disabled="reservation.includes(item[_value])"
    >
    </el-option>
  </el-select>
</template>

<script>
// value以逗号分隔的多选select组件
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  name: 'CommaSelect',
  props: {
    value: {
      type: String,
      default: ''
    },
    // 所有选项
    options: {
      type: Array,
      required: true
    },
    // 字段配置
    optionMap: {
      type: Object,
      default: () => ({
        label: 'label',
        value: 'value'
      })
    },
    // 是否显示“全部”
    showAll: {
      type: Boolean,
      default: true
    },
    // 全部label
    allLabel: {
      type: String,
      default: '全部'
    },
    // 是否分隔展示全部
    divideAll: {
      type: Boolean,
      default: false
    },
    // 是否多选
    multiple: {
      type: Boolean,
      default: true
    },
    collapseTags: {
      type: Boolean,
      default: true
    },
    reservation: {
      type: Array,
      default: () => []
    }
  },
  directives: {
    reservation: {
      bind(el, bindings, vnode) {
        const [values, reservation] = bindings.value;
        if (reservation === undefined || reservation.length === 0) return;
        // 需要隐藏的标签索引
        const indexes = [];
        values.forEach((item, index) => {
          if (reservation.includes(item)) {
            indexes.push(index);
          }
        });
        // 定义处理函数
        const dealStyle = function(tags) {
          tags.forEach((el, index) => {
            if (indexes.includes(index) && ![...el.classList].includes('select-tag-close-none')) {
              el.classList.add('none');
            }
          });
        };
        // 设置样式 隐藏close icon
        const tags = el.querySelectorAll('.el-tag__close');
        if (tags.length === 0) {
          // 初始化tags为空处理
          setTimeout(() => {
            const tagTemp = el.querySelectorAll('.el-tag__close');
            dealStyle(tagTemp);
          });
        } else {
          dealStyle(tags);
        }
      },
      componentUpdated(el, bindings, vnode) {
        const [values, reservation] = bindings.value;
        if (reservation === undefined || reservation.length === 0) return;
        // 需要隐藏的标签索引
        const indexes = [];
        values.forEach((item, index) => {
          if (reservation.includes(item)) {
            indexes.push(index);
          }
        });
        // 定义处理函数
        const dealStyle = function(tags) {
          tags.forEach((el, index) => {
            if (indexes.includes(index) && ![...el.classList].includes('select-tag-close-none')) {
              el.classList.add('none');
            }
          });
        };
        // 设置样式 隐藏close icon
        const tags = el.querySelectorAll('.el-tag__close');
        if (tags.length === 0) {
          // 初始化tags为空处理
          setTimeout(() => {
            const tagTemp = el.querySelectorAll('.el-tag__close');
            dealStyle(tagTemp);
          });
        } else {
          dealStyle(tags);
        }
      }
    }
  },
  methods: {
    change() {
    }
  },
  watch: {
    value: {
      handler(newVal) {
        let tmp = [];
        if (newVal === '' || newVal === null) {
          tmp = [];
        } else {
          tmp = newVal.split(',');
        }
        let finalValue = tmp.join(',');
        this.$emit('change', finalValue);
      }
    }
  },
  computed: {
    listeners() {
      return Object.assign({}, this.$listeners, {
        change: this.change
      });
    },
    values: {
      get() {
        if (this.value === null || this.value === '') {
          return [];
        }
        return this.value.split(',');
      },
      set(val) {
        val = val.filter(i => i !== '@all');
        let finalValue = val.join(',');
        this.$emit('change', finalValue);
      }
    },
    isSelectedAll: {
      get() {
        return this.options.every(i => this.values.includes(i[this._value]));
      },
      set(val) {
        let tmp = [];
        if (val) {
          tmp = this.options.map(i => i[this._value]);
        }
        let finalValue = tmp.join(',');
        this.$emit('change', finalValue);
      }
    },
    label() {
      return this.optionMap.label;
    },
    _value() {
      return this.optionMap.value;
    }
  }
};
</script>

<style scoped>
/deep/ .none {
  display: none;
}

.el-select-dropdown__item.is-disabled {
  color: #C0C4CC !important;
  cursor: not-allowed;
}

/deep/ input:disabled {
  cursor: not-allowed;
}

#select-all {
  cursor: pointer;
}

.divide-line {
  border-bottom: 1px solid rgba(123, 123, 123, .1);
}

#select-all:not(.selected) {
  color: #606266;
}

/deep/ .el-select-dropdown__item.hover {
  background-color: transparent !important;
}

#select-all:hover, /deep/ .el-select-dropdown__item:hover {
  background-color: #f5f7fa !important;
}
</style>
