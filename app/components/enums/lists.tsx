export type Option = {
  label: string;
  value: string;
};

export const genderOptions: Option[] = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
];

export const userGroups: Option[] = [
  { label: 'Admin', value: 'admin' },
  { label: 'User', value: 'user' },
];

export const departments: Option[] = [
  { label: 'Department1', value: 'Department1' },
  { label: 'Department2', value: 'Department2' },
];

export const serviceRequestReasons: Option[] = [
  { label: 'Routine Service', value: 'routine service' },
  { label: 'Vehicle Damage', value: 'vehicle damage' },
  { label: 'Low Tires', value: 'low tires' },
  { label: 'Other', value: 'other' },
];

export const estimatedEngagementPeriods: Option[] = [
  { label: '30 Minutes', value: '30 minutes' },
  { label: '1 Hour', value: '1 hour' },
  { label: '1 Hour, 30 Minutes', value: '1 hour, 30 minutes' },
  { label: '2 Hours', value: '2 Hours' },
  { label: '2 Hours, 30 Minutes', value: '2 hours, 30 minutes' },
  { label: '3 Hours', value: '3 hours' },
];

export const months: Option[] = [
  { label: 'January', value: 'january' },
  { label: 'February', value: 'february' },
  { label: 'March', value: 'march' },
  { label: 'April', value: 'april' },
  { label: 'May', value: 'may' },
  { label: 'June', value: 'june' },
  { label: 'July', value: 'july' },
  { label: 'August', value: 'august' },
  { label: 'September', value: 'september' },
  { label: 'October', value: 'october' },
  { label: 'November', value: 'november' },
  { label: 'December', value: 'december' },
];
