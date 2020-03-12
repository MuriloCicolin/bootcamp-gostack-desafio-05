import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Loading, Owner, IssueList, IssuesFilter, IssuePage } from './styles';
import Container from '../../Components/Container';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    filters: [
      { state: 'all', text: 'Todos', active: true },
      { state: 'open', text: 'Aberto', active: false },
      { state: 'closed', text: 'Fechado', active: false },
    ],
    filterIndex: 0,
    page: 1,
  };

  async componentDidMount() {
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        state: 'all',
        per_page: 30,
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  loadIssues = async () => {
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);
    const { filters, filterIndex, page } = this.state;

    const response = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state: filters[filterIndex].state, // Ex: Open, Closed, All
        per_page: 5,
        page,
      },
    });

    this.setState({ issues: response.data });
  };

  handleClick = async filterIndex => {
    await this.setState({ filterIndex, page: 1 });
    this.loadIssues();
  };

  handlePage = async action => {
    const { page } = this.state;

    await this.setState({
      page: action === 'Anterior' ? page - 1 : page + 1,
    });

    this.loadIssues();
  };

  render() {
    const {
      repository,
      issues,
      loading,
      filters,
      filterIndex,
      page,
    } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.name} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <IssuesFilter active={filterIndex}>
          {filters.map((filter, index) => (
            <button
              type="button"
              key={filter.text}
              onClick={() => this.handleClick(index)}
            >
              {filter.text}
            </button>
          ))}
        </IssuesFilter>

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

        <IssuePage>
          <button
            type="button"
            onClick={() => this.handlePage('Anterior')}
            disabled={page < 2}
          >
            Anterior
          </button>
          <p>{page}</p>
          <button type="button" onClick={() => this.handlePage('Próximo')}>
            Próximo
          </button>
        </IssuePage>
      </Container>
    );
  }
}
