import CategoryCard from "../CategoryCard.vue";
import { shallowMount, mount, Wrapper } from '@vue/test-utils'


let wrapper: Wrapper<CategoryCard>;


beforeEach(() => {
  // shallow mounts the Vue component 
  wrapper = shallowMount(CategoryCard, {
    mocks: {
      $getCategories: jest.fn().mockResolvedValue({
        data: [{categoryName: 'Beauty Product', categoryImage: '.img'}]
      })
    }
  });
});


afterEach(() => {
  wrapper.destroy();
});


describe.only('CategoryCard', () => {

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it('Successfully retrieves categories', () => {
    expect(Object.keys(wrapper.vm.$data).length).not.toBe(0);
  })

  it('')
});
  

