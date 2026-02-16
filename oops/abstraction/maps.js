class GoogleMaps{
    #currentLocation='home';
    #destination="";

    navigate(place){
        this.#destination=place;
        const route = this.calculateDistance();
        console.log(`navigate to ${this.#destination} : ${route.distance}, ${route.time}`)
    }

     calculateDistance(){
        console.log('🛰️ Getting GPS...');
        console.log('📡 Checking traffic...');
        console.log('🧮 Computing fastest route...');
        return { distance: '5.2 km', time: '12 min' };
     }  

}

const map = new GoogleMaps();
map.navigate('whitefield');