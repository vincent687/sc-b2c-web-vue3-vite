/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { SchemaUnionsKey } from 'gqty'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  AdditionalQuestionValue: any
  Date: any
  DateTime: string
  Object: any
  /** Date custom scalar type */
  UnixTimestamp: any
}

export interface AdditionalQuestionInput {
  key: Scalars['String']
  value?: InputMaybe<Scalars['AdditionalQuestionValue']>
}

export enum AgeOption {
  gte18 = 'gte18',
  lt18 = 'lt18'
}

export enum ApplicationRecordFilter {
  confirmedSchedule = 'confirmedSchedule',
  finishedRecord = 'finishedRecord',
  otherRecord = 'otherRecord',
  pendingSchedule = 'pendingSchedule'
}

export enum ApplicationRecordType {
  eventApplication = 'eventApplication',
  eventAttendance = 'eventAttendance',
  jobAttendance = 'jobAttendance'
}

export interface CreateEventApplicationInput {
  additionalQuestions?: InputMaybe<Array<InputMaybe<AdditionalQuestionInput>>>
  appliedItems: Array<InputMaybe<EventAppliedItemInput>>
  chineseName?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  eventId: Scalars['ID']
  firstName?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  mobileNumber?: InputMaybe<Scalars['String']>
  optionId: Scalars['ID']
  parentInfo?: InputMaybe<ParentInfoInput>
  parentalConsent?: InputMaybe<Scalars['Boolean']>
  paymentId: Scalars['ID']
  paymentStatus?: InputMaybe<Scalars['String']>
  paymentTypeId?: InputMaybe<Scalars['ID']>
  tnc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface CreateEventPaymentInput {
  appliedItems: Array<InputMaybe<EventAppliedItemInput>>
  chineseName?: InputMaybe<Scalars['String']>
  eventId: Scalars['ID']
  firstName?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  paymentMethod?: InputMaybe<Scalars['String']>
}

export interface CreateJobApplicationInput {
  additionalQuestions?: InputMaybe<Array<InputMaybe<AdditionalQuestionInput>>>
  chineseName?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  firstName?: InputMaybe<Scalars['String']>
  jobId: Scalars['ID']
  lastName?: InputMaybe<Scalars['String']>
  mobileNumber?: InputMaybe<Scalars['String']>
  parentInfo?: InputMaybe<ParentInfoInput>
  parentalConsent?: InputMaybe<Scalars['Boolean']>
  timeslots?: InputMaybe<Scalars['Object']>
  tnc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export enum DayOfWeekOption {
  hasWeekday = 'hasWeekday',
  hasWeekend = 'hasWeekend'
}

export enum DestinationType {
  app = 'app',
  web = 'web'
}

export interface EdmInput {
  desc: Scalars['String']
  key: Scalars['String']
}

export enum EventAdmissionType {
  checkIn = 'checkIn',
  ticket = 'ticket'
}

export interface EventAppliedItemInput {
  feeTypeId: Scalars['String']
  quantity?: InputMaybe<Scalars['Int']>
}

export enum EventApproval {
  instant = 'instant',
  manual = 'manual'
}

export enum EventFeeTypeAvailability {
  available = 'available',
  availableSoon = 'availableSoon',
  notAvailable = 'notAvailable',
  soldOut = 'soldOut'
}

export enum EventFilterMode {
  AND = 'AND',
  OR = 'OR'
}

export enum EventOptionType {
  custom = 'custom',
  date = 'date',
  time = 'time'
}

export enum EventPaymentTypeGroup {
  payAtTheDoor = 'payAtTheDoor',
  stripe = 'stripe'
}

export enum EventQuotaType {
  noLimit = 'noLimit',
  totalQuota = 'totalQuota'
}

export enum EventStatusCode {
  cancelled = 'cancelled',
  closed = 'closed',
  completed = 'completed',
  draft = 'draft',
  full = 'full',
  published = 'published'
}

export enum EventTypeCode {
  activity = 'activity',
  service = 'service'
}

export interface EventsFilter {
  activityThemes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  activityTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  dayOfWeekOption?: InputMaybe<DayOfWeekOption>
  districtCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  eventType?: InputMaybe<EventTypeCode>
  filterMode?: InputMaybe<EventFilterMode>
  isVirtual?: InputMaybe<Scalars['Boolean']>
  ngoId?: InputMaybe<Scalars['Int']>
  regionCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  serviceTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  subDistrictCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  targetAudiences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface FindApplicationRecordParams {
  applicationRecordFilter?: InputMaybe<ApplicationRecordFilter>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export interface FindEventApplicationRecordParams {
  applicationRecordFilter?: InputMaybe<ApplicationRecordFilter>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export interface FindEventApplicationsParams {
  eventId?: InputMaybe<Scalars['ID']>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export interface FindEventAppliedSchedulesParams {
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export interface FindEventAttendanceParams {
  filter?: InputMaybe<ApplicationRecordFilter>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export interface FindEventsParams {
  filter?: InputMaybe<EventsFilter>
  includePast?: InputMaybe<Scalars['Boolean']>
  pageSize?: InputMaybe<Scalars['Int']>
  searchText?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
}

export interface FindJobApplicationsParams {
  jobId?: InputMaybe<Scalars['String']>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export interface FindJobAppliedTimeSlotsParams {
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export interface FindJobAttendanceParams {
  dateFilter?: InputMaybe<Scalars['String']>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
  statuses: Array<Scalars['String']>
}

export interface FindJobsParams {
  filter?: InputMaybe<JobsFilter>
  includePast?: InputMaybe<Scalars['Boolean']>
  pageSize?: InputMaybe<Scalars['Int']>
  searchText?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
}

export interface FindNgosParams {
  filter?: InputMaybe<NgosFilter>
  pageSize?: InputMaybe<Scalars['Int']>
  searchText?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
}

export interface FindUnitsParams {
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export enum Gender {
  female = 'female',
  male = 'male',
  notProvided = 'notProvided'
}

export enum JobAttendanceStatus {
  absent = 'absent',
  accepted = 'accepted',
  cancelled = 'cancelled',
  declined = 'declined',
  onHold = 'onHold',
  pending = 'pending',
  reserved = 'reserved'
}

export interface JobsFilter {
  ageOption?: InputMaybe<AgeOption>
  causes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  dayOfWeekOption?: InputMaybe<DayOfWeekOption>
  districtCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  isVirtual?: InputMaybe<Scalars['Boolean']>
  languages?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  ngoId?: InputMaybe<Scalars['Int']>
  recipients?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  regionCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  sdgoals?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  subDistrictCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  volunteerFunctions?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export enum Locale {
  en = 'en',
  zhHans = 'zhHans',
  zhHant = 'zhHant'
}

export interface NgosFilter {
  causes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  districtCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  recipients?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  regionCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  sdgoals?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  subDistrictCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface ParentInfoInput {
  acceptCode?: InputMaybe<Scalars['String']>
  declineCode?: InputMaybe<Scalars['String']>
  email: Scalars['String']
  name: Scalars['String']
  relationship?: InputMaybe<Scalars['String']>
}

export enum ParentalConsentStatus {
  accepted = 'accepted',
  cancelled = 'cancelled',
  declined = 'declined',
  onHold = 'onHold'
}

export enum PaymentCategory {
  adhoc = 'adhoc',
  event = 'event',
  membership = 'membership',
  volunteer = 'volunteer'
}

export enum SocialCvItemType {
  event = 'event',
  info = 'info',
  job = 'job'
}

export interface SocialCvParams {
  exclude?: InputMaybe<Array<InputMaybe<SocialCvItemType>>>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export interface UpdateEventApplicationInput {
  appliedItems?: InputMaybe<Array<InputMaybe<EventAppliedItemInput>>>
  feeTypeId?: InputMaybe<Scalars['ID']>
  optionId?: InputMaybe<Scalars['ID']>
  paymentId?: InputMaybe<Scalars['ID']>
  paymentStatus?: InputMaybe<Scalars['String']>
  paymentTypeId?: InputMaybe<Scalars['ID']>
}

export interface UpdateJobApplicationInput {
  timeslots?: InputMaybe<Scalars['Object']>
}

export interface UpdateProfileInput {
  chineseName?: InputMaybe<Scalars['String']>
  dob?: InputMaybe<Scalars['Date']>
  edm?: InputMaybe<Array<InputMaybe<EdmInput>>>
  email?: InputMaybe<Scalars['String']>
  firstName?: InputMaybe<Scalars['String']>
  gender?: InputMaybe<Gender>
  lastName?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Locale>
  mobileNumber?: InputMaybe<Scalars['String']>
}

export const scalarsEnumsHash: import('gqty').ScalarsEnumsHash = {
  AdditionalQuestionValue: true,
  AgeOption: true,
  ApplicationRecordFilter: true,
  ApplicationRecordType: true,
  Boolean: true,
  Date: true,
  DateTime: true,
  DayOfWeekOption: true,
  DestinationType: true,
  EventAdmissionType: true,
  EventApproval: true,
  EventFeeTypeAvailability: true,
  EventFilterMode: true,
  EventOptionType: true,
  EventPaymentTypeGroup: true,
  EventQuotaType: true,
  EventStatusCode: true,
  EventTypeCode: true,
  Float: true,
  Gender: true,
  ID: true,
  Int: true,
  JobAttendanceStatus: true,
  Locale: true,
  Object: true,
  ParentalConsentStatus: true,
  PaymentCategory: true,
  SocialCvItemType: true,
  String: true,
  UnixTimestamp: true
}
export const generatedSchema = {
  AdditionalQuestionData: {
    __typename: { __type: 'String!' },
    key: { __type: 'String!' },
    value: { __type: 'AdditionalQuestionValue' }
  },
  AdditionalQuestionInput: {
    key: { __type: 'String!' },
    value: { __type: 'AdditionalQuestionValue' }
  },
  AppBanner: {
    __typename: { __type: 'String!' },
    destinationType: { __type: 'DestinationType' },
    destinationUrl: { __type: 'String' },
    eventId: { __type: 'String' },
    id: { __type: 'String!' },
    imageUrl: { __type: 'String!' },
    jobId: { __type: 'String' },
    position: { __type: 'Int!' }
  },
  AppBanners: {
    __typename: { __type: 'String!' },
    data: { __type: '[AppBanner]' },
    total: { __type: 'Int' }
  },
  AppInfo: {
    __typename: { __type: 'String!' },
    android: { __type: 'AppVersion!' },
    iOS: { __type: 'AppVersion!' },
    updatedAt: { __type: 'DateTime!' }
  },
  AppVersion: {
    __typename: { __type: 'String!' },
    latestVersion: { __type: 'String!' },
    minimumVersion: { __type: 'String!' }
  },
  ApplicationInfo: {
    __typename: { __type: 'String!' },
    approval: { __type: 'EventApproval' },
    maxAge: { __type: 'Int' },
    minAge: { __type: 'Int' }
  },
  ApplicationRecord: { __typename: { __type: 'String!' }, $on: { __type: '$ApplicationRecord!' } },
  CodeValue: {
    __typename: { __type: 'String!' },
    code: { __type: 'String!' },
    name: { __type: 'String!' }
  },
  CodeValues: {
    __typename: { __type: 'String!' },
    data: { __type: '[CodeValue!]' },
    total: { __type: 'Int!' }
  },
  ConnectInvite: {
    __typename: { __type: 'String!' },
    code: { __type: 'String!' },
    ngo: { __type: 'Ngo!' },
    ngoId: { __type: 'Int!' }
  },
  CreateEventApplicationInput: {
    additionalQuestions: { __type: '[AdditionalQuestionInput]' },
    appliedItems: { __type: '[EventAppliedItemInput]!' },
    chineseName: { __type: 'String' },
    email: { __type: 'String' },
    eventId: { __type: 'ID!' },
    firstName: { __type: 'String' },
    lastName: { __type: 'String' },
    mobileNumber: { __type: 'String' },
    optionId: { __type: 'ID!' },
    parentInfo: { __type: 'ParentInfoInput' },
    parentalConsent: { __type: 'Boolean' },
    paymentId: { __type: 'ID!' },
    paymentStatus: { __type: 'String' },
    paymentTypeId: { __type: 'ID' },
    tnc: { __type: '[String]' }
  },
  CreateEventPaymentInput: {
    appliedItems: { __type: '[EventAppliedItemInput]!' },
    chineseName: { __type: 'String' },
    eventId: { __type: 'ID!' },
    firstName: { __type: 'String' },
    lastName: { __type: 'String' },
    paymentMethod: { __type: 'String' }
  },
  CreateJobApplicationInput: {
    additionalQuestions: { __type: '[AdditionalQuestionInput]' },
    chineseName: { __type: 'String' },
    email: { __type: 'String' },
    firstName: { __type: 'String' },
    jobId: { __type: 'ID!' },
    lastName: { __type: 'String' },
    mobileNumber: { __type: 'String' },
    parentInfo: { __type: 'ParentInfoInput' },
    parentalConsent: { __type: 'Boolean' },
    timeslots: { __type: 'Object' },
    tnc: { __type: '[String]' }
  },
  District: {
    __typename: { __type: 'String!' },
    code: { __type: 'String' },
    name: { __type: 'String' },
    regionCode: { __type: 'String' }
  },
  Districts: {
    __typename: { __type: 'String!' },
    data: { __type: '[District]' },
    total: { __type: 'Int' }
  },
  Edm: {
    __typename: { __type: 'String!' },
    desc: { __type: 'String!' },
    key: { __type: 'String!' }
  },
  EdmInput: { desc: { __type: 'String!' }, key: { __type: 'String!' } },
  Event: {
    __typename: { __type: 'String!' },
    acceptedApplications: { __type: 'Int!' },
    activityTheme: { __type: 'String' },
    activityThemes: { __type: '[String]' },
    activityType: { __type: 'String' },
    additionalQuestions: { __type: '[FieldConfig]' },
    addressLine: { __type: 'String' },
    admissionForAllOptions: { __type: 'Boolean!' },
    admissionType: { __type: 'EventAdmissionType!' },
    applicationEnd: { __type: 'DateTime' },
    applicationInfo: { __type: 'ApplicationInfo' },
    applicationRestrictions: { __type: '[String]' },
    applicationStart: { __type: 'DateTime' },
    contact: { __type: 'String' },
    contactEmail: { __type: 'String' },
    contactPhone: { __type: 'String' },
    createdAt: { __type: 'DateTime' },
    description: { __type: 'String!' },
    districtCode: { __type: 'String' },
    eventLink: { __type: 'String' },
    eventType: { __type: 'EventTypeCode' },
    hasWeekday: { __type: 'Boolean' },
    hasWeekend: { __type: 'Boolean' },
    id: { __type: 'String' },
    imageUrls: { __type: '[String]' },
    isFull: { __type: 'Boolean!' },
    isVirtual: { __type: 'Boolean' },
    location: { __type: 'String' },
    mapLatLong: { __type: 'String' },
    ngo: { __type: 'Ngo' },
    ngoId: { __type: 'Int' },
    optionType: { __type: 'EventOptionType' },
    options: { __type: '[EventOption]' },
    overallEnd: { __type: 'DateTime' },
    overallStart: { __type: 'DateTime' },
    paymentTypes: { __type: '[EventPaymentType]' },
    pendingApplications: { __type: 'Int' },
    progress: { __type: 'String!' },
    regionCode: { __type: 'String' },
    remainingQuota: { __type: 'Int' },
    remarks: { __type: 'String' },
    serviceType: { __type: 'String' },
    status: { __type: 'EventStatusCode' },
    subDistrictCode: { __type: 'String' },
    targetAudience: { __type: 'String' },
    targetAudiences: { __type: '[String]' },
    title: { __type: 'String!' },
    totalApplications: { __type: 'Int!' },
    totalQuota: { __type: 'Int' },
    updatedAt: { __type: 'DateTime' }
  },
  EventApplication: {
    __typename: { __type: 'String!' },
    additionalQuestions: { __type: '[AdditionalQuestionData]' },
    appliedItems: { __type: '[EventAppliedItem]' },
    appliedSchedules: { __type: '[EventAppliedSchedule]' },
    chineseName: { __type: 'String' },
    createdAt: { __type: 'DateTime!' },
    email: { __type: 'String' },
    event: { __type: 'Event!' },
    eventId: { __type: 'ID!' },
    firstName: { __type: 'String' },
    id: { __type: 'ID!' },
    lastName: { __type: 'String' },
    mobileNumber: { __type: 'String' },
    option: { __type: 'EventOption!' },
    optionId: { __type: 'String!' },
    parentInfo: { __type: 'ParentInfo' },
    paymentId: { __type: 'ID!' },
    paymentStatus: { __type: 'String!' },
    paymentType: { __type: 'EventPaymentType' },
    paymentTypeId: { __type: 'ID' },
    reason: { __type: 'String' },
    status: { __type: 'String!' },
    type: { __type: 'String' }
  },
  EventAppliedItem: {
    __typename: { __type: 'String!' },
    eventApplicationId: { __type: 'String!' },
    eventId: { __type: 'String!' },
    feeType: { __type: 'EventFeeType!' },
    feeTypeId: { __type: 'ID!' },
    id: { __type: 'ID!' },
    quantity: { __type: 'Int' },
    ticketItems: { __type: '[EventTicketItem]' }
  },
  EventAppliedItemInput: { feeTypeId: { __type: 'String!' }, quantity: { __type: 'Int' } },
  EventAppliedSchedule: {
    __typename: { __type: 'String!' },
    event: { __type: 'Event' },
    eventApplication: { __type: 'EventApplication' },
    eventApplicationId: { __type: 'String!' },
    id: { __type: 'ID!' },
    schedule: { __type: 'EventSchedule' },
    scheduleId: { __type: 'ID!' }
  },
  EventAttendance: {
    __typename: { __type: 'String!' },
    appliedSchedule: { __type: 'EventAppliedSchedule' },
    appliedScheduleId: { __type: 'ID!' },
    id: { __type: 'ID!' },
    startDate: { __type: 'String' },
    type: { __type: 'String' }
  },
  EventFeeType: {
    __typename: { __type: 'String!' },
    applicationEnd: { __type: 'DateTime' },
    applicationStart: { __type: 'DateTime' },
    availability: { __type: 'EventFeeTypeAvailability!' },
    description: { __type: 'String' },
    fee: { __type: 'Int' },
    id: { __type: 'String!' },
    isFull: { __type: 'Boolean!' },
    maxPurchase: { __type: 'Int' },
    minPurchase: { __type: 'Int' },
    numOfPeople: { __type: 'Int' },
    option: { __type: 'EventOption' },
    pendingQuota: { __type: 'Int' },
    quota: { __type: 'Int' },
    remainingQuota: { __type: 'Int' },
    title: { __type: 'String!' },
    usedQuota: { __type: 'Int!' }
  },
  EventOption: {
    __typename: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    endDate: { __type: 'String' },
    endTime: { __type: 'String' },
    event: { __type: 'Event' },
    feeTypes: { __type: '[EventFeeType]' },
    frequency: { __type: 'String' },
    id: { __type: 'String' },
    isFull: { __type: 'Boolean!' },
    isSingleDay: { __type: 'Boolean' },
    overallEnd: { __type: 'DateTime' },
    overallStart: { __type: 'DateTime' },
    pendingQuota: { __type: 'Int!' },
    position: { __type: 'Int' },
    quotaByFeeType: { __type: 'Boolean!' },
    quotaType: { __type: 'EventQuotaType' },
    recurrenceExceptionDates: { __type: '[String]' },
    recurrenceFrequency: { __type: 'Int' },
    recurrenceMonthlyMode: { __type: 'String' },
    recurrenceRepeatDayOfMonth: { __type: '[Int]' },
    recurrenceRepeatDayOfWeek: { __type: 'String' },
    recurrenceRepeatWeek: { __type: 'String' },
    recurrenceType: { __type: 'String' },
    recurrenceWeekdays: { __type: '[String]' },
    remainingQuota: { __type: 'Int' },
    remarks: { __type: 'String!' },
    schedules: { __type: '[EventSchedule]' },
    startDate: { __type: 'String' },
    startTime: { __type: 'String' },
    title: { __type: 'String' },
    totalApplications: { __type: 'Int!' },
    totalQuota: { __type: 'Int' },
    updatedAt: { __type: 'DateTime' },
    usedQuota: { __type: 'Int!' }
  },
  EventPaymentType: {
    __typename: { __type: 'String!' },
    group: { __type: 'EventPaymentTypeGroup' },
    id: { __type: 'String' },
    instruction: { __type: 'String' },
    paymentMethod: { __type: 'String' },
    title: { __type: 'String!' }
  },
  EventRundownSession: {
    __typename: { __type: 'String!' },
    description: { __type: 'String' },
    endTime: { __type: 'String' },
    id: { __type: 'String' },
    startTime: { __type: 'String' },
    title: { __type: 'String' }
  },
  EventSchedule: {
    __typename: { __type: 'String!' },
    endDate: { __type: 'String' },
    endTime: { __type: 'String' },
    id: { __type: 'String' },
    isAllDay: { __type: 'Boolean' },
    isDateTBC: { __type: 'Boolean' },
    isSingleDay: { __type: 'Boolean' },
    isTimeTBC: { __type: 'Boolean' },
    option: { __type: 'EventOption' },
    optionId: { __type: 'String' },
    position: { __type: 'Int' },
    recurrenceExceptionDates: { __type: '[String]' },
    recurrenceFrequency: { __type: 'Int' },
    recurrenceMonthlyMode: { __type: 'String' },
    recurrenceRepeatDayOfMonth: { __type: '[Int]' },
    recurrenceRepeatDayOfWeek: { __type: 'String' },
    recurrenceRepeatWeek: { __type: 'String' },
    recurrenceType: { __type: 'String' },
    recurrenceWeekdays: { __type: '[String]' },
    rundownSessions: { __type: '[EventRundownSession]' },
    startDate: { __type: 'String' },
    startTime: { __type: 'String' }
  },
  EventTicketItem: {
    __typename: { __type: 'String!' },
    applicationId: { __type: 'ID!' },
    appliedItemId: { __type: 'ID!' },
    eventId: { __type: 'ID!' },
    id: { __type: 'ID!' },
    optionId: { __type: 'ID!' },
    qrCodeKey: { __type: 'String!' },
    redeemedAt: { __type: 'DateTime' },
    ticketNo: { __type: 'String!' }
  },
  EventsFilter: {
    activityThemes: { __type: '[String]' },
    activityTypes: { __type: '[String]' },
    dayOfWeekOption: { __type: 'DayOfWeekOption' },
    districtCodes: { __type: '[String]' },
    eventType: { __type: 'EventTypeCode' },
    filterMode: { __type: 'EventFilterMode' },
    isVirtual: { __type: 'Boolean' },
    ngoId: { __type: 'Int' },
    regionCodes: { __type: '[String]' },
    serviceTypes: { __type: '[String]' },
    subDistrictCodes: { __type: '[String]' },
    targetAudiences: { __type: '[String]' }
  },
  FieldConfig: {
    __typename: { __type: 'String!' },
    desc: { __type: 'String!' },
    key: { __type: 'String!' },
    mandatory: { __type: 'Boolean' },
    options: { __type: '[OptionData]' },
    type: { __type: 'String!' }
  },
  FindApplicationRecordParams: {
    applicationRecordFilter: { __type: 'ApplicationRecordFilter' },
    page: { __type: 'Int' },
    pageSize: { __type: 'Int' }
  },
  FindEventApplicationRecordParams: {
    applicationRecordFilter: { __type: 'ApplicationRecordFilter' },
    page: { __type: 'Int' },
    pageSize: { __type: 'Int' }
  },
  FindEventApplicationsParams: {
    eventId: { __type: 'ID' },
    page: { __type: 'Int' },
    pageSize: { __type: 'Int' }
  },
  FindEventAppliedSchedulesParams: { page: { __type: 'Int' }, pageSize: { __type: 'Int' } },
  FindEventAttendanceParams: {
    filter: { __type: 'ApplicationRecordFilter' },
    page: { __type: 'Int' },
    pageSize: { __type: 'Int' }
  },
  FindEventQuery: { __typename: { __type: 'String!' }, search: { __type: 'String' } },
  FindEventsParams: {
    filter: { __type: 'EventsFilter' },
    includePast: { __type: 'Boolean' },
    pageSize: { __type: 'Int' },
    searchText: { __type: 'String' },
    skip: { __type: 'Int' },
    sort: { __type: 'String' }
  },
  FindJobApplicationsParams: {
    jobId: { __type: 'String' },
    page: { __type: 'Int' },
    pageSize: { __type: 'Int' }
  },
  FindJobAppliedTimeSlotsParams: { page: { __type: 'Int' }, pageSize: { __type: 'Int' } },
  FindJobAttendanceParams: {
    dateFilter: { __type: 'String' },
    page: { __type: 'Int' },
    pageSize: { __type: 'Int' },
    statuses: { __type: '[String!]!' }
  },
  FindJobQuery: { __typename: { __type: 'String!' }, search: { __type: 'String' } },
  FindJobsParams: {
    filter: { __type: 'JobsFilter' },
    includePast: { __type: 'Boolean' },
    pageSize: { __type: 'Int' },
    searchText: { __type: 'String' },
    skip: { __type: 'Int' },
    sort: { __type: 'String' }
  },
  FindNgosParams: {
    filter: { __type: 'NgosFilter' },
    pageSize: { __type: 'Int' },
    searchText: { __type: 'String' },
    skip: { __type: 'Int' },
    sort: { __type: 'String' }
  },
  FindUnitsParams: { page: { __type: 'Int' }, pageSize: { __type: 'Int' } },
  Job: {
    __typename: { __type: 'String!' },
    acceptedApplications: { __type: 'Int' },
    acceptedQuota: { __type: 'Int' },
    additionalQuestions: { __type: '[FieldConfig]' },
    applicationEnd: { __type: 'DateTime' },
    applicationRestrictions: { __type: '[String]' },
    applicationStart: { __type: 'DateTime' },
    causes: { __type: '[String]' },
    contact: { __type: 'String' },
    contactEmail: { __type: 'String' },
    contactPhone: { __type: 'String' },
    createdAt: { __type: 'DateTime' },
    description: { __type: 'String' },
    districtCode: { __type: 'String' },
    feeDetail: { __type: 'String' },
    groupApply: { __type: 'Boolean' },
    id: { __type: 'String' },
    imageUrls: { __type: '[String]' },
    isVirtual: { __type: 'Boolean' },
    jobLink: { __type: 'String' },
    languageOther: { __type: 'String' },
    languages: { __type: '[String]' },
    location: { __type: 'String' },
    ngo: { __type: 'Ngo' },
    ngoId: { __type: 'Int' },
    overallEnd: { __type: 'DateTime' },
    overallStart: { __type: 'DateTime' },
    parentalConsent: { __type: 'Boolean' },
    pcAge: { __type: 'Int' },
    pendingApplications: { __type: 'Int' },
    prerequisite: { __type: 'JobPrerequisite' },
    progress: { __type: 'String' },
    quota: { __type: 'Int' },
    recipients: { __type: '[String]' },
    regionCode: { __type: 'String' },
    remainingQuota: { __type: 'Int' },
    remarks: { __type: 'String' },
    sdgs: { __type: '[String]' },
    sessions: { __type: '[JobSession]' },
    skills: { __type: '[String]' },
    subDistrictCode: { __type: 'String' },
    title: { __type: 'String!' },
    updatedAt: { __type: 'DateTime' },
    volunteerFunctions: { __type: '[String]' }
  },
  JobApplication: {
    __typename: { __type: 'String!' },
    additionalQuestions: { __type: '[AdditionalQuestionData]' },
    appliedTimeSlots: { __type: '[JobAppliedTimeslot]' },
    attendances: { __type: '[JobAttendance]' },
    chineseName: { __type: 'String' },
    createdAt: { __type: 'DateTime' },
    email: { __type: 'String' },
    firstName: { __type: 'String' },
    id: { __type: 'ID!' },
    job: { __type: 'Job' },
    jobId: { __type: 'ID!' },
    lastName: { __type: 'String' },
    mobileNumber: { __type: 'String' },
    parentInfo: { __type: 'ParentInfo' },
    parentalConsent: { __type: 'Boolean' },
    reason: { __type: 'String' },
    status: { __type: 'String!' }
  },
  JobAppliedTimeslot: {
    __typename: { __type: 'String!' },
    id: { __type: 'ID!' },
    job: { __type: 'Job' },
    jobApplication: { __type: 'JobApplication' },
    jobApplicationId: { __type: 'String!' },
    status: { __type: 'String!' },
    timeslot: { __type: 'JobTimeslot' },
    timeslotId: { __type: 'ID!' }
  },
  JobAttendance: {
    __typename: { __type: 'String!' },
    absent: { __type: 'Boolean' },
    absentReason: { __type: 'String' },
    appliedTimeslot: { __type: 'JobAppliedTimeslot' },
    appliedTimeslotId: { __type: 'ID!' },
    attendances: { __type: '[JobAttendance]' },
    endDate: { __type: 'String' },
    endTime: { __type: 'DateTime' },
    id: { __type: 'ID!' },
    isAllDay: { __type: 'Boolean' },
    isSingleDay: { __type: 'Boolean' },
    isTimeTBC: { __type: 'Boolean' },
    isdateTBC: { __type: 'Boolean' },
    startDate: { __type: 'String' },
    startTime: { __type: 'DateTime' },
    status: { __type: 'String!' },
    timeslotInstance: { __type: 'TimeslotInstance' },
    timeslotInstanceId: { __type: 'ID!' },
    type: { __type: 'String' }
  },
  JobLocation: {
    __typename: { __type: 'String!' },
    address: { __type: 'String!' },
    lat: { __type: 'Float!' },
    lng: { __type: 'Float!' },
    name: { __type: 'String!' }
  },
  JobPrerequisite: {
    __typename: { __type: 'String!' },
    maxAge: { __type: 'Int' },
    minAge: { __type: 'Int' }
  },
  JobSession: {
    __typename: { __type: 'String!' },
    attendanceRule: { __type: 'String' },
    attendanceRuleAmount: { __type: 'Int' },
    frequency: { __type: 'String' },
    id: { __type: 'String' },
    position: { __type: 'Int' },
    timeslots: { __type: '[JobTimeslot]' },
    title: { __type: 'String!' },
    type: { __type: 'String' }
  },
  JobTimeslot: {
    __typename: { __type: 'String!' },
    address: { __type: 'MultiLangText' },
    addressLine: { __type: 'String' },
    districtCode: { __type: 'String' },
    endDate: { __type: 'DateTime' },
    endTime: { __type: 'DateTime' },
    id: { __type: 'String' },
    isAllDay: { __type: 'Boolean' },
    isSingleDay: { __type: 'Boolean' },
    isTimeTBC: { __type: 'Boolean' },
    isVirtual: { __type: 'Boolean' },
    isdateTBC: { __type: 'Boolean' },
    mapLatLong: { __type: 'String' },
    quota: { __type: 'Int' },
    recurrenceExceptionDates: { __type: '[Date]' },
    recurrenceFrequency: { __type: 'Int' },
    recurrenceMonthlyMode: { __type: 'String' },
    recurrenceRepeatDayOfMonth: { __type: '[Int]' },
    recurrenceRepeatDayOfWeek: { __type: 'String' },
    recurrenceRepeatWeek: { __type: 'String' },
    recurrenceType: { __type: 'String' },
    recurrenceWeekdays: { __type: '[String]' },
    regionCode: { __type: 'String' },
    session: { __type: 'JobSession' },
    sessionId: { __type: 'String' },
    startDate: { __type: 'DateTime' },
    startTime: { __type: 'DateTime' },
    subDistrictCode: { __type: 'String' },
    usedQuota: { __type: 'Int' }
  },
  JobsFilter: {
    ageOption: { __type: 'AgeOption' },
    causes: { __type: '[String]' },
    dayOfWeekOption: { __type: 'DayOfWeekOption' },
    districtCodes: { __type: '[String]' },
    isVirtual: { __type: 'Boolean' },
    languages: { __type: '[String]' },
    ngoId: { __type: 'Int' },
    recipients: { __type: '[String]' },
    regionCodes: { __type: '[String]' },
    sdgoals: { __type: '[String]' },
    subDistrictCodes: { __type: '[String]' },
    volunteerFunctions: { __type: '[String]' }
  },
  LoginResponse: {
    __typename: { __type: 'String!' },
    accessToken: { __type: 'String!' },
    isNewUser: { __type: 'Boolean' }
  },
  MagicLinkResponse: {
    __typename: { __type: 'String!' },
    isNewUser: { __type: 'Boolean' },
    magicLink: { __type: 'String' },
    success: { __type: 'Boolean!' }
  },
  Membership: {
    __typename: { __type: 'String!' },
    contactId: { __type: 'Int' },
    ngo: { __type: 'Ngo' }
  },
  MultiLangText: {
    __typename: { __type: 'String!' },
    en: { __type: 'String' },
    zhHans: { __type: 'String' },
    zhHant: { __type: 'String' }
  },
  Ngo: {
    __typename: { __type: 'String!' },
    addressLine: { __type: 'String' },
    category: { __type: 'String' },
    causes: { __type: '[String]' },
    code: { __type: 'String!' },
    description: { __type: 'String' },
    districtCode: { __type: 'String' },
    email: { __type: 'String' },
    establishYear: { __type: 'String' },
    fax: { __type: 'String' },
    id: { __type: 'Int' },
    imageUrl: { __type: 'String' },
    isPublished: { __type: 'Boolean' },
    locationCoordinates: { __type: 'String' },
    logoUrl: { __type: 'String' },
    missionAndVision: { __type: 'String' },
    name: { __type: 'String' },
    ngoLink: { __type: 'String' },
    phone: { __type: 'String' },
    recipients: { __type: '[String]' },
    regionCode: { __type: 'String' },
    registrationNumber: { __type: 'String' },
    registrationType: { __type: 'String' },
    sdgoals: { __type: '[String]' },
    subDistrictCode: { __type: 'String' },
    websiteUrl: { __type: 'String' }
  },
  NgoBanner: {
    __typename: { __type: 'String!' },
    destinationType: { __type: 'DestinationType' },
    destinationUrl: { __type: 'String' },
    eventId: { __type: 'String' },
    id: { __type: 'String!' },
    imageUrl: { __type: 'String!' },
    jobId: { __type: 'String' },
    ngoId: { __type: 'Int!' },
    position: { __type: 'Int!' }
  },
  NgoBanners: {
    __typename: { __type: 'String!' },
    data: { __type: '[NgoBanner]' },
    total: { __type: 'Int' }
  },
  NgosFilter: {
    causes: { __type: '[String]' },
    districtCodes: { __type: '[String]' },
    recipients: { __type: '[String]' },
    regionCodes: { __type: '[String]' },
    sdgoals: { __type: '[String]' },
    subDistrictCodes: { __type: '[String]' }
  },
  OptionData: {
    __typename: { __type: 'String!' },
    desc: { __type: 'String!' },
    key: { __type: 'String!' }
  },
  PaginatedApplicationRecords: {
    __typename: { __type: 'String!' },
    data: { __type: '[ApplicationRecord!]' },
    total: { __type: 'Int' }
  },
  PaginatedEventApplications: {
    __typename: { __type: 'String!' },
    data: { __type: '[EventApplication!]' },
    total: { __type: 'Int' }
  },
  PaginatedEventAppliedSchedules: {
    __typename: { __type: 'String!' },
    data: { __type: '[EventAppliedSchedule!]' },
    total: { __type: 'Int' }
  },
  PaginatedEventAttendances: {
    __typename: { __type: 'String!' },
    data: { __type: '[EventAttendance!]!' },
    total: { __type: 'Int' }
  },
  PaginatedEvents: {
    __typename: { __type: 'String!' },
    data: { __type: '[Event!]' },
    total: { __type: 'Int' }
  },
  PaginatedJobApplications: {
    __typename: { __type: 'String!' },
    data: { __type: '[JobApplication!]' },
    total: { __type: 'Int' }
  },
  PaginatedJobAppliedTimeSlots: {
    __typename: { __type: 'String!' },
    data: { __type: '[JobAppliedTimeslot!]' },
    total: { __type: 'Int' }
  },
  PaginatedJobAttendances: {
    __typename: { __type: 'String!' },
    data: { __type: '[JobAttendance!]!' },
    total: { __type: 'Int' }
  },
  PaginatedJobs: {
    __typename: { __type: 'String!' },
    data: { __type: '[Job!]' },
    total: { __type: 'Int' }
  },
  PaginatedMemberships: {
    __typename: { __type: 'String!' },
    data: { __type: '[Membership]' },
    total: { __type: 'Int' }
  },
  PaginatedNgos: {
    __typename: { __type: 'String!' },
    data: { __type: '[Ngo!]' },
    total: { __type: 'Int' }
  },
  PaginatedSocialCvs: {
    __typename: { __type: 'String!' },
    data: { __type: '[SocialCv!]' },
    total: { __type: 'Int' }
  },
  PaginatedUnits: {
    __typename: { __type: 'String!' },
    data: { __type: '[Unit!]' },
    total: { __type: 'Int' }
  },
  ParentInfo: {
    __typename: { __type: 'String!' },
    acceptCode: { __type: 'String' },
    declineCode: { __type: 'String' },
    email: { __type: 'String!' },
    name: { __type: 'String!' },
    relationship: { __type: 'String' },
    status: { __type: 'String' }
  },
  ParentInfoInput: {
    acceptCode: { __type: 'String' },
    declineCode: { __type: 'String' },
    email: { __type: 'String!' },
    name: { __type: 'String!' },
    relationship: { __type: 'String' }
  },
  Payment: {
    __typename: { __type: 'String!' },
    amount: { __type: 'Int!' },
    category: { __type: 'PaymentCategory!' },
    currency: { __type: 'String!' },
    id: { __type: 'ID!' },
    method: { __type: 'String' },
    paymentIntentClientSecret: { __type: 'String' },
    status: { __type: 'String!' },
    stripeAccount: { __type: 'String' }
  },
  PinResponse: {
    __typename: { __type: 'String!' },
    isNewUser: { __type: 'Boolean' },
    pin: { __type: 'String' },
    success: { __type: 'Boolean!' }
  },
  Place: {
    __typename: { __type: 'String!' },
    code: { __type: 'String' },
    name: { __type: 'String' }
  },
  Region: {
    __typename: { __type: 'String!' },
    code: { __type: 'String' },
    name: { __type: 'String' }
  },
  Regions: {
    __typename: { __type: 'String!' },
    data: { __type: '[Region]' },
    total: { __type: 'Int' }
  },
  SocialCv: {
    __typename: { __type: 'String!' },
    endDate: { __type: 'DateTime' },
    id: { __type: 'ID!' },
    itemId: { __type: 'ID' },
    itemType: { __type: 'SocialCvItemType!' },
    ngoId: { __type: 'Int' },
    ngoName: { __type: 'String' },
    serviceHours: { __type: 'Float' },
    startDate: { __type: 'DateTime!' },
    title: { __type: 'String!' }
  },
  SocialCvParams: {
    exclude: { __type: '[SocialCvItemType]' },
    page: { __type: 'Int' },
    pageSize: { __type: 'Int' }
  },
  SubDistrict: {
    __typename: { __type: 'String!' },
    code: { __type: 'String' },
    districtCode: { __type: 'String' },
    name: { __type: 'String' }
  },
  SubDistricts: {
    __typename: { __type: 'String!' },
    data: { __type: '[SubDistrict]' },
    total: { __type: 'Int' }
  },
  TimeslotInstance: {
    __typename: { __type: 'String!' },
    endDate: { __type: 'DateTime' },
    endTime: { __type: 'DateTime' },
    id: { __type: 'ID!' },
    isAllDay: { __type: 'Boolean' },
    isDateTBC: { __type: 'Boolean' },
    isSingleDay: { __type: 'Boolean' },
    isTimeTBC: { __type: 'Boolean' },
    startDate: { __type: 'DateTime' },
    startTime: { __type: 'DateTime' },
    timeslotId: { __type: 'ID!' }
  },
  Unit: {
    __typename: { __type: 'String!' },
    addressLine: { __type: 'String' },
    code: { __type: 'String!' },
    districtCode: { __type: 'String' },
    emails: { __type: 'Object' },
    id: { __type: 'Int' },
    imageUrl: { __type: 'String' },
    isVirtual: { __type: 'Boolean' },
    logoUrl: { __type: 'String' },
    mapLatLong: { __type: 'String' },
    name: { __type: 'String!' },
    phones: { __type: 'Object' },
    regionCode: { __type: 'String' },
    subDistrictCode: { __type: 'String' }
  },
  UpdateEventApplicationInput: {
    appliedItems: { __type: '[EventAppliedItemInput]' },
    feeTypeId: { __type: 'ID' },
    optionId: { __type: 'ID' },
    paymentId: { __type: 'ID' },
    paymentStatus: { __type: 'String' },
    paymentTypeId: { __type: 'ID' }
  },
  UpdateJobApplicationInput: { timeslots: { __type: 'Object' } },
  UpdateProfileInput: {
    chineseName: { __type: 'String' },
    dob: { __type: 'Date' },
    edm: { __type: '[EdmInput]' },
    email: { __type: 'String' },
    firstName: { __type: 'String' },
    gender: { __type: 'Gender' },
    lastName: { __type: 'String' },
    locale: { __type: 'Locale' },
    mobileNumber: { __type: 'String' }
  },
  Volunteer: {
    __typename: { __type: 'String!' },
    chineseName: { __type: 'String' },
    createdAt: { __type: 'DateTime' },
    dob: { __type: 'Date' },
    edm: { __type: '[Edm]' },
    email: { __type: 'String' },
    emailVerifiedAt: { __type: 'DateTime' },
    firstName: { __type: 'String' },
    gender: { __type: 'Gender' },
    id: { __type: 'ID!' },
    lastName: { __type: 'String' },
    locale: { __type: 'String' },
    mobileNumber: { __type: 'String' },
    mobileNumberVerifiedAt: { __type: 'DateTime' },
    qrCode: { __type: 'String!' }
  },
  mutation: {
    __typename: { __type: 'String!' },
    connectNgo: { __type: 'ConnectInvite', __args: { code: 'String!' } },
    createEventApplication: {
      __type: 'EventApplication',
      __args: { applicationData: 'CreateEventApplicationInput' }
    },
    createEventPayment: { __type: 'Payment', __args: { input: 'CreateEventPaymentInput' } },
    createJobApplication: {
      __type: 'JobApplication',
      __args: { applicationData: 'CreateJobApplicationInput' }
    },
    createMagicLink: { __type: 'MagicLinkResponse', __args: { email: 'String!' } },
    createPin: { __type: 'PinResponse', __args: { mobileNumber: 'String!' } },
    loginWithApple: {
      __type: 'LoginResponse',
      __args: {
        authorizationCode: 'String!',
        email: 'String',
        familyName: 'String',
        givenName: 'String',
        nonce: 'String!',
        userIdentifier: 'String!'
      }
    },
    loginWithEmail: {
      __type: 'LoginResponse',
      __args: { email: 'String!', magicLinkSecret: 'String!' }
    },
    loginWithGoogle: {
      __type: 'LoginResponse',
      __args: { idToken: 'String!', userIdentifier: 'String!' }
    },
    loginWithMobile: {
      __type: 'LoginResponse',
      __args: { mobileNumber: 'String!', pin: 'String!' }
    },
    reportEventApplicationCancel: {
      __type: 'EventApplication',
      __args: { applicationId: 'String!', cancelReason: 'String!' }
    },
    reportJobAbsent: {
      __type: 'JobAttendance',
      __args: { absentReason: 'String!', attendanceId: 'String!' }
    },
    reportJobApplicationCancel: {
      __type: 'JobApplication',
      __args: { applicationId: 'String!', cancelReason: 'String!' }
    },
    updateEventApplication: {
      __type: 'EventApplication',
      __args: { applicationData: 'UpdateEventApplicationInput', id: 'ID!' }
    },
    updateJobApplication: {
      __type: 'JobApplication',
      __args: { applicationData: 'UpdateJobApplicationInput', id: 'ID' }
    },
    updateProfile: { __type: 'Volunteer', __args: { input: 'UpdateProfileInput!' } }
  },
  query: {
    __typename: { __type: 'String!' },
    appBanners: { __type: 'AppBanners' },
    appInfo: { __type: 'AppInfo' },
    applicationRecords: {
      __type: 'PaginatedApplicationRecords',
      __args: { params: 'FindApplicationRecordParams' }
    },
    appliedEventAttendances: {
      __type: 'PaginatedEventAttendances',
      __args: { params: 'FindEventAttendanceParams' }
    },
    appliedJobAttendances: {
      __type: 'PaginatedJobAttendances',
      __args: { params: 'FindJobAttendanceParams' }
    },
    causes: { __type: 'CodeValues!' },
    connectInvite: { __type: 'ConnectInvite', __args: { code: 'String!' } },
    districts: { __type: 'Districts' },
    event: { __type: 'Event', __args: { id: 'ID!' } },
    eventActivityThemes: { __type: 'CodeValues!' },
    eventActivityTypes: { __type: 'CodeValues!' },
    eventApplication: { __type: 'EventApplication', __args: { id: 'ID!' } },
    eventApplicationRecords: {
      __type: 'PaginatedApplicationRecords',
      __args: { params: 'FindEventApplicationRecordParams' }
    },
    eventApplications: {
      __type: 'PaginatedEventApplications',
      __args: { params: 'FindEventApplicationsParams' }
    },
    eventAppliedSchedules: {
      __type: 'PaginatedEventAppliedSchedules',
      __args: { params: 'FindEventAppliedSchedulesParams' }
    },
    eventPayment: { __type: 'Payment', __args: { id: 'ID!' } },
    eventServiceTypes: { __type: 'CodeValues!' },
    eventTargetAudiences: { __type: 'CodeValues!' },
    events: { __type: 'PaginatedEvents', __args: { params: 'FindEventsParams' } },
    hqUnit: { __type: 'Unit', __args: { ngoId: 'ID!' } },
    job: { __type: 'Job', __args: { id: 'ID!' } },
    jobApplication: { __type: 'JobApplication', __args: { id: 'ID!' } },
    jobApplications: {
      __type: 'PaginatedJobApplications',
      __args: { params: 'FindJobApplicationsParams' }
    },
    jobAppliedTimeSlots: {
      __type: 'PaginatedJobAppliedTimeSlots',
      __args: { params: 'FindJobAppliedTimeSlotsParams' }
    },
    jobEventTypes: { __type: 'CodeValues!' },
    jobSessionTypes: { __type: 'CodeValues!' },
    jobs: { __type: 'PaginatedJobs', __args: { params: 'FindJobsParams' } },
    memberships: { __type: 'PaginatedMemberships' },
    ngo: { __type: 'Ngo', __args: { id: 'ID!' } },
    ngoBanners: { __type: 'NgoBanners', __args: { ngoId: 'ID!' } },
    ngos: { __type: 'PaginatedNgos', __args: { params: 'FindNgosParams' } },
    profile: { __type: 'Volunteer' },
    recipients: { __type: 'CodeValues!' },
    regions: { __type: 'Regions' },
    sdgoals: { __type: 'CodeValues!' },
    socialCv: { __type: 'PaginatedSocialCvs', __args: { params: 'SocialCvParams' } },
    subDistricts: { __type: 'SubDistricts' },
    totalServiceHours: { __type: 'Float' },
    units: { __type: 'PaginatedUnits', __args: { ngoId: 'ID!', params: 'FindUnitsParams' } },
    volunteerFunctions: { __type: 'CodeValues!' }
  },
  subscription: {},
  [SchemaUnionsKey]: { ApplicationRecord: ['EventApplication', 'EventAttendance', 'JobAttendance'] }
} as const

export interface AdditionalQuestionData {
  __typename?: 'AdditionalQuestionData'
  key: ScalarsEnums['String']
  value?: Maybe<ScalarsEnums['AdditionalQuestionValue']>
}

export interface AppBanner {
  __typename?: 'AppBanner'
  destinationType?: Maybe<ScalarsEnums['DestinationType']>
  destinationUrl?: Maybe<ScalarsEnums['String']>
  eventId?: Maybe<ScalarsEnums['String']>
  id: ScalarsEnums['String']
  imageUrl: ScalarsEnums['String']
  jobId?: Maybe<ScalarsEnums['String']>
  position: ScalarsEnums['Int']
}

export interface AppBanners {
  __typename?: 'AppBanners'
  data?: Maybe<Array<Maybe<AppBanner>>>
  total?: Maybe<ScalarsEnums['Int']>
}

export interface AppInfo {
  __typename?: 'AppInfo'
  android: AppVersion
  iOS: AppVersion
  updatedAt: ScalarsEnums['DateTime']
}

export interface AppVersion {
  __typename?: 'AppVersion'
  latestVersion: ScalarsEnums['String']
  minimumVersion: ScalarsEnums['String']
}

export interface ApplicationInfo {
  __typename?: 'ApplicationInfo'
  approval?: Maybe<ScalarsEnums['EventApproval']>
  maxAge?: Maybe<ScalarsEnums['Int']>
  minAge?: Maybe<ScalarsEnums['Int']>
}

export interface ApplicationRecord {
  __typename?: 'EventApplication' | 'EventAttendance' | 'JobAttendance'
  $on: $ApplicationRecord
}

export interface CodeValue {
  __typename?: 'CodeValue'
  code: ScalarsEnums['String']
  name: ScalarsEnums['String']
}

/**
 * this just follows the paginated data style, but not actually doing pagination
 */
export interface CodeValues {
  __typename?: 'CodeValues'
  data?: Maybe<Array<CodeValue>>
  total: ScalarsEnums['Int']
}

export interface ConnectInvite {
  __typename?: 'ConnectInvite'
  code: ScalarsEnums['String']
  ngo: Ngo
  ngoId: ScalarsEnums['Int']
}

export interface District {
  __typename?: 'District'
  code?: Maybe<ScalarsEnums['String']>
  name?: Maybe<ScalarsEnums['String']>
  regionCode?: Maybe<ScalarsEnums['String']>
}

export interface Districts {
  __typename?: 'Districts'
  data?: Maybe<Array<Maybe<District>>>
  total?: Maybe<ScalarsEnums['Int']>
}

export interface Edm {
  __typename?: 'Edm'
  desc: ScalarsEnums['String']
  key: ScalarsEnums['String']
}

export interface Event {
  __typename?: 'Event'
  acceptedApplications: ScalarsEnums['Int']
  activityTheme?: Maybe<ScalarsEnums['String']>
  activityThemes?: Maybe<Array<Maybe<ScalarsEnums['String']>>>
  activityType?: Maybe<ScalarsEnums['String']>
  additionalQuestions?: Maybe<Array<Maybe<FieldConfig>>>
  addressLine?: Maybe<ScalarsEnums['String']>
  admissionForAllOptions: ScalarsEnums['Boolean']
  admissionType: ScalarsEnums['EventAdmissionType']
  applicationEnd?: Maybe<ScalarsEnums['DateTime']>
  applicationInfo?: Maybe<ApplicationInfo>
  applicationRestrictions?: Maybe<Array<Maybe<ScalarsEnums['String']>>>
  applicationStart?: Maybe<ScalarsEnums['DateTime']>
  contact?: Maybe<ScalarsEnums['String']>
  contactEmail?: Maybe<ScalarsEnums['String']>
  contactPhone?: Maybe<ScalarsEnums['String']>
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  description: ScalarsEnums['String']
  districtCode?: Maybe<ScalarsEnums['String']>
  eventLink?: Maybe<ScalarsEnums['String']>
  eventType?: Maybe<ScalarsEnums['EventTypeCode']>
  hasWeekday?: Maybe<ScalarsEnums['Boolean']>
  hasWeekend?: Maybe<ScalarsEnums['Boolean']>
  id?: Maybe<ScalarsEnums['String']>
  imageUrls?: Maybe<Array<Maybe<ScalarsEnums['String']>>>
  isFull: ScalarsEnums['Boolean']
  isVirtual?: Maybe<ScalarsEnums['Boolean']>
  location?: Maybe<ScalarsEnums['String']>
  mapLatLong?: Maybe<ScalarsEnums['String']>
  ngo?: Maybe<Ngo>
  ngoId?: Maybe<ScalarsEnums['Int']>
  optionType?: Maybe<ScalarsEnums['EventOptionType']>
  options?: Maybe<Array<Maybe<EventOption>>>
  overallEnd?: Maybe<ScalarsEnums['DateTime']>
  overallStart?: Maybe<ScalarsEnums['DateTime']>
  paymentTypes?: Maybe<Array<Maybe<EventPaymentType>>>
  pendingApplications?: Maybe<ScalarsEnums['Int']>
  progress: ScalarsEnums['String']
  regionCode?: Maybe<ScalarsEnums['String']>
  remainingQuota?: Maybe<ScalarsEnums['Int']>
  remarks?: Maybe<ScalarsEnums['String']>
  serviceType?: Maybe<ScalarsEnums['String']>
  status?: Maybe<ScalarsEnums['EventStatusCode']>
  subDistrictCode?: Maybe<ScalarsEnums['String']>
  targetAudience?: Maybe<ScalarsEnums['String']>
  targetAudiences?: Maybe<Array<Maybe<ScalarsEnums['String']>>>
  title: ScalarsEnums['String']
  totalApplications: ScalarsEnums['Int']
  totalQuota?: Maybe<ScalarsEnums['Int']>
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
}

export interface EventApplication {
  __typename?: 'EventApplication'
  additionalQuestions?: Maybe<Array<Maybe<AdditionalQuestionData>>>
  appliedItems?: Maybe<Array<Maybe<EventAppliedItem>>>
  appliedSchedules?: Maybe<Array<Maybe<EventAppliedSchedule>>>
  chineseName?: Maybe<ScalarsEnums['String']>
  createdAt: ScalarsEnums['DateTime']
  email?: Maybe<ScalarsEnums['String']>
  event: Event
  eventId: ScalarsEnums['ID']
  firstName?: Maybe<ScalarsEnums['String']>
  id: ScalarsEnums['ID']
  lastName?: Maybe<ScalarsEnums['String']>
  mobileNumber?: Maybe<ScalarsEnums['String']>
  option: EventOption
  optionId: ScalarsEnums['String']
  parentInfo?: Maybe<ParentInfo>
  paymentId: ScalarsEnums['ID']
  paymentStatus: ScalarsEnums['String']
  paymentType?: Maybe<EventPaymentType>
  paymentTypeId?: Maybe<ScalarsEnums['ID']>
  reason?: Maybe<ScalarsEnums['String']>
  status: ScalarsEnums['String']
  type?: Maybe<ScalarsEnums['String']>
}

export interface EventAppliedItem {
  __typename?: 'EventAppliedItem'
  eventApplicationId: ScalarsEnums['String']
  eventId: ScalarsEnums['String']
  feeType: EventFeeType
  feeTypeId: ScalarsEnums['ID']
  id: ScalarsEnums['ID']
  quantity?: Maybe<ScalarsEnums['Int']>
  ticketItems?: Maybe<Array<Maybe<EventTicketItem>>>
}

export interface EventAppliedSchedule {
  __typename?: 'EventAppliedSchedule'
  event?: Maybe<Event>
  eventApplication?: Maybe<EventApplication>
  eventApplicationId: ScalarsEnums['String']
  id: ScalarsEnums['ID']
  schedule?: Maybe<EventSchedule>
  scheduleId: ScalarsEnums['ID']
}

export interface EventAttendance {
  __typename?: 'EventAttendance'
  appliedSchedule?: Maybe<EventAppliedSchedule>
  appliedScheduleId: ScalarsEnums['ID']
  id: ScalarsEnums['ID']
  startDate?: Maybe<ScalarsEnums['String']>
  type?: Maybe<ScalarsEnums['String']>
}

export interface EventFeeType {
  __typename?: 'EventFeeType'
  applicationEnd?: Maybe<ScalarsEnums['DateTime']>
  applicationStart?: Maybe<ScalarsEnums['DateTime']>
  availability: ScalarsEnums['EventFeeTypeAvailability']
  description?: Maybe<ScalarsEnums['String']>
  fee?: Maybe<ScalarsEnums['Int']>
  id: ScalarsEnums['String']
  isFull: ScalarsEnums['Boolean']
  maxPurchase?: Maybe<ScalarsEnums['Int']>
  minPurchase?: Maybe<ScalarsEnums['Int']>
  numOfPeople?: Maybe<ScalarsEnums['Int']>
  option?: Maybe<EventOption>
  pendingQuota?: Maybe<ScalarsEnums['Int']>
  quota?: Maybe<ScalarsEnums['Int']>
  remainingQuota?: Maybe<ScalarsEnums['Int']>
  title: ScalarsEnums['String']
  usedQuota: ScalarsEnums['Int']
}

export interface EventOption {
  __typename?: 'EventOption'
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  endDate?: Maybe<ScalarsEnums['String']>
  endTime?: Maybe<ScalarsEnums['String']>
  event?: Maybe<Event>
  feeTypes?: Maybe<Array<Maybe<EventFeeType>>>
  frequency?: Maybe<ScalarsEnums['String']>
  id?: Maybe<ScalarsEnums['String']>
  isFull: ScalarsEnums['Boolean']
  isSingleDay?: Maybe<ScalarsEnums['Boolean']>
  overallEnd?: Maybe<ScalarsEnums['DateTime']>
  overallStart?: Maybe<ScalarsEnums['DateTime']>
  pendingQuota: ScalarsEnums['Int']
  position?: Maybe<ScalarsEnums['Int']>
  quotaByFeeType: ScalarsEnums['Boolean']
  quotaType?: Maybe<ScalarsEnums['EventQuotaType']>
  recurrenceExceptionDates?: Maybe<Array<Maybe<ScalarsEnums['String']>>>
  recurrenceFrequency?: Maybe<ScalarsEnums['Int']>
  recurrenceMonthlyMode?: Maybe<ScalarsEnums['String']>
  recurrenceRepeatDayOfMonth?: Maybe<Array<Maybe<ScalarsEnums['Int']>>>
  recurrenceRepeatDayOfWeek?: Maybe<ScalarsEnums['String']>
  recurrenceRepeatWeek?: Maybe<ScalarsEnums['String']>
  recurrenceType?: Maybe<ScalarsEnums['String']>
  recurrenceWeekdays?: Maybe<Array<Maybe<ScalarsEnums['String']>>>
  remainingQuota?: Maybe<ScalarsEnums['Int']>
  remarks: ScalarsEnums['String']
  schedules?: Maybe<Array<Maybe<EventSchedule>>>
  startDate?: Maybe<ScalarsEnums['String']>
  startTime?: Maybe<ScalarsEnums['String']>
  title?: Maybe<ScalarsEnums['String']>
  totalApplications: ScalarsEnums['Int']
  totalQuota?: Maybe<ScalarsEnums['Int']>
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
  usedQuota: ScalarsEnums['Int']
}

export interface EventPaymentType {
  __typename?: 'EventPaymentType'
  group?: Maybe<ScalarsEnums['EventPaymentTypeGroup']>
  id?: Maybe<ScalarsEnums['String']>
  instruction?: Maybe<ScalarsEnums['String']>
  paymentMethod?: Maybe<ScalarsEnums['String']>
  title: ScalarsEnums['String']
}

export interface EventRundownSession {
  __typename?: 'EventRundownSession'
  description?: Maybe<ScalarsEnums['String']>
  endTime?: Maybe<ScalarsEnums['String']>
  id?: Maybe<ScalarsEnums['String']>
  startTime?: Maybe<ScalarsEnums['String']>
  title?: Maybe<ScalarsEnums['String']>
}

export interface EventSchedule {
  __typename?: 'EventSchedule'
  endDate?: Maybe<ScalarsEnums['String']>
  endTime?: Maybe<ScalarsEnums['String']>
  id?: Maybe<ScalarsEnums['String']>
  isAllDay?: Maybe<ScalarsEnums['Boolean']>
  isDateTBC?: Maybe<ScalarsEnums['Boolean']>
  isSingleDay?: Maybe<ScalarsEnums['Boolean']>
  isTimeTBC?: Maybe<ScalarsEnums['Boolean']>
  option?: Maybe<EventOption>
  optionId?: Maybe<ScalarsEnums['String']>
  position?: Maybe<ScalarsEnums['Int']>
  recurrenceExceptionDates?: Maybe<Array<Maybe<ScalarsEnums['String']>>>
  recurrenceFrequency?: Maybe<ScalarsEnums['Int']>
  recurrenceMonthlyMode?: Maybe<ScalarsEnums['String']>
  recurrenceRepeatDayOfMonth?: Maybe<Array<Maybe<ScalarsEnums['Int']>>>
  recurrenceRepeatDayOfWeek?: Maybe<ScalarsEnums['String']>
  recurrenceRepeatWeek?: Maybe<ScalarsEnums['String']>
  recurrenceType?: Maybe<ScalarsEnums['String']>
  recurrenceWeekdays?: Maybe<Array<Maybe<ScalarsEnums['String']>>>
  rundownSessions?: Maybe<Array<Maybe<EventRundownSession>>>
  startDate?: Maybe<ScalarsEnums['String']>
  startTime?: Maybe<ScalarsEnums['String']>
}

export interface EventTicketItem {
  __typename?: 'EventTicketItem'
  applicationId: ScalarsEnums['ID']
  appliedItemId: ScalarsEnums['ID']
  eventId: ScalarsEnums['ID']
  id: ScalarsEnums['ID']
  optionId: ScalarsEnums['ID']
  qrCodeKey: ScalarsEnums['String']
  redeemedAt?: Maybe<ScalarsEnums['DateTime']>
  ticketNo: ScalarsEnums['String']
}

export interface FieldConfig {
  __typename?: 'FieldConfig'
  desc: ScalarsEnums['String']
  key: ScalarsEnums['String']
  mandatory?: Maybe<ScalarsEnums['Boolean']>
  options?: Maybe<Array<Maybe<OptionData>>>
  type: ScalarsEnums['String']
}

export interface FindEventQuery {
  __typename?: 'FindEventQuery'
  search?: Maybe<ScalarsEnums['String']>
}

export interface FindJobQuery {
  __typename?: 'FindJobQuery'
  search?: Maybe<ScalarsEnums['String']>
}

export interface Job {
  __typename?: 'Job'
  acceptedApplications?: Maybe<ScalarsEnums['Int']>
  acceptedQuota?: Maybe<ScalarsEnums['Int']>
  additionalQuestions?: Maybe<Array<Maybe<FieldConfig>>>
  applicationEnd?: Maybe<ScalarsEnums['DateTime']>
  applicationRestrictions?: Maybe<Array<Maybe<ScalarsEnums['String']>>>
  applicationStart?: Maybe<ScalarsEnums['DateTime']>
  causes?: Maybe<Array<Maybe<ScalarsEnums['String']>>>
  contact?: Maybe<ScalarsEnums['String']>
  contactEmail?: Maybe<ScalarsEnums['String']>
  contactPhone?: Maybe<ScalarsEnums['String']>
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  description?: Maybe<ScalarsEnums['String']>
  districtCode?: Maybe<ScalarsEnums['String']>
  feeDetail?: Maybe<ScalarsEnums['String']>
  groupApply?: Maybe<ScalarsEnums['Boolean']>
  id?: Maybe<ScalarsEnums['String']>
  imageUrls?: Maybe<Array<Maybe<ScalarsEnums['String']>>>
  isVirtual?: Maybe<ScalarsEnums['Boolean']>
  jobLink?: Maybe<ScalarsEnums['String']>
  languageOther?: Maybe<ScalarsEnums['String']>
  languages?: Maybe<Array<Maybe<ScalarsEnums['String']>>>
  location?: Maybe<ScalarsEnums['String']>
  ngo?: Maybe<Ngo>
  ngoId?: Maybe<ScalarsEnums['Int']>
  overallEnd?: Maybe<ScalarsEnums['DateTime']>
  overallStart?: Maybe<ScalarsEnums['DateTime']>
  parentalConsent?: Maybe<ScalarsEnums['Boolean']>
  pcAge?: Maybe<ScalarsEnums['Int']>
  pendingApplications?: Maybe<ScalarsEnums['Int']>
  prerequisite?: Maybe<JobPrerequisite>
  progress?: Maybe<ScalarsEnums['String']>
  quota?: Maybe<ScalarsEnums['Int']>
  recipients?: Maybe<Array<Maybe<ScalarsEnums['String']>>>
  regionCode?: Maybe<ScalarsEnums['String']>
  remainingQuota?: Maybe<ScalarsEnums['Int']>
  remarks?: Maybe<ScalarsEnums['String']>
  sdgs?: Maybe<Array<Maybe<ScalarsEnums['String']>>>
  sessions?: Maybe<Array<Maybe<JobSession>>>
  skills?: Maybe<Array<Maybe<ScalarsEnums['String']>>>
  subDistrictCode?: Maybe<ScalarsEnums['String']>
  title: ScalarsEnums['String']
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
  volunteerFunctions?: Maybe<Array<Maybe<ScalarsEnums['String']>>>
}

export interface JobApplication {
  __typename?: 'JobApplication'
  additionalQuestions?: Maybe<Array<Maybe<AdditionalQuestionData>>>
  appliedTimeSlots?: Maybe<Array<Maybe<JobAppliedTimeslot>>>
  attendances?: Maybe<Array<Maybe<JobAttendance>>>
  chineseName?: Maybe<ScalarsEnums['String']>
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  email?: Maybe<ScalarsEnums['String']>
  firstName?: Maybe<ScalarsEnums['String']>
  id: ScalarsEnums['ID']
  job?: Maybe<Job>
  jobId: ScalarsEnums['ID']
  lastName?: Maybe<ScalarsEnums['String']>
  mobileNumber?: Maybe<ScalarsEnums['String']>
  parentInfo?: Maybe<ParentInfo>
  parentalConsent?: Maybe<ScalarsEnums['Boolean']>
  reason?: Maybe<ScalarsEnums['String']>
  status: ScalarsEnums['String']
}

export interface JobAppliedTimeslot {
  __typename?: 'JobAppliedTimeslot'
  id: ScalarsEnums['ID']
  job?: Maybe<Job>
  jobApplication?: Maybe<JobApplication>
  jobApplicationId: ScalarsEnums['String']
  status: ScalarsEnums['String']
  timeslot?: Maybe<JobTimeslot>
  timeslotId: ScalarsEnums['ID']
}

export interface JobAttendance {
  __typename?: 'JobAttendance'
  absent?: Maybe<ScalarsEnums['Boolean']>
  absentReason?: Maybe<ScalarsEnums['String']>
  appliedTimeslot?: Maybe<JobAppliedTimeslot>
  appliedTimeslotId: ScalarsEnums['ID']
  attendances?: Maybe<Array<Maybe<JobAttendance>>>
  endDate?: Maybe<ScalarsEnums['String']>
  endTime?: Maybe<ScalarsEnums['DateTime']>
  id: ScalarsEnums['ID']
  isAllDay?: Maybe<ScalarsEnums['Boolean']>
  isSingleDay?: Maybe<ScalarsEnums['Boolean']>
  isTimeTBC?: Maybe<ScalarsEnums['Boolean']>
  isdateTBC?: Maybe<ScalarsEnums['Boolean']>
  startDate?: Maybe<ScalarsEnums['String']>
  startTime?: Maybe<ScalarsEnums['DateTime']>
  status: ScalarsEnums['String']
  timeslotInstance?: Maybe<TimeslotInstance>
  timeslotInstanceId: ScalarsEnums['ID']
  type?: Maybe<ScalarsEnums['String']>
}

export interface JobLocation {
  __typename?: 'JobLocation'
  address: ScalarsEnums['String']
  lat: ScalarsEnums['Float']
  lng: ScalarsEnums['Float']
  name: ScalarsEnums['String']
}

export interface JobPrerequisite {
  __typename?: 'JobPrerequisite'
  maxAge?: Maybe<ScalarsEnums['Int']>
  minAge?: Maybe<ScalarsEnums['Int']>
}

export interface JobSession {
  __typename?: 'JobSession'
  attendanceRule?: Maybe<ScalarsEnums['String']>
  attendanceRuleAmount?: Maybe<ScalarsEnums['Int']>
  frequency?: Maybe<ScalarsEnums['String']>
  id?: Maybe<ScalarsEnums['String']>
  position?: Maybe<ScalarsEnums['Int']>
  timeslots?: Maybe<Array<Maybe<JobTimeslot>>>
  title: ScalarsEnums['String']
  type?: Maybe<ScalarsEnums['String']>
}

export interface JobTimeslot {
  __typename?: 'JobTimeslot'
  address?: Maybe<MultiLangText>
  addressLine?: Maybe<ScalarsEnums['String']>
  districtCode?: Maybe<ScalarsEnums['String']>
  endDate?: Maybe<ScalarsEnums['DateTime']>
  endTime?: Maybe<ScalarsEnums['DateTime']>
  id?: Maybe<ScalarsEnums['String']>
  isAllDay?: Maybe<ScalarsEnums['Boolean']>
  isSingleDay?: Maybe<ScalarsEnums['Boolean']>
  isTimeTBC?: Maybe<ScalarsEnums['Boolean']>
  isVirtual?: Maybe<ScalarsEnums['Boolean']>
  isdateTBC?: Maybe<ScalarsEnums['Boolean']>
  mapLatLong?: Maybe<ScalarsEnums['String']>
  quota?: Maybe<ScalarsEnums['Int']>
  recurrenceExceptionDates?: Maybe<Array<Maybe<ScalarsEnums['Date']>>>
  recurrenceFrequency?: Maybe<ScalarsEnums['Int']>
  recurrenceMonthlyMode?: Maybe<ScalarsEnums['String']>
  recurrenceRepeatDayOfMonth?: Maybe<Array<Maybe<ScalarsEnums['Int']>>>
  recurrenceRepeatDayOfWeek?: Maybe<ScalarsEnums['String']>
  recurrenceRepeatWeek?: Maybe<ScalarsEnums['String']>
  recurrenceType?: Maybe<ScalarsEnums['String']>
  recurrenceWeekdays?: Maybe<Array<Maybe<ScalarsEnums['String']>>>
  regionCode?: Maybe<ScalarsEnums['String']>
  session?: Maybe<JobSession>
  sessionId?: Maybe<ScalarsEnums['String']>
  startDate?: Maybe<ScalarsEnums['DateTime']>
  startTime?: Maybe<ScalarsEnums['DateTime']>
  subDistrictCode?: Maybe<ScalarsEnums['String']>
  usedQuota?: Maybe<ScalarsEnums['Int']>
}

export interface LoginResponse {
  __typename?: 'LoginResponse'
  accessToken: ScalarsEnums['String']
  isNewUser?: Maybe<ScalarsEnums['Boolean']>
}

export interface MagicLinkResponse {
  __typename?: 'MagicLinkResponse'
  isNewUser?: Maybe<ScalarsEnums['Boolean']>
  magicLink?: Maybe<ScalarsEnums['String']>
  success: ScalarsEnums['Boolean']
}

export interface Membership {
  __typename?: 'Membership'
  contactId?: Maybe<ScalarsEnums['Int']>
  ngo?: Maybe<Ngo>
}

export interface MultiLangText {
  __typename?: 'MultiLangText'
  en?: Maybe<ScalarsEnums['String']>
  zhHans?: Maybe<ScalarsEnums['String']>
  zhHant?: Maybe<ScalarsEnums['String']>
}

export interface Ngo {
  __typename?: 'Ngo'
  addressLine?: Maybe<ScalarsEnums['String']>
  category?: Maybe<ScalarsEnums['String']>
  causes?: Maybe<Array<Maybe<ScalarsEnums['String']>>>
  code: ScalarsEnums['String']
  description?: Maybe<ScalarsEnums['String']>
  districtCode?: Maybe<ScalarsEnums['String']>
  email?: Maybe<ScalarsEnums['String']>
  establishYear?: Maybe<ScalarsEnums['String']>
  fax?: Maybe<ScalarsEnums['String']>
  id?: Maybe<ScalarsEnums['Int']>
  imageUrl?: Maybe<ScalarsEnums['String']>
  isPublished?: Maybe<ScalarsEnums['Boolean']>
  locationCoordinates?: Maybe<ScalarsEnums['String']>
  logoUrl?: Maybe<ScalarsEnums['String']>
  missionAndVision?: Maybe<ScalarsEnums['String']>
  name?: Maybe<ScalarsEnums['String']>
  ngoLink?: Maybe<ScalarsEnums['String']>
  phone?: Maybe<ScalarsEnums['String']>
  recipients?: Maybe<Array<Maybe<ScalarsEnums['String']>>>
  regionCode?: Maybe<ScalarsEnums['String']>
  registrationNumber?: Maybe<ScalarsEnums['String']>
  registrationType?: Maybe<ScalarsEnums['String']>
  sdgoals?: Maybe<Array<Maybe<ScalarsEnums['String']>>>
  subDistrictCode?: Maybe<ScalarsEnums['String']>
  websiteUrl?: Maybe<ScalarsEnums['String']>
}

export interface NgoBanner {
  __typename?: 'NgoBanner'
  destinationType?: Maybe<ScalarsEnums['DestinationType']>
  destinationUrl?: Maybe<ScalarsEnums['String']>
  eventId?: Maybe<ScalarsEnums['String']>
  id: ScalarsEnums['String']
  imageUrl: ScalarsEnums['String']
  jobId?: Maybe<ScalarsEnums['String']>
  ngoId: ScalarsEnums['Int']
  position: ScalarsEnums['Int']
}

export interface NgoBanners {
  __typename?: 'NgoBanners'
  data?: Maybe<Array<Maybe<NgoBanner>>>
  total?: Maybe<ScalarsEnums['Int']>
}

export interface OptionData {
  __typename?: 'OptionData'
  desc: ScalarsEnums['String']
  key: ScalarsEnums['String']
}

export interface PaginatedApplicationRecords {
  __typename?: 'PaginatedApplicationRecords'
  data?: Maybe<Array<ApplicationRecord>>
  total?: Maybe<ScalarsEnums['Int']>
}

export interface PaginatedEventApplications {
  __typename?: 'PaginatedEventApplications'
  data?: Maybe<Array<EventApplication>>
  total?: Maybe<ScalarsEnums['Int']>
}

export interface PaginatedEventAppliedSchedules {
  __typename?: 'PaginatedEventAppliedSchedules'
  data?: Maybe<Array<EventAppliedSchedule>>
  total?: Maybe<ScalarsEnums['Int']>
}

export interface PaginatedEventAttendances {
  __typename?: 'PaginatedEventAttendances'
  data: Array<EventAttendance>
  total?: Maybe<ScalarsEnums['Int']>
}

export interface PaginatedEvents {
  __typename?: 'PaginatedEvents'
  data?: Maybe<Array<Event>>
  total?: Maybe<ScalarsEnums['Int']>
}

export interface PaginatedJobApplications {
  __typename?: 'PaginatedJobApplications'
  data?: Maybe<Array<JobApplication>>
  total?: Maybe<ScalarsEnums['Int']>
}

export interface PaginatedJobAppliedTimeSlots {
  __typename?: 'PaginatedJobAppliedTimeSlots'
  data?: Maybe<Array<JobAppliedTimeslot>>
  total?: Maybe<ScalarsEnums['Int']>
}

export interface PaginatedJobAttendances {
  __typename?: 'PaginatedJobAttendances'
  data: Array<JobAttendance>
  total?: Maybe<ScalarsEnums['Int']>
}

export interface PaginatedJobs {
  __typename?: 'PaginatedJobs'
  data?: Maybe<Array<Job>>
  total?: Maybe<ScalarsEnums['Int']>
}

export interface PaginatedMemberships {
  __typename?: 'PaginatedMemberships'
  data?: Maybe<Array<Maybe<Membership>>>
  total?: Maybe<ScalarsEnums['Int']>
}

export interface PaginatedNgos {
  __typename?: 'PaginatedNgos'
  data?: Maybe<Array<Ngo>>
  total?: Maybe<ScalarsEnums['Int']>
}

export interface PaginatedSocialCvs {
  __typename?: 'PaginatedSocialCvs'
  data?: Maybe<Array<SocialCv>>
  total?: Maybe<ScalarsEnums['Int']>
}

export interface PaginatedUnits {
  __typename?: 'PaginatedUnits'
  data?: Maybe<Array<Unit>>
  total?: Maybe<ScalarsEnums['Int']>
}

export interface ParentInfo {
  __typename?: 'ParentInfo'
  acceptCode?: Maybe<ScalarsEnums['String']>
  declineCode?: Maybe<ScalarsEnums['String']>
  email: ScalarsEnums['String']
  name: ScalarsEnums['String']
  relationship?: Maybe<ScalarsEnums['String']>
  status?: Maybe<ScalarsEnums['String']>
}

export interface Payment {
  __typename?: 'Payment'
  amount: ScalarsEnums['Int']
  category: ScalarsEnums['PaymentCategory']
  currency: ScalarsEnums['String']
  id: ScalarsEnums['ID']
  method?: Maybe<ScalarsEnums['String']>
  paymentIntentClientSecret?: Maybe<ScalarsEnums['String']>
  status: ScalarsEnums['String']
  stripeAccount?: Maybe<ScalarsEnums['String']>
}

export interface PinResponse {
  __typename?: 'PinResponse'
  isNewUser?: Maybe<ScalarsEnums['Boolean']>
  pin?: Maybe<ScalarsEnums['String']>
  success: ScalarsEnums['Boolean']
}

export interface Place {
  __typename?: 'Place'
  code?: Maybe<ScalarsEnums['String']>
  name?: Maybe<ScalarsEnums['String']>
}

export interface Region {
  __typename?: 'Region'
  code?: Maybe<ScalarsEnums['String']>
  name?: Maybe<ScalarsEnums['String']>
}

export interface Regions {
  __typename?: 'Regions'
  data?: Maybe<Array<Maybe<Region>>>
  total?: Maybe<ScalarsEnums['Int']>
}

export interface SocialCv {
  __typename?: 'SocialCv'
  endDate?: Maybe<ScalarsEnums['DateTime']>
  id: ScalarsEnums['ID']
  itemId?: Maybe<ScalarsEnums['ID']>
  itemType: ScalarsEnums['SocialCvItemType']
  ngoId?: Maybe<ScalarsEnums['Int']>
  ngoName?: Maybe<ScalarsEnums['String']>
  serviceHours?: Maybe<ScalarsEnums['Float']>
  startDate: ScalarsEnums['DateTime']
  title: ScalarsEnums['String']
}

export interface SubDistrict {
  __typename?: 'SubDistrict'
  code?: Maybe<ScalarsEnums['String']>
  districtCode?: Maybe<ScalarsEnums['String']>
  name?: Maybe<ScalarsEnums['String']>
}

export interface SubDistricts {
  __typename?: 'SubDistricts'
  data?: Maybe<Array<Maybe<SubDistrict>>>
  total?: Maybe<ScalarsEnums['Int']>
}

export interface TimeslotInstance {
  __typename?: 'TimeslotInstance'
  endDate?: Maybe<ScalarsEnums['DateTime']>
  endTime?: Maybe<ScalarsEnums['DateTime']>
  id: ScalarsEnums['ID']
  isAllDay?: Maybe<ScalarsEnums['Boolean']>
  isDateTBC?: Maybe<ScalarsEnums['Boolean']>
  isSingleDay?: Maybe<ScalarsEnums['Boolean']>
  isTimeTBC?: Maybe<ScalarsEnums['Boolean']>
  startDate?: Maybe<ScalarsEnums['DateTime']>
  startTime?: Maybe<ScalarsEnums['DateTime']>
  timeslotId: ScalarsEnums['ID']
}

export interface Unit {
  __typename?: 'Unit'
  addressLine?: Maybe<ScalarsEnums['String']>
  code: ScalarsEnums['String']
  districtCode?: Maybe<ScalarsEnums['String']>
  emails?: Maybe<ScalarsEnums['Object']>
  id?: Maybe<ScalarsEnums['Int']>
  imageUrl?: Maybe<ScalarsEnums['String']>
  isVirtual?: Maybe<ScalarsEnums['Boolean']>
  logoUrl?: Maybe<ScalarsEnums['String']>
  mapLatLong?: Maybe<ScalarsEnums['String']>
  name: ScalarsEnums['String']
  phones?: Maybe<ScalarsEnums['Object']>
  regionCode?: Maybe<ScalarsEnums['String']>
  subDistrictCode?: Maybe<ScalarsEnums['String']>
}

export interface Volunteer {
  __typename?: 'Volunteer'
  chineseName?: Maybe<ScalarsEnums['String']>
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  dob?: Maybe<ScalarsEnums['Date']>
  edm?: Maybe<Array<Maybe<Edm>>>
  email?: Maybe<ScalarsEnums['String']>
  emailVerifiedAt?: Maybe<ScalarsEnums['DateTime']>
  firstName?: Maybe<ScalarsEnums['String']>
  gender?: Maybe<ScalarsEnums['Gender']>
  id: ScalarsEnums['ID']
  lastName?: Maybe<ScalarsEnums['String']>
  locale?: Maybe<ScalarsEnums['String']>
  mobileNumber?: Maybe<ScalarsEnums['String']>
  mobileNumberVerifiedAt?: Maybe<ScalarsEnums['DateTime']>
  qrCode: ScalarsEnums['String']
}

export interface Mutation {
  __typename?: 'Mutation'
  connectNgo: (args: { code: Scalars['String'] }) => Maybe<ConnectInvite>
  createEventApplication: (args?: {
    applicationData?: Maybe<CreateEventApplicationInput>
  }) => Maybe<EventApplication>
  createEventPayment: (args?: { input?: Maybe<CreateEventPaymentInput> }) => Maybe<Payment>
  createJobApplication: (args?: {
    applicationData?: Maybe<CreateJobApplicationInput>
  }) => Maybe<JobApplication>
  createMagicLink: (args: { email: Scalars['String'] }) => Maybe<MagicLinkResponse>
  createPin: (args: { mobileNumber: Scalars['String'] }) => Maybe<PinResponse>
  loginWithApple: (args: {
    authorizationCode: Scalars['String']
    email?: Maybe<Scalars['String']>
    familyName?: Maybe<Scalars['String']>
    givenName?: Maybe<Scalars['String']>
    nonce: Scalars['String']
    userIdentifier: Scalars['String']
  }) => Maybe<LoginResponse>
  loginWithEmail: (args: {
    email: Scalars['String']
    magicLinkSecret: Scalars['String']
  }) => Maybe<LoginResponse>
  loginWithGoogle: (args: {
    idToken: Scalars['String']
    userIdentifier: Scalars['String']
  }) => Maybe<LoginResponse>
  loginWithMobile: (args: {
    mobileNumber: Scalars['String']
    pin: Scalars['String']
  }) => Maybe<LoginResponse>
  reportEventApplicationCancel: (args: {
    applicationId: Scalars['String']
    cancelReason: Scalars['String']
  }) => Maybe<EventApplication>
  reportJobAbsent: (args: {
    absentReason: Scalars['String']
    attendanceId: Scalars['String']
  }) => Maybe<JobAttendance>
  reportJobApplicationCancel: (args: {
    applicationId: Scalars['String']
    cancelReason: Scalars['String']
  }) => Maybe<JobApplication>
  updateEventApplication: (args: {
    applicationData?: Maybe<UpdateEventApplicationInput>
    id: Scalars['ID']
  }) => Maybe<EventApplication>
  updateJobApplication: (args?: {
    applicationData?: Maybe<UpdateJobApplicationInput>
    id?: Maybe<Scalars['ID']>
  }) => Maybe<JobApplication>
  updateProfile: (args: { input: UpdateProfileInput }) => Maybe<Volunteer>
}

export interface Query {
  __typename?: 'Query'
  appBanners?: Maybe<AppBanners>
  appInfo?: Maybe<AppInfo>
  applicationRecords: (args?: {
    params?: Maybe<FindApplicationRecordParams>
  }) => Maybe<PaginatedApplicationRecords>
  appliedEventAttendances: (args?: {
    params?: Maybe<FindEventAttendanceParams>
  }) => Maybe<PaginatedEventAttendances>
  appliedJobAttendances: (args?: {
    params?: Maybe<FindJobAttendanceParams>
  }) => Maybe<PaginatedJobAttendances>
  causes: CodeValues
  connectInvite: (args: { code: Scalars['String'] }) => Maybe<ConnectInvite>
  districts?: Maybe<Districts>
  event: (args: { id: Scalars['ID'] }) => Maybe<Event>
  eventActivityThemes: CodeValues
  eventActivityTypes: CodeValues
  eventApplication: (args: { id: Scalars['ID'] }) => Maybe<EventApplication>
  /**
   * For legacy compatibility. Remove later
   */
  eventApplicationRecords: (args?: {
    params?: Maybe<FindEventApplicationRecordParams>
  }) => Maybe<PaginatedApplicationRecords>
  eventApplications: (args?: {
    params?: Maybe<FindEventApplicationsParams>
  }) => Maybe<PaginatedEventApplications>
  eventAppliedSchedules: (args?: {
    params?: Maybe<FindEventAppliedSchedulesParams>
  }) => Maybe<PaginatedEventAppliedSchedules>
  eventPayment: (args: { id: Scalars['ID'] }) => Maybe<Payment>
  eventServiceTypes: CodeValues
  eventTargetAudiences: CodeValues
  events: (args?: { params?: Maybe<FindEventsParams> }) => Maybe<PaginatedEvents>
  hqUnit: (args: { ngoId: Scalars['ID'] }) => Maybe<Unit>
  job: (args: { id: Scalars['ID'] }) => Maybe<Job>
  jobApplication: (args: { id: Scalars['ID'] }) => Maybe<JobApplication>
  jobApplications: (args?: {
    params?: Maybe<FindJobApplicationsParams>
  }) => Maybe<PaginatedJobApplications>
  jobAppliedTimeSlots: (args?: {
    params?: Maybe<FindJobAppliedTimeSlotsParams>
  }) => Maybe<PaginatedJobAppliedTimeSlots>
  jobEventTypes: CodeValues
  jobSessionTypes: CodeValues
  jobs: (args?: { params?: Maybe<FindJobsParams> }) => Maybe<PaginatedJobs>
  memberships?: Maybe<PaginatedMemberships>
  ngo: (args: { id: Scalars['ID'] }) => Maybe<Ngo>
  ngoBanners: (args: { ngoId: Scalars['ID'] }) => Maybe<NgoBanners>
  ngos: (args?: { params?: Maybe<FindNgosParams> }) => Maybe<PaginatedNgos>
  profile?: Maybe<Volunteer>
  recipients: CodeValues
  regions?: Maybe<Regions>
  sdgoals: CodeValues
  socialCv: (args?: { params?: Maybe<SocialCvParams> }) => Maybe<PaginatedSocialCvs>
  subDistricts?: Maybe<SubDistricts>
  totalServiceHours?: Maybe<ScalarsEnums['Float']>
  units: (args: { ngoId: Scalars['ID']; params?: Maybe<FindUnitsParams> }) => Maybe<PaginatedUnits>
  volunteerFunctions: CodeValues
}

export interface Subscription {
  __typename?: 'Subscription'
}

export interface SchemaObjectTypes {
  AdditionalQuestionData: AdditionalQuestionData
  AppBanner: AppBanner
  AppBanners: AppBanners
  AppInfo: AppInfo
  AppVersion: AppVersion
  ApplicationInfo: ApplicationInfo
  CodeValue: CodeValue
  CodeValues: CodeValues
  ConnectInvite: ConnectInvite
  District: District
  Districts: Districts
  Edm: Edm
  Event: Event
  EventApplication: EventApplication
  EventAppliedItem: EventAppliedItem
  EventAppliedSchedule: EventAppliedSchedule
  EventAttendance: EventAttendance
  EventFeeType: EventFeeType
  EventOption: EventOption
  EventPaymentType: EventPaymentType
  EventRundownSession: EventRundownSession
  EventSchedule: EventSchedule
  EventTicketItem: EventTicketItem
  FieldConfig: FieldConfig
  FindEventQuery: FindEventQuery
  FindJobQuery: FindJobQuery
  Job: Job
  JobApplication: JobApplication
  JobAppliedTimeslot: JobAppliedTimeslot
  JobAttendance: JobAttendance
  JobLocation: JobLocation
  JobPrerequisite: JobPrerequisite
  JobSession: JobSession
  JobTimeslot: JobTimeslot
  LoginResponse: LoginResponse
  MagicLinkResponse: MagicLinkResponse
  Membership: Membership
  MultiLangText: MultiLangText
  Mutation: Mutation
  Ngo: Ngo
  NgoBanner: NgoBanner
  NgoBanners: NgoBanners
  OptionData: OptionData
  PaginatedApplicationRecords: PaginatedApplicationRecords
  PaginatedEventApplications: PaginatedEventApplications
  PaginatedEventAppliedSchedules: PaginatedEventAppliedSchedules
  PaginatedEventAttendances: PaginatedEventAttendances
  PaginatedEvents: PaginatedEvents
  PaginatedJobApplications: PaginatedJobApplications
  PaginatedJobAppliedTimeSlots: PaginatedJobAppliedTimeSlots
  PaginatedJobAttendances: PaginatedJobAttendances
  PaginatedJobs: PaginatedJobs
  PaginatedMemberships: PaginatedMemberships
  PaginatedNgos: PaginatedNgos
  PaginatedSocialCvs: PaginatedSocialCvs
  PaginatedUnits: PaginatedUnits
  ParentInfo: ParentInfo
  Payment: Payment
  PinResponse: PinResponse
  Place: Place
  Query: Query
  Region: Region
  Regions: Regions
  SocialCv: SocialCv
  SubDistrict: SubDistrict
  SubDistricts: SubDistricts
  Subscription: Subscription
  TimeslotInstance: TimeslotInstance
  Unit: Unit
  Volunteer: Volunteer
}
export type SchemaObjectTypesNames =
  | 'AdditionalQuestionData'
  | 'AppBanner'
  | 'AppBanners'
  | 'AppInfo'
  | 'AppVersion'
  | 'ApplicationInfo'
  | 'CodeValue'
  | 'CodeValues'
  | 'ConnectInvite'
  | 'District'
  | 'Districts'
  | 'Edm'
  | 'Event'
  | 'EventApplication'
  | 'EventAppliedItem'
  | 'EventAppliedSchedule'
  | 'EventAttendance'
  | 'EventFeeType'
  | 'EventOption'
  | 'EventPaymentType'
  | 'EventRundownSession'
  | 'EventSchedule'
  | 'EventTicketItem'
  | 'FieldConfig'
  | 'FindEventQuery'
  | 'FindJobQuery'
  | 'Job'
  | 'JobApplication'
  | 'JobAppliedTimeslot'
  | 'JobAttendance'
  | 'JobLocation'
  | 'JobPrerequisite'
  | 'JobSession'
  | 'JobTimeslot'
  | 'LoginResponse'
  | 'MagicLinkResponse'
  | 'Membership'
  | 'MultiLangText'
  | 'Mutation'
  | 'Ngo'
  | 'NgoBanner'
  | 'NgoBanners'
  | 'OptionData'
  | 'PaginatedApplicationRecords'
  | 'PaginatedEventApplications'
  | 'PaginatedEventAppliedSchedules'
  | 'PaginatedEventAttendances'
  | 'PaginatedEvents'
  | 'PaginatedJobApplications'
  | 'PaginatedJobAppliedTimeSlots'
  | 'PaginatedJobAttendances'
  | 'PaginatedJobs'
  | 'PaginatedMemberships'
  | 'PaginatedNgos'
  | 'PaginatedSocialCvs'
  | 'PaginatedUnits'
  | 'ParentInfo'
  | 'Payment'
  | 'PinResponse'
  | 'Place'
  | 'Query'
  | 'Region'
  | 'Regions'
  | 'SocialCv'
  | 'SubDistrict'
  | 'SubDistricts'
  | 'Subscription'
  | 'TimeslotInstance'
  | 'Unit'
  | 'Volunteer'

export interface $ApplicationRecord {
  EventApplication?: EventApplication
  EventAttendance?: EventAttendance
  JobAttendance?: JobAttendance
}

export interface GeneratedSchema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined
}

export interface ScalarsEnums extends MakeNullable<Scalars> {
  AgeOption: AgeOption | undefined
  ApplicationRecordFilter: ApplicationRecordFilter | undefined
  ApplicationRecordType: ApplicationRecordType | undefined
  DayOfWeekOption: DayOfWeekOption | undefined
  DestinationType: DestinationType | undefined
  EventAdmissionType: EventAdmissionType | undefined
  EventApproval: EventApproval | undefined
  EventFeeTypeAvailability: EventFeeTypeAvailability | undefined
  EventFilterMode: EventFilterMode | undefined
  EventOptionType: EventOptionType | undefined
  EventPaymentTypeGroup: EventPaymentTypeGroup | undefined
  EventQuotaType: EventQuotaType | undefined
  EventStatusCode: EventStatusCode | undefined
  EventTypeCode: EventTypeCode | undefined
  Gender: Gender | undefined
  JobAttendanceStatus: JobAttendanceStatus | undefined
  Locale: Locale | undefined
  ParentalConsentStatus: ParentalConsentStatus | undefined
  PaymentCategory: PaymentCategory | undefined
  SocialCvItemType: SocialCvItemType | undefined
}
