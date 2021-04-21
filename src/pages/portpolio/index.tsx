import React from 'react';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import PortpolLayout from '../../layout/PortpolLayout';

const index = () => {
    return (
        <Main meta={<Meta title={"Portpolio"} description="MBC Portpolio" />}>
            <PortpolLayout />
        </Main>
    );
};

export default index;