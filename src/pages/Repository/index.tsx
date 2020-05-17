import React, { useState, useEffect } from 'react';
import {
  GoRepoForked,
  GoStar,
  GoIssueOpened,
  GoCalendar,
  GoChevronLeft,
  GoChevronRight,
} from 'react-icons/go';
import { format } from 'date-fns';
import { useRouteMatch, Link } from 'react-router-dom';
import pt from 'date-fns/locale/pt';

import { Header, RepositoryInfo, Issues } from './styles';
import logo from '../../assets/logo.png';
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
  created_at: string;
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
        <Link to="/">
          <img src={logo} alt="Github Explorer" width="300" height="auto"/>
        </Link>
        <Link to="/">
          <GoChevronLeft size={18} />
          VOLTAR
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
              <span>
                <GoCalendar size={14} />
                {format(
                  new Date(issue.created_at),
                  "EEEE', 'dd' de 'MMMM' de 'yyyy",
                  { locale: pt },
                )}
              </span>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <GoChevronRight size={40} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
