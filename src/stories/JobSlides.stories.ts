import JobSlides from './JobSlides.vue'
import { Story } from '@storybook/vue3'
import '../../.storybook/utils.css'

export default {
  title: 'JobSlides',
  component: JobSlides,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    onClick: {},
    jobs: {}
  }
}

const Template: Story<typeof JobSlides> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { JobSlides },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<job-slides v-bind="args" />'
})

export const Slides = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Slides.args = {
  jobs: [
    {
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
    },
    {
      id: '4383a3c7-c709-415e-ac29-569375b5ed8a',
      ngo: {
        id: 600799,
        name: 'Baptist Oi Kwan Social Service – Integrated Mental Health Services'
      },
      title: 'BOKSS - Testing Job',
      description: 'This is a testing job for BOKSS',
      recipients: ['REFUGEE'],
      imageUrls: [
        'https://storage.googleapis.com/salut-sit-bucket/jobs/4383a3c7-c709-415e-ac29-569375b5ed8a/image_1_1636019864.jpeg'
      ],
      quota: 180,
      remainingQuota: 177,
      acceptedApplications: 2,
      pendingApplications: 1,
      overallStart: '2021-11-08T07:00:00.000Z',
      overallEnd: '2021-12-11T09:00:00.000Z',
      location: 'Hong Kong'
    },
    {
      id: '214c2268-d4b4-4c12-ae3b-fc9c240bcc8d',
      ngo: {
        id: 601135,
        name: 'YCS Volunteer'
      },
      title: 'Caritas Testing Job',
      description: 'Testing',
      recipients: ['CHILDREN'],
      imageUrls: [
        'https://storage.googleapis.com/salut-sit-bucket/jobs/214c2268-d4b4-4c12-ae3b-fc9c240bcc8d/image_1_1636532660.jpeg'
      ],
      quota: 250,
      remainingQuota: 248,
      acceptedApplications: 2,
      pendingApplications: 0,
      overallStart: '2021-11-13T08:00:00.000Z',
      overallEnd: '2021-12-25T07:00:00.000Z',
      location: 'Central'
    },
    {
      id: '3cbda431-0062-43bd-be24-b46a34568d36',
      ngo: {
        id: 1,
        name: 'Social Career'
      },
      title: 'Pinapple Run Volunteer',
      description: 'testing',
      recipients: ['ELDERLY', 'ETHNIC_MINORITY'],
      imageUrls: [
        'https://storage.googleapis.com/salut-sit-bucket/jobs/3cbda431-0062-43bd-be24-b46a34568d36/image_1_1637825194.jpeg'
      ],
      quota: 40,
      remainingQuota: 39,
      acceptedApplications: 0,
      pendingApplications: 1,
      overallStart: '2021-11-25T05:00:00.000Z',
      overallEnd: '2021-12-31T06:00:00.000Z',
      location: 'Tai Koo Shing'
    },
    {
      id: 'c7ca576e-2b23-4973-8ead-f4eb35a72f1e',
      ngo: {
        id: 1,
        name: 'Social Career'
      },
      title: 'Cooking Class Assistance',
      description: 'testing',
      recipients: ['ELDERLY', 'ETHNIC_MINORITY'],
      imageUrls: [
        'https://storage.googleapis.com/salut-sit-bucket/jobs/c7ca576e-2b23-4973-8ead-f4eb35a72f1e/image_1_1637825238.jpeg'
      ],
      quota: 40,
      remainingQuota: 39,
      acceptedApplications: 1,
      pendingApplications: 0,
      overallStart: '2021-11-25T05:00:00.000Z',
      overallEnd: '2021-12-31T06:00:00.000Z',
      location: 'Tai Koo Shing'
    },
    {
      id: '67e52cd7-0e4f-44a0-a018-e127d4b655e2',
      ngo: {
        id: 600799,
        name: 'Baptist Oi Kwan Social Service – Integrated Mental Health Services'
      },
      title: 'BOKSS - Testing Recurring Job',
      description: 'Recurring Job Testing',
      recipients: ['CHILDREN'],
      imageUrls: [
        'https://storage.googleapis.com/salut-sit-bucket/jobs/67e52cd7-0e4f-44a0-a018-e127d4b655e2/image_1_1636094515.jpeg'
      ],
      quota: 10,
      remainingQuota: 7,
      acceptedApplications: 2,
      pendingApplications: 1,
      overallStart: '2021-11-05T04:00:00.000Z',
      overallEnd: '2021-12-04T06:00:00.000Z',
      location: 'Wan Chai'
    },
    {
      id: 'adf898ec-a953-4b13-8b96-9a3c2ed17c85',
      ngo: {
        id: 2,
        name: 'Social Career Youth Centre'
      },
      title: 'Inspector game volunteer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet ex vitae turpis facilisis efficitur. Cras ullamcorper fermentum tempus. Aliquam pretium id odio ac tempor. Vestibulum tempor metus pharetra dapibus varius. Pellentesque ut vehicula nunc. Suspendisse lacus erat, pretium eget sapien in, scelerisque dapibus sapien. Aenean sit amet elit hendrerit, pulvinar diam eu, gravida purus. Nulla facilisi. Vestibulum varius nisi sit amet enim lacinia, a pharetra ante aliquet. Pellentesque massa lorem, malesuada ac hendrerit sit amet, hendrerit ut est.\n\nUt sollicitudin dapibus orci, in pharetra orci fermentum ut. Nam sit amet lectus erat. Phasellus tristique interdum fringilla. Nunc auctor tempor ante lobortis tempus. Nunc ac tincidunt velit. Fusce mollis mollis neque, sit amet dignissim sem molestie a. Nulla mattis nec magna ut euismod. In ut ligula sit amet orci fermentum blandit.',
      recipients: ['IN_PATIENTS', 'MENTAL_ILLNESS_RECOVERY', 'REHABILITATED_PEOPLE'],
      imageUrls: [
        'https://storage.googleapis.com/salut-sit-bucket/jobs/adf898ec-a953-4b13-8b96-9a3c2ed17c85/image_1_1633335883.png'
      ],
      quota: -1,
      remainingQuota: -5,
      acceptedApplications: 4,
      pendingApplications: 0,
      overallStart: '2021-10-07T09:00:00.000Z',
      overallEnd: '2021-12-01T10:00:00.000Z',
      location: 'Kowloon'
    },
    {
      id: '557c6868-e12e-4980-aa71-9ef1a465ebc6',
      ngo: {
        id: 1,
        name: 'Social Career'
      },
      title: 'Sports Day helper',
      description: 'testing',
      recipients: ['ELDERLY', 'ETHNIC_MINORITY'],
      imageUrls: [
        'https://storage.googleapis.com/salut-sit-bucket/jobs/557c6868-e12e-4980-aa71-9ef1a465ebc6/image_1_1637825284.jpeg'
      ],
      quota: 40,
      remainingQuota: 39,
      acceptedApplications: 1,
      pendingApplications: 0,
      overallStart: '2021-11-25T05:00:00.000Z',
      overallEnd: '2021-12-31T06:00:00.000Z',
      location: 'Tai Koo Shing'
    },
    {
      id: 'cd08ae81-4152-4384-9ae3-b7a4b6bbd0e7',
      ngo: {
        id: 2,
        name: 'Social Career Youth Centre'
      },
      title: 'Beach Cleanup',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ',
      recipients: ['CHILDREN', 'YOUTH', 'WOMEN'],
      imageUrls: [
        'https://storage.googleapis.com/salut-sit-bucket/jobs/cd08ae81-4152-4384-9ae3-b7a4b6bbd0e7/image_1_1635146434.jpeg',
        'https://storage.googleapis.com/salut-sit-bucket/null'
      ],
      quota: 1270,
      remainingQuota: 1254,
      acceptedApplications: 1,
      pendingApplications: 15,
      overallStart: '2021-10-25T07:00:00.000Z',
      overallEnd: '2022-06-30T14:00:00.000Z',
      location: 'Tai Wo'
    },
    {
      id: '03a556cd-02c2-4868-9701-b48621f40dbc',
      ngo: {
        id: 2,
        name: 'Social Career Youth Centre'
      },
      title: 'BOKSS - Testing Job',
      description: 'This is a testing job for BOKSS',
      recipients: ['REFUGEE'],
      imageUrls: [
        'https://storage.googleapis.com/salut-sit-bucket/jobs/03a556cd-02c2-4868-9701-b48621f40dbc/image_1_1636081346.jpeg'
      ],
      quota: 180,
      remainingQuota: 178,
      acceptedApplications: 0,
      pendingApplications: 2,
      overallStart: '2021-11-08T07:00:00.000Z',
      overallEnd: '2021-12-11T09:00:00.000Z',
      location: 'Hong Kong'
    }
  ]
}
