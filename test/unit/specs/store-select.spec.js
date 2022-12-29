import { createTest, destroyVM } from '../util';
import StoreSelect from 'packages/store-select';

describe('StoreSelect', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(StoreSelect, true);
    expect(vm.$el).to.exist;
  });
});

