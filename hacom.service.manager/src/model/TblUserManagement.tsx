export interface UserManagementInterFace {
  dateActive: Date | null;
  fullName: string;
  id?: string;
  inActive: boolean;
  onDelete?: boolean;
  password?: string;
  phone: number | null;
  role?: string;
  roleNumber: number | null;
  tokenActive: string | null;
  userName: string;
}
