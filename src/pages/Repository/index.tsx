import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronsLeft } from 'react-icons/fi';
import { GoRepoForked, GoStar, GoIssueOpened } from 'react-icons/go';
import { useRouteMatch, Link } from 'react-router-dom';

import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo-github-explorer.svg';
import api from '../../services/api';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(response => {
      setRepository(response.data);
    });
    api.get(`repos/${params.repository}/issues`).then(response => {
      setIssues(response.data);
    });
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronsLeft size={18} />
          voltar
        </Link>
      </Header>
      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <span>{repository.description}</span>
            </div>
          </header>
          <ul>
            <li>
              <span>
                <GoStar size={20} />
                Start
              </span>
              <strong>{repository.stargazers_count}</strong>
            </li>
            <li>
              <span>
                <GoRepoForked size={20} />
                Forks
              </span>
              <strong>{repository.forks_count}</strong>
            </li>
            <li>
              <span>
                <GoIssueOpened size={20} />
                Issues Abertas
              </span>
              <strong>{repository.open_issues_count}</strong>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map(issue => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <span>{issue.user.login}</span>
            </div>
            <FiChevronRight size={40} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
