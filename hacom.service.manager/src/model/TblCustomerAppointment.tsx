export interface TblCustomerAppointment {
  id: number;
  fullName: string | null;
  email: string | null;
  mobile: string | null;
  productName: string | null;
  productId: number | null;
  isStudent: string | null;
  storeAddress: string | null;
  appointmentTime: string | null;
  note: string | null;
  createDate?: string | null;
  createBy?: string | null;
  lastUpdateDate?: string | null;
  lastUpdateBy?: string | null;
}
