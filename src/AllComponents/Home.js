import React, { useContext } from "react";
import { Store } from "../Routes/Storedata";
import { Link } from "react-router-dom";
function Home() {
  const [Received] = useContext(Store);
  // const filtered = Received.filter((item) => item.category === datatype);
  return (
    <>
      <div
        className="Homecontainer1">
        <div className="Homecontainer1left">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/947/583/747/mountain-nature-hd-wallpapers-top-beautiful-desktop-nature-images-background-wallpaper-thumb.jpg"
            alt="Error"/>
        </div>
        <div className="Homecontainer1right">
          <div className="imageright">
            <img
            className="hometopimage"
              src="https://t4.ftcdn.net/jpg/03/47/57/37/360_F_347573743_58bQNnPkhAFxXwNKhtIBndZ9I68Z2l7y.jpg"
              alt="reload"
              style={{ marginLeft: "2vw", borderRadius: "10px" }}
            />
          </div>
          <div className="imageright">
            <img
              src="https://c.ndtvimg.com/2020-08/l7l9chag_ram-temple-proposed-design-august-2020_625x300_04_August_20.jpg?im=Resize=(1230,900)"
              alt="reload"
              style={{ marginLeft: "2vw", borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
      <div
        className="Homecontainer2"
        // style={{ display: "flex", flexDirection: "column" }}
      >
        {/* font-size: 2rem; width: 15vw; */}
        <h3 >
          The Latest
          <hr />
        </h3>
        <div
          className="latestcontainer"
         
        >
          
          {Received.filter((item) => item.id >= 22 && item.id <= 24).map(
            (item, index) => {
              return (
                <div key={index}>
                  <Link to={`/Details/${item.id}`}>
                    <div className="Article">
                      <img
                        className="Articleimages"
                        src={item.image}
                        alt="Not Found"
                      />
                      <div className="Articletext">
                        <p>{item.name}</p>
                        <p className="text">{item.text.slice(0, 15)}..</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            }
          )}
        </div>
      </div>
      <div
        className="Homecontainer3"
        style={{ boxSizing: "border-box", display: "flex" }}
      >
        <div className="Latest">
          <h3 id="latesth3" >
            Latest Movies
            <hr />
          </h3>
          <div className="latestarticleleft">
            {Received.filter((item) => item.id >= 1 && item.id <= 3).map(
              (item, index) => {
                return (
                  <div key={index}>
                    <Link to={`/Details/${item.id}`}>
                      <div
                        className="Articlelatest"
                      >
                        <img
                          className="Movieimages "
                          src={item.image}
                          alt="Not Found"
                          
                        />
                        <div className="Movietext">
                          <h4>{item.name}</h4>
                          <p className="text" >
                            {item.text.slice(0, 150)}..
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              }
            )}
            <img
            className="latestimagedown"
              src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/07/untitled-design-2023-07-25t125101-1690269824.jpg"
              alt="reload"
              
            />
          </div>
        </div>

        <div className="latestarticleright" >
          <div
            className="Homeadvertise">
            
            <p
              style={{
                marginTop: "5vw",
                paddingTop: "2vw",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              {" "}
              Advertistement
            </p>
          </div>
          <div className="Toppost">
            <h2>Top Post</h2>
            {Received.filter((item) => item.id ===34).map(
              (item, index) => {
                return (
                  <div key={index} className="toppostArticle">
                    <Link to={`/Details/${item.id}`}>
                      <div className="toparticle">
                        <img
                          className="TopArticleimg"
                          src={item.image}
                          alt="Not Found"
                          style={{
                            borderRadius: "10px",
                          }}
                        />
                        <div style={{ display: "flex" }}>
                          <div className="textt">
                            <h6>{item.name}</h6>
                            <p>{item.text.slice(0, 60)}..</p>
                          </div>

                          <div className="number">
                            <p style={{ fontSize: "2rem" }}>{index + 1}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
      <div className="LatestStories" >
        <h3 >
          Latest Stories
          <hr />
        </h3>
        <div className="StoriesDiv">
          {Received.filter((item) => item.id % 15 === 0 && item.id <= 45).map(
            (item, index) => {
              return (
                <div
                  key={index}
                  className="HomeLatest"
                >
                  <Link to={`/Details/${item.id}`}>
                    <div className="storiesimagecontainer">
                    <img
                      className="latestimage"
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
}

export default Home;
