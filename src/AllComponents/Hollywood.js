import React from 'react';
import { useContext } from 'react';
import { Store } from '../Routes/Storedata';
import { Link } from 'react-router-dom';
// import Footer from '../Footer/Footer';

function Hollywood(){
  const [ReceivedData] = useContext(Store);

  const datatype = "Hollywood";

  const filtered = ReceivedData.filter((item) => item.category === datatype);
  return (
    <>
     <div className="bollywoodContainer">
        <div className="left">
          <h2 className="bollywoodHeading">Hollywood </h2>
          {filtered
            .filter((item) => item.id >= 11 && item.id <= 20)
            .map((item) => (
            <>
              <Link to={`/Details/${item.id}`}>
                <div className="contentcontainer">
                  <div className="imagecontainer">
                    <img className="cardImage" src={item.image} alt="Error" />
                  </div>
                  <div className="cardContent">
                    <h5>{item.name}</h5>
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
            .filter((item) => item.id === 15)
            .map((item) => (
              <>
                <Link className="rightLink" to={`/Details/${item.id}`}>
                  <div className="rightCardOne">
                    <img
                      src={item.image}
                      className="rightCardOneImg"
                      alt="err_"
                    />
                    <div className="rightFlex">
                      <div className="rightOne">
                        <h4 className="rightCardOneHeading">{item.name}</h4>
                        <div className='righttwo'>
                        <p className="rightContent">
                          {item.text.slice(0, 50)}...
                        </p>
                        <p className="rightCardNumber">1</p>
                      </div>
                      
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            ))}

          {filtered
            .filter((item) => item.id >= 16 && item.id <= 20)
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

            <div className="advertisement hollyadvertise">Advertisement
            
            </div>
        </div>
      </div>
      
    </>
  )
}

export default Hollywood;
