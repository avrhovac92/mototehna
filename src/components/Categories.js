import React, { Component } from 'react';
import 'css/Categories.css';
import { CategoriesList } from 'config/constants';
import { Icons } from 'assets';
console.log(CategoriesList);

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = { list: CategoriesList };
  }

  render() {
    const { state: { list }, toggleCategories, checkIfChecked } = this;
    return (
      <div className="categories">
        <div className="categories-title">
          <div id="categories">Kategorije</div>
        </div>
        <div className="content-container">
          {list.map((item, key) => {
            return (
              <div {...item} key={key}>
                <div className="collapser">
                  <div className="categories-main-category">
                    <label className="container">
                      <span>{item.title}</span>

                      <input type="checkbox" onClick={checkIfChecked(key)} />
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
                          <input type="checkbox" />
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

  checkIfChecked = key => {
    const { state: { filter } } = this;
    CategoriesList[key].toggle = !CategoriesList[key].toggle;
    if (CategoriesList[key].toggle) {
      CategoriesList[key].subCategories.map((item2, key2) => {
        item2.toggle = true;
        console.log(item2.toggle);
      });
    }
  };
}

export default Categories;
