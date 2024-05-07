import React, { Component } from "react";

class Counter extends Component {
  state = {};
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Navbar <span class="badge bg-secondary">4</span>
            </a>
          </div>
        </nav>
        <button type="button" class="btn btn-primary m-2">
          Reset
        </button>

        <ul>
          <li class="list-unstyled">
            <div>
              <span class="badge bg-primary">4</span>
              <button type="button" class="btn btn-secondary m-2">
                +
              </button>
              <button type="button" class="btn btn-secondary m-2">
                -
              </button>
              <button type="button" class="btn btn-danger m-2">
                Delete
              </button>
            </div>
          </li>

          <li class="list-unstyled">
            <div>
              <span class="badge bg-primary">4</span>
              <button type="button" class="btn btn-secondary m-2">
                +
              </button>
              <button type="button" class="btn btn-secondary m-2">
                -
              </button>
              <button type="button" class="btn btn-danger m-2">
                Delete
              </button>
            </div>
          </li>

          <li class="list-unstyled">
            <div>
              <span class="badge bg-secondary">Zero</span>
              <button type="button" class="btn btn-secondary m-2">
                +
              </button>
              <button type="button" class="btn btn-secondary m-2">
                -
              </button>
              <button type="button" class="btn btn-danger m-2">
                Delete
              </button>
            </div>
          </li>
        </ul>
      </>
    );
  }
}

export default Counter;
