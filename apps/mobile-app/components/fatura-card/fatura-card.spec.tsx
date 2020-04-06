import React from 'react';
import { render } from '@testing-library/react';

import FaturaCard from './fatura-card';
import { Fatura } from '../../models/fatura';

const data: Fatura = {
  id: 3,
  dataFatura: new Date(),
  status: {
    codigo: 'PAGO',
    descricao: 'Pago'
  },
  megabitesUtilizados: 2.958,
  dataVencimento: new Date(),
  valor: 47.32
}

describe(' FaturaCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FaturaCard fatura={data} />);
    expect(baseElement).toBeTruthy();
  });
});
