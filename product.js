import React from "react";
import {Link} from "gatsby";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/header";
import Footer from "../components/footer";


export default () => (
<div>
<Header />
<div className="container">
<h1>About Data Conquer</h1>
<Link to="/About">Navigate to about</Link>
<a href="https://google.com">Go to Google</a>
</div>
<div className="container">The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.

The French lettering company Letraset manufactured a set of dry-transfer sheets which included the lorem ipsum filler text in a variety of fonts, sizes, and layouts. These sheets of lettering could be rubbed on anywhere and were quickly adopted by graphic artists, printers, architects, and advertisers for their professional look and ease of use.
Aldus Corporation, which later merged with Adobe Systems, ushered lorem ipsum into the information age with its desktop publishing software Aldus PageMaker. The program came bundled with lorem ipsum dummy text for laying out page content, and other word processors like Microsoft Word followed suit. More recently the growth of web design has helped proliferate lorem ipsum across the internet as a placeholder for future text—and in some cases the final content (this is why we proofread, kids).</div>
<div className="container">
<Footer />
</div>
</div>
)
