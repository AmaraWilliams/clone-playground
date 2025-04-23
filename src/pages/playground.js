import React from "react";
import Layout from "../components/layout";
import "../styles/playground.css";
import QueryCard from "../components/queryCard";
function Playground() {
    return (
        <Layout>
            <div className="container-contact">
                <main>
                <div className="headerStyles">
                    <h1>
                    <span className="centerStyles">Welcome to the Backend Playground!</span>
                    </h1>
                </div>
                <div className="headerStyles">
                    <h2>
                    <span className="leftAlignStyles">Training</span>
                    </h2>
                    <h5>
                    <span className="leftAlignStyles">Task 1: Add an image into the playground <a href="https://empathy.library.gatech.edu/"> Drupal </a> site.
                    \n If you can't login, contact your backend team lead.</span>
                    </h5>
                </div>

            </main>   
            </div>
            
        </Layout>
    )
}

export default Playground;