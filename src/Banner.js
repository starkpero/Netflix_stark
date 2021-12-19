import React from 'react';
import './Banner.css';

function Banner() {

    function truncate(string,n){
        return string?.length>n?string.substr(0,n-1) + '...' : string;
    }


    return (
        <header className="banner" style={{
            backgroundSize: " cover",
            backgroundImage : `url("https://www.bajajfinservmarkets.in/content/dam/emistoremarketplace/index/20-02-2020/netflix/Netflix-Banner_1080x419.jpg?impolicy=pqmedium")`,
            backgroundPosition: "center center",
        }}> 
            <div className="banner__contents">
                <h1 className="banner__title">Movie Name</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(`This is a test description This is a test description
                    This is a test description}
                    This is a test description
                    This is a test descriptionThis is a test descriptionvvThis is a test description
                    This is a test description
                    This is a test description`,40)}
                </h1>

            </div>
            <div className="banner--fadeBottom"/>
        </header>
    )
}

export default Banner
