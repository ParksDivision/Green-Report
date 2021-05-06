import CategoryCard from "../CategoryCard.vue";
import { mount, shallowMount, Wrapper } from '@vue/test-utils'


let wrapper: Wrapper<any>;

beforeEach(() => {
  // mounts the Vue component with mock data
  wrapper = mount(CategoryCard, {
    stubs: {
      NuxtLink: true,
    },
    mocks: {
      $getCategories: jest.fn().mockResolvedValue({
        data: [{categoryName: 'Beauty Product', categoryImage: '.img'}, {categoryName: 'Clothing', categoryImage: 'clothing.img'}]
      }),
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
  
  it('successfully retrieves categories', async () => {
    let categories = await wrapper.vm.$getCategories();
    let categoryName = await categories.data[0].categoryName;

    await wrapper.setProps({categoryName: categoryName});
    let mockProps = wrapper.vm.$props.categoryName;

    expect(categoryName).toMatch('Beauty Product');
    expect(mockProps).toMatch(categoryName);
  });

  it('renders category link with categoryName prop', () => {
    const link = wrapper.find('li');
    
    expect(link.text()).toBe('Beauty Product');
  });

  it('renders multiple categoryCard links', () => {
    const links = wrapper.findAll('li');
    const card1 = links.at(0).text();
    const card2 = links.at(1).text();

    expect(links).toHaveLength(2);
    expect(card1).toBe('Beauty Product');
    expect(card2).toBe('Clothing');
  });

  it('renders image tag from category .img source', () => {
    const imgTag = wrapper.find('img');

    expect(imgTag.attributes().src).toContain('.img');
  });
});
  

