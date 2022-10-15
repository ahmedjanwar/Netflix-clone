import React from 'react'
import "./HomeScreen.css"
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'
import requests from './Request'

function HomeScreen() {
  return (
    <div className='homescreen'>

        <Nav />

        <Banner />

       <Row 
       title="Netflix Originals"
       fetchUrl = {requests.fetchNetflixOriginals}
       isLargeRow
       />

        <Row 
       title="Trending Now"
       fetchUrl = {requests.fetchTrending}
   
       />
        <Row 
       title="Top Rated"
       fetchUrl = {requests.fetchActionMovies}
     
       />
        <Row 
       title="Comedy"
       fetchUrl = {requests.fetchComedyMovies}
  
       />
        <Row 
       title="Horror"
       fetchUrl = {requests.fetchHorroMovies}

       />
        <Row 
       title="Romance"
       fetchUrl = {requests.fetchRomanceMovies}
 
       />
        <Row 
       title="Documentaries"
       fetchUrl = {requests.fetchDocumentaries}

       />
    </div>
  )
}

export default HomeScreen