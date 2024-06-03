
import './App.css'
import Card from './components/Card'
import SkeletonUi from './components/SkeletonUi';
import { data } from './sampleData/jsonData'
import { useState,useEffect } from 'react';

function App() {
  
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setItems(data);
      setLoading(false);
    }, 2000);
  }, []);
 
   return (
    <div>
    <h1 className='md:text-3xl text-2xl font-bold py-5'> An Adventurous Getaway Guide</h1>
    <div className='flex w-full  gap-5  '> 
    {loading ? (
        // Render skeletons while loading
        Array.from({ length: 8 }).map((_, index) => <SkeletonUi key={index} />)
      ) : 
    (
      items.map((details)=>{
        return(<Card props={details} key={details.id}/>)
      } )
    )}
    </div>
    </div>
  )
}
export default App
