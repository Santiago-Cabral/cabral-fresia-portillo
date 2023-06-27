import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home=() => {
const [match,setMatch] = useState(null)
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
        setMatch(response.data.response);
      })
      .catch((error) => console.log('error', error));
  }, []);

}

function Fixture() {
return (
  <> 
  
  <div id="wg-api-football-game"
    data-host="v3.football.api-sports.io"
    data-key="1502df8564eea986e653d226517182c1"
    data-id="718243"
    data-theme=""
    data-refresh="15"
    data-show-errors="false"
    data-show-logos="true">
</div>
  </>
  
)
}
export default Fixture
