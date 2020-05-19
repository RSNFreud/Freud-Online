import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Index from "./components/index";
import { Switch, Route } from "react-router-dom";
import PageNotFound from "./components/404";
import { PageTransition } from "@steveeeie/react-page-transition";
import Features from "./components/features";
import Process from "./components/process";
import Quotation from "./components/quotation";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Route
          render={({ location }) => (
            <PageTransition
              preset="fadeFromTop"
              transitionKey={window.location.pathname}
            >
              <Switch location={location}>
                <Route path="/contact" component={Contact} />
                <Route path="/quotation" component={Quotation} />
                <Route path="/features" component={Features} />
                <Route path="/process" component={Process} />
                <Route path="/" exact component={Index} />
                <Route path="*" component={PageNotFound} />
              </Switch>
            </PageTransition>
          )}
        />
      </div>
    </div>
  );
}

export default App;
