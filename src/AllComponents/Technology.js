import {React} from 'react'
import { Link } from 'react-router-dom';
import { Store } from '../Routes/Storedata';
import { useContext } from 'react';
// import Footer from '../Footer/Footer';


function Technology(){
  const [ReceivedData] = useContext(Store);
  const datatype = "Technology";
  const filtered = ReceivedData.filter((item) => item.category === datatype);
  return (
    <>
     
     <div className="bollywoodContainer">
        <div className="left">
          <h2 className="bollywoodHeading">Technology </h2>
          {filtered
            .filter((item) => item.id >= 24 && item.id <= 30)
            .map((item, index) => (
            <>
              <Link to={`/Details/${item.id}`}>
                <div className="contentcontainer">
                  <div className="imagecontainer">
                    <img className="cardImage" src={item.image} alt="Error" />
                  </div>
                  <div className="cardContent">
                    <h6>{item.name}</h6>
                    <p className="leftContent">{item.text.slice(0, 20)}......</p>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>

        <div className="right">
          <h2 className="topPostHeading">Top Post</h2>
          {filtered
            .filter((item) => item.id === 29)
            .map((item, index) => (
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
                        <p className="rightContent">
                          {item.text.slice(0, 50)}...
                        </p>
                      </div>
                      <p className="rightCardNumber">1</p>
                    </div>
                  </div>
                </Link>
              </>
            ))}

          {filtered
            .filter((item) => item.id >= 25 && item.id <= 30)
            .map((item, index) => (
              <>
                <Link className="rightLink" to={`/Details/${item.id}`}>
                  <div className="rightCardTwo">
                    <img src={item.image} alt="" className="rightcardTwoImg" />
                    <p className="rightCardTwoName">{item.text.slice(0,30)}...</p>
                    {/* <p className="rightCardTwoNumber">{setNumber(Number + 1)}</p> */}
                    <p className="rightCardTwoNumber">{index+2}</p>
                  </div>
                </Link>
              </>
            ))}

            <div className="advertisementtechnology">Advertisement
            
            </div>
        </div>
      </div>
        
    </>
  )
}

export default Technology;
