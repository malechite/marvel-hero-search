import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row } from 'react-flexbox-grid';
import styles from './Heroes.scss';
import LargeSpinner from 'shared/loading/LargeSpinner';
import Hero from './Hero.js';
import { getHeroes, updateSearchTerm } from 'redux/modules/heroes';

class Heroes extends Component {
  componentDidMount() {
    this.props.getHeroes();
  }

  handleSearch() {
    const { searchTerm } = this.props;
    this.props.getHeroes(searchTerm);
  }

  handleSearchTerm(e) {
    this.props.updateSearchTerm(e.target.value);
  }

  render() {
    const { list, searchTerm } = this.props;
    const heroList = list.map((h) => <Hero hero={h} key={h.id} />);

    if (this.props.loading) {
      return <LargeSpinner />;
    } else {
      return (
        <div className={styles.heroes}>
          <input type="text" onChange={this.handleSearchTerm.bind(this)} value={searchTerm} />
          <button onClick={this.handleSearch.bind(this)}>submit</button>
          <Grid fluid>
            <Row>
              {heroList}
            </Row>
          </Grid>
        </div>
      );
    }
  }
}

Heroes.propTypes = {
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  getHeroes: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  updateSearchTerm: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { heroes } = state;
  const { list, loading, searchTerm } = heroes;

  return {
    list,
    loading,
    searchTerm
  };
}

export default connect(mapStateToProps, {getHeroes, updateSearchTerm})(Heroes);
