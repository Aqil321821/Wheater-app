



var key = "JbWG0Mn9Z5TtDp2Wbd1RG55xFNKlAT3n";


//getcity se jo aa raha ha usko is me get krke api se mosam ka haal lelo
var getwheather = async (id) => {
    var base = 'https://dataservice.accuweather.com/currentconditions/v1/'
    var query = `${id}?apikey=${key}`;
    var response = await fetch(base + query);
    var data = await response.json();
     return data[0];
    console.log(data);
     

    
}






// async is liye rakha q k promise banan tah request krke return promise

var getCity = async (city) => {
    var base = "https://dataservice.accuweather.com/locations/v1/cities/search"
    // base api for end points
    
    var query = `?apikey=${key}&q=${city}`;
    var response = await fetch(base + query);
    var data = await response.json();
    // console.log(data)
    return data[0]

    // wait untill promise resolved ==> await
    //fetch return kre ga ek promise or response me saave kre ga
    // response me jo mila usko json methods se data bana do ta k use kia ja sky
    //    console.log(data[0]);
    /*city get krne k liye api k end points or key value dono di hain  */



 };

//   getCity("karachi").then(data =>{
//     return getwheather(data.Key);

//   }).then(data =>{
//     console.log(data)
//   }).catch(err => console.log(err));


// getwheather('261158')




    
    // data k object me key : "251545" impt thing ha second request k liye
/* is poray function se city ka code get krke ham query bana kr end source ko behj rahy hen ta k city info get kr saken*/
/*second api rquest ham whether conditions ki kren gy*/
// second function se whether conditions maloom kren gy using api ,pehli api se city code lekr usko pass kren gy 
/*
steps;
1.locations API to get information about a city
2.send information about that city back to was in the browser
3.get a location key code that is a key code that represents that location in the AQ weather API.
4. next request after that is going to be for the current conditions in the area
5. next request after that is going to be for the current conditions in the area to get conditions
*/
// */

















// const key='JbWG0Mn9Z5TtDp2Wbd1RG55xFNKlAT3n';

// const getCity = async () => {
//     const base='http://dataservice.accuweather.com/locations/v1/cities/search';
//     const query=`?apikey=${key}&q=${city}`;
//     const response= await fetch( base + query);
//     const data= await response.json();


//     console.log(data);

//     // console.log(data);
// };
 
// getCity('karachi');
