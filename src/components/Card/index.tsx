import "./index.css";
function Index({ topStories }) {
	console.log(topStories);
	return (
		<div className="card">
			<div className="innerCard">
				<div className="imagesDiv">
					{topStories?.multimedia ? (
						<a target="_blank" href={topStories?.url}>
							{" "}
							<img src={topStories?.multimedia[0]?.url} />
						</a>
					) : (
						""
					)}
				</div>
				<div className="textDiv">
					<h1>{topStories?.title}</h1>
					<h2>{topStories?.subsection}</h2>
				</div>
			</div>
		</div>
	);
}

export default Index;
