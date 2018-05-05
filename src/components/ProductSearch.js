import React from 'react';
import Product from 'components/Product';
import { ListProducts1 } from 'config/constants';
import  { Component } from 'react';
import  'css/ProductSearch.css';
import { Icons } from 'assets';

class   ProductSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
          page:1,displayProduct:0,bigScreens:(window.innerWidth>900)
        };
      }
      rightClick =()=>{
        
        const{state:{page,displayProduct,bigScreens},leftClick,rightClick}=this;
   
       if((page <Math.floor( ListProducts1.length/4) || (page===Math.floor( ListProducts1.length/4) && ListProducts1.length%4!==0)) && bigScreens){
       this.setState({page:(page+1)});}
       if( !bigScreens && ListProducts1.length>displayProduct+1){
        this.setState({displayProduct:(displayProduct+1)});}
        this.setState({bigScreens:(window.innerWidth>900)});
      
          
      }
      leftClick =()=>{
        const{state:{page,displayProduct,bigScreens},leftClick,rightClick}=this;
     
      if(page>=2 && bigScreens){
      this.setState({page:(page-1)});}
      if(displayProduct>=1 && (!bigScreens)){
      this.setState({displayProduct:(displayProduct-1)});}
      
      this.setState({bigScreens:(window.innerWidth>900)});
   
          
      }
  
  render() {
      const{state:{page,displayProduct,bigScreens},leftClick,rightClick}=this;
    return (
    <div className="Contt">
      <div className="ContainerSearch">
       <div className="search">
       <span className="fa fa-search"></span>
       <input className="inputSearch"  placeholder="Pretraži delove..."/>
       </div>
       <Product className="ProductS hideProduct "  name={ListProducts1[displayProduct].name}  category={ListProducts1[displayProduct].category} price={ListProducts1[displayProduct].price}  src={ListProducts1[displayProduct].src} /> 
      </div>
       
      <div className="SearchProducts">
      {((4*(page-1))<ListProducts1.length)? 
          <Product className="ProductS hideMobile"  name={ListProducts1[4*(page-1)].name}  category={ListProducts1[4*(page-1)].category} price={ListProducts1[4*(page-1)].price}  src={ListProducts1[4*(page-1)].src} /> 
          :null}
          {((4*(page-1)+1)<ListProducts1.length)?
          <Product  className="ProductS hideMobile"  name={ListProducts1[4*(page-1)+1].name}  category={ListProducts1[4*(page-1)+1].category} price={ListProducts1[4*(page-1)+1].price}  src={ListProducts1[4*(page-1)+1].src} /> 
       :null}
       </div>
       <div className="SearchProducts">
       {((4*(page-1)+2)<ListProducts1.length)?
       
         ( <Product   className="ProductS hideMobile"  name={ListProducts1[4*(page-1)+2].name}  category={ListProducts1[4*(page-1)+2].category} price={ListProducts1[4*(page-1)+2].price}  src={ListProducts1[4*(page-1)+2].src} />)
       :null
       }  
       {((4*(page-1)+3)<ListProducts1.length)?
         ( <Product  className="ProductS hideMobile"  name={ListProducts1[4*(page-1)+3].name}  category={ListProducts1[4*(page-1)+3].category} price={ListProducts1[4*(page-1)+3].price}  src={ListProducts1[4*(page-1)+3].src} />)      
       :null}
      </div>
      <div className="arrowsSearch">
          <img
           onClick={leftClick}
            src={Icons.arrowLeft}
            alt="Arrow left"
        
          />
          {(bigScreens)?
          <div className="PageSearch">{page}</div>
        :<div className="PageSearch">{displayProduct+1}</div>}
          <img
            onClick={rightClick}
            src={Icons.arrowRight}
            alt="Arrow right"
      
          />
        </div>

    </div>
    )
  }

}
export default ProductSearch;