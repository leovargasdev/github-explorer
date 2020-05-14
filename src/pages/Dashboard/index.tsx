import React from 'react';
import {FiChevronRight} from 'react-icons/fi'
import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo-github-explorer.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer"/>
      <Title>Repositórios Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório"/>
        <button type="button">Pesquisar Repositório</button>

      </Form>
      <Repositories>
        <a href="/repository">
          <img src="https://avatars3.githubusercontent.com/u/11177716?s=460&u=c9e54ca2ea76850493ae4b9c34e029ec2e613199&v=4" alt="Image Profile"/>
          <div>
            <strong>Trabalho-Prog-I-Toon-World</strong>
            <span>
              Neste repositorio estará contido o trabalho de Prog I, um interpretador da
              linguagem Toon World, baseada em Java. Para saber sobre ele, veja a documentaçao da linguagem.
            </span>
          </div>
          <FiChevronRight size={40}/>
        </a>
      </Repositories>
    </>
  );
}

export default Dashboard;
