import { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectDiamonds, selectUpdate, getDiamondsAsync, addDiamondAsync, delDiamondAsync,updDiamondAsync} from './diamondSlice';

const Diamond = () => {
  const diamonds = useAppSelector(selectDiamonds);
  const diamondUpdate = useAppSelector(selectUpdate)
  const dispatch = useAppDispatch();
  const [carat, setcarat] = useState(0)
  const [cut, setcut] = useState("")
  const [color, setcolor] = useState("")
  const [clarity, setclarity] = useState("")
  const [depth, setdepth] = useState(0)
  const [table, settable] = useState(0)
  const [price, setprice] = useState(0)
  const [x, setx] = useState(0)
  const [y, sety] = useState(0)
  const [z, setz] = useState(0)

  useEffect(() => {
    console.table(diamonds)
  }, [diamonds])



  useEffect(() => {
    dispatch(getDiamondsAsync())
  }, [diamondUpdate])


  return (
    <div>
      <h1>add diamomd/update diamonds fields:</h1>
      carat(for example:0.23): <input onChange={(e) => setcarat(+e.target.value)}/>,
      cut(for example:Ideal:<input onChange={(e) => setcut(e.target.value)}/><br /> 
      color(for example E):<input onChange={(e) => setcolor(e.target.value)}/> ,
      clarity(for example:SI2):<input onChange={(e) => setclarity(e.target.value)}/><br />
       depth(for example:61.5):<input onChange={(e) => setdepth(+e.target.value)}/>
      ,table(for example:55.0):<input onChange={(e) => settable(+e.target.value)}/><br /> 
      price(for example:326):<input onChange={(e) => setprice(+e.target.value)}/>
      x(for example:3.95):<input onChange={(e) => setx(+e.target.value)}/> <br /> 
      y(for example:3.98):<input onChange={(e) => sety(+e.target.value)}/>, 
      z(for example:2.43):<input onChange={(e) => setz(+e.target.value)}/><br />
      <button onClick={() => dispatch(addDiamondAsync({carat, cut, color, clarity, depth, table, price, x, y, z }))}>add diamond</button> 
      
      <hr />
      <h1>Diamond List</h1>
      {/* Diamonds amount:{diamonds.length} */}
      {diamonds.map((dia, i) =>
        <div key={i}>
          
          carat: {dia.carat}, {" "} cut:{dia.cut}, {" "}color:{dia.color}<br />
          clarity:{dia.clarity}, {" "}depth:{dia.depth}<br />
          table:{dia.table}, {" "} price:{dia.price}<br />
          x:{dia.x},
          y:{dia.y},
          z:{dia.z}<br/>
          {dia.ID}
          <button onClick={() => dispatch(updDiamondAsync({ID:dia.ID,carat, cut, color, clarity, depth, table, price, x, y, z}))}>update</button>
          <button onClick={() => dispatch(delDiamondAsync(dia.ID))}>delete</button>
          <hr />
        </div>)}




    </div>
  )
}

export default Diamond