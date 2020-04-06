import { Chip } from '@nx-orbita/ui-components';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import React from 'react';

import { Fatura } from '../../models/fatura';
import { formatter } from '../../utils/data-formatter';

/* eslint-disable-next-line */
export interface FaturaCardProps {
  fatura: Fatura
}


const colorMap = {
  'ABERTA': 'warn',
  'PAGO': 'success',
  'ATRASADO': 'danger',
}

const formataDatas = (data, formato) =>  format(Date.parse(data), formato, { locale: ptBR })

export const FaturaCard : React.FunctionComponent<FaturaCardProps> = ({fatura}) => {

  const dataFatura = formataDatas(fatura.dataFatura, "MMM yy");
  const dataVencimento = formataDatas(fatura.dataVencimento, "dd/MM");
  const dataVencimentoDiaSemana = formataDatas(fatura.dataVencimento, "EEEE");

  const statusColor = `${colorMap[fatura.status.codigo]}`;

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
          <Chip color={statusColor}>
            {fatura.status.descricao}
          </Chip>
        </div>
        <div className="card-body">
          <p>
            <span className="info">{fatura.megabitesUtilizados}</span>
            <span className="card-subtitle">MB</span>
          </p>
          <p>
            <span className={`valor ${statusColor}`}> {formatter.format(fatura.valor)}</span>
          </p>

          <div className="vencimento">
            <p className="card-subtitle">Vencimento</p>
            <p>
              <span>{dataVencimento}</span> {dataVencimentoDiaSemana}
            </p>
          </div>
        </div>
        <div className="card-actions">
          {
            fatura.status.codigo !== 'PAGO'
              ? <button className="button" type="button">Efetuar paragamento</button>
              : null
          }
        </div>
      </div>

      <style jsx>{`
        .danger {
          color: var(--color-danger);
        }

        .success {
          color: var(--color-success);
        }

        .warn {
          color: var(--color-warn);
        }
        .card {
          background: #fff;
          display: grid;
          grid-template-rows: auto 1fr auto;
          margin: 0 10px;
          padding: 19px 19px 17px;
          min-height: 420px;
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
          display: flex;
          justify-content: flex-end;
        }
        .info {
          font-size: 56px;
          font-weight: 500;
        }
        .spacer {
          flex: 1;
        }
        .valor{
          font-size: 24px;
        }
        .button {
          background: transparent;
          border: none;
          color: var(--color-primary-dark);
          text-transform: uppercase;
          outline: none;
        }
        .vencimento{
          margin-top: 50px;
        }
        .vencimento span {
          font-size: 24px;
        }
        .vencimento p {
          margin: 0;
          text-transform: capitalize;
        }
      `}</style>
    </>
  );
};

export default FaturaCard;
