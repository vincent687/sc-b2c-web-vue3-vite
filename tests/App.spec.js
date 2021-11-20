import { mount } from '@vue/test-utils'
import App from '../src/App.vue'
import flushPromises from 'flush-promises'
import { jest } from '@jest/globals'

describe('App.spec.js', function () {
  var that = this
  it('renders', async () => {
    const wrapper = mount(App, { attachTo: '#root' })
    // that.timeout(300000000)
    // expect(wrapper.html()).to.contain('vincent')
    // expect(wrapper.text()).toBe('value')
    // await flushPromises()
    // expect(wrapper.text()).to.contain('vincent')

    jest.mock('axios', () => ({
      get: Promise.resolve('value')
    }))

    await flushPromises()
    expect(wrapper.text()).to.contain('vincent')
    //expect(wrapper.text())
    setTimeout(() => {
      console.log(wrapper.text())
      // expect(wrapper.text()).to.contain('fsdsdfsdf')
      console.log(wrapper.text())
    }, 100000)
    // await wrapper.vm.$nextTick(() => {
    //   console.log(wrapper.text())
    //   setTimeout(() => {
    //     // console.log(wrapper.text())
    //     expect(wrapper.text()).to.contain('fsdsdfsdf')
    //     console.log(wrapper.text())
    //   }, 100000)
    //   // expect(wrapper.text()).to.contain('vincent')
    //   //done()
    // })
  })
})

// describe('App.spec.js', () => {
//   it('renders', (timeout) => {
//     timeout(30000)
//     const wrapper = mount(App, { attachTo: '#root' })
//     expect(wrapper.html()).to.contain('vincent')
//   })
// })
