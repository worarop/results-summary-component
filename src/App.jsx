import { useState } from 'react';
import datas from './data.json'


function App() {

  const [items] = useState(datas)

  return (
    <section className="grid place-content-center font-comforter">
      <div className="flex justify-items-center w-full h-80 mt-24 mb-24 rounded-xl shadow-xl shadow-light-lavender">
        <div className="w-56 rounded-xl text-center bg-gradient-to-t from-light-royal-blue to-light-slate">
          <h1 className="text-base mt-6 text-light-lavender">Your Result</h1>
          <div className="rounded-full w-28 h-28 mt-6 m-auto p-8 bg-gradient-to-t from-persian-blue to-violet-blue">
            <span className="text-white text-4xl font-bold">76</span>
            <p className=" text-light-lavender text-xs">of 100</p>
          </div>
          <p className="mt-6 font-bold text-white">Great</p>
          <p className="text-xs p-4 tracking-wider text-light-lavender">
          You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="w-56 p-4 flex flex-col">
          <h1 className="mb-4">Summary</h1>
          {items.map((item, index) => {
            return (
              <div key={item} 
              style={{
                backgroundColor: `${item.color}15`,
              }}
              className="flex items-center text-xs p-1 mb-2 rounded-lg justify-between">
                
                <h3 style={{ color: item.color,}}
                className="flex items-center"
                >
                  <img src={item.icon} alt={item.category} className="p-1"/>
                  {item.category}
                </h3>
                <p className="flex items-center text-slate-300 pr-2">
                  <span className="text-slate-900 font-bold">{item.score}</span> / 100
                </p>
              </div>
            )
          })}
          <button className="bg-dark-gray-blue mt-6 p-3 rounded-full text-white text-xs hover:bg-gradient-to-t from-light-royal-blue to-light-slate">Continue</button>
        </div>
      </div>
    </section>
  );
}

export default App;
