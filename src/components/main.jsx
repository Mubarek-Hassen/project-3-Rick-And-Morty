// import React, { useState, useEffect } from "react";

// import { BrowserRouter as Router } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
const Main = ()=>{
    // const [cards, setCards] = useState()
    return(
        <section>
            <header>
                <Header />
            </header>
            <main>
                <div className="card-holder">
                    <div className="card">

                    </div>
                </div>
            </main>




        <footer>
        <Footer />
        </footer>
        </section>
    )
}
export default Main