import React from "react";
import BagSummry from "../components/BagSummry";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";

const Bag = () => {
  const bagItems = useSelector(store=>store.bag)
  const items = useSelector(store=>store.items)
  const finalItems = items.filter(item=>{
    const newIndex = bagItems.indexOf(item.id)
    return newIndex>=0
  })
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
          {finalItems.map(item=>(<BagItem key={item.id} item={item}/>))}
            
          </div>
          <div className="bag-summary">
            <BagSummry/>
          </div>
        </div>
      </main>
    </>
  );
};

export default Bag;
