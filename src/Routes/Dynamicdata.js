import React, { useContext } from "react";
import { Store } from "./Storedata";
import { useNavigate, useParams,Link } from "react-router-dom";

const UsedataDynamically = () => {
  const id = useParams().id;
  const [Receiveddata] = useContext(Store);
  // const filtered = Receivedata.filter((item) => item.category === datatype);
  const navigation = useNavigate();

  return(
    <>
      {
      Receiveddata.filter((data) => data.id === parseInt(id))
      .map((item) => {
        return(
            <>
             <h2 className="dynamicontentheading">{item.name}</h2>
             <img className="dynamiccontentimage" src={item.image} alt="err"/>
             <p >{item.text}</p>
             <button onClick={()=> navigation(-1)}
             className="Gobackbutton" >Back</button>
            </>
        )
      })
      }
      {/* More from the siren */}
      <div className="dynamicmore" >
        <h3 className="morefromsirentext" >
          More from siren
          <hr />
        </h3>
        <div className="Morearticles">
          {Receiveddata.filter((item) => item.id % 14 === 0 && item.id <= 45).map(
            (item, index) => {
              return (
                <div
                  key={index}
                  className="HomeLatest"
                >
                  <Link to={`/Details/${item.id}`}>
                    <div className="storiesimagecontainer">
                    <img
                      className="latestimage dynamicmoreimages"
                      src={item.image}
                      alt="Error"
                      
                    />
                    </div>
                    <div className="storiescontent">
                      <p style={{ fontSize: "1rem" }}>{item.name}</p>
                      <p style={{ fontSize: "1rem" }}>
                        {item.text.slice(0, 20)}..
                      </p>
                    </div>
                  </Link>
                </div>
              );
            }
          )}
        </div>
      </div>


    </>
  );
};

export default UsedataDynamically;
