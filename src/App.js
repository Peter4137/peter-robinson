import './styles/main.scss';
import React, {useState} from 'react';
import Header from "./components/shared/header";
import {Pages} from "./models/pages";
import Home from "./components/home";

function App() {
    const [currentPage, setCurrentPage] = useState(Pages.Home);

    function headerItemClicked(page) {
        setCurrentPage(page);
    }

    function getCurrentPage() {
        if (currentPage === Pages.Home) {
            return <Home/>;
        } else if (currentPage === Pages.AboutMe) {
            return <div>About me</div>;
        } else if (currentPage === Pages.Projects) {
            return <div>Projects</div>;
        } else {
            return <div>No Page!</div>;
        }
    }


  return (
    <div>
        <Header headerItemClicked={headerItemClicked}/>
        {getCurrentPage()}
    </div>
  );
}

export default App;
