import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import logoImg from '../../assets/compass-orange.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SingUp: React.FC = () => {
    function handleSubmit(data: object): void { }
    return (
        <Container>
            <Background />
            <Content>
                <img src={logoImg} alt="Logo Compass OS" />
                <Form onSubmit={handleSubmit}>
                    <h1>Faça seu cadastro</h1>
                    <Input name="name" icon={FiUser} placeholder="Nome" />
                    <Input name="email" icon={FiMail} placeholder="Email" />
                    <Input
                        name="password"
                        icon={FiLock}
                        type="password"
                        placeholder="Senha"
                    />
                    <Button type="submit">Cadastrar</Button>
                </Form>
                <a href="login">
                    <FiArrowLeft />
                    Voltar para logon
                </a>
            </Content>
        </Container>
    );
};

export default SingUp;
