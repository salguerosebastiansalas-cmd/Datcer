import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  dark?: boolean;
  colSpan?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum SectionId {
  HERO = 'hero',
  SERVICES = 'services',
  ENGINEERING = 'engineering',
  LOAD_BANKS = 'load_banks',
  CERTIFICATION = 'certification',
  AI = 'ai',
  CONTACT = 'contact'
}