import React, { Component } from 'react';
import 'css/Categories.css';
import { CategoriesList } from 'config/constants';
import { Icons } from 'assets';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = { list: CategoriesList };
    this.stopClick = false;
    console.log(this.state);
  }

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
              <div key={key}>
                <div className="collapser">
                  <div className="categories-main-category">
                    <label className="container-top-checkbox">
                      <span>{item.title}</span>

                      <input
                        type="checkbox"
                        onChange={() => this.toggleChange(key)}
                        checked={item.checked}
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div
                    onClick={() => toggleCategories(item)}
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
                      <li className="items-list" key={key + '-' + key1}>
                        <label className="container-top-checkbox">
                          <span className="categories-content">
                            {item1.title}
                          </span>
                          <input
                            type="checkbox"
                            checked={item1.checked}
                            onChange={() => this.toggleChange(key, key1)}
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

  toggleChange = (bigIndex, smallIndex) => {
    if (smallIndex !== undefined) {
      this.state.list[bigIndex].subCategories[smallIndex].checked = !this.state
        .list[bigIndex].subCategories[smallIndex].checked;
      let checkedSmallIndex = true;
      this.state.list[bigIndex].subCategories.forEach((subCategory, index) => {
        if (!subCategory.checked) {
          this.state.list[bigIndex].checked = false;
          checkedSmallIndex = false;
        }
      });
      if (checkedSmallIndex) {
        this.state.list[bigIndex].checked = true;
      }
    } else {
      this.state.list[bigIndex].checked = !this.state.list[bigIndex].checked;
      this.state.list[bigIndex].subCategories.forEach((subCategory, index) => {
        this.state.list[bigIndex].subCategories[
          index
        ].checked = this.state.list[bigIndex].checked;
      });
    }
    this.forceUpdate();
  };

  toggleCategories = item => {
    if (this.stopClick) {
      return;
    }
    this.stopClick = true;
    this.state.list.forEach((listItem, index) => {
      if (listItem.title === item.title) {
        this.state.list[index].collapsed = !this.state.list[index].collapsed;
      }
    });
    this.forceUpdate();
    setTimeout(() => {
      this.stopClick = false;
    }, 600);
  };
}

export default Categories;
