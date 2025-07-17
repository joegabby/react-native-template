import { NavigatorScreenParams } from '@react-navigation/native';

export type StackParamList = {
  Chat: { chatId: string };
  Tabs: undefined;
};

export type TabParamList = {
  Dashboard: undefined;
  Conversations: undefined;
};

export type RootParamList = {
  MainTabs: NavigatorScreenParams<TabParamList>;
  Chat: { chatId: string };
};
