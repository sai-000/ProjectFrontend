// export interface AppProps {}
export interface AppState {
  AttemptedOrders:number;
  CompletedOrders:number;
  OrderDate: string;
  TotalOrders: number;
}

export interface Monthly{
  Month:String;
  AttemptedOrders:number;
  CompletedOrders:number;
  TotalOrders: number;
}

export interface Weekly{
  Week:String;
  AttemptedOrders:number;
  CompletedOrders:number;
  TotalOrders: number;
}

