import React, { Component } from "react";
import Pagination from "./common/pagination.component";
import Filter from "../components/common/filtering.component";
import MoviesTable from "./movies.table.component";
import { getGenres, getMovies } from "../services/movie.service";
import _ from "lodash";

class Submission extends Component {
  state = {
    movies: getMovies(),
    genres: [{ name: "All Genres" }, ...getGenres()],
    activePage: 1,
    pageCount: 5,
    selectedGenre: "All Genres",
    sortColumn: { path: "title", order: "asc" },
  };

  handleClickPage = (page) => {
    this.setState({ ...this.state, activePage: page });
  };

  paginateMovies = (movies) => {
    const { activePage, pageCount } = this.state;
    const start = (activePage - 1) * pageCount;
    const paginateMovies = movies.slice(start, start + pageCount);
    return paginateMovies;
  };

  filterMovies = () => {
    const { movies, selectedGenre } = this.state;

    const filterMovies = movies.filter((movie) => {
      if (selectedGenre === "All Genres") return true;
      if (movie.genres.includes(selectedGenre)) return true;
      return false;
    });
    return filterMovies;
  };

  sortMovies = (movies) => {
    const { sortColumn } = this.state;
    const sortedMovies = _.orderBy(
      movies,
      [sortColumn.path],
      [sortColumn.order]
    );
    return sortedMovies;
  };

  handleClickGenre = (genre) => {
    this.setState({ ...this.state, selectedGenre: genre, activePage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ ...this.state, sortColumn });
  };

  render() {
    const filtered = this.filterMovies();

    const sorted = this.sortMovies(filtered);
    const movies = this.paginateMovies(sorted);

    return (
      <>
        <div className="container"></div>
        <div className="row">
          <Filter
            filteredItems={this.state.genres.map((genre, idx) => ({
              _idx: idx,
              name: genre.name,
            }))}
            onClick={this.handleClickGenre}
            selectedItem={this.state.selectedGenre}
          />

          <div className="col-lg-8">
            <h2>Showing {filtered.length} movies</h2>

            <MoviesTable
              movies={movies}
              onSort={this.handleSort}
              sortColumn={this.state.sortColumn}
            />

            <Pagination
              total={filtered.length}
              pagecount={this.state.pageCount}
              activePage={this.state.activePage}
              onClickPage={this.handleClickPage}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Submission;
