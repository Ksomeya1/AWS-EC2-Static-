import React from "react";
import {Link} from "gatsby";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/header";
import Footer from "../components/footer";
import Tables from "../components/tables";


export default () => (
<div>
<Header />
<br></br>
<h1> This is a Meal Planner table, it's also responsive</h1>
<br></br>
<Tables />
<div className="container">
<Footer />
</div>
</div>
)
