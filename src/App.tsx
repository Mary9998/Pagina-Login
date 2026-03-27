import { useState } from "react";
import styled from "styled-components";

const Container = styled.div<{ toggled: boolean }>`
  width: 800px;
  height: 500px;
  display: flex;
  position: relative;
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const FormWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Form = styled.form<{ isSignUp?: boolean; toggled: boolean }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease-in;
  transform: ${({ isSignUp, toggled }) => {
    if (isSignUp) return toggled ? "translateX(0)" : "translateX(-100%)";
    return toggled ? "translateX(100%)" : "translateX(0)";
  }};
`;

const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
`;

const SocialNetworks = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 25px;

  ion-icon {
    border: 1px solid #c9cccb;
    border-radius: 6px;
    padding: 8px;
    cursor: pointer;
  }
`;

const Text = styled.span`
  font-size: 18px;
  margin-bottom: 15px;
`;

const InputWrapper = styled.div`
  width: 300px;
  height: 40px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0 15px;
  background-color: #eeeeee;

  input {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    background-color: inherit;
  }
`;

const ForgotLink = styled.a`
  color: black;
  font-size: 18px;
  margin-bottom: 20px;
  margin-top: 5px;
  text-decoration: none;
`;

const Button = styled.button<{ outlined?: boolean }>`
  width: 170px;
  height: 45px;
  font-size: 15px;
  border: ${({ outlined }) => (outlined ? "2px solid white" : "none")};
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  background-color: ${({ outlined }) => (outlined ? "transparent" : "#a047d0")};
  color: white;
`;

const WelcomeContainer = styled.div<{ toggled: boolean }>`
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  transform: ${({ toggled }) => (toggled ? "translateX(0)" : "translateX(100%)")};
  background-color: ${({ toggled }) => (toggled ? "#8e40a2" : "#cf5acf")};
  transition: transform 0.5s ease-in-out, border-radius 0.5s ease-in-out;
  overflow: hidden;
  border-radius: ${({ toggled }) => (toggled ? "0 50% 50% 0" : "50% 0 0 50%")};
`;

const WelcomeContent = styled.div<{ show: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0 50px;
  color: white;
  transition: transform 0.5s ease-in-out;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(100%)")};
`;

const WelcomeTitle = styled.h3`
  font-size: 40px;
`;

const WelcomeText = styled.p`
  font-size: 20px;
  text-align: center;
`;

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f4f3;
`;

export function App() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <AppWrapper>
      <Container toggled={isSignUp}>
        <FormWrapper>
          <Form className="sign-in" toggled={isSignUp}>
            <Title>Iniciar Sessão</Title>
           
            <Text>Use seu email e senha</Text>
            <InputWrapper>
              
              <input type="text" placeholder="Email" />
            </InputWrapper>
            <InputWrapper>
             
              <input type="password" placeholder="Password" />
            </InputWrapper>
            <ForgotLink href="#">Não tem uma conta? Registre-se</ForgotLink>
            <Button type="button">INICIAR SESÃO</Button>
          </Form>
        </FormWrapper>

        <FormWrapper>
          <Form className="sign-up" toggled={isSignUp} isSignUp>
            <Title>Registrar-se</Title>
           
            <Text>Use seu email para se registrar</Text>
            <InputWrapper>
              
              <input type="text" placeholder="Nome" />
            </InputWrapper>
            <InputWrapper>
              
              <input type="text" placeholder="Email" />
            </InputWrapper>
            <InputWrapper>
             
              <input type="password" placeholder="Password" />
            </InputWrapper>
            <Button type="button">REGISTRAR</Button>
          </Form>
        </FormWrapper>

        <WelcomeContainer toggled={isSignUp}>
          <WelcomeContent show={!isSignUp}>
            <WelcomeTitle>Bem Vindo!</WelcomeTitle>
            <WelcomeText>Ingresse com seu dados pessoais para ter acesso ao site completo</WelcomeText>
            <Button type="button" outlined onClick={() => setIsSignUp(true)}>
              Registra-se
            </Button>
          </WelcomeContent>

          <WelcomeContent show={isSignUp}>
            <WelcomeTitle>Olá!</WelcomeTitle>
            <WelcomeText>Cadastre-se para ter acesso ao site completo</WelcomeText>
            <Button type="button" outlined onClick={() => setIsSignUp(false)}>
              Iniciar Sessão
            </Button>
          </WelcomeContent>
        </WelcomeContainer>
      </Container>
    </AppWrapper>
  );
}
