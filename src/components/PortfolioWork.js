import React, { useState, useEffect } from "react";
import Portfolio from "../data/portfolio.json";
import Aos from "aos";
import "aos/dist/aos.css";
export default function PortfolioWork() {
	const [portfolio, setPortfolio] = useState([]);
	const [standard, setStandard] = useState([]);
	const [premium, setPremium] = useState([]);
	const [elite, setElite] = useState([]);
	useEffect(() => {
		const portfolio = Portfolio.Basic;
		const standard = Portfolio.Standard;
		const premium = Portfolio.Premium;
		const elite = Portfolio.Elite;

		setPortfolio(portfolio);
		setStandard(standard);
		setPremium(premium);
		setElite(elite);
		Aos.init({ duration: 2000 });
	}, [portfolio, standard ,premium ,elite]);

	return (
		<section data-Aos="fade-up" className="portfolio section" id="portfolio">
			<div className="container">
				<div className="section-title-text mb-2">
					<h1 className="dark-color">Portfolio</h1>
				</div>
				<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
					<li class="nav-item">
						<a
							class="nav-link active"
							id="pills-portfoliowork-tab"
							data-toggle="pill"
							href="#pills-portfoliowork"
							role="tab"
							aria-controls="pills-portfoliowork"
							aria-selected="true"
						>
							Basic
						</a>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							id="pills-standardfolio-tab"
							data-toggle="pill"
							href="#pills-standardfolio"
							role="tab"
							aria-controls="pills-standardfolio"
							aria-selected="false"
						>
							Standard
						</a>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							id="pills-premiumfolio-tab"
							data-toggle="pill"
							href="#pills-premiumfolio"
							role="tab"
							aria-controls="pills-premiumfolio"
							aria-selected="false"
						>
							Premium
						</a>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							id="pills-elitefolio-tab"
							data-toggle="pill"
							href="#pills-elitefolio"
							role="tab"
							aria-controls="pills-elitefolio"
							aria-selected="false"
						>
							Elite
						</a>
					</li>

				</ul>
				<div class="tab-content" id="pills-tabContent">
					<div
						class="tab-pane fade show active"
						id="pills-portfoliowork"
						role="tabpanel"
						labelled="pills-portfoliowork-tab"
					>
						<div className="row">
							{portfolio.map((portfolioInfo) => {
								return (
									<div className="col-md-4 d-flex align-items-stretch">
										<div class="card-deck">
											<div class="card mb-4 bg-blue">
												<div>
													<img
														className="portfolio-img"
														src={portfolioInfo.image}
														alt=""
														srcset=""
													/>
												</div>
												<div class="card-body">
													<div className="portfolio-details">
														<a href={portfolioInfo.demo} target="_blank">
															<h5 class="card-title">{portfolioInfo.name}</h5>
														</a>

														<p class="card-text text-white">
															{portfolioInfo.description}
														</p>
														<div className="links">
															<ul>
																<li>
																	<a href={portfolioInfo.demo} target="_blank">
																		<svg
																			xmlns="http://www.w3.org/2000/svg"
																			fill="#ffffff"
																			width="24"
																			height="24"
																			viewBox="0 0 24 24"
																		>
																			<path d="M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
																		</svg>
																	</a>
																</li>
																
															</ul>
														</div>
													</div>
													<div className="tool-list">
														<ul>
															<li>{portfolioInfo.tools1}</li>
															<li>{portfolioInfo.tools2}</li>
															<li>{portfolioInfo.tools3}</li>
															
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div
						class="tab-pane fade"
						id="pills-standardfolio"
						role="tabpanel"
						labelled="pills-standardfolio-tab"
					>
						<div className="row">
							{standard.map((standardInfo) => {
								return (
									<div className="col-md-4 d-flex align-items-stretch">
										<div class="card-deck">
											<div class="card mb-3 bg-blue">
											<div>
													<img
														className="portfolio-img"
														src={standardInfo.image}
														alt=""
														srcset=""
													/>
												</div>
												<div class="card-body">
													<div className="portfolio-details">
														<a href={standardInfo.demo} target="_blank">
															<h5 class="card-title">{standardInfo.name}</h5>
														</a>
														<p class="card-text text-white">
															{standardInfo.description}
														</p>
														<div className="links">
															<ul>
																<li>
																	<a href={standardInfo.demo} target="_blank">
																		<svg
																			xmlns="http://www.w3.org/2000/svg"
																			fill="#ffffff"
																			width="24"
																			height="24"
																			viewBox="0 0 24 24"
																		>
																			<path d="M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
																		</svg>
																	</a>
																</li>
																
															</ul>
														</div>
													</div>
													<div className="tool-list">
														<ul>
															<li>{standardInfo.tools1}</li>
															<li>{standardInfo.tools2}</li>
															<li>{standardInfo.tools3}</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>

					{/* premium start */}
					<div
						class="tab-pane fade"
						id="pills-premiumfolio"
						role="tabpanel"
						labelled="pills-premiumfolio-tab"
					>
						<div className="row">
							{premium.map((premiumInfo) => {
								console.log(premiumInfo);
								return (
									<div className="col-md-4 d-flex align-items-stretch">
										<div class="card-deck">
											<div class="card mb-3 bg-blue">
											<div>
													<img
														className="portfolio-img"
														src={premiumInfo.image}
														alt=""
														srcset=""
													/>
												</div>
												<div class="card-body">
													<div className="portfolio-details">
														<a href={premiumInfo.demo} target="_blank">
															<h5 class="card-title">{premiumInfo.name}</h5>
														</a>
														<p class="card-text text-white">
															{premiumInfo.description}
														</p>
														<div className="links">
															<ul>
																<li>
																	<a href={premiumInfo.demo} target="_blank">
																		<svg
																			xmlns="http://www.w3.org/2000/svg"
																			fill="#ffffff"
																			width="24"
																			height="24"
																			viewBox="0 0 24 24"
																		>
																			<path d="M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
																		</svg>
																	</a>
																</li>
																
															</ul>
														</div>
													</div>
													<div className="tool-list">
														<ul>
															<li>{premiumInfo.tools1}</li>
															<li>{premiumInfo.tools2}</li>
															<li>{premiumInfo.tools3}</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>

					{/* premium end */}
					<div
						class="tab-pane fade"
						id="pills-elitefolio"
						role="tabpanel"
						labelled="pills-elitefolio-tab"
					>
						<div className="row">
							{elite.map((eliteInfo) => {
								
								return (
									<div className="col-md-4 d-flex align-items-stretch">
										<div class="card-deck">
											<div class="card mb-3 bg-blue">
											<div>
													<img
														className="portfolio-img"
														src={eliteInfo.image}
														alt=""
														srcset=""
													/>
												</div>
												<div class="card-body">
													<div className="portfolio-details">
														<a href={eliteInfo.demo} target="_blank">
															<h5 class="card-title">{eliteInfo.name}</h5>
														</a>
														<p class="card-text text-white">
															{eliteInfo.description}
														</p>
														<div className="links">
															<ul>
																<li>
																	<a href={eliteInfo.demo} target="_blank">
																		<svg
																			xmlns="http://www.w3.org/2000/svg"
																			fill="#ffffff"
																			width="24"
																			height="24"
																			viewBox="0 0 24 24"
																		>
																			<path d="M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
																		</svg>
																	</a>
																</li>
															
															</ul>
														</div>
													</div>
													<div className="tool-list">
														<ul>
															<li>{eliteInfo.tools1}</li>
															<li>{eliteInfo.tools2}</li>
															<li>{eliteInfo.tools3}</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
