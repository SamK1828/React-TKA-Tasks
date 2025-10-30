import React, { useState } from 'react';
import { jsProblems } from './problems.js';

export default function ProblemDemo() {
  const [output, setOutput] = useState('');

  async function run(fn) {
    try {
      let res;
      switch (fn) {
        case 'chunkArray': res = jsProblems.chunkArray([1,2,3,4,5,6],2); break;
        case 'sumNestedProperty': res = jsProblems.sumNestedProperty([{id:1,value:10},{id:2,value:20,children:[{value:5}]}], 'value'); break;
        case 'generateDateRange': res = jsProblems.generateDateRange(new Date("2025-10-01"), new Date("2025-10-03")); break;
        case 'intersection': res = jsProblems.intersection([1,2,3,4],[2,4,6]); break;
        case 'flatten': res = jsProblems.flatten([1,[2,[3,4],5],6]); break;
        case 'pattern': res = jsProblems.pattern(4); break;
        default: res = 'Click a valid problem.';
      }
      setOutput(JSON.stringify(res, null, 2));
    } catch (err) {
      setOutput('Error: ' + err.message);
    }
  }

  return (
    <div>
      <h3>Run JavaScript Problems</h3>
      <button onClick={() => run('chunkArray')}>Array Chunking</button>
      <button onClick={() => run('sumNestedProperty')}>Nested Sum</button>
      <button onClick={() => run('generateDateRange')}>Date Range</button>
      <button onClick={() => run('intersection')}>Intersection</button>
      <button onClick={() => run('flatten')}>Flatten</button>
      <button onClick={() => run('pattern')}>Pattern</button>
      <pre style={{background:'#f5f5f5',padding:'10px',marginTop:'10px',whiteSpace:'pre-wrap'}}>{output}</pre>
    </div>
  );
}
