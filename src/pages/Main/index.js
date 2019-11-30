import React, { Component } from 'react';
import { FaGithub, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import { Form, SubmitButton, List } from './styles';

import api from '../../services/api';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
    error: false,
  };

  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (!repositories) return;
    this.setState({ repositories: JSON.parse(repositories) });
  }

  componentDidUpdate(prevProps, prevState) {
    const { repositories } = this.state;

    if (repositories === prevState.repositories) return;

    localStorage.setItem('repositories', JSON.stringify(repositories));
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;

    try {
      const existingRepos = repositories.filter(repos => {
        return repos.name === newRepo;
      });

      if (existingRepos.length > 0) {
        throw new Error('Repositório duplicado');
        // this.setState({
        //   loading: false,
        //   error: true,
        // });
        // return;
      }

      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
        loading: false,
        error: false,
      });
    } catch {
      this.setState({
        loading: false,
        error: true,
      });
    }
  };

  render() {
    const { newRepo, loading, repositories, error } = this.state;

    return (
      <Container>
        <h1>
          <FaGithub />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit} error={Number(error)}>
          <input
            onChange={this.handleInputChange}
            value={newRepo}
            type="text"
            placeholder="Adicionar repo"
          />

          <SubmitButton loading={Number(loading)}>
            {loading ? <FaSpinner /> : <FaPlus />}
          </SubmitButton>
        </Form>

        <List>
          {repositories.map(repo => (
            <li key={repo.name}>
              <span>{repo.name}</span>
              <Link to={`/repository/${encodeURIComponent(repo.name)}`}>
                Ver detalhes
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
