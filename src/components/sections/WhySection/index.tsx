import React, { JSX } from 'react';
import styles from './styles.module.css';

// https://bootstrapious.com/p/bootstrap-vertical-tabs
// https://www.kallmanation.com/building-linkable-tabs-with-only-css

function setShownTab(num: number) {

	for (let i = 0; i <= 2; i++) {
		document.getElementById("v-whytab" + i).classList.remove("active");
		document.getElementById("whytab" + i).classList.remove("show");
		document.getElementById("whytab" + i).classList.remove("active");
	}

	document.getElementById("v-whytab" + num).classList.add("active");
	document.getElementById("whytab" + num).classList.add("show");
	document.getElementById("whytab" + num).classList.add("active");
}

export default function WhySection(): JSX.Element {
  return (
    <section className={styles.services}>
      <div className="container">

				<div className="text-center pb-1 mb-4">
				{<div className="h1 fw-bold color-theme-reverse2">Building Quality Fungible Tokens</div>}
					<p className="h3 color-theme-reverse1 mt-5 lh-base">An Open Source Framework to build <b>Quality Fungible Tokens</b>.</p>
				</div>

				<div className="row">
            <div className="col-md-3">
							<div className="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical">

								<a className="pp nav-link mb-3 p-3 shadow active" id="v-whytab0" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true" onClick={() => setShownTab(0)}>
									<span className="font-weight-bold text-uppercase">Why Fungible Standard?</span>
								</a>
								<a className="pp nav-link mb-3 p-3 shadow" id="v-whytab1" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true" onClick={() => setShownTab(1)}>
									<span className="font-weight-bold text-uppercase">What is the scope?</span>
								</a>
								<a className="pp nav-link mb-3 p-3 shadow" id="v-whytab2" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true" onClick={() => setShownTab(2)}>
									<span className="font-weight-bold text-uppercase">Ready to Go</span>
								</a>

							</div>
            </div>

            <div className="col-md-9">
                <div className="tab-content" id="v-pills-tabContent">

									<div className="tab-pane fade shadow rounded bg-white p-5 show active" id="whytab0" role="tabpanel" aria-labelledby="v-pills-home-tab">
										<h4 className="font-italic mb-4">Why Fungible Standard?</h4>
										<hr/>
										<p className="font-italic text-muted mb-2">Because all flavours of Fungible Tokens share 99% of implementation.</p>
										<p className="font-italic text-muted mb-2">There is not point in reinventing the wheel for each single project when we can enojoy ready-to-go tokens offering all the quality features and waiting for your customization.</p>
										<p className="font-italic text-muted mb-2">Fungible Standard aims to standardize Fungible Tokens End-To-End process from inception to Go-To-Market so you can issue your tokens in no time, with no money and with proven quality respecting the foundational principles of blockchain.</p>
										<p className="font-italic text-muted mb-2">Fungible Standard aims protect retail investors, holders and users as a required stakeholders in the blockchain industry.</p>
									</div>

									<div className="tab-pane fade shadow rounded bg-white p-5" id="whytab1" role="tabpanel" aria-labelledby="v-pills-home-tab">
										<h4 className="font-italic mb-4">What is the scope?</h4>
										<hr/>
										<p className="font-italic text-muted mb-2">Fungible Standards aims to uncover the topics related to Fungible Tokens in the following dimensions:.</p>
										<p className="font-italic text-muted mb-2">* Fungible Standard defines a QoS Maturity Model for Fungible Tokens</p>
										<p className="font-italic text-muted mb-2">* Fungible Standard defines a cover all flavours of Fungible Tokens </p>
										<p className="font-italic text-muted mb-2">* Fungible Standard defines a the e2e lifecycle of issuance and management of a Fungible Token</p>
										<p className="font-italic text-muted mb-2">* Fungible Standard provides interface to the existing ecosystems applying to Fungible Tokens</p>
									</div>

									<div className="tab-pane fade shadow rounded bg-white p-5" id="whytab2" role="tabpanel" aria-labelledby="v-pills-home-tab">
										<h4 className="font-italic mb-4">Ready To Go</h4>
										<hr/>
										<p className="font-italic text-muted mb-2">Fungible Standard Tokens are ready to be configured with your preferred features and go to the market.</p>
										<p className="font-italic text-muted mb-2">You wont have to bother about the headaches of building, testing, auditing your tokens and your investors will enjoy the benefit of proven good practices..</p>
									</div>

                </div>
            </div>
        </div>

      </div>
    </section>
  );
}
