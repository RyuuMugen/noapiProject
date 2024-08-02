export interface NTLcalcfee {
  weight: number;
  total_fee: number;
  main_fee: number;
  insur_fee: number;
  remote_fee: number;
  delivery_fee: number;
  packing_fee: number;
  counting_fee: number;
  lifting_fee: number;
  cod_fee: number;
  service_id: number;
  service_name: string;
  lead_time: string;
}

export interface SCAcalcfee {
  kpi: number;
  service_id: number;
  service_code: string;
  service_name: string;
  fee: number;
}
