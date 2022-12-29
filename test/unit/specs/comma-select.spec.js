import { createTest, destroyVM } from '../util';
import CommaSelect from 'packages/comma-select';

describe('CommaSelect', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(CommaSelect, true);
    expect(vm.$el).to.exist;
  });
});

