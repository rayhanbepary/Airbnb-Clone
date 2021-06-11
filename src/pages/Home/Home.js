import React from 'react';
import Experience from '../../components/Experience/Experience';
import Live from '../../components/Live/Live';
import Navbar from '../../components/Navbar/Navbar';
import Search from '../../components/Search/Search';
import experience from '../../Data/experience';
import live from '../../Data/live';
import room from '../../Data/room';

const Home = () => {

    return (
        <>
           <Navbar></Navbar> 
           <div className="container mt-5">
               <div className="row">
                   <Search></Search>
                   <div className="col-md-9">
                        <div className="row">
                            <h2 className="mb-4">Live anywhere</h2>
                            {
                                live.map(data => <Live key={data.id} live={data} />) 
                            }
                        </div>
                   </div>
               </div>

               <div className="row mb-5 mt-5">
                    <h2>Discover Experiences</h2>
                    <p className="mb-4">Unique activities with local experts—in person or online.</p>
                    {
                        experience.map(data => <Experience key={data.id} experience={data} />) 
                    }
               </div>
           </div>
        </>
    );
};

export default Home;