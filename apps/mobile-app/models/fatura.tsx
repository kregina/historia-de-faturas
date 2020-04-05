export interface StatusFatura {
  codigo: string;
  descricao: string;
}

export interface Fatura {
  id: number;
  dataFatura: Date;
  status: StatusFatura;
  megabitesUtilizados: number;
  dataVencimento: Date;
  valor: number;
}
