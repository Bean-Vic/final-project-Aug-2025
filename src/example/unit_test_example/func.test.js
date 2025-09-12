import { sum, C } from './func';
import { render, screen } from '@testing-library/react';

describe('Test Suite for sum function', () => {
    test('should return 5 if a = 2, b = 3', () => {
        expect(sum(2,3)).toEqual(5);
    })

    // test('WARNING: This is a intended failure test', () => {
    //     expect(sum(1,1)).toBe(3);
    // })
})

describe('Test Suite for Component C', () => {
    test('should render Hello, Bean properly', () => {
        const { debug, container, getByText } = render(<C name="Bean" />);
        debug();
        // expect(screen.getByText('test')).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    })
})