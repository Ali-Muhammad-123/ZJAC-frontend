import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/Card";
export interface TopStories {
	section: string;
	subsection: string;
	title: string;
	abstract: string;
	url: string;
	uri: string;
	byline: string;
	item_type: string;
	updated_date: string;
	created_date: string;
	published_date: string;
	material_type_facet: string;
	kicker: "";
	des_facet: Array<string>;
	org_facet: Array<string>;
	per_facet: Array<string>;
	geo_facet: Array<string>;
	multimedia: Array<Multimedia>;
	short_url: string;
}

interface Multimedia {
	url: string;
	format: string;
	height: number;
	width: number;
	type: string;
	subtype: string;
	caption: string;
	copyright: string;
}

function App() {
	const [topStories, setTopStories] = useState<Array<TopStories>>([]);

	useEffect(() => {
		axios("http://localhost:3000/").then((res) => {
			console.log(res);
			setTopStories(res.data);
		});
	}, []);

	return (
		<>
			{topStories.map((el) => (
				<Card topStories={el} />
			))}
		</>
	);
}

export default App;
