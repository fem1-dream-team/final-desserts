import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { handleNavbar } from '../../actions/generalActions'
// debugger
const Burgermenu = (props) => {
	const showMenu = () => {
		props.handleNavbar(!props.navbarState)
	}

	return (
		<Wrapper onClick={showMenu}>
			<div className={ props.navbarState ? 'open' : '' }>
				<span>&nbsp;</span>
				<span>&nbsp;</span>
				<span>&nbsp;</span>
			</div>
		</Wrapper>
	);
};

const mapStateToProps = state => {
	return {
		navbarState: state.general.navbar
	}
}
export default connect(mapStateToProps, {handleNavbar})(Burgermenu);

const Wrapper = styled.div`
	position: absolute;
	top: 5px;
	right: 10px;
	display: block;
	padding-top: .5rem;
	// font-size: 62.5%;
	cursor: pointer;
	@media (min-width: 769px) {
		display: none;
	}

	& span {
		position: relative;
		display: block;
		width: 3.5rem;
		height: .4rem;
		margin-bottom: .7rem;
		background: #fdcb6e;
		transition: all ease-in-out .2s;
	}

	.open span:nth-child(2) {
		opacity: 0;
	}

	.open span:nth-child(3) {
		top: -17px;
		transform: rotate(45deg);
	}

	.open span:nth-child(1) {
		top: 17px;
		transform: rotate(-45deg);
	}

`;