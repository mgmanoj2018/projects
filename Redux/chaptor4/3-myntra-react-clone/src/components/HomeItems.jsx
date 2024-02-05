import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
// import { useNavigation } from "react-router-dom";

const HomeItems = ({ item }) => {
  const dispatch = useDispatch();
  const bagItem = useSelector((Store) => Store.bag);
  const elementFound = bagItem.indexOf(item.id) >= 0;
  // console.log(item.id, elementFound);
  
  const handleAddToBag = () => {
    //console.log("add bag");
    dispatch(bagActions.addToBag(item.id));
  };
  const handleRemove =()=>{
    dispatch(bagActions.removeFromBag(item.id))
  }
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {elementFound ? (
        <button
          type="button"
          className="btn btn-add-bag btn-danger"
          onClick={handleRemove}
        >
        Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-add-bag btn-success"
          onClick={handleAddToBag}
        >
           Add to Bag
        </button>
      )}
      </div>
    </>
  );
};

export default HomeItems;
