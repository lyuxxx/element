import StoreSelect from './src/main';

/* istanbul ignore next */
StoreSelect.install = function(Vue) {
  Vue.component(StoreSelect.name, StoreSelect);
};

export default StoreSelect;
