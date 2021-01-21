import React, { Component } from 'react';
import * as api from '../../utils/api';
import styles from './TopicList.module.css';
import Loader from '../Loader/Loader';
import ErrorDisplayer from '../ErrorDisplayer/ErrorDisplayer';

class TopicList extends Component {
  state = {
    topics: [],
    isLoading: true,
    err: null,
  };

  render() {
    const { topics, isLoading, err } = this.state;

    if (isLoading) return <Loader />;
    if (err) return <ErrorDisplayer {...err} />;

    return (
      <main>
        <h2 className={styles.title}>Topics</h2>
        <ul>
          {topics.map((topic) => {
            const { title } = topic;

            return (
              <li key={title}>
                <p>{topic.title}</p>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }

  componentDidMount() {
    this.getTopics();
  }

  getTopics = () => {
    this.setState({ isLoading: true });

    api
      .fetchTopics()
      .then((topics) => {
        this.setState({ topics, isLoading: false });
      })
      .catch((err) => {
        this.setState({
          err: { msg: err.response.data.msg, status: err.response.status },
          isLoading: false,
        });
      });
  };
}

export default TopicList;