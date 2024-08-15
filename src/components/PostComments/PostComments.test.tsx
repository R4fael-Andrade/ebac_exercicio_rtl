import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';


describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Teste para insercão de 2 comentários', () => {
        const {debug} = render(<PostComment />);
        
            //selecionando elementos
            const textArea = screen.getByRole('textbox');
            const botao = screen.getByTestId('btn-adicionar');
            //Simulando a inserção do comentário
            fireEvent.change(textArea, {target: {value: 'Comentário 1'}})
            fireEvent.click(botao);

            fireEvent.change(textArea, {target: {value: 'Comentário 2'}})
            fireEvent.click(botao);
            debug()
            //Verificando a quantidade de comentários
            expect(screen.getAllByRole('listitem').length).toBe(2);
        
        
    })
});