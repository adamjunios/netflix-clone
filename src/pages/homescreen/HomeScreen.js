import React from "react";
import Banner from "../../components/banner/Banner";
import Nav from "../../components/nav/Nav";
import Row from "../../components/row/Row";
import requests from "../../features/api/Requests";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />

      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

      <Row
        title="Documentaries Movies"
        fetchUrl={requests.fetchDecumentariesMovies}
      />
    </div>
  );
}

export default HomeScreen;
