import React from 'react';
import { useState } from 'react'

import Header from './Header';
import Todo from './Todo';
import Footer from './Footer';

function App() {

return (
        <div>
              <Header firstname="Patthaveekarn" lastname="Khaekai" student_id={630612103} ></Header>
          <Todo/>

          <Footer copyright = "Copyright © 2021 "></Footer>
        </div> 
  );
}

export default App;
