import  {useState} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoList from './component/MoList';
import {Nav} from 'react-bootstrap';
import Add from './component/Add';
function App() {
const [films,setFilms]= useState([ 
{

  titre: 'Ce que le jour doit a la nuit',
  bio :"Algeria, the 1930s. Younes is nine years old when he is put in his uncle's care in Oran. Rebaptized Jonas, he grows up among the Rio Salado youths, with whom he becomes friends. Emilie is one of the gang; everyone",
  url: "https://fr.web.img5.acsta.net/medias/nmedia/18/91/71/02/20159308.jpg" ,
  rate:"5",
},

{

  titre:"Papillion",
  bio :"Wrongfully convicted for murder, Henri Charriere forms an unlikely relationship with fellow inmate and quirky convicted counterfeiter Louis Dega, in an attempt to escape from the notorious penal colony on Devil's Island",
  
  url: "https://m.media-amazon.com/images/M/MV5BNTdmYWEzNmEtNDIzYi00ZDM5LTkxYjgtN2FjNDE0YzA3NDJlXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg" ,
  rate:"4",
},

{
  
  titre:"The invisible guest ",
  bio :"A successful entrepreneur accused of murder and a witness preparation expert have less than three hours to come up with an impregnable defense",
  url: "https://fr.web.img6.acsta.net/pictures/16/11/18/11/16/356441.jpg" ,
  rate:"4",
},





])
function addmovie(newMovie){

  setFilms([...films,newMovie])
}
  return (
<div>
 
<Add addmovie={addmovie}/>
<MoList films={films}/>


</div>
  );

}

export default App;
