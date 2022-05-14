import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import TopBar from '../TopBar.vue';

describe('TopBar', () => {
  it('renders properly', () => {
    const wrapper = mount(TopBar);
    expect(wrapper.text()).toContain('Home');
    expect(wrapper.text()).toContain('Articles');
    expect(wrapper.text()).toContain('Contact');
    expect(wrapper.text()).toContain('Boat');
  });
});
