import React from "react";
import styles from "./SinglePriceGrid.module.css";

function SinglePriceGrid(props) {
	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<h1>Join our community</h1>
				<h2>30-day, hassle-free money back guarantee</h2>
				<p>
					Gain access to our full library of tutorials along with expert code
					reviews.
				</p>
				<p>
					Perfect for any developers who are serious about honing their skills.
				</p>
			</div>
			<div className={styles.price}>
				<h1>Monthly Subscription</h1>
				<h2>
					$29 <span>per month</span>
				</h2>
				<p>Full access for less than $1 a day</p>
				<button>Sign Up</button>
			</div>
			<div className={styles.reason}>
				<h1>Why us</h1>
				<p>Tutorials by industry experts</p>
				<p>Peer & expert code review</p>
				<p>Coding exercises</p>
				<p>Access to our Github repos</p>
				<p>Community forum</p>
				<p>Flashcard decks</p>
				<p>New videos every week</p>
			</div>
		</div>
	);
}

export default SinglePriceGrid;
