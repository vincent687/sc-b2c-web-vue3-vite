export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  AdditionalQuestionValue: any
  Date: any
  DateTime: any
  Object: any
  /** Date custom scalar type */
  UnixTimestamp: any
}

export type AdditionalQuestionData = {
  __typename?: 'AdditionalQuestionData'
  key: Scalars['String']
  value?: Maybe<Scalars['AdditionalQuestionValue']>
}

export type AdditionalQuestionInput = {
  key: Scalars['String']
  value?: InputMaybe<Scalars['AdditionalQuestionValue']>
}

export enum AgeOption {
  Gte18 = 'gte18',
  Lt18 = 'lt18'
}

export type AppBanner = {
  __typename?: 'AppBanner'
  destinationType?: Maybe<DestinationType>
  destinationUrl?: Maybe<Scalars['String']>
  eventId?: Maybe<Scalars['String']>
  id: Scalars['String']
  imageUrl: Scalars['String']
  jobId?: Maybe<Scalars['String']>
  position: Scalars['Int']
}

export type AppBanners = {
  __typename?: 'AppBanners'
  data?: Maybe<Array<Maybe<AppBanner>>>
  total?: Maybe<Scalars['Int']>
}

export type AppInfo = {
  __typename?: 'AppInfo'
  android: AppVersion
  iOS: AppVersion
  updatedAt: Scalars['DateTime']
}

export type AppVersion = {
  __typename?: 'AppVersion'
  latestVersion: Scalars['String']
  minimumVersion: Scalars['String']
}

export type ApplicationInfo = {
  __typename?: 'ApplicationInfo'
  approval?: Maybe<EventApproval>
  maxAge?: Maybe<Scalars['Int']>
  minAge?: Maybe<Scalars['Int']>
}

export type ApplicationRecord = EventApplication | EventAttendance | JobAttendance

export enum ApplicationRecordFilter {
  ConfirmedSchedule = 'confirmedSchedule',
  FinishedRecord = 'finishedRecord',
  OtherRecord = 'otherRecord',
  PendingSchedule = 'pendingSchedule'
}

export enum ApplicationRecordType {
  EventApplication = 'eventApplication',
  EventAttendance = 'eventAttendance',
  JobAttendance = 'jobAttendance'
}

export type CodeValue = {
  __typename?: 'CodeValue'
  code: Scalars['String']
  name: Scalars['String']
}

/** this just follows the paginated data style, but not actually doing pagination */
export type CodeValues = {
  __typename?: 'CodeValues'
  data?: Maybe<Array<CodeValue>>
  total: Scalars['Int']
}

export type ConnectInvite = {
  __typename?: 'ConnectInvite'
  code: Scalars['String']
  ngo: Ngo
  ngoId: Scalars['Int']
}

