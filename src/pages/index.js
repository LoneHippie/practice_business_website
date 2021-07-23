import React from "react";

import '../styles/base.scss';

import LayoutBasic from "../layouts/LayoutBasic";
import HeroBasic from "../layouts/HeroBasic";
import SectionBasic from "../layouts/SectionBasic";
import SectionServices from "../layouts/SectionServices";
import SectionContact from "../layouts/SectionContact";
import SectionCards from '../layouts/SectionCards';

const IndexPage = () => {
	
	return (
		<LayoutBasic>

			<HeroBasic />

			<SectionBasic />

			<SectionServices />

			<SectionCards />

			<SectionContact />

		</LayoutBasic>
	)
};

export default IndexPage;
