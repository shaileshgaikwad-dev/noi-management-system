export interface ILastLoginResponse {
  success: boolean;
  message: string;
  token: string;
  lastLoginAt: string | null;
  email: string;
  name: string;
}
