import {Link} from 'react-router-dom'

export function Index(){
    return(
    <>
        <div id="index" className="index">
            <div className="container-index">
                <div className="content">
                <h1 style={{fontSize:'40px' ,color: 'gold'}}>Lathy Private</h1>
                <div className="logo-maskot">
                    <img src="./assets/icons/maskot.png" alt="logo" />
                </div>
                <div className="content-text">
                    <div className="info">
                    <h1>Pendamping Setia Belajarmu</h1>
                    <h4>Help improve the quality of education from an early age and create breakthroughs in knowledge.</h4>
                    <div className="more">
                        <h5>For more information</h5>
                        <Link to="/home">
                            See More
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
    )
}
