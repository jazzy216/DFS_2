
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface PasswordConfig {
  length: number;
  useUppercase: boolean;
  useLowercase: boolean;
  useNumbers: boolean;
  useSymbols: boolean;
}

export interface BlueprintData {
  audience: 'Business' | 'Farm' | 'Person';
  worry: string;
  deviceCount: string;
  email?: string;
}

export interface Article {
  id: string;
  title: string;
  category: 'Farms' | 'Small Business' | 'Personal';
  excerpt: string;
  content: string;
  readTime: string;
}
