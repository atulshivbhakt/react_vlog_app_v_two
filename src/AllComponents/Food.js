import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Store } from '../Routes/Storedata';
// import Footer from '../Footer/Footer';



function Food(){

  const [ReceivedData] = useContext(Store);
  const datatype = "Food";
  const filtered = ReceivedData.filter((item) => item.category === datatype);
  return (
    <>
     <div className="bollywoodContainer">
        <div className="left">
          <h2 className="bollywoodHeading">Food Section</h2>
          {filtered
            .filter((item)=>item.id>=43 && item.id<=50)
            .map((item, index) => (
            <>
              <Link to={`/Details/${item.id}`}>
                <div className="contentcontainer">
                  <div className="imagecontainer">
                    <img className="cardImage" src={item.image} alt="Error" />
                  </div>
                  <div className="cardContent">
                    <h5>{item.name}</h5>
                    <p className="leftContent">{item.text.slice(0, 25)}.......</p>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>

        <div className="right">
          <h3 className="topPostHeading">Top Post</h3>
          {filtered
            .filter((item) => item.id === 46)
            .map((item, index) => (
              <>
                <Link className="rightLink" to={`/info//Details/${item.id}`}>
                  <div className="rightCardOne">
                    <img
                      src={item.image}
                      className="rightCardOneImg"
                      alt="err_"
                    />
                    <div className="rightFlex">
                      <div className="rightOne">
                        <h2 className="rightCardOneHeading">{item.name}</h2>
                        <p className="rightContent">
                          {item.text.slice(0, 100)}...
                        </p>
                      </div>
                      <p className="rightCardNumber">1</p>
                    </div>
                  </div>
                </Link>
              </>
            ))}

          {filtered
            .filter((item) => item.id >= 47 && item.id <= 50)
            .map((item, index) => (
              <>
                <Link className="rightLink" to={`/Details/${item.id}`}>
                  <div className="rightCardTwo">
                    <img src={item.image} alt="" className="rightcardTwoImg" />
                    <p className="rightCardTwoName">{item.text.slice(0,50)}...</p>
                    {/* <p className="rightCardTwoNumber">{setNumber(Number + 1)}</p> */}
                    <p className="rightCardTwoNumber">{index+2}</p>
                  </div>
                </Link>
              </>
            ))}

            <div className="advertisement">Advertisement
            </div>
        </div>
      </div>
    
    </>
  )
}

export default Food;
