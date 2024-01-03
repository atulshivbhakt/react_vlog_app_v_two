import React from 'react'
import { Store } from '../Routes/Storedata';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
// import Footer from '../Footer/Footer';


function Fitness(){
  const [ReceivedData] = useContext(Store);
  const datatype = "Fitness";
  const filtered = ReceivedData.filter((item) => item.category === datatype);
  return (
    <>
     <div className="bollywoodContainer">
        <div className="left">
          <h2 className="bollywoodHeading">Fitness</h2>
          {filtered
             .filter((item) => item.id >= 30 && item.id <= 37)
            .map((item) => (
            <>
              <Link to={`/Details/${item.id}`}>
                <div className="contentcontainer">
                  <div className="imagecontainer">
                    <img className="cardImage" src={item.image} alt="Error" />
                  </div>
                  <div className="cardContent">
                    <h6>{item.name}</h6>
                    <p className="leftContent">{item.text.slice(0, 30)}.......</p>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>

        <div className="right">
          <h2 className="topPostHeading">Top Post</h2>
          {filtered
            .filter((item) => item.id === 36)
            .map((item, index) => (
              <>
                <Link className="rightLink" to={`/Details/${item.id}`}>
                  <div className="rightCardOne">
                    <img
                      src={item.image}
                      className="rightCardOneImg"
                      alt="err_"
                      
                    />
                    <div className="rightflex">
                      <div className="rightOne">
                        <h4 className="rightCardOneHeading">{item.name}</h4>
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
            .filter((item) => item.id >= 37 && item.id <= 40)
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

            <div className="advertisement fitnessadvertisement">Advertisement
            </div>
        </div>
      </div>
      
    </>
  )
}

export default Fitness;
