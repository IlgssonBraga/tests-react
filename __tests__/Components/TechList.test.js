import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TechList from '~/components/TechList';

describe('TechList Component', () => {
    it('should be able to add new tech', () => {
        const {getByText, getByTestId} = render(<TechList/>);
        fireEvent.click(getByText('Adicionar'));

        expect(getByTestId('TechList')).toContainElement(getByText('Node.js'));
    });
});