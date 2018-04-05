import React, { Component } from 'react';
import 'css/Categories.css';
import { CategoriesList } from 'config/constants';
import { Icons } from 'assets';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = { list: CategoriesList, isChecked: false };
  }
  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

  render() {
    const { state: { list }, toggleCategories } = this;
    return (
      <div className="categories">
        <div className="categories-title">
          <div id="categories">Kategorije</div>
        </div>
        <div className="content-container">
          {list.map((item, key) => {
            return (
              <div>
                <div className="collapser">
                  <div className="categories-main-category">
                    <label className="container-top-checkbox">
                      <span>{item.title}</span>

                      <input type="checkbox" onChange={this.toggleChange} />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div
                    onClick={() => {
                      toggleCategories(key);
                    }}
                    data-target={'#' + key}
                    data-toggle="collapse"
                  >
                    {CategoriesList[key].collapsed ? (
                      <img
                        src={Icons.collapseIcon}
                        className="collapse-icon"
                        alt="collapse-icon"
                      />
                    ) : (
                      <img
                        src={Icons.collideIcon}
                        className="collapse-icon"
                        alt="collide-icon"
                      />
                    )}
                  </div>
                </div>

                <ul className="mopeds collapse" id={key}>
                  {item.subCategories.map((item1, key1) => {
                    return (
                      <li className="items-list">
                        <label className="container-top-checkbox">
                          <span className="categories-content">
                            {item1.title}
                          </span>
                          <input
                            type="checkbox"
                            checked={this.state.isChecked}
                            onChange={this.toggleChange}
                          />
                          <span className="checkmark" />
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          <div className="filter-reseting">
            <span>RESETUJ FILTERE</span>
          </div>
        </div>
      </div>
    );
  }
  toggleCategories = y => {
    let x = !CategoriesList[y].collapsed;
    CategoriesList[y].collapsed = x;
    this.setState({});
  };
}

export default Categories;
