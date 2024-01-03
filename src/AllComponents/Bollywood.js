import React from 'react'
import { useContext } from 'react';
import { Store } from '../Routes/Storedata';
import { Link } from 'react-router-dom';

function Bollywood(){
    const [ReceivedData] = useContext(Store);
    // console.log(Receiveddata);
    const datatype = "Bollywood";
    const filtered = ReceivedData.filter((item) => item.category === datatype);
    // const [Count, setcount] = useState(0)
  return (
    <>
     <div className="bollywoodContainer">
        <div className="left">
          <h2 className="bollywoodHeading">Bollywood </h2>
            {filtered
                .filter((item) => item.id >= 1 && item.id <= 10)
                .map((item) => (
                <> 
                <Link to={`/Details/${item.id}`}>
                <div className="contentcontainer">
                  <div className='imagecontainer'>
                  <img className="cardImage" src={item.image} alt="Error" />
                  </div>
                  <div className="cardContent">
                    <h5>{item.name}</h5>
                    <p>{item.text.slice(0, 20)}.......</p>
                  </div>
                </div>
                </Link>
                {/* <hr/> */}
                </>
              
            ))}
          </div>
          <div className="right">
          <h3 className="topPostHeading">Top Post</h3>
          {filtered
            .filter((item) => item.id === 3)
            .map((item,index) => (
              <><div key={index}>
                <Link className="rightLink" to={`/Details/${item.id}`}>
                  <div className="rightCardOne">
                    <img src={item.image} className="rightCardOneImg" alt="err_" />
                    <div className="rightFlex">
                      <div className="rightOne">
                        <h4 className="rightCardOneHeading">{item.name}</h4>
                        <p className="rightContent">
                          {item.text.slice(0, 25)}...
                        </p>
                      </div>
                      <p className="rightcardnumber">{index + 1}</p>
                    </div>
                  </div>
                
                </Link>
                {/* <hr/> */}
                </div>
              </>
            ))}

          {filtered
            .filter((item) => item.id >= 5 && item.id <= 8)
            .map((item, index) => (
              <>
             
                <Link className="rightLink" to={`/Details/${item.id}`}>
                  <div className="rightCardTwo">
                    <img src={item.image} alt="" className="rightcardTwoImg" />
                    <p className="rightCardTwoName">{item.text.slice(0,25)}...</p>
                  
                    <p className="rightCardTwoNumber">{index + 2}</p>
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

export default Bollywood;
