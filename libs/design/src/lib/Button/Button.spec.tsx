import { act, fireEvent, render, RenderResult } from '@testing-library/react';
import { TitaniumButton } from './Button';

describe('Button', () => {
  let result: RenderResult;

  beforeEach(() => {
    result = render(<TitaniumButton>Hello World</TitaniumButton>);
  });

  it('renders without breaking', () => {
    expect(result).not.toBeUndefined();
  });
  it('contains children text', async () => {
    const text = await result.findByText('Hello World');

    expect(text).toBeInTheDocument();
  });
  it('has has secondary color class name when color prop is set', async () => {
    result = render(
      <TitaniumButton color={'secondary'}>Hello World</TitaniumButton>
    );

    const queryResult = result.container.querySelector(
      '.titanium-button__color-secondary'
    );

    expect(queryResult).toBeInTheDocument();
  });

  it('has filled class name when variant prop is set', async () => {
    result = render(
      <TitaniumButton variant={'filled'}>Hello World</TitaniumButton>
    );

    const queryResult = result.container.querySelector(
      '.titanium-button__filled'
    );

    expect(queryResult).toBeInTheDocument();
  });

  it('calls the event handler when clicked', async () => {
    let mockHandler = jest.fn();
    result = render(
      <TitaniumButton onClick={mockHandler}>Hello World</TitaniumButton>
    );

    const button = result.container.querySelector('button');
    act(() => {
      fireEvent.click(button);
    });

    expect(mockHandler).toHaveBeenCalled();
  });
});
