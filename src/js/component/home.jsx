import React from "react";
import NavBar from "../component/Navbar.jsx"
import Footer from "../component/Footer.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";

const arrData = [
    { id: 1, title: "Titulo 1", desc: "Some quick example text to build on the card title and make up the bulk of the card's content." },
    { id: 2, title: "Titulo 2", desc: "Some quick example text to build on the card title and make up the bulk of the card's content." },
    { id: 3, title: "Titulo 3", desc: "Some quick example text to build on the card title and make up the bulk of the card's content." },
    { id: 4, title: "Titulo 4", desc: "Some quick example text to build on the card title and make up the bulk of the card's content." },
    { id: 5, title: "Titulo 5", desc: "Some quick example text to build on the card title and make up the bulk of the card's content." },
    { id: 6, title: "Titulo 6", desc: "Some quick example text to build on the card title and make up the bulk of the card's content." },
    { id: 7, title: "Titulo 7", desc: "Some quick example text to build on the card title and make up the bulk of the card's content." },

]

const Home = () => {
	return (
		<>
			<NavBar />
			<div className="container">
				<Jumbotron/>
				<div className="d-flex justify-content-start row m-0 p-0">
				{arrData.map((dato) => <Card data={dato} key={dato.id}/> )}
				</div>
				
			</div>
			<Footer/>
		</>
	);
};

export default Home;
