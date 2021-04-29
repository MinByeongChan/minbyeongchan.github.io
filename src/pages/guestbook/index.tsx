import React from 'react';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import GuestBookLayout from '../../layout/GuestBookLayout';

const GuestBook = () => (
  <Main meta={<Meta title={'방명록'} description={'Blog Guest book'} />}>
    <GuestBookLayout />
  </Main>
);

export default GuestBook;