
import type React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  age: number;
  avatarUrl: string;
}
