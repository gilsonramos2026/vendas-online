export interface UserResponse {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  role: 'ADMIN' | 'CLIENT';
  createdAt: string;
}
