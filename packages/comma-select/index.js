import CommaSelect from './src/main';

/* istanbul ignore next */
CommaSelect.install = function(Vue) {
  Vue.component(CommaSelect.name, CommaSelect);
};

export default CommaSelect;
