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
    const {
      state: { list },
      toggleCategories,
      checkIfChecked,
      checkIfChecked1
    } = this;
    return (
      <div className="categories">
        <div className="categories-title">
          <span id="categories">Kategorije</span>
        </div>
        <div className="content-container">
          {list.map((item, key) => {
            {
              let t = false;
            }
            return (
              <div {...item} key={key}>
                <div className="collapser">
                  <div className="categories-main-category">
                    <label className="container" onClick={checkIfChecked(key)}>
                      <span>{item.title}</span>

                      <input
                        type="checkbox"
                        checked={CategoriesList[key].toggle}
                      />
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
                        src={Icons.collideIcon}
                        className="collapse-icon"
                        alt="collapse-icon"
                      />
                    ) : (
                      <img
                        src={Icons.collapseIcon}
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
                        <label className="container">
                          <span className="categories-content">
                            {item1.title}
                          </span>
                          <input
                            type="checkbox"
                            checked={
                              CategoriesList[key].subCategories[key1].toggle
                            }
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
        </div>
      </div>
    );
  }
  toggleCategories = y => {
    // this.setState({ {list}: {list} });
    let x = !CategoriesList[y].collapsed;
    CategoriesList[y].collapsed = x;
    this.setState({});
  };
  checkIfChecked = key => {
    CategoriesList[key].toggle = !CategoriesList[key].toggle;
    console.log('djjd');
    if (CategoriesList[key].toggle) {
      CategoriesList[key].subCategories.map((item2, key2) => {
        item2.toggle = true;
      });
    }
  };
}

export default Categories;
