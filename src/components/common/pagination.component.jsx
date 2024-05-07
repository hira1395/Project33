import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
  state = {};

  render() {
    const { total, pagecount, activePage, onClickPage } = this.props;
    const totalPages = Math.ceil(total / pagecount);

    const pages = _.range(1, totalPages + 1, 1);

    if (total <= pagecount) return null;

    return (
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li
            class="page-item"
            onClick={() =>
              activePage - 1 >= 1 ? onClickPage(activePage - 1) : null
            }
            disable={activePage === 1}
          >
            <a class="page-link" style={{ cursor: "pointer" }}>
              Previous
            </a>
          </li>

          {pages.map((page) => (
            <li
              class={activePage === page ? "page-item active" : "page-item"}
              onClick={() => onClickPage(page)}
            >
              <a class="page-link" style={{ cursor: "pointer" }}>
                {page}
              </a>
            </li>
          ))}

          <li
            class="page-item"
            onClick={() =>
              activePage + 1 <= totalPages ? onClickPage(activePage + 1) : null
            }
            disable={activePage === totalPages - 1}
          >
            <a class="page-link" style={{ cursor: "pointer" }}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
