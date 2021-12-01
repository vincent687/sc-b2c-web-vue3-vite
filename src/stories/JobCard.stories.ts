import JobCard from './JobCard.vue'
import { Story } from '@storybook/vue3'
import '../../.storybook/utils.css'

export default {
  title: 'JobCard',
  component: JobCard,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    onClick: {},
    job: {},
    textColor: { control: 'color' }
  }
}

const Template: Story<typeof JobCard> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { JobCard },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<job-card v-bind="args" />'
})

export const RedTag = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
RedTag.args = {
  textColor: 'red',
  job: {
    id: 'b99c0f6d-1709-48cf-8f92-282946aa50ee',
    ngo: {
      id: 601135,
      name: 'YCS Volunteer'
    },
    title: 'Caritas Test Job - Recurring',
    description: 'This is a test recurring job. ',
    recipients: ['CHILDREN'],
    imageUrls: [
      'https://storage.googleapis.com/salut-sit-bucket/jobs/b99c0f6d-1709-48cf-8f92-282946aa50ee/image_1_1636424787.jpeg'
    ],
    quota: 20,
    remainingQuota: 13,
    acceptedApplications: 6,
    pendingApplications: 1,
    overallStart: '2021-11-09T03:00:00.000Z',
    overallEnd: '2021-12-31T05:00:00.000Z',
    location: 'Online'
  }
}
