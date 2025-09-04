export interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  description?: string;
}

export interface NotificationOptions {
  message: string;
  type?: 'success' | 'info' | 'warning' | 'error';
  duration?: number;
}

export interface EdgeBlendImageData {
  topColor: string;
  bottomColor: string;
  topStrength?: string;
  bottomStrength?: string;
}