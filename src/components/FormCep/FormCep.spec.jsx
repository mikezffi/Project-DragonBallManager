import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import FormCep from './FormCep'
import { act } from 'react-dom/test-utils'

global.fetch = jest.fn().mockImplementation(() => 
  Promise.resolve({
    json: () => ({
      cep: '03047000',
      logradouro: 'Rua Laranja',
      bairro: 'Bairro Banana'
    })
  })
)

it('Should reder cep form', async () => {
  const { debug, getByPlaceholderText } = render(<FormCep />)

  const cecpInput = getByPlaceholderText('CEP').closest('input')
  fireEvent.change(cepInput, { target: { value: '03047000' } })
  
  await act(() => global.fetch)


  expect(global.fetch).toHaveBeenCalledTimes(1)
  expect(container).toMatchSnapshot()
})