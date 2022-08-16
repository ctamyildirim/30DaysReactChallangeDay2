import React,{useState , useEffect} from 'react'
import './App.css';


function App() {
  const getRandomValue = () =>{
    return Math.floor(Math.random()*10 + 1);
  }

  const [bars , setBars] = useState([
    {
      id: 1,
      title : 'Facebook',
      color : '#00377b',
      value : getRandomValue()
    },
    {
      id: 2,
      title : 'Amazon',
      color : '#ff9900',
      value : getRandomValue()
    },
    {
      id: 3,
      title : 'Google',
      color : '#d3d3d3',
      value : getRandomValue()   
    },
    {
      id: 4,
      title : 'Youtube',
      color : '#ff0000',
      value : getRandomValue()   
     },
    {
      id: 5,
      title : 'Microsoft',
      color : '#4a86e8',
      value : getRandomValue()
        },
  ])
  const SortingBars = (data) => {
    let sorted_arr = data.sort((a, b)=> b.value - a.value);
    return sorted_arr;
  }
  const [totalvalue, setTotalValue] = useState(0)

  const BarWidthRandom = () => {
    let data = [...bars]
    let total = totalvalue
    data.forEach((company) =>{
      company.value += getRandomValue()
      total += company.value
    })
    const sorted_arr = SortingBars(data);
    setBars(sorted_arr);
    setTotalValue(total);
  }

  useEffect(()=>{
     setInterval (()=>{
      BarWidthRandom();
    },300)
  },[])

  const renderItems = (item) =>{
    let percent;
    percent = (100 * item.value) / totalvalue;
    return percent;
  }

  return (
    <div className="App">
      <div classname='header'><h1>Firmaların Yıllara Göre Müşteri Sayısı</h1></div>
      <div className='content-wrapper'>
        {
          bars.map((item,idx)=> {
          let percent = String(renderItems(item) *3 )+'% ';
          return(<div className='content' key={item.id} style={{width : percent, backgroundColor : item.color , top : ((idx+1) * 55)+'px'}}>{item.title + ' (' + item.value + ')'}</div>)
        })
        }
      </div>
    </div>
  );
}

export default App;
