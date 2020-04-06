import { Carousel } from '@nx-orbita/ui-components';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import FaturaCard from '../components/fatura-card/fatura-card';
import { Fatura } from '../models/fatura';
import * as FaturasService from '../services/fatura';

export interface IndexProps {
  faturas: Fatura[]
}

export const Index : NextPage<IndexProps> = ({faturas}) => {
  return (
    <>
      <Head>
        <title>Histórico de faturas</title>
      </Head>
      <Carousel>
        {faturas.map(fatura =>
          <FaturaCard fatura={fatura} key={fatura.id} ></FaturaCard>
        )}
      </Carousel>
    </>
  )
};

export const getStaticProps: GetStaticProps = async context => {
  const res = await FaturasService.getFaturas();
  const faturas = await res.json();
  return {
    props: {
      faturas
    }
  }
}

export default Index;
