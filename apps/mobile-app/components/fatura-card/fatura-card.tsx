import React from 'react';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Fatura } from '../../models/fatura';
import { Chip } from '@nx-orbita/ui-components';

/* eslint-disable-next-line */
export interface FaturaCardProps {
  fatura: Fatura
}

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2
});

const statusMap = {
  'ABERTA': 'warn',
  'PAGO': 'success',
  'ATRASADO': 'danger',
}

const formataDatas = (data, formato) =>  format(Date.parse(data), formato, { locale: ptBR })

export const FaturaCard : React.FunctionComponent<FaturaCardProps> = ({fatura}) => {

  const dataFatura = formataDatas(fatura.dataFatura, "MMM yy");
  const dataVencimento = formataDatas(fatura.dataVencimento, "dd/MM");
  const dataVencimentoDiaSemana = formataDatas(fatura.dataVencimento, "EEEE");

  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="card-title">
            Fatura
          </div>
          <div className="card-subtitle">
            {dataFatura}
          </div>
          <div className="spacer"></div>
          <Chip color={statusMap[fatura.status.codigo]}>
            {fatura.status.descricao}
          </Chip>
        </div>
        <div className="card-body"></div>
        <div className="card-actions"></div>
      </div>

      <style jsx>{`
        .card {
          background: #fff;
          display: grid;
          grid-template-rows: auto 1fr auto;
          margin: 0 10px;
          padding: 19px 19px 17px;
          min-height: 405px;
          width: 70vw;
        }
        .card:first-child {
          margin-left: 0;
        }
        .card-header{
          display: flex;
          align-items: baseline;
        }
        .card-title {
          font-size: 24px;
          margin-right: 10px;
        }
        .card-subtitle{
          color: #787878;
          font-size: 16px;
          text-transform: uppercase;
        }
        .card-body {
          align-self: center;
        }
        .card-actions {
          justify-content: flex-end;
        }
        .spacer {
          flex: 1;
        }
      `}</style>
    </>
  );
};

export default FaturaCard;
