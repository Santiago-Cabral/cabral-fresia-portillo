import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home=() => {
const [match,setMatch] = useState(null)
useEffect(() => {
  axios
    .get("https://v1.basketball.api-sports.io/{endpoint}", {
      headers: {
        "x-rapidapi-key": "1502df8564eea986e653d226517182c1",
        "x-rapidapi-host": "v1.basketball.api-sports.io",
      },
    })
    .then((response) => {
      console.log(response.data.response);
      setMatch(response.data.response);
    })
    .catch((error) => console.log('error', error));
}, []);

}

function Basketball() {
return (
  <> 
  <div id="wg-api-basketball-games"
     data-host="v1.basketball.api-sports.io"
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
export default Basketball