import PropTypes from "prop-types";
import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { images } from '../utils/_Data';
import { ChevronRight } from 'react-bootstrap-icons'
import { Link, withRouter } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'


function mapStateToProps({ categories }) {
  return {
    categories

  };

}
const Category = (props) => {
  const { category, history } = props
  const [inProp, setInProp] = useState(false);
  return (
    <CSSTransition
     in={inProp} timeout={1000}
     classNames="my-node"
     onEntered={() =>setInProp(false)}
     onExited = {()=>history.push("/products") }
      >
      <div className="categories" onClick={()=> setInProp(true)} >
        <div>
          <img src={images[category]} alt={category} />
        </div>
        <h3>{category}</h3>
        <div className="shop">
          <h6> <Link to="/products">shop</Link></h6>
          <ChevronRight color="#DB7C4C" size="30" />
        </div>
      </div>
    </CSSTransition>

  )
}

Category.propTypes = {
  category: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func
  })
}

class Categories extends Component {
  render() {
    const { categories, history } = this.props
    return (
      <div className="categories-container" >
        {categories.map((category, index) => <Category category={category} key={index} history={history} />)}
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.array,
  history: PropTypes.any
}

export default connect(
  mapStateToProps,
)(withRouter(Categories));