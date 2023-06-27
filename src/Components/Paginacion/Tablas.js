import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home=() => {
const [view,setView] = useState(null)
useEffect(() => {
  axios
    .get("https://v3.football.api-sports.io/{endpoint}", {
      headers: {
        "x-rapidapi-key": "1502df8564eea986e653d226517182c1",
        "x-rapidapi-host": "v3.football.api-sports.io",
      },
    })
    .then((response) => {
      console.log(response.data.response);
      setView(response.data.response);
    })
    .catch((error) => console.log('error', error));
}, []);

}

function Tablas() {
return (
  <> 
  <div id="wg-api-football-games"
   data-host="v3.football.api-sports.io"
   data-key="1502df8564eea986e653d226517182c1"
   data-date=""
   data-league=""
   data-season=""
   data-theme=""
   data-refresh="15"
   data-show-toolbar="true"
   data-show-errors="false"
   data-show-logos="true"
   data-modal-game="true"
   data-modal-standings="true"
   data-modal-show-logos="true"> 
</div>
  </>
  
)
}
export default Tablas