export type CreateEventApplicationInput = {
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

export type CreateEventPaymentInput = {
  appliedItems: Array<InputMaybe<EventAppliedItemInput>>
  chineseName?: InputMaybe<Scalars['String']>
  eventId: Scalars['ID']
  firstName?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  paymentMethod?: InputMaybe<Scalars['String']>
}

export type CreateJobApplicationInput = {
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
  HasWeekday = 'hasWeekday',
  HasWeekend = 'hasWeekend'
}

export enum DestinationType {
  App = 'app',
  Web = 'web'
}

export type District = {
  __typename?: 'District'
  code?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  regionCode?: Maybe<Scalars['String']>
}

export type Districts = {
  __typename?: 'Districts'
  data?: Maybe<Array<Maybe<District>>>
  total?: Maybe<Scalars['Int']>
}

export type Edm = {
  __typename?: 'Edm'
  desc: Scalars['String']
  key: Scalars['String']
}

export type EdmInput = {
  desc: Scalars['String']
  key: Scalars['String']
}

export type Event = {
  __typename?: 'Event'
  acceptedApplications: Scalars['Int']
  activityTheme?: Maybe<Scalars['String']>
  activityThemes?: Maybe<Array<Maybe<Scalars['String']>>>
  activityType?: Maybe<Scalars['String']>
  additionalQuestions?: Maybe<Array<Maybe<FieldConfig>>>
  addressLine?: Maybe<Scalars['String']>
  admissionForAllOptions: Scalars['Boolean']
  admissionType: EventAdmissionType
  applicationEnd?: Maybe<Scalars['DateTime']>
  applicationInfo?: Maybe<ApplicationInfo>
  applicationRestrictions?: Maybe<Array<Maybe<Scalars['String']>>>
  applicationStart?: Maybe<Scalars['DateTime']>
  contact?: Maybe<Scalars['String']>
  contactEmail?: Maybe<Scalars['String']>
  contactPhone?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  description: Scalars['String']
  districtCode?: Maybe<Scalars['String']>
  eventLink?: Maybe<Scalars['String']>
  eventType?: Maybe<EventTypeCode>
  hasWeekday?: Maybe<Scalars['Boolean']>
  hasWeekend?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['String']>
  imageUrls?: Maybe<Array<Maybe<Scalars['String']>>>
  isFull: Scalars['Boolean']
  isVirtual?: Maybe<Scalars['Boolean']>
  location?: Maybe<Scalars['String']>
  mapLatLong?: Maybe<Scalars['String']>
  ngo?: Maybe<Ngo>
  ngoId?: Maybe<Scalars['Int']>
  optionType?: Maybe<EventOptionType>
  options?: Maybe<Array<Maybe<EventOption>>>
  overallEnd?: Maybe<Scalars['DateTime']>
  overallStart?: Maybe<Scalars['DateTime']>
  paymentTypes?: Maybe<Array<Maybe<EventPaymentType>>>
  pendingApplications?: Maybe<Scalars['Int']>
  progress: Scalars['String']
  regionCode?: Maybe<Scalars['String']>
  remainingQuota?: Maybe<Scalars['Int']>
  remarks?: Maybe<Scalars['String']>
  serviceType?: Maybe<Scalars['String']>
  status?: Maybe<EventStatusCode>
  subDistrictCode?: Maybe<Scalars['String']>
  targetAudience?: Maybe<Scalars['String']>
  targetAudiences?: Maybe<Array<Maybe<Scalars['String']>>>
  title: Scalars['String']
  totalApplications: Scalars['Int']
  totalQuota?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export enum EventAdmissionType {
  CheckIn = 'checkIn',
  Ticket = 'ticket'
}

export type EventApplication = {
  __typename?: 'EventApplication'
  additionalQuestions?: Maybe<Array<Maybe<AdditionalQuestionData>>>
  appliedItems?: Maybe<Array<Maybe<EventAppliedItem>>>
  appliedSchedules?: Maybe<Array<Maybe<EventAppliedSchedule>>>
  chineseName?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  email?: Maybe<Scalars['String']>
  event: Event
  eventId: Scalars['ID']
  firstName?: Maybe<Scalars['String']>
  id: Scalars['ID']
  lastName?: Maybe<Scalars['String']>
  mobileNumber?: Maybe<Scalars['String']>
  option: EventOption
  optionId: Scalars['String']
  parentInfo?: Maybe<ParentInfo>
  paymentId: Scalars['ID']
  paymentStatus: Scalars['String']
  paymentType?: Maybe<EventPaymentType>
  paymentTypeId?: Maybe<Scalars['ID']>
  reason?: Maybe<Scalars['String']>
  status: Scalars['String']
  type?: Maybe<Scalars['String']>
}

export type EventAppliedItem = {
  __typename?: 'EventAppliedItem'
  eventApplicationId: Scalars['String']
  eventId: Scalars['String']
  feeType: EventFeeType
  feeTypeId: Scalars['ID']
  id: Scalars['ID']
  quantity?: Maybe<Scalars['Int']>
  ticketItems?: Maybe<Array<Maybe<EventTicketItem>>>
}

export type EventAppliedItemInput = {
  feeTypeId: Scalars['String']
  quantity?: InputMaybe<Scalars['Int']>
}

export type EventAppliedSchedule = {
  __typename?: 'EventAppliedSchedule'
  event?: Maybe<Event>
  eventApplication?: Maybe<EventApplication>
  eventApplicationId: Scalars['String']
  id: Scalars['ID']
  schedule?: Maybe<EventSchedule>
  scheduleId: Scalars['ID']
}

export enum EventApproval {
  Instant = 'instant',
  Manual = 'manual'
}

export type EventAttendance = {
  __typename?: 'EventAttendance'
  appliedSchedule?: Maybe<EventAppliedSchedule>
  appliedScheduleId: Scalars['ID']
  id: Scalars['ID']
  startDate?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type EventFeeType = {
  __typename?: 'EventFeeType'
  applicationEnd?: Maybe<Scalars['DateTime']>
  applicationStart?: Maybe<Scalars['DateTime']>
  availability: EventFeeTypeAvailability
  description?: Maybe<Scalars['String']>
  fee?: Maybe<Scalars['Int']>
  id: Scalars['String']
  isFull: Scalars['Boolean']
  maxPurchase?: Maybe<Scalars['Int']>
  minPurchase?: Maybe<Scalars['Int']>
  numOfPeople?: Maybe<Scalars['Int']>
  option?: Maybe<EventOption>
  pendingQuota?: Maybe<Scalars['Int']>
  quota?: Maybe<Scalars['Int']>
  remainingQuota?: Maybe<Scalars['Int']>
  title: Scalars['String']
  usedQuota: Scalars['Int']
}

export enum EventFeeTypeAvailability {
  Available = 'available',
  AvailableSoon = 'availableSoon',
  NotAvailable = 'notAvailable',
  SoldOut = 'soldOut'
}

export enum EventFilterMode {
  And = 'AND',
  Or = 'OR'
}

export type EventOption = {
  __typename?: 'EventOption'
  createdAt?: Maybe<Scalars['DateTime']>
  endDate?: Maybe<Scalars['String']>
  endTime?: Maybe<Scalars['String']>
  event?: Maybe<Event>
  feeTypes?: Maybe<Array<Maybe<EventFeeType>>>
  frequency?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  isFull: Scalars['Boolean']
  isSingleDay?: Maybe<Scalars['Boolean']>
  overallEnd?: Maybe<Scalars['DateTime']>
  overallStart?: Maybe<Scalars['DateTime']>
  pendingQuota: Scalars['Int']
  position?: Maybe<Scalars['Int']>
  quotaByFeeType: Scalars['Boolean']
  quotaType?: Maybe<EventQuotaType>
  recurrenceExceptionDates?: Maybe<Array<Maybe<Scalars['String']>>>
  recurrenceFrequency?: Maybe<Scalars['Int']>
  recurrenceMonthlyMode?: Maybe<Scalars['String']>
  recurrenceRepeatDayOfMonth?: Maybe<Array<Maybe<Scalars['Int']>>>
  recurrenceRepeatDayOfWeek?: Maybe<Scalars['String']>
  recurrenceRepeatWeek?: Maybe<Scalars['String']>
  recurrenceType?: Maybe<Scalars['String']>
  recurrenceWeekdays?: Maybe<Array<Maybe<Scalars['String']>>>
  remainingQuota?: Maybe<Scalars['Int']>
  remarks: Scalars['String']
  schedules?: Maybe<Array<Maybe<EventSchedule>>>
  startDate?: Maybe<Scalars['String']>
  startTime?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  totalApplications: Scalars['Int']
  totalQuota?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
  usedQuota: Scalars['Int']
}

export enum EventOptionType {
  Custom = 'custom',
  Date = 'date',
  Time = 'time'
}

export type EventPaymentType = {
  __typename?: 'EventPaymentType'
  group?: Maybe<EventPaymentTypeGroup>
  id?: Maybe<Scalars['String']>
  instruction?: Maybe<Scalars['String']>
  paymentMethod?: Maybe<Scalars['String']>
  title: Scalars['String']
}

export enum EventPaymentTypeGroup {
  PayAtTheDoor = 'payAtTheDoor',
  Stripe = 'stripe'
}

export enum EventQuotaType {
  NoLimit = 'noLimit',
  TotalQuota = 'totalQuota'
}

export type EventRundownSession = {
  __typename?: 'EventRundownSession'
  description?: Maybe<Scalars['String']>
  endTime?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  startTime?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type EventSchedule = {
  __typename?: 'EventSchedule'
  endDate?: Maybe<Scalars['String']>
  endTime?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  isAllDay?: Maybe<Scalars['Boolean']>
  isDateTBC?: Maybe<Scalars['Boolean']>
  isSingleDay?: Maybe<Scalars['Boolean']>
  isTimeTBC?: Maybe<Scalars['Boolean']>
  option?: Maybe<EventOption>
  optionId?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['Int']>
  recurrenceExceptionDates?: Maybe<Array<Maybe<Scalars['String']>>>
  recurrenceFrequency?: Maybe<Scalars['Int']>
  recurrenceMonthlyMode?: Maybe<Scalars['String']>
  recurrenceRepeatDayOfMonth?: Maybe<Array<Maybe<Scalars['Int']>>>
  recurrenceRepeatDayOfWeek?: Maybe<Scalars['String']>
  recurrenceRepeatWeek?: Maybe<Scalars['String']>
  recurrenceType?: Maybe<Scalars['String']>
  recurrenceWeekdays?: Maybe<Array<Maybe<Scalars['String']>>>
  rundownSessions?: Maybe<Array<Maybe<EventRundownSession>>>
  startDate?: Maybe<Scalars['String']>
  startTime?: Maybe<Scalars['String']>
}

export enum EventStatusCode {
  Cancelled = 'cancelled',
  Closed = 'closed',
  Completed = 'completed',
  Draft = 'draft',
  Full = 'full',
  Published = 'published'
}

export type EventTicketItem = {
  __typename?: 'EventTicketItem'
  applicationId: Scalars['ID']
  appliedItemId: Scalars['ID']
  eventId: Scalars['ID']
  id: Scalars['ID']
  optionId: Scalars['ID']
  qrCodeKey: Scalars['String']
  redeemedAt?: Maybe<Scalars['DateTime']>
  ticketNo: Scalars['String']
}

export enum EventTypeCode {
  Activity = 'activity',
  Service = 'service'
}

export type EventsFilter = {
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

export type FieldConfig = {
  __typename?: 'FieldConfig'
  desc: Scalars['String']
  key: Scalars['String']
  mandatory?: Maybe<Scalars['Boolean']>
  options?: Maybe<Array<Maybe<OptionData>>>
  type: Scalars['String']
}

export type FindApplicationRecordParams = {
  applicationRecordFilter?: InputMaybe<ApplicationRecordFilter>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export type FindEventApplicationRecordParams = {
  applicationRecordFilter?: InputMaybe<ApplicationRecordFilter>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export type FindEventApplicationsParams = {
  eventId?: InputMaybe<Scalars['ID']>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export type FindEventAppliedSchedulesParams = {
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export type FindEventAttendanceParams = {
  filter?: InputMaybe<ApplicationRecordFilter>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export type FindEventQuery = {
  __typename?: 'FindEventQuery'
  search?: Maybe<Scalars['String']>
}

export type FindEventsParams = {
  filter?: InputMaybe<EventsFilter>
  includePast?: InputMaybe<Scalars['Boolean']>
  pageSize?: InputMaybe<Scalars['Int']>
  searchText?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
}

export type FindJobApplicationsParams = {
  jobId?: InputMaybe<Scalars['String']>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export type FindJobAppliedTimeSlotsParams = {
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export type FindJobAttendanceParams = {
  dateFilter?: InputMaybe<Scalars['String']>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
  statuses: Array<Scalars['String']>
}

export type FindJobQuery = {
  __typename?: 'FindJobQuery'
  search?: Maybe<Scalars['String']>
}

export type FindJobsParams = {
  filter?: InputMaybe<JobsFilter>
  includePast?: InputMaybe<Scalars['Boolean']>
  pageSize?: InputMaybe<Scalars['Int']>
  searchText?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
}

export type FindNgosParams = {
  filter?: InputMaybe<NgosFilter>
  pageSize?: InputMaybe<Scalars['Int']>
  searchText?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
}

export type FindUnitsParams = {
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export enum Gender {
  Female = 'female',
  Male = 'male',
  NotProvided = 'notProvided'
}

export type Job = {
  __typename?: 'Job'
  acceptedApplications?: Maybe<Scalars['Int']>
  acceptedQuota?: Maybe<Scalars['Int']>
  additionalQuestions?: Maybe<Array<Maybe<FieldConfig>>>
  applicationEnd?: Maybe<Scalars['DateTime']>
  applicationRestrictions?: Maybe<Array<Maybe<Scalars['String']>>>
  applicationStart?: Maybe<Scalars['DateTime']>
  causes?: Maybe<Array<Maybe<Scalars['String']>>>
  contact?: Maybe<Scalars['String']>
  contactEmail?: Maybe<Scalars['String']>
  contactPhone?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  districtCode?: Maybe<Scalars['String']>
  feeDetail?: Maybe<Scalars['String']>
  groupApply?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['String']>
  imageUrls?: Maybe<Array<Maybe<Scalars['String']>>>
  isVirtual?: Maybe<Scalars['Boolean']>
  jobLink?: Maybe<Scalars['String']>
  languageOther?: Maybe<Scalars['String']>
  languages?: Maybe<Array<Maybe<Scalars['String']>>>
  location?: Maybe<Scalars['String']>
  ngo?: Maybe<Ngo>
  ngoId?: Maybe<Scalars['Int']>
  overallEnd?: Maybe<Scalars['DateTime']>
  overallStart?: Maybe<Scalars['DateTime']>
  parentalConsent?: Maybe<Scalars['Boolean']>
  pcAge?: Maybe<Scalars['Int']>
  pendingApplications?: Maybe<Scalars['Int']>
  prerequisite?: Maybe<JobPrerequisite>
  progress?: Maybe<Scalars['String']>
  quota?: Maybe<Scalars['Int']>
  recipients?: Maybe<Array<Maybe<Scalars['String']>>>
  regionCode?: Maybe<Scalars['String']>
  remainingQuota?: Maybe<Scalars['Int']>
  remarks?: Maybe<Scalars['String']>
  sdgs?: Maybe<Array<Maybe<Scalars['String']>>>
  sessions?: Maybe<Array<Maybe<JobSession>>>
  skills?: Maybe<Array<Maybe<Scalars['String']>>>
  subDistrictCode?: Maybe<Scalars['String']>
  title: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  volunteerFunctions?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type JobApplication = {
  __typename?: 'JobApplication'
  additionalQuestions?: Maybe<Array<Maybe<AdditionalQuestionData>>>
  appliedTimeSlots?: Maybe<Array<Maybe<JobAppliedTimeslot>>>
  attendances?: Maybe<Array<Maybe<JobAttendance>>>
  chineseName?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  id: Scalars['ID']
  job?: Maybe<Job>
  jobId: Scalars['ID']
  lastName?: Maybe<Scalars['String']>
  mobileNumber?: Maybe<Scalars['String']>
  parentInfo?: Maybe<ParentInfo>
  parentalConsent?: Maybe<Scalars['Boolean']>
  reason?: Maybe<Scalars['String']>
  status: Scalars['String']
}

export type JobAppliedTimeslot = {
  __typename?: 'JobAppliedTimeslot'
  id: Scalars['ID']
  job?: Maybe<Job>
  jobApplication?: Maybe<JobApplication>
  jobApplicationId: Scalars['String']
  status: Scalars['String']
  timeslot?: Maybe<JobTimeslot>
  timeslotId: Scalars['ID']
}

export type JobAttendance = {
  __typename?: 'JobAttendance'
  absent?: Maybe<Scalars['Boolean']>
  absentReason?: Maybe<Scalars['String']>
  appliedTimeslot?: Maybe<JobAppliedTimeslot>
  appliedTimeslotId: Scalars['ID']
  attendances?: Maybe<Array<Maybe<JobAttendance>>>
  endDate?: Maybe<Scalars['String']>
  endTime?: Maybe<Scalars['DateTime']>
  id: Scalars['ID']
  isAllDay?: Maybe<Scalars['Boolean']>
  isSingleDay?: Maybe<Scalars['Boolean']>
  isTimeTBC?: Maybe<Scalars['Boolean']>
  isdateTBC?: Maybe<Scalars['Boolean']>
  startDate?: Maybe<Scalars['String']>
  startTime?: Maybe<Scalars['DateTime']>
  status: Scalars['String']
  timeslotInstance?: Maybe<TimeslotInstance>
  timeslotInstanceId: Scalars['ID']
  type?: Maybe<Scalars['String']>
}

export enum JobAttendanceStatus {
  Absent = 'absent',
  Accepted = 'accepted',
  Cancelled = 'cancelled',
  Declined = 'declined',
  OnHold = 'onHold',
  Pending = 'pending',
  Reserved = 'reserved'
}

export type JobLocation = {
  __typename?: 'JobLocation'
  address: Scalars['String']
  lat: Scalars['Float']
  lng: Scalars['Float']
  name: Scalars['String']
}

export type JobPrerequisite = {
  __typename?: 'JobPrerequisite'
  maxAge?: Maybe<Scalars['Int']>
  minAge?: Maybe<Scalars['Int']>
}

export type JobSession = {
  __typename?: 'JobSession'
  attendanceRule?: Maybe<Scalars['String']>
  attendanceRuleAmount?: Maybe<Scalars['Int']>
  frequency?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['Int']>
  timeslots?: Maybe<Array<Maybe<JobTimeslot>>>
  title: Scalars['String']
  type?: Maybe<Scalars['String']>
}

export type JobTimeslot = {
  __typename?: 'JobTimeslot'
  address?: Maybe<MultiLangText>
  addressLine?: Maybe<Scalars['String']>
  districtCode?: Maybe<Scalars['String']>
  endDate?: Maybe<Scalars['DateTime']>
  endTime?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  isAllDay?: Maybe<Scalars['Boolean']>
  isSingleDay?: Maybe<Scalars['Boolean']>
  isTimeTBC?: Maybe<Scalars['Boolean']>
  isVirtual?: Maybe<Scalars['Boolean']>
  isdateTBC?: Maybe<Scalars['Boolean']>
  mapLatLong?: Maybe<Scalars['String']>
  quota?: Maybe<Scalars['Int']>
  recurrenceExceptionDates?: Maybe<Array<Maybe<Scalars['Date']>>>
  recurrenceFrequency?: Maybe<Scalars['Int']>
  recurrenceMonthlyMode?: Maybe<Scalars['String']>
  recurrenceRepeatDayOfMonth?: Maybe<Array<Maybe<Scalars['Int']>>>
  recurrenceRepeatDayOfWeek?: Maybe<Scalars['String']>
  recurrenceRepeatWeek?: Maybe<Scalars['String']>
  recurrenceType?: Maybe<Scalars['String']>
  recurrenceWeekdays?: Maybe<Array<Maybe<Scalars['String']>>>
  regionCode?: Maybe<Scalars['String']>
  session?: Maybe<JobSession>
  sessionId?: Maybe<Scalars['String']>
  startDate?: Maybe<Scalars['DateTime']>
  startTime?: Maybe<Scalars['DateTime']>
  subDistrictCode?: Maybe<Scalars['String']>
  usedQuota?: Maybe<Scalars['Int']>
}

export type JobsFilter = {
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
  En = 'en',
  ZhHans = 'zhHans',
  ZhHant = 'zhHant'
}

export type LoginResponse = {
  __typename?: 'LoginResponse'
  accessToken: Scalars['String']
  isNewUser?: Maybe<Scalars['Boolean']>
}

export type MagicLinkResponse = {
  __typename?: 'MagicLinkResponse'
  isNewUser?: Maybe<Scalars['Boolean']>
  magicLink?: Maybe<Scalars['String']>
  success: Scalars['Boolean']
}

export type Membership = {
  __typename?: 'Membership'
  contactId?: Maybe<Scalars['Int']>
  ngo?: Maybe<Ngo>
}

export type MultiLangText = {
  __typename?: 'MultiLangText'
  en?: Maybe<Scalars['String']>
  zhHans?: Maybe<Scalars['String']>
  zhHant?: Maybe<Scalars['String']>
}

export type Mutation = {
  __typename?: 'Mutation'
  connectNgo?: Maybe<ConnectInvite>
  createEventApplication?: Maybe<EventApplication>
  createEventPayment?: Maybe<Payment>
  createJobApplication?: Maybe<JobApplication>
  createMagicLink?: Maybe<MagicLinkResponse>
  createPin?: Maybe<PinResponse>
  loginWithApple?: Maybe<LoginResponse>
  loginWithEmail?: Maybe<LoginResponse>
  loginWithGoogle?: Maybe<LoginResponse>
  loginWithMobile?: Maybe<LoginResponse>
  reportEventApplicationCancel?: Maybe<EventApplication>
  reportJobAbsent?: Maybe<JobAttendance>
  reportJobApplicationCancel?: Maybe<JobApplication>
  updateEventApplication?: Maybe<EventApplication>
  updateJobApplication?: Maybe<JobApplication>
  updateProfile?: Maybe<Volunteer>
}

export type MutationConnectNgoArgs = {
  code: Scalars['String']
}

export type MutationCreateEventApplicationArgs = {
  applicationData?: InputMaybe<CreateEventApplicationInput>
}

export type MutationCreateEventPaymentArgs = {
  input?: InputMaybe<CreateEventPaymentInput>
}

export type MutationCreateJobApplicationArgs = {
  applicationData?: InputMaybe<CreateJobApplicationInput>
}

export type MutationCreateMagicLinkArgs = {
  email: Scalars['String']
}

export type MutationCreatePinArgs = {
  mobileNumber: Scalars['String']
}

export type MutationLoginWithAppleArgs = {
  authorizationCode: Scalars['String']
  email?: InputMaybe<Scalars['String']>
  familyName?: InputMaybe<Scalars['String']>
  givenName?: InputMaybe<Scalars['String']>
  nonce: Scalars['String']
  userIdentifier: Scalars['String']
}

export type MutationLoginWithEmailArgs = {
  email: Scalars['String']
  magicLinkSecret: Scalars['String']
}

export type MutationLoginWithGoogleArgs = {
  idToken: Scalars['String']
  userIdentifier: Scalars['String']
}

export type MutationLoginWithMobileArgs = {
  mobileNumber: Scalars['String']
  pin: Scalars['String']
}

export type MutationReportEventApplicationCancelArgs = {
  applicationId: Scalars['String']
  cancelReason: Scalars['String']
}

export type MutationReportJobAbsentArgs = {
  absentReason: Scalars['String']
  attendanceId: Scalars['String']
}

export type MutationReportJobApplicationCancelArgs = {
  applicationId: Scalars['String']
  cancelReason: Scalars['String']
}

export type MutationUpdateEventApplicationArgs = {
  applicationData?: InputMaybe<UpdateEventApplicationInput>
  id: Scalars['ID']
}

export type MutationUpdateJobApplicationArgs = {
  applicationData?: InputMaybe<UpdateJobApplicationInput>
  id?: InputMaybe<Scalars['ID']>
}

export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput
}

export type Ngo = {
  __typename?: 'Ngo'
  addressLine?: Maybe<Scalars['String']>
  category?: Maybe<Scalars['String']>
  causes?: Maybe<Array<Maybe<Scalars['String']>>>
  code: Scalars['String']
  description?: Maybe<Scalars['String']>
  districtCode?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  establishYear?: Maybe<Scalars['String']>
  fax?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  imageUrl?: Maybe<Scalars['String']>
  isPublished?: Maybe<Scalars['Boolean']>
  locationCoordinates?: Maybe<Scalars['String']>
  logoUrl?: Maybe<Scalars['String']>
  missionAndVision?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  ngoLink?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  recipients?: Maybe<Array<Maybe<Scalars['String']>>>
  regionCode?: Maybe<Scalars['String']>
  registrationNumber?: Maybe<Scalars['String']>
  registrationType?: Maybe<Scalars['String']>
  sdgoals?: Maybe<Array<Maybe<Scalars['String']>>>
  subDistrictCode?: Maybe<Scalars['String']>
  websiteUrl?: Maybe<Scalars['String']>
}

export type NgoBanner = {
  __typename?: 'NgoBanner'
  destinationType?: Maybe<DestinationType>
  destinationUrl?: Maybe<Scalars['String']>
  eventId?: Maybe<Scalars['String']>
  id: Scalars['String']
  imageUrl: Scalars['String']
  jobId?: Maybe<Scalars['String']>
  ngoId: Scalars['Int']
  position: Scalars['Int']
}

export type NgoBanners = {
  __typename?: 'NgoBanners'
  data?: Maybe<Array<Maybe<NgoBanner>>>
  total?: Maybe<Scalars['Int']>
}

export type NgosFilter = {
  causes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  districtCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  recipients?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  regionCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  sdgoals?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  subDistrictCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type OptionData = {
  __typename?: 'OptionData'
  desc: Scalars['String']
  key: Scalars['String']
}

export type PaginatedApplicationRecords = {
  __typename?: 'PaginatedApplicationRecords'
  data?: Maybe<Array<ApplicationRecord>>
  total?: Maybe<Scalars['Int']>
}

export type PaginatedEventApplications = {
  __typename?: 'PaginatedEventApplications'
  data?: Maybe<Array<EventApplication>>
  total?: Maybe<Scalars['Int']>
}

export type PaginatedEventAppliedSchedules = {
  __typename?: 'PaginatedEventAppliedSchedules'
  data?: Maybe<Array<EventAppliedSchedule>>
  total?: Maybe<Scalars['Int']>
}

export type PaginatedEventAttendances = {
  __typename?: 'PaginatedEventAttendances'
  data: Array<EventAttendance>
  total?: Maybe<Scalars['Int']>
}

export type PaginatedEvents = {
  __typename?: 'PaginatedEvents'
  data?: Maybe<Array<Event>>
  total?: Maybe<Scalars['Int']>
}

export type PaginatedJobApplications = {
  __typename?: 'PaginatedJobApplications'
  data?: Maybe<Array<JobApplication>>
  total?: Maybe<Scalars['Int']>
}

export type PaginatedJobAppliedTimeSlots = {
  __typename?: 'PaginatedJobAppliedTimeSlots'
  data?: Maybe<Array<JobAppliedTimeslot>>
  total?: Maybe<Scalars['Int']>
}

export type PaginatedJobAttendances = {
  __typename?: 'PaginatedJobAttendances'
  data: Array<JobAttendance>
  total?: Maybe<Scalars['Int']>
}

export type PaginatedJobs = {
  __typename?: 'PaginatedJobs'
  data?: Maybe<Array<Job>>
  total?: Maybe<Scalars['Int']>
}

export type PaginatedMemberships = {
  __typename?: 'PaginatedMemberships'
  data?: Maybe<Array<Maybe<Membership>>>
  total?: Maybe<Scalars['Int']>
}

export type PaginatedNgos = {
  __typename?: 'PaginatedNgos'
  data?: Maybe<Array<Ngo>>
  total?: Maybe<Scalars['Int']>
}

export type PaginatedSocialCvs = {
  __typename?: 'PaginatedSocialCvs'
  data?: Maybe<Array<SocialCv>>
  total?: Maybe<Scalars['Int']>
}

export type PaginatedUnits = {
  __typename?: 'PaginatedUnits'
  data?: Maybe<Array<Unit>>
  total?: Maybe<Scalars['Int']>
}

export type ParentInfo = {
  __typename?: 'ParentInfo'
  acceptCode?: Maybe<Scalars['String']>
  declineCode?: Maybe<Scalars['String']>
  email: Scalars['String']
  name: Scalars['String']
  relationship?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
}

export type ParentInfoInput = {
  acceptCode?: InputMaybe<Scalars['String']>
  declineCode?: InputMaybe<Scalars['String']>
  email: Scalars['String']
  name: Scalars['String']
  relationship?: InputMaybe<Scalars['String']>
}

export enum ParentalConsentStatus {
  Accepted = 'accepted',
  Cancelled = 'cancelled',
  Declined = 'declined',
  OnHold = 'onHold'
}

export type Payment = {
  __typename?: 'Payment'
  amount: Scalars['Int']
  category: PaymentCategory
  currency: Scalars['String']
  id: Scalars['ID']
  method?: Maybe<Scalars['String']>
  paymentIntentClientSecret?: Maybe<Scalars['String']>
  status: Scalars['String']
  stripeAccount?: Maybe<Scalars['String']>
}

export enum PaymentCategory {
  Adhoc = 'adhoc',
  Event = 'event',
  Membership = 'membership',
  Volunteer = 'volunteer'
}

export type PinResponse = {
  __typename?: 'PinResponse'
  isNewUser?: Maybe<Scalars['Boolean']>
  pin?: Maybe<Scalars['String']>
  success: Scalars['Boolean']
}

export type Place = {
  __typename?: 'Place'
  code?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  appBanners?: Maybe<AppBanners>
  appInfo?: Maybe<AppInfo>
  applicationRecords?: Maybe<PaginatedApplicationRecords>
  appliedEventAttendances?: Maybe<PaginatedEventAttendances>
  appliedJobAttendances?: Maybe<PaginatedJobAttendances>
  causes: CodeValues
  connectInvite?: Maybe<ConnectInvite>
  districts?: Maybe<Districts>
  event?: Maybe<Event>
  eventActivityThemes: CodeValues
  eventActivityTypes: CodeValues
  eventApplication?: Maybe<EventApplication>
  /** For legacy compatibility. Remove later */
  eventApplicationRecords?: Maybe<PaginatedApplicationRecords>
  eventApplications?: Maybe<PaginatedEventApplications>
  eventAppliedSchedules?: Maybe<PaginatedEventAppliedSchedules>
  eventPayment?: Maybe<Payment>
  eventServiceTypes: CodeValues
  eventTargetAudiences: CodeValues
  events?: Maybe<PaginatedEvents>
  hqUnit?: Maybe<Unit>
  job?: Maybe<Job>
  jobApplication?: Maybe<JobApplication>
  jobApplications?: Maybe<PaginatedJobApplications>
  jobAppliedTimeSlots?: Maybe<PaginatedJobAppliedTimeSlots>
  jobEventTypes: CodeValues
  jobSessionTypes: CodeValues
  jobs?: Maybe<PaginatedJobs>
  memberships?: Maybe<PaginatedMemberships>
  ngo?: Maybe<Ngo>
  ngoBanners?: Maybe<NgoBanners>
  ngos?: Maybe<PaginatedNgos>
  profile?: Maybe<Volunteer>
  recipients: CodeValues
  regions?: Maybe<Regions>
  sdgoals: CodeValues
  socialCv?: Maybe<PaginatedSocialCvs>
  subDistricts?: Maybe<SubDistricts>
  totalServiceHours?: Maybe<Scalars['Float']>
  units?: Maybe<PaginatedUnits>
  volunteerFunctions: CodeValues
}

export type QueryApplicationRecordsArgs = {
  params?: InputMaybe<FindApplicationRecordParams>
}

export type QueryAppliedEventAttendancesArgs = {
  params?: InputMaybe<FindEventAttendanceParams>
}

export type QueryAppliedJobAttendancesArgs = {
  params?: InputMaybe<FindJobAttendanceParams>
}

export type QueryConnectInviteArgs = {
  code: Scalars['String']
}

export type QueryEventArgs = {
  id: Scalars['ID']
}

export type QueryEventApplicationArgs = {
  id: Scalars['ID']
}

export type QueryEventApplicationRecordsArgs = {
  params?: InputMaybe<FindEventApplicationRecordParams>
}

export type QueryEventApplicationsArgs = {
  params?: InputMaybe<FindEventApplicationsParams>
}

export type QueryEventAppliedSchedulesArgs = {
  params?: InputMaybe<FindEventAppliedSchedulesParams>
}

export type QueryEventPaymentArgs = {
  id: Scalars['ID']
}

export type QueryEventsArgs = {
  params?: InputMaybe<FindEventsParams>
}

export type QueryHqUnitArgs = {
  ngoId: Scalars['ID']
}

export type QueryJobArgs = {
  id: Scalars['ID']
}

export type QueryJobApplicationArgs = {
  id: Scalars['ID']
}

export type QueryJobApplicationsArgs = {
  params?: InputMaybe<FindJobApplicationsParams>
}

export type QueryJobAppliedTimeSlotsArgs = {
  params?: InputMaybe<FindJobAppliedTimeSlotsParams>
}

export type QueryJobsArgs = {
  params?: InputMaybe<FindJobsParams>
}

export type QueryNgoArgs = {
  id: Scalars['ID']
}

export type QueryNgoBannersArgs = {
  ngoId: Scalars['ID']
}

export type QueryNgosArgs = {
  params?: InputMaybe<FindNgosParams>
}

export type QuerySocialCvArgs = {
  params?: InputMaybe<SocialCvParams>
}

export type QueryUnitsArgs = {
  ngoId: Scalars['ID']
  params?: InputMaybe<FindUnitsParams>
}

export type Region = {
  __typename?: 'Region'
  code?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type Regions = {
  __typename?: 'Regions'
  data?: Maybe<Array<Maybe<Region>>>
  total?: Maybe<Scalars['Int']>
}

export type SocialCv = {
  __typename?: 'SocialCv'
  endDate?: Maybe<Scalars['DateTime']>
  id: Scalars['ID']
  itemId?: Maybe<Scalars['ID']>
  itemType: SocialCvItemType
  ngoId?: Maybe<Scalars['Int']>
  ngoName?: Maybe<Scalars['String']>
  serviceHours?: Maybe<Scalars['Float']>
  startDate: Scalars['DateTime']
  title: Scalars['String']
}

export enum SocialCvItemType {
  Event = 'event',
  Info = 'info',
  Job = 'job'
}

export type SocialCvParams = {
  exclude?: InputMaybe<Array<InputMaybe<SocialCvItemType>>>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export type SubDistrict = {
  __typename?: 'SubDistrict'
  code?: Maybe<Scalars['String']>
  districtCode?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type SubDistricts = {
  __typename?: 'SubDistricts'
  data?: Maybe<Array<Maybe<SubDistrict>>>
  total?: Maybe<Scalars['Int']>
}

export type TimeslotInstance = {
  __typename?: 'TimeslotInstance'
  endDate?: Maybe<Scalars['DateTime']>
  endTime?: Maybe<Scalars['DateTime']>
  id: Scalars['ID']
  isAllDay?: Maybe<Scalars['Boolean']>
  isDateTBC?: Maybe<Scalars['Boolean']>
  isSingleDay?: Maybe<Scalars['Boolean']>
  isTimeTBC?: Maybe<Scalars['Boolean']>
  startDate?: Maybe<Scalars['DateTime']>
  startTime?: Maybe<Scalars['DateTime']>
  timeslotId: Scalars['ID']
}

export type Unit = {
  __typename?: 'Unit'
  addressLine?: Maybe<Scalars['String']>
  code: Scalars['String']
  districtCode?: Maybe<Scalars['String']>
  emails?: Maybe<Scalars['Object']>
  id?: Maybe<Scalars['Int']>
  imageUrl?: Maybe<Scalars['String']>
  isVirtual?: Maybe<Scalars['Boolean']>
  logoUrl?: Maybe<Scalars['String']>
  mapLatLong?: Maybe<Scalars['String']>
  name: Scalars['String']
  phones?: Maybe<Scalars['Object']>
  regionCode?: Maybe<Scalars['String']>
  subDistrictCode?: Maybe<Scalars['String']>
}

export type UpdateEventApplicationInput = {
  appliedItems?: InputMaybe<Array<InputMaybe<EventAppliedItemInput>>>
  feeTypeId?: InputMaybe<Scalars['ID']>
  optionId?: InputMaybe<Scalars['ID']>
  paymentId?: InputMaybe<Scalars['ID']>
  paymentStatus?: InputMaybe<Scalars['String']>
  paymentTypeId?: InputMaybe<Scalars['ID']>
}

export type UpdateJobApplicationInput = {
  timeslots?: InputMaybe<Scalars['Object']>
}

export type UpdateProfileInput = {
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

export type Volunteer = {
  __typename?: 'Volunteer'
  chineseName?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  dob?: Maybe<Scalars['Date']>
  edm?: Maybe<Array<Maybe<Edm>>>
  email?: Maybe<Scalars['String']>
  emailVerifiedAt?: Maybe<Scalars['DateTime']>
  firstName?: Maybe<Scalars['String']>
  gender?: Maybe<Gender>
  id: Scalars['ID']
  lastName?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
  mobileNumber?: Maybe<Scalars['String']>
  mobileNumberVerifiedAt?: Maybe<Scalars['DateTime']>
  qrCode: Scalars['String']
}

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  AdditionalQuestionValue: any
  Date: any
  DateTime: any
  Object: any
  /** Date custom scalar type */
  UnixTimestamp: any
}

export type AdditionalQuestionData = {
  __typename?: 'AdditionalQuestionData'
  key: Scalars['String']
  value?: Maybe<Scalars['AdditionalQuestionValue']>
}

export type AdditionalQuestionInput = {
  key: Scalars['String']
  value?: InputMaybe<Scalars['AdditionalQuestionValue']>
}

export enum AgeOption {
  Gte18 = 'gte18',
  Lt18 = 'lt18'
}

export type AppBanner = {
  __typename?: 'AppBanner'
  destinationType?: Maybe<DestinationType>
  destinationUrl?: Maybe<Scalars['String']>
  eventId?: Maybe<Scalars['String']>
  id: Scalars['String']
  imageUrl: Scalars['String']
  jobId?: Maybe<Scalars['String']>
  position: Scalars['Int']
}

export type AppBanners = {
  __typename?: 'AppBanners'
  data?: Maybe<Array<Maybe<AppBanner>>>
  total?: Maybe<Scalars['Int']>
}

export type AppInfo = {
  __typename?: 'AppInfo'
  android: AppVersion
  iOS: AppVersion
  updatedAt: Scalars['DateTime']
}

export type AppVersion = {
  __typename?: 'AppVersion'
  latestVersion: Scalars['String']
  minimumVersion: Scalars['String']
}

export type ApplicationInfo = {
  __typename?: 'ApplicationInfo'
  approval?: Maybe<EventApproval>
  maxAge?: Maybe<Scalars['Int']>
  minAge?: Maybe<Scalars['Int']>
}

export type ApplicationRecord = EventApplication | EventAttendance | JobAttendance

export enum ApplicationRecordFilter {
  ConfirmedSchedule = 'confirmedSchedule',
  FinishedRecord = 'finishedRecord',
  OtherRecord = 'otherRecord',
  PendingSchedule = 'pendingSchedule'
}

export enum ApplicationRecordType {
  EventApplication = 'eventApplication',
  EventAttendance = 'eventAttendance',
  JobAttendance = 'jobAttendance'
}

export type CodeValue = {
  __typename?: 'CodeValue'
  code: Scalars['String']
  name: Scalars['String']
}

/** this just follows the paginated data style, but not actually doing pagination */
export type CodeValues = {
  __typename?: 'CodeValues'
  data?: Maybe<Array<CodeValue>>
  total: Scalars['Int']
}

export type ConnectInvite = {
  __typename?: 'ConnectInvite'
  code: Scalars['String']
  ngo: Ngo
  ngoId: Scalars['Int']
}

export type CreateEventApplicationInput = {
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

export type CreateEventPaymentInput = {
  appliedItems: Array<InputMaybe<EventAppliedItemInput>>
  chineseName?: InputMaybe<Scalars['String']>
  eventId: Scalars['ID']
  firstName?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  paymentMethod?: InputMaybe<Scalars['String']>
}

export type CreateJobApplicationInput = {
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
  HasWeekday = 'hasWeekday',
  HasWeekend = 'hasWeekend'
}

export enum DestinationType {
  App = 'app',
  Web = 'web'
}

export type District = {
  __typename?: 'District'
  code?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  regionCode?: Maybe<Scalars['String']>
}

export type Districts = {
  __typename?: 'Districts'
  data?: Maybe<Array<Maybe<District>>>
  total?: Maybe<Scalars['Int']>
}

export type Edm = {
  __typename?: 'Edm'
  desc: Scalars['String']
  key: Scalars['String']
}

export type EdmInput = {
  desc: Scalars['String']
  key: Scalars['String']
}

export type Event = {
  __typename?: 'Event'
  acceptedApplications: Scalars['Int']
  activityTheme?: Maybe<Scalars['String']>
  activityThemes?: Maybe<Array<Maybe<Scalars['String']>>>
  activityType?: Maybe<Scalars['String']>
  additionalQuestions?: Maybe<Array<Maybe<FieldConfig>>>
  addressLine?: Maybe<Scalars['String']>
  admissionForAllOptions: Scalars['Boolean']
  admissionType: EventAdmissionType
  applicationEnd?: Maybe<Scalars['DateTime']>
  applicationInfo?: Maybe<ApplicationInfo>
  applicationRestrictions?: Maybe<Array<Maybe<Scalars['String']>>>
  applicationStart?: Maybe<Scalars['DateTime']>
  contact?: Maybe<Scalars['String']>
  contactEmail?: Maybe<Scalars['String']>
  contactPhone?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  description: Scalars['String']
  districtCode?: Maybe<Scalars['String']>
  eventLink?: Maybe<Scalars['String']>
  eventType?: Maybe<EventTypeCode>
  hasWeekday?: Maybe<Scalars['Boolean']>
  hasWeekend?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['String']>
  imageUrls?: Maybe<Array<Maybe<Scalars['String']>>>
  isFull: Scalars['Boolean']
  isVirtual?: Maybe<Scalars['Boolean']>
  location?: Maybe<Scalars['String']>
  mapLatLong?: Maybe<Scalars['String']>
  ngo?: Maybe<Ngo>
  ngoId?: Maybe<Scalars['Int']>
  optionType?: Maybe<EventOptionType>
  options?: Maybe<Array<Maybe<EventOption>>>
  overallEnd?: Maybe<Scalars['DateTime']>
  overallStart?: Maybe<Scalars['DateTime']>
  paymentTypes?: Maybe<Array<Maybe<EventPaymentType>>>
  pendingApplications?: Maybe<Scalars['Int']>
  progress: Scalars['String']
  regionCode?: Maybe<Scalars['String']>
  remainingQuota?: Maybe<Scalars['Int']>
  remarks?: Maybe<Scalars['String']>
  serviceType?: Maybe<Scalars['String']>
  status?: Maybe<EventStatusCode>
  subDistrictCode?: Maybe<Scalars['String']>
  targetAudience?: Maybe<Scalars['String']>
  targetAudiences?: Maybe<Array<Maybe<Scalars['String']>>>
  title: Scalars['String']
  totalApplications: Scalars['Int']
  totalQuota?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export enum EventAdmissionType {
  CheckIn = 'checkIn',
  Ticket = 'ticket'
}

export type EventApplication = {
  __typename?: 'EventApplication'
  additionalQuestions?: Maybe<Array<Maybe<AdditionalQuestionData>>>
  appliedItems?: Maybe<Array<Maybe<EventAppliedItem>>>
  appliedSchedules?: Maybe<Array<Maybe<EventAppliedSchedule>>>
  chineseName?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  email?: Maybe<Scalars['String']>
  event: Event
  eventId: Scalars['ID']
  firstName?: Maybe<Scalars['String']>
  id: Scalars['ID']
  lastName?: Maybe<Scalars['String']>
  mobileNumber?: Maybe<Scalars['String']>
  option: EventOption
  optionId: Scalars['String']
  parentInfo?: Maybe<ParentInfo>
  paymentId: Scalars['ID']
  paymentStatus: Scalars['String']
  paymentType?: Maybe<EventPaymentType>
  paymentTypeId?: Maybe<Scalars['ID']>
  reason?: Maybe<Scalars['String']>
  status: Scalars['String']
  type?: Maybe<Scalars['String']>
}

export type EventAppliedItem = {
  __typename?: 'EventAppliedItem'
  eventApplicationId: Scalars['String']
  eventId: Scalars['String']
  feeType: EventFeeType
  feeTypeId: Scalars['ID']
  id: Scalars['ID']
  quantity?: Maybe<Scalars['Int']>
  ticketItems?: Maybe<Array<Maybe<EventTicketItem>>>
}

export type EventAppliedItemInput = {
  feeTypeId: Scalars['String']
  quantity?: InputMaybe<Scalars['Int']>
}

export type EventAppliedSchedule = {
  __typename?: 'EventAppliedSchedule'
  event?: Maybe<Event>
  eventApplication?: Maybe<EventApplication>
  eventApplicationId: Scalars['String']
  id: Scalars['ID']
  schedule?: Maybe<EventSchedule>
  scheduleId: Scalars['ID']
}

export enum EventApproval {
  Instant = 'instant',
  Manual = 'manual'
}

export type EventAttendance = {
  __typename?: 'EventAttendance'
  appliedSchedule?: Maybe<EventAppliedSchedule>
  appliedScheduleId: Scalars['ID']
  id: Scalars['ID']
  startDate?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type EventFeeType = {
  __typename?: 'EventFeeType'
  applicationEnd?: Maybe<Scalars['DateTime']>
  applicationStart?: Maybe<Scalars['DateTime']>
  availability: EventFeeTypeAvailability
  description?: Maybe<Scalars['String']>
  fee?: Maybe<Scalars['Int']>
  id: Scalars['String']
  isFull: Scalars['Boolean']
  maxPurchase?: Maybe<Scalars['Int']>
  minPurchase?: Maybe<Scalars['Int']>
  numOfPeople?: Maybe<Scalars['Int']>
  option?: Maybe<EventOption>
  pendingQuota?: Maybe<Scalars['Int']>
  quota?: Maybe<Scalars['Int']>
  remainingQuota?: Maybe<Scalars['Int']>
  title: Scalars['String']
  usedQuota: Scalars['Int']
}

export enum EventFeeTypeAvailability {
  Available = 'available',
  AvailableSoon = 'availableSoon',
  NotAvailable = 'notAvailable',
  SoldOut = 'soldOut'
}

export enum EventFilterMode {
  And = 'AND',
  Or = 'OR'
}

export type EventOption = {
  __typename?: 'EventOption'
  createdAt?: Maybe<Scalars['DateTime']>
  endDate?: Maybe<Scalars['String']>
  endTime?: Maybe<Scalars['String']>
  event?: Maybe<Event>
  feeTypes?: Maybe<Array<Maybe<EventFeeType>>>
  frequency?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  isFull: Scalars['Boolean']
  isSingleDay?: Maybe<Scalars['Boolean']>
  overallEnd?: Maybe<Scalars['DateTime']>
  overallStart?: Maybe<Scalars['DateTime']>
  pendingQuota: Scalars['Int']
  position?: Maybe<Scalars['Int']>
  quotaByFeeType: Scalars['Boolean']
  quotaType?: Maybe<EventQuotaType>
  recurrenceExceptionDates?: Maybe<Array<Maybe<Scalars['String']>>>
  recurrenceFrequency?: Maybe<Scalars['Int']>
  recurrenceMonthlyMode?: Maybe<Scalars['String']>
  recurrenceRepeatDayOfMonth?: Maybe<Array<Maybe<Scalars['Int']>>>
  recurrenceRepeatDayOfWeek?: Maybe<Scalars['String']>
  recurrenceRepeatWeek?: Maybe<Scalars['String']>
  recurrenceType?: Maybe<Scalars['String']>
  recurrenceWeekdays?: Maybe<Array<Maybe<Scalars['String']>>>
  remainingQuota?: Maybe<Scalars['Int']>
  remarks: Scalars['String']
  schedules?: Maybe<Array<Maybe<EventSchedule>>>
  startDate?: Maybe<Scalars['String']>
  startTime?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  totalApplications: Scalars['Int']
  totalQuota?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
  usedQuota: Scalars['Int']
}

export enum EventOptionType {
  Custom = 'custom',
  Date = 'date',
  Time = 'time'
}

export type EventPaymentType = {
  __typename?: 'EventPaymentType'
  group?: Maybe<EventPaymentTypeGroup>
  id?: Maybe<Scalars['String']>
  instruction?: Maybe<Scalars['String']>
  paymentMethod?: Maybe<Scalars['String']>
  title: Scalars['String']
}

export enum EventPaymentTypeGroup {
  PayAtTheDoor = 'payAtTheDoor',
  Stripe = 'stripe'
}

export enum EventQuotaType {
  NoLimit = 'noLimit',
  TotalQuota = 'totalQuota'
}

export type EventRundownSession = {
  __typename?: 'EventRundownSession'
  description?: Maybe<Scalars['String']>
  endTime?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  startTime?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type EventSchedule = {
  __typename?: 'EventSchedule'
  endDate?: Maybe<Scalars['String']>
  endTime?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  isAllDay?: Maybe<Scalars['Boolean']>
  isDateTBC?: Maybe<Scalars['Boolean']>
  isSingleDay?: Maybe<Scalars['Boolean']>
  isTimeTBC?: Maybe<Scalars['Boolean']>
  option?: Maybe<EventOption>
  optionId?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['Int']>
  recurrenceExceptionDates?: Maybe<Array<Maybe<Scalars['String']>>>
  recurrenceFrequency?: Maybe<Scalars['Int']>
  recurrenceMonthlyMode?: Maybe<Scalars['String']>
  recurrenceRepeatDayOfMonth?: Maybe<Array<Maybe<Scalars['Int']>>>
  recurrenceRepeatDayOfWeek?: Maybe<Scalars['String']>
  recurrenceRepeatWeek?: Maybe<Scalars['String']>
  recurrenceType?: Maybe<Scalars['String']>
  recurrenceWeekdays?: Maybe<Array<Maybe<Scalars['String']>>>
  rundownSessions?: Maybe<Array<Maybe<EventRundownSession>>>
  startDate?: Maybe<Scalars['String']>
  startTime?: Maybe<Scalars['String']>
}

export enum EventStatusCode {
  Cancelled = 'cancelled',
  Closed = 'closed',
  Completed = 'completed',
  Draft = 'draft',
  Full = 'full',
  Published = 'published'
}

export type EventTicketItem = {
  __typename?: 'EventTicketItem'
  applicationId: Scalars['ID']
  appliedItemId: Scalars['ID']
  eventId: Scalars['ID']
  id: Scalars['ID']
  optionId: Scalars['ID']
  qrCodeKey: Scalars['String']
  redeemedAt?: Maybe<Scalars['DateTime']>
  ticketNo: Scalars['String']
}

export enum EventTypeCode {
  Activity = 'activity',
  Service = 'service'
}

export type EventsFilter = {
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

export type FieldConfig = {
  __typename?: 'FieldConfig'
  desc: Scalars['String']
  key: Scalars['String']
  mandatory?: Maybe<Scalars['Boolean']>
  options?: Maybe<Array<Maybe<OptionData>>>
  type: Scalars['String']
}

export type FindApplicationRecordParams = {
  applicationRecordFilter?: InputMaybe<ApplicationRecordFilter>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export type FindEventApplicationRecordParams = {
  applicationRecordFilter?: InputMaybe<ApplicationRecordFilter>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export type FindEventApplicationsParams = {
  eventId?: InputMaybe<Scalars['ID']>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export type FindEventAppliedSchedulesParams = {
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export type FindEventAttendanceParams = {
  filter?: InputMaybe<ApplicationRecordFilter>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export type FindEventQuery = {
  __typename?: 'FindEventQuery'
  search?: Maybe<Scalars['String']>
}

export type FindEventsParams = {
  filter?: InputMaybe<EventsFilter>
  includePast?: InputMaybe<Scalars['Boolean']>
  pageSize?: InputMaybe<Scalars['Int']>
  searchText?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
}

export type FindJobApplicationsParams = {
  jobId?: InputMaybe<Scalars['String']>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export type FindJobAppliedTimeSlotsParams = {
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export type FindJobAttendanceParams = {
  dateFilter?: InputMaybe<Scalars['String']>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
  statuses: Array<Scalars['String']>
}

export type FindJobQuery = {
  __typename?: 'FindJobQuery'
  search?: Maybe<Scalars['String']>
}

export type FindJobsParams = {
  filter?: InputMaybe<JobsFilter>
  includePast?: InputMaybe<Scalars['Boolean']>
  pageSize?: InputMaybe<Scalars['Int']>
  searchText?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
}

export type FindNgosParams = {
  filter?: InputMaybe<NgosFilter>
  pageSize?: InputMaybe<Scalars['Int']>
  searchText?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
}

export type FindUnitsParams = {
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export enum Gender {
  Female = 'female',
  Male = 'male',
  NotProvided = 'notProvided'
}

export type Job = {
  __typename?: 'Job'
  acceptedApplications?: Maybe<Scalars['Int']>
  acceptedQuota?: Maybe<Scalars['Int']>
  additionalQuestions?: Maybe<Array<Maybe<FieldConfig>>>
  applicationEnd?: Maybe<Scalars['DateTime']>
  applicationRestrictions?: Maybe<Array<Maybe<Scalars['String']>>>
  applicationStart?: Maybe<Scalars['DateTime']>
  causes?: Maybe<Array<Maybe<Scalars['String']>>>
  contact?: Maybe<Scalars['String']>
  contactEmail?: Maybe<Scalars['String']>
  contactPhone?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  districtCode?: Maybe<Scalars['String']>
  feeDetail?: Maybe<Scalars['String']>
  groupApply?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['String']>
  imageUrls?: Maybe<Array<Maybe<Scalars['String']>>>
  isVirtual?: Maybe<Scalars['Boolean']>
  jobLink?: Maybe<Scalars['String']>
  languageOther?: Maybe<Scalars['String']>
  languages?: Maybe<Array<Maybe<Scalars['String']>>>
  location?: Maybe<Scalars['String']>
  ngo?: Maybe<Ngo>
  ngoId?: Maybe<Scalars['Int']>
  overallEnd?: Maybe<Scalars['DateTime']>
  overallStart?: Maybe<Scalars['DateTime']>
  parentalConsent?: Maybe<Scalars['Boolean']>
  pcAge?: Maybe<Scalars['Int']>
  pendingApplications?: Maybe<Scalars['Int']>
  prerequisite?: Maybe<JobPrerequisite>
  progress?: Maybe<Scalars['String']>
  quota?: Maybe<Scalars['Int']>
  recipients?: Maybe<Array<Maybe<Scalars['String']>>>
  regionCode?: Maybe<Scalars['String']>
  remainingQuota?: Maybe<Scalars['Int']>
  remarks?: Maybe<Scalars['String']>
  sdgs?: Maybe<Array<Maybe<Scalars['String']>>>
  sessions?: Maybe<Array<Maybe<JobSession>>>
  skills?: Maybe<Array<Maybe<Scalars['String']>>>
  subDistrictCode?: Maybe<Scalars['String']>
  title: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  volunteerFunctions?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type JobApplication = {
  __typename?: 'JobApplication'
  additionalQuestions?: Maybe<Array<Maybe<AdditionalQuestionData>>>
  appliedTimeSlots?: Maybe<Array<Maybe<JobAppliedTimeslot>>>
  attendances?: Maybe<Array<Maybe<JobAttendance>>>
  chineseName?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  id: Scalars['ID']
  job?: Maybe<Job>
  jobId: Scalars['ID']
  lastName?: Maybe<Scalars['String']>
  mobileNumber?: Maybe<Scalars['String']>
  parentInfo?: Maybe<ParentInfo>
  parentalConsent?: Maybe<Scalars['Boolean']>
  reason?: Maybe<Scalars['String']>
  status: Scalars['String']
}

export type JobAppliedTimeslot = {
  __typename?: 'JobAppliedTimeslot'
  id: Scalars['ID']
  job?: Maybe<Job>
  jobApplication?: Maybe<JobApplication>
  jobApplicationId: Scalars['String']
  status: Scalars['String']
  timeslot?: Maybe<JobTimeslot>
  timeslotId: Scalars['ID']
}

export type JobAttendance = {
  __typename?: 'JobAttendance'
  absent?: Maybe<Scalars['Boolean']>
  absentReason?: Maybe<Scalars['String']>
  appliedTimeslot?: Maybe<JobAppliedTimeslot>
  appliedTimeslotId: Scalars['ID']
  attendances?: Maybe<Array<Maybe<JobAttendance>>>
  endDate?: Maybe<Scalars['String']>
  endTime?: Maybe<Scalars['DateTime']>
  id: Scalars['ID']
  isAllDay?: Maybe<Scalars['Boolean']>
  isSingleDay?: Maybe<Scalars['Boolean']>
  isTimeTBC?: Maybe<Scalars['Boolean']>
  isdateTBC?: Maybe<Scalars['Boolean']>
  startDate?: Maybe<Scalars['String']>
  startTime?: Maybe<Scalars['DateTime']>
  status: Scalars['String']
  timeslotInstance?: Maybe<TimeslotInstance>
  timeslotInstanceId: Scalars['ID']
  type?: Maybe<Scalars['String']>
}

export enum JobAttendanceStatus {
  Absent = 'absent',
  Accepted = 'accepted',
  Cancelled = 'cancelled',
  Declined = 'declined',
  OnHold = 'onHold',
  Pending = 'pending',
  Reserved = 'reserved'
}

export type JobLocation = {
  __typename?: 'JobLocation'
  address: Scalars['String']
  lat: Scalars['Float']
  lng: Scalars['Float']
  name: Scalars['String']
}

export type JobPrerequisite = {
  __typename?: 'JobPrerequisite'
  maxAge?: Maybe<Scalars['Int']>
  minAge?: Maybe<Scalars['Int']>
}

export type JobSession = {
  __typename?: 'JobSession'
  attendanceRule?: Maybe<Scalars['String']>
  attendanceRuleAmount?: Maybe<Scalars['Int']>
  frequency?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['Int']>
  timeslots?: Maybe<Array<Maybe<JobTimeslot>>>
  title: Scalars['String']
  type?: Maybe<Scalars['String']>
}

export type JobTimeslot = {
  __typename?: 'JobTimeslot'
  address?: Maybe<MultiLangText>
  addressLine?: Maybe<Scalars['String']>
  districtCode?: Maybe<Scalars['String']>
  endDate?: Maybe<Scalars['DateTime']>
  endTime?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  isAllDay?: Maybe<Scalars['Boolean']>
  isSingleDay?: Maybe<Scalars['Boolean']>
  isTimeTBC?: Maybe<Scalars['Boolean']>
  isVirtual?: Maybe<Scalars['Boolean']>
  isdateTBC?: Maybe<Scalars['Boolean']>
  mapLatLong?: Maybe<Scalars['String']>
  quota?: Maybe<Scalars['Int']>
  recurrenceExceptionDates?: Maybe<Array<Maybe<Scalars['Date']>>>
  recurrenceFrequency?: Maybe<Scalars['Int']>
  recurrenceMonthlyMode?: Maybe<Scalars['String']>
  recurrenceRepeatDayOfMonth?: Maybe<Array<Maybe<Scalars['Int']>>>
  recurrenceRepeatDayOfWeek?: Maybe<Scalars['String']>
  recurrenceRepeatWeek?: Maybe<Scalars['String']>
  recurrenceType?: Maybe<Scalars['String']>
  recurrenceWeekdays?: Maybe<Array<Maybe<Scalars['String']>>>
  regionCode?: Maybe<Scalars['String']>
  session?: Maybe<JobSession>
  sessionId?: Maybe<Scalars['String']>
  startDate?: Maybe<Scalars['DateTime']>
  startTime?: Maybe<Scalars['DateTime']>
  subDistrictCode?: Maybe<Scalars['String']>
  usedQuota?: Maybe<Scalars['Int']>
}

export type JobsFilter = {
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
  En = 'en',
  ZhHans = 'zhHans',
  ZhHant = 'zhHant'
}

export type LoginResponse = {
  __typename?: 'LoginResponse'
  accessToken: Scalars['String']
  isNewUser?: Maybe<Scalars['Boolean']>
}

export type MagicLinkResponse = {
  __typename?: 'MagicLinkResponse'
  isNewUser?: Maybe<Scalars['Boolean']>
  magicLink?: Maybe<Scalars['String']>
  success: Scalars['Boolean']
}

export type Membership = {
  __typename?: 'Membership'
  contactId?: Maybe<Scalars['Int']>
  ngo?: Maybe<Ngo>
}

export type MultiLangText = {
  __typename?: 'MultiLangText'
  en?: Maybe<Scalars['String']>
  zhHans?: Maybe<Scalars['String']>
  zhHant?: Maybe<Scalars['String']>
}

export type Mutation = {
  __typename?: 'Mutation'
  connectNgo?: Maybe<ConnectInvite>
  createEventApplication?: Maybe<EventApplication>
  createEventPayment?: Maybe<Payment>
  createJobApplication?: Maybe<JobApplication>
  createMagicLink?: Maybe<MagicLinkResponse>
  createPin?: Maybe<PinResponse>
  loginWithApple?: Maybe<LoginResponse>
  loginWithEmail?: Maybe<LoginResponse>
  loginWithGoogle?: Maybe<LoginResponse>
  loginWithMobile?: Maybe<LoginResponse>
  reportEventApplicationCancel?: Maybe<EventApplication>
  reportJobAbsent?: Maybe<JobAttendance>
  reportJobApplicationCancel?: Maybe<JobApplication>
  updateEventApplication?: Maybe<EventApplication>
  updateJobApplication?: Maybe<JobApplication>
  updateProfile?: Maybe<Volunteer>
}

export type MutationConnectNgoArgs = {
  code: Scalars['String']
}

export type MutationCreateEventApplicationArgs = {
  applicationData?: InputMaybe<CreateEventApplicationInput>
}

export type MutationCreateEventPaymentArgs = {
  input?: InputMaybe<CreateEventPaymentInput>
}

export type MutationCreateJobApplicationArgs = {
  applicationData?: InputMaybe<CreateJobApplicationInput>
}

export type MutationCreateMagicLinkArgs = {
  email: Scalars['String']
}

export type MutationCreatePinArgs = {
  mobileNumber: Scalars['String']
}

export type MutationLoginWithAppleArgs = {
  authorizationCode: Scalars['String']
  email?: InputMaybe<Scalars['String']>
  familyName?: InputMaybe<Scalars['String']>
  givenName?: InputMaybe<Scalars['String']>
  nonce: Scalars['String']
  userIdentifier: Scalars['String']
}

export type MutationLoginWithEmailArgs = {
  email: Scalars['String']
  magicLinkSecret: Scalars['String']
}

export type MutationLoginWithGoogleArgs = {
  idToken: Scalars['String']
  userIdentifier: Scalars['String']
}

export type MutationLoginWithMobileArgs = {
  mobileNumber: Scalars['String']
  pin: Scalars['String']
}

export type MutationReportEventApplicationCancelArgs = {
  applicationId: Scalars['String']
  cancelReason: Scalars['String']
}

export type MutationReportJobAbsentArgs = {
  absentReason: Scalars['String']
  attendanceId: Scalars['String']
}

export type MutationReportJobApplicationCancelArgs = {
  applicationId: Scalars['String']
  cancelReason: Scalars['String']
}

export type MutationUpdateEventApplicationArgs = {
  applicationData?: InputMaybe<UpdateEventApplicationInput>
  id: Scalars['ID']
}

export type MutationUpdateJobApplicationArgs = {
  applicationData?: InputMaybe<UpdateJobApplicationInput>
  id?: InputMaybe<Scalars['ID']>
}

export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput
}

export type Ngo = {
  __typename?: 'Ngo'
  addressLine?: Maybe<Scalars['String']>
  category?: Maybe<Scalars['String']>
  causes?: Maybe<Array<Maybe<Scalars['String']>>>
  code: Scalars['String']
  description?: Maybe<Scalars['String']>
  districtCode?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  establishYear?: Maybe<Scalars['String']>
  fax?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  imageUrl?: Maybe<Scalars['String']>
  isPublished?: Maybe<Scalars['Boolean']>
  locationCoordinates?: Maybe<Scalars['String']>
  logoUrl?: Maybe<Scalars['String']>
  missionAndVision?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  ngoLink?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  recipients?: Maybe<Array<Maybe<Scalars['String']>>>
  regionCode?: Maybe<Scalars['String']>
  registrationNumber?: Maybe<Scalars['String']>
  registrationType?: Maybe<Scalars['String']>
  sdgoals?: Maybe<Array<Maybe<Scalars['String']>>>
  subDistrictCode?: Maybe<Scalars['String']>
  websiteUrl?: Maybe<Scalars['String']>
}

export type NgoBanner = {
  __typename?: 'NgoBanner'
  destinationType?: Maybe<DestinationType>
  destinationUrl?: Maybe<Scalars['String']>
  eventId?: Maybe<Scalars['String']>
  id: Scalars['String']
  imageUrl: Scalars['String']
  jobId?: Maybe<Scalars['String']>
  ngoId: Scalars['Int']
  position: Scalars['Int']
}

export type NgoBanners = {
  __typename?: 'NgoBanners'
  data?: Maybe<Array<Maybe<NgoBanner>>>
  total?: Maybe<Scalars['Int']>
}

export type NgosFilter = {
  causes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  districtCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  recipients?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  regionCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  sdgoals?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  subDistrictCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type OptionData = {
  __typename?: 'OptionData'
  desc: Scalars['String']
  key: Scalars['String']
}

export type PaginatedApplicationRecords = {
  __typename?: 'PaginatedApplicationRecords'
  data?: Maybe<Array<ApplicationRecord>>
  total?: Maybe<Scalars['Int']>
}

export type PaginatedEventApplications = {
  __typename?: 'PaginatedEventApplications'
  data?: Maybe<Array<EventApplication>>
  total?: Maybe<Scalars['Int']>
}

export type PaginatedEventAppliedSchedules = {
  __typename?: 'PaginatedEventAppliedSchedules'
  data?: Maybe<Array<EventAppliedSchedule>>
  total?: Maybe<Scalars['Int']>
}

export type PaginatedEventAttendances = {
  __typename?: 'PaginatedEventAttendances'
  data: Array<EventAttendance>
  total?: Maybe<Scalars['Int']>
}

export type PaginatedEvents = {
  __typename?: 'PaginatedEvents'
  data?: Maybe<Array<Event>>
  total?: Maybe<Scalars['Int']>
}

export type PaginatedJobApplications = {
  __typename?: 'PaginatedJobApplications'
  data?: Maybe<Array<JobApplication>>
  total?: Maybe<Scalars['Int']>
}

export type PaginatedJobAppliedTimeSlots = {
  __typename?: 'PaginatedJobAppliedTimeSlots'
  data?: Maybe<Array<JobAppliedTimeslot>>
  total?: Maybe<Scalars['Int']>
}

export type PaginatedJobAttendances = {
  __typename?: 'PaginatedJobAttendances'
  data: Array<JobAttendance>
  total?: Maybe<Scalars['Int']>
}

export type PaginatedJobs = {
  __typename?: 'PaginatedJobs'
  data?: Maybe<Array<Job>>
  total?: Maybe<Scalars['Int']>
}

export type PaginatedMemberships = {
  __typename?: 'PaginatedMemberships'
  data?: Maybe<Array<Maybe<Membership>>>
  total?: Maybe<Scalars['Int']>
}

export type PaginatedNgos = {
  __typename?: 'PaginatedNgos'
  data?: Maybe<Array<Ngo>>
  total?: Maybe<Scalars['Int']>
}

export type PaginatedSocialCvs = {
  __typename?: 'PaginatedSocialCvs'
  data?: Maybe<Array<SocialCv>>
  total?: Maybe<Scalars['Int']>
}

export type PaginatedUnits = {
  __typename?: 'PaginatedUnits'
  data?: Maybe<Array<Unit>>
  total?: Maybe<Scalars['Int']>
}

export type ParentInfo = {
  __typename?: 'ParentInfo'
  acceptCode?: Maybe<Scalars['String']>
  declineCode?: Maybe<Scalars['String']>
  email: Scalars['String']
  name: Scalars['String']
  relationship?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
}

export type ParentInfoInput = {
  acceptCode?: InputMaybe<Scalars['String']>
  declineCode?: InputMaybe<Scalars['String']>
  email: Scalars['String']
  name: Scalars['String']
  relationship?: InputMaybe<Scalars['String']>
}

export enum ParentalConsentStatus {
  Accepted = 'accepted',
  Cancelled = 'cancelled',
  Declined = 'declined',
  OnHold = 'onHold'
}

export type Payment = {
  __typename?: 'Payment'
  amount: Scalars['Int']
  category: PaymentCategory
  currency: Scalars['String']
  id: Scalars['ID']
  method?: Maybe<Scalars['String']>
  paymentIntentClientSecret?: Maybe<Scalars['String']>
  status: Scalars['String']
  stripeAccount?: Maybe<Scalars['String']>
}

export enum PaymentCategory {
  Adhoc = 'adhoc',
  Event = 'event',
  Membership = 'membership',
  Volunteer = 'volunteer'
}

export type PinResponse = {
  __typename?: 'PinResponse'
  isNewUser?: Maybe<Scalars['Boolean']>
  pin?: Maybe<Scalars['String']>
  success: Scalars['Boolean']
}

export type Place = {
  __typename?: 'Place'
  code?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  appBanners?: Maybe<AppBanners>
  appInfo?: Maybe<AppInfo>
  applicationRecords?: Maybe<PaginatedApplicationRecords>
  appliedEventAttendances?: Maybe<PaginatedEventAttendances>
  appliedJobAttendances?: Maybe<PaginatedJobAttendances>
  causes: CodeValues
  connectInvite?: Maybe<ConnectInvite>
  districts?: Maybe<Districts>
  event?: Maybe<Event>
  eventActivityThemes: CodeValues
  eventActivityTypes: CodeValues
  eventApplication?: Maybe<EventApplication>
  /** For legacy compatibility. Remove later */
  eventApplicationRecords?: Maybe<PaginatedApplicationRecords>
  eventApplications?: Maybe<PaginatedEventApplications>
  eventAppliedSchedules?: Maybe<PaginatedEventAppliedSchedules>
  eventPayment?: Maybe<Payment>
  eventServiceTypes: CodeValues
  eventTargetAudiences: CodeValues
  events?: Maybe<PaginatedEvents>
  hqUnit?: Maybe<Unit>
  job?: Maybe<Job>
  jobApplication?: Maybe<JobApplication>
  jobApplications?: Maybe<PaginatedJobApplications>
  jobAppliedTimeSlots?: Maybe<PaginatedJobAppliedTimeSlots>
  jobEventTypes: CodeValues
  jobSessionTypes: CodeValues
  jobs?: Maybe<PaginatedJobs>
  memberships?: Maybe<PaginatedMemberships>
  ngo?: Maybe<Ngo>
  ngoBanners?: Maybe<NgoBanners>
  ngos?: Maybe<PaginatedNgos>
  profile?: Maybe<Volunteer>
  recipients: CodeValues
  regions?: Maybe<Regions>
  sdgoals: CodeValues
  socialCv?: Maybe<PaginatedSocialCvs>
  subDistricts?: Maybe<SubDistricts>
  totalServiceHours?: Maybe<Scalars['Float']>
  units?: Maybe<PaginatedUnits>
  volunteerFunctions: CodeValues
}

export type QueryApplicationRecordsArgs = {
  params?: InputMaybe<FindApplicationRecordParams>
}

export type QueryAppliedEventAttendancesArgs = {
  params?: InputMaybe<FindEventAttendanceParams>
}

export type QueryAppliedJobAttendancesArgs = {
  params?: InputMaybe<FindJobAttendanceParams>
}

export type QueryConnectInviteArgs = {
  code: Scalars['String']
}

export type QueryEventArgs = {
  id: Scalars['ID']
}

export type QueryEventApplicationArgs = {
  id: Scalars['ID']
}

export type QueryEventApplicationRecordsArgs = {
  params?: InputMaybe<FindEventApplicationRecordParams>
}

export type QueryEventApplicationsArgs = {
  params?: InputMaybe<FindEventApplicationsParams>
}

export type QueryEventAppliedSchedulesArgs = {
  params?: InputMaybe<FindEventAppliedSchedulesParams>
}

export type QueryEventPaymentArgs = {
  id: Scalars['ID']
}

export type QueryEventsArgs = {
  params?: InputMaybe<FindEventsParams>
}

export type QueryHqUnitArgs = {
  ngoId: Scalars['ID']
}

export type QueryJobArgs = {
  id: Scalars['ID']
}

export type QueryJobApplicationArgs = {
  id: Scalars['ID']
}

export type QueryJobApplicationsArgs = {
  params?: InputMaybe<FindJobApplicationsParams>
}

export type QueryJobAppliedTimeSlotsArgs = {
  params?: InputMaybe<FindJobAppliedTimeSlotsParams>
}

export type QueryJobsArgs = {
  params?: InputMaybe<FindJobsParams>
}

export type QueryNgoArgs = {
  id: Scalars['ID']
}

export type QueryNgoBannersArgs = {
  ngoId: Scalars['ID']
}

export type QueryNgosArgs = {
  params?: InputMaybe<FindNgosParams>
}

export type QuerySocialCvArgs = {
  params?: InputMaybe<SocialCvParams>
}

export type QueryUnitsArgs = {
  ngoId: Scalars['ID']
  params?: InputMaybe<FindUnitsParams>
}

export type Region = {
  __typename?: 'Region'
  code?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type Regions = {
  __typename?: 'Regions'
  data?: Maybe<Array<Maybe<Region>>>
  total?: Maybe<Scalars['Int']>
}

export type SocialCv = {
  __typename?: 'SocialCv'
  endDate?: Maybe<Scalars['DateTime']>
  id: Scalars['ID']
  itemId?: Maybe<Scalars['ID']>
  itemType: SocialCvItemType
  ngoId?: Maybe<Scalars['Int']>
  ngoName?: Maybe<Scalars['String']>
  serviceHours?: Maybe<Scalars['Float']>
  startDate: Scalars['DateTime']
  title: Scalars['String']
}

export enum SocialCvItemType {
  Event = 'event',
  Info = 'info',
  Job = 'job'
}

export type SocialCvParams = {
  exclude?: InputMaybe<Array<InputMaybe<SocialCvItemType>>>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export type SubDistrict = {
  __typename?: 'SubDistrict'
  code?: Maybe<Scalars['String']>
  districtCode?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type SubDistricts = {
  __typename?: 'SubDistricts'
  data?: Maybe<Array<Maybe<SubDistrict>>>
  total?: Maybe<Scalars['Int']>
}

export type TimeslotInstance = {
  __typename?: 'TimeslotInstance'
  endDate?: Maybe<Scalars['DateTime']>
  endTime?: Maybe<Scalars['DateTime']>
  id: Scalars['ID']
  isAllDay?: Maybe<Scalars['Boolean']>
  isDateTBC?: Maybe<Scalars['Boolean']>
  isSingleDay?: Maybe<Scalars['Boolean']>
  isTimeTBC?: Maybe<Scalars['Boolean']>
  startDate?: Maybe<Scalars['DateTime']>
  startTime?: Maybe<Scalars['DateTime']>
  timeslotId: Scalars['ID']
}

export type Unit = {
  __typename?: 'Unit'
  addressLine?: Maybe<Scalars['String']>
  code: Scalars['String']
  districtCode?: Maybe<Scalars['String']>
  emails?: Maybe<Scalars['Object']>
  id?: Maybe<Scalars['Int']>
  imageUrl?: Maybe<Scalars['String']>
  isVirtual?: Maybe<Scalars['Boolean']>
  logoUrl?: Maybe<Scalars['String']>
  mapLatLong?: Maybe<Scalars['String']>
  name: Scalars['String']
  phones?: Maybe<Scalars['Object']>
  regionCode?: Maybe<Scalars['String']>
  subDistrictCode?: Maybe<Scalars['String']>
}

export type UpdateEventApplicationInput = {
  appliedItems?: InputMaybe<Array<InputMaybe<EventAppliedItemInput>>>
  feeTypeId?: InputMaybe<Scalars['ID']>
  optionId?: InputMaybe<Scalars['ID']>
  paymentId?: InputMaybe<Scalars['ID']>
  paymentStatus?: InputMaybe<Scalars['String']>
  paymentTypeId?: InputMaybe<Scalars['ID']>
}

export type UpdateJobApplicationInput = {
  timeslots?: InputMaybe<Scalars['Object']>
}

export type UpdateProfileInput = {
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

export type Volunteer = {
  __typename?: 'Volunteer'
  chineseName?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  dob?: Maybe<Scalars['Date']>
  edm?: Maybe<Array<Maybe<Edm>>>
  email?: Maybe<Scalars['String']>
  emailVerifiedAt?: Maybe<Scalars['DateTime']>
  firstName?: Maybe<Scalars['String']>
  gender?: Maybe<Gender>
  id: Scalars['ID']
  lastName?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
  mobileNumber?: Maybe<Scalars['String']>
  mobileNumberVerifiedAt?: Maybe<Scalars['DateTime']>
  qrCode: Scalars['String']
}

export type ListJobsQueryVariables = Exact<{
  params?: InputMaybe<FindJobsParams>
}>

export type ListJobsQuery = {
  __typename?: 'Query'
  jobs?:
    | {
        __typename?: 'PaginatedJobs'
        total?: number | null | undefined
        data?:
          | Array<{
              __typename?: 'Job'
              id?: string | null | undefined
              title: string
              description?: string | null | undefined
              recipients?: Array<string | null | undefined> | null | undefined
              imageUrls?: Array<string | null | undefined> | null | undefined
              quota?: number | null | undefined
              remainingQuota?: number | null | undefined
              acceptedApplications?: number | null | undefined
              pendingApplications?: number | null | undefined
              overallStart?: any | null | undefined
              overallEnd?: any | null | undefined
              location?: string | null | undefined
              ngo?:
                | {
                    __typename?: 'Ngo'
                    id?: number | null | undefined
                    name?: string | null | undefined
                  }
                | null
                | undefined
            }>
          | null
          | undefined
      }
    | null
    | undefined
}
