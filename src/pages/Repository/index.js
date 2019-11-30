import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaFolderOpen } from 'react-icons/fa';
import api from '../../services/api';

import Container from '../../components/Container';

import { Loading, Owner, IssueList, IssueState, Pagination } from './styles';

export default class Repository extends Component {
  state = {
    repository: {},
    issues: [],
    loading: true,
    page: 1,
  };

  async componentDidMount() {
    try {
      const { match } = this.props;

      const repoName = decodeURIComponent(match.params.repository);

      const [repo, issues] = await Promise.all([
        api.get(`/repos/${repoName}`),
        api.get(`/repos/${repoName}/issues`, {
          params: {
            state: 'open',
            per_page: 5,
          },
        }),
      ]);

      this.setState({
        repository: repo.data,
        issues: issues.data,
        loading: false,
      });
    } catch (e) {
      this.setState({
        repository: {},
        issues: {},
        loading: false,
      });
    }
  }

  handlePagination = async (e, prevNext) => {
    const { match } = this.props;
    let { page } = this.state;
    const repoName = decodeURIComponent(match.params.repository);

    if (page <= 1) {
      page = 1;
    }

    if (page >= 6) {
      page = 6;
    }

    this.setState({
      loading: true,
    });

    let newPage = page;
    if (prevNext === 'prev') newPage -= 1;
    if (prevNext === 'next') newPage += 1;

    if (newPage <= 1) {
      newPage = 1;
    }

    if (newPage >= 6) {
      newPage = 6;
    }

    if (prevNext === 'prev' && page === 1) {
      this.setState({
        loading: false,
        page,
      });
      return;
    }
    if (prevNext === 'next' && page === 6) {
      this.setState({
        loading: false,
        page,
      });
      return;
    }

    const issues = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state: 'open',
        per_page: 5,
        page: newPage,
      },
    });

    this.setState({
      issues: issues.data,
      loading: false,
      page: newPage,
    });
  };

  handleStateClick = async (e, state) => {
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);

    this.setState({
      loading: true,
    });

    const issues = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state,
        per_page: 5,
        page: 1,
      },
    });

    this.setState({
      issues: issues.data,
      loading: false,
    });
  };

  render() {
    const { repository, issues, loading, page } = this.state;

    if (loading) {
      return <Loading>Carregando...</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/">
            <FaArrowLeft /> Voltar aos repositórios
          </Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>
            <FaFolderOpen /> {repository.name}
          </h1>
          <p>{repository.description}</p>
        </Owner>

        <IssueState>
          <strong>State:</strong>
          <button type="button" onClick={e => this.handleStateClick(e, 'all')}>
            All
          </button>
          <button type="button" onClick={e => this.handleStateClick(e, 'open')}>
            Open
          </button>
          <button
            type="button"
            onClick={e => this.handleStateClick(e, 'closed')}
          >
            Closed
          </button>
        </IssueState>

        <IssueList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>

        <Pagination>
          <button
            className={page === 1 ? 'disabled' : ''}
            type="button"
            onClick={e => this.handlePagination(e, 'prev')}
          >
            <FaArrowLeft />
            Anterior
          </button>
          <button
            className={page === 6 ? 'disabled' : ''}
            type="button"
            onClick={e => this.handlePagination(e, 'next')}
          >
            Próxima
            <FaArrowRight />
          </button>
        </Pagination>
      </Container>
    );
  }
}

Repository.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repository: PropTypes.string,
    }),
  }).isRequired,
};
