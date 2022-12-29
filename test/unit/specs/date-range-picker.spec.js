import { createTest, destroyVM } from '../util';
import DateRangePicker from 'packages/date-range-picker';

describe('DateRangePicker', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(DateRangePicker, true);
    expect(vm.$el).to.exist;
  });
});

