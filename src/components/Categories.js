import React, { Component } from 'react';

import 'css/Categories.css';
import { CategoriesList } from 'config/constants';
import { Icons } from 'assets';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = { list: CategoriesList };
  }
  render() {
    return (
      <div className="categories">
        <div className="categories-title">
          <span id="categories">Kategorije</span>
        </div>
        <div className="content-container">
          <div>
            <div className="collapser">
              <div className="categories-main-category">
                <label className="container">
                  MOPEDI
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </div>
              <div
                onClick={this.toggleCategory}
                data-target="#collapseExample"
                data-toggle="collapse"
              >
                <img
                  src={Icons.collapseIcon}
                  className="collapse-icon"
                  alt="collapse-icon"
                />
              </div>
            </div>

            <ul className="mopeds collapse" id="collapseExample">
              <li className="items-list">
                <label className="container">
                  <span className="categories-content">A3</span>
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
              <li className="items-list">
                <label className="container">
                  <span className="categories-content">A35</span>
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
              <li className="items-list">
                <label className="container">
                  <span className="categories-content">APN4</span>
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
              <li className="items-list">
                <label className="container">
                  <span className="categories-content">APN6</span>
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
              <li className="items-list">
                <label className="container">
                  <span className="categories-content">BT50</span>
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
              <li className="items-list">
                <label className="container">
                  <span className="categories-content">ATX</span>
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
              <li className="items-list">
                <label className="container">
                  <span className="categories-content">CTX</span>
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
            </ul>
          </div>
          <label className="container">
            BAŠTA
            <input type="checkbox" />
            <span className="checkmark" />
            <img
              src={Icons.collapseIcon}
              className="collapse-icon"
              alt="collapse-icon"
            />
          </label>
          <ul className="mopeds">
            <li className="items-list">
              <label className="container">
                <span className="categories-content">Kosilice</span>
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
            </li>
            <li className="items-list">
              <label className="container">
                <span className="categories-content">Trimeri</span>
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
            </li>
          </ul>
          <label className="container">
            ŠUMA
            <input type="checkbox" />
            <span className="checkmark" />
            <img
              src={Icons.collapseIcon}
              className="collapse-icon"
              alt="collapse-icon"
            />
          </label>
          <ul className="mopeds">
            <li className="items-list">
              <label className="container">
                <span className="categories-content">Motorne testere</span>
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
            </li>
          </ul>
          <label className="container">
            VANBRODSKI
            <input type="checkbox" />
            <span className="checkmark" />
            <img
              src={Icons.collapseIcon}
              className="collapse-icon"
              alt="collapse-icon"
            />
          </label>
          <ul className="mopeds">
            <li className="items-list">
              <label className="container">
                <span className="categories-content">T4</span>
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
            </li>
            <li className="items-list">
              <label className="container">
                <span className="categories-content">T4.5</span>
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
            </li>
            <li className="items-list">
              <label className="container">
                <span className="categories-content">T4.8</span>
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
            </li>
            <li className="items-list">
              <label className="container">
                <span className="categories-content">T10</span>
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
            </li>
            <li className="items-list">
              <label className="container">
                <span className="categories-content">T18</span>
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
            </li>
          </ul>
          <div className="filter-reseting">
            <span>RESETUJ FILTERE</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
