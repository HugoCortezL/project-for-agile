import {useState, useEffect} from 'react';
import customData from './service/data.json'
import Chart from './Chart'
import Header from './Header'
import {SelectContainer} from './Styles'
function App() {
  const [category, setCategory] = useState('comida')
  
  const [product, setProduct] = useState('Cereais')
  const [allProductsFromCategory, setAllProductsFromCategory] = useState(['Cereais', 'Frutas'])
  
  const [branch, setBranch] = useState('Cereal1')
  const [allBranchsFromProduct, setAllBranchsFromProduct] = useState(['Cereal1', 'Cereal2', 'Cereal3'])

  const [data, setData] = useState([])

  const [settingForChart, setSettingForChart] = useState({
    categories: ["Janeiro", "Fevereiro", "Março", "Abril"],
    series: [
      {
        name: "Vendas",
        data: [0,0,0,0]
      }
    ]
  })

  function retriveData(branch){
    for(var i = 0;i < customData.length; i++){
      for(var j in customData[i]){
        if(j == branch){
          return customData[i][`${j}`]
        }
      }
    }
  }

  useEffect(() => {
    var changeAll = {}
    if(category == "comida"){
      changeAll = {
        products: ['Cereais', 'Frutas'],
        branchs: ['Cereal1', 'Cereal2', 'Cereal3'],
        data: retriveData('Cereal1')
      }
    }else{
      changeAll = {
        products: ['Calcados', 'Camisas'],
        branchs: ['Calcado1', 'Calcado2', 'Calcado3'],
        data: retriveData('Calcado1')
      }
    }
    setAllProductsFromCategory(changeAll.products)
    setAllBranchsFromProduct(changeAll.branchs)
    setData(changeAll.data)
    setProduct(changeAll.products[0])
    setBranch(changeAll.branchs[0])
    
  }, [category])

  useEffect(() => {
    var changeBranch = {}
    if(product == "Cereais"){
      changeBranch = {
        branchs: ['Cereal1', 'Cereal2', 'Cereal3'],
        data: retriveData('Cereal1')
      }
    }
    else if(product == "Frutas"){
      changeBranch = {
        branchs: ['Fruta1', 'Fruta2', 'Fruta3'],
        data: retriveData('Fruta1')
      }
    }
    else if(product == "Calcados"){
      changeBranch = {
        branchs: ['Calcado1', 'Calcado2', 'Calcado3'],
        data: retriveData('Calcado1')
      }
    }
    else{
      changeBranch = {
        branchs: ['Camisa1', 'Camisa2', 'Camisa3'],
        data: retriveData('Camisa1')
      }
    }
    setAllBranchsFromProduct(changeBranch.branchs)
    setData(changeBranch.data)
    setBranch(changeBranch.branchs[0])
  }, [product])

  useEffect(() => {
    setData(retriveData(branch))
  }, [branch])

  useEffect(() => {
    
    setSettingForChart({
      categories: data.map(item => item.month),
      series: [
        {
          name: "Vendas",
          data: data.map(item => item.value),
        }
      ]
    })


  }, [data])
  
  return (
    <div className="App">
      <Header/>
      <SelectContainer>

        <div>
          <label>Categoria: </label>
          <select name="category" id="categories" onChange={(e) => setCategory(e.target.value)} value={category}>
            <option value="comida">
              Comida
            </option>
            <option value="roupa">
              Roupa
            </option>
          </select>
        </div>

        <div>
          <label>Produto: </label>
          <select name="product" id="product" onChange={(e) => setProduct(e.target.value)} value={product}>
            {
              allProductsFromCategory.map(product => 
                <option value={product} key={product}>
                  {product}
                </option>
              )
            }
          </select>
        </div>
        
        <div>
          <label>Marca: </label>
          <select name="branch" id="branch" onChange={(e) => setBranch(e.target.value)} value={branch}>
            {
              allBranchsFromProduct.map(branch => 
                <option value={branch} key={branch}>
                  {branch}
                </option>
              )
            }
          </select>      
        </div>
      </SelectContainer>

      <Chart settings={settingForChart}/>
      
    </div>
  )
}

export default App
//<Chart settings={settingForChart}/>