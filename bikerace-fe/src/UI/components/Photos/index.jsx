import React, { Component } from 'react';
import axios from 'axios';

export default class Photos extends Component {
    constructor(props) {
        super(props);


        this.retrieveNextPhotos = this.retrieveNextPhotos.bind(this);
        this.photoMosaic = this.photoMosaic.bind(this);
        this.state = {            
            photoList:[],
            totalPerPage: 0,
            currentPhotoIndex: 0,
            currentPhotoBatch:[],
            MAXPERPAGE: 40,
            isLoaded: false,
        };

    }

  componentDidMount() {

       const FLIKR_API =  {
            REST_ENDPOINT_URL: process.env.REACT_APP_FLIKR_REST_ENDPOINT_URL,
            METHOD: process.env.REACT_APP_FLIKR_API_METHOD,
            KEY: process.env.REACT_APP_FLIKR_API_KEY,
            ARGUMENTS: process.env.REACT_APP_FLIKR_API_ARGUMENTS,
        };

    const axiosInstance = axios.create({
        baseURL: FLIKR_API.REST_ENDPOINT_URL,
        headers: {'Content-Type': 'application/json'}
    });

    // axiosInstance.get('/?method=flickr.photos.search&api_key=c6651cf04f2213898fc7306476b55922&tags=bikerace%2C+BoulderBikeTour&tag_mode=any&sort=relevance&geo_context=2&format=json&nojsoncallback=1')
    axiosInstance.get(`/?method=${FLIKR_API.METHOD}&api_key=${FLIKR_API.KEY}&${FLIKR_API.ARGUMENTS}`)
    .then(res => {
          this.setState({photoList: res.data.photos.photo, totalPerPage: res.data.photos.perpage, isLoaded: true});
          console.log("PHOTOS axios componentDidMount: this.state.totalPerPage  | this.state.photoList | res.data.stat", this.state.totalPerPage , this.state.photoList, res.data.stat );
    })
    .then(() => { this.retrieveNextPhotos() })
    .catch(err => console.error(err));
  
    /*
        Source: https://www.flickr.com/services/api/misc.urls.html

https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
	or
https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
	or
https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)

s	petit carré 75x75
q	large square 150x150
t	miniature, côté le plus long de 100
m	petit, côté le plus long de 240
n	small, 320 on longest side
-	moyen, côté le plus long de 500
z	Moyen 640, côté le plus long de 640
c	moyen 800, 800 sur la longueur†
b	grand, côté le plus long de 1 024*
h	largeur 1 600, longueur 1 600†
k	largeur 2 048, longueur 2 048†
o	image d'origine, jpg, gif ou png selon le format source

flikr API call (no hashtags):

https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=c6651cf04f2213898fc7306476b55922&tags=bikerace%2C+BoulderBikeTour&tag_mode=any&sort=relevance&geo_context=2&format=json&nojsoncallback=1

api_key: 'c6651cf04f2213898fc7306476b55922'
tags: 'bikerace, BoulderBikeTour'
tage_mode: 'any'
sort: 'relevance'
geo_context: '2'  // outdoors

      */      
  }

  retrieveNextPhotos() {
    let count = this.state.MAXPERPAGE;
    let photoStart = this.state.currentPhotoIndex;
    let photoEnd = Math.min(photoStart + count, this.state.totalPerPage); // exclusive; <= total;
    
    // build array of number of photos
    let currentPhotos = [];
    for (let i=photoStart; i<photoEnd; i++) {
        let photo = this.state.photoList[i]
        currentPhotos.push(`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`);
    } 

    this.setState({currentPhotoBatch: currentPhotos, currentPhotoIndex: photoEnd});
  }



photoMosaic() {
     return( this.state.currentPhotoBatch.map((photo, index) => {
          return(
                <img src={photo} key={index} className='img-fluid mx-auto my-1 border' alt='Boulder Bike Race' />
                )
        })
    );
}

    render() {
        let photos =  this.state.isLoaded? this.photoMosaic() : (<h3>Loading...</h3>);
        return (
        <div className=" ">
            <button className='w-100 my-3 bg-dark btn btn-lg rounded text-center' onClick={this.retrieveNextPhotos}>More #bikerace #BoulderBikeTour photos</button>
                <div className="mx-auto text-center">
                {photos}
                </div>
            <button className='w-100 my-3 bg-dark btn btn-lg rounded' onClick={this.retrieveNextPhotos}>More #bikerace #BoulderBikeTour photos</button>
        </div>
        );
    }
}
