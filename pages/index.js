import Head from 'next/head'
import styles from './styles.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Home () {
	return (
		<div className="container">
			<Head>
				<title>Kait Hoehne - Software Engineer</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
			</Head>

			<main>
				<section className={styles.section}>
					<img className={styles.profile} src="/profile-pic-2.png" />
					<header className={styles.header}>
						<img className={styles.watercolor} src="/watercolor-rectangle.png" />
						<h1 className={styles.title}>Hi, I&lsquo;m Kait.</h1>
					</header>
					<summary className="description"> I’m a full stack software engineer who is passionate about code and storytelling. Currently, I work with the fantastic team at Quartz.</summary>
				</section>
				<section className={styles.section}>
					<h2>A little about me</h2>
					<p>I’m a hybrid. I don’t have a degree in CS. I found my way to code through multi-media journalism. I spent the first 10 years of my career as a photojournalist, then digital editor, then digital producer.</p>
					<p>I spend a lot of time thinking about the intersection between communications and code. How can we write accessible code? How can we give journalists better tools?</p>
					<p>Things that are important to me work/life balance. Nature. Community. Creativity.</p>
				</section>
				<section className={styles.section}>
					<header className={styles.header}>
						<img className={styles.watercolor} src="/watercolor-swipe.png" />
						<h2 className={cx('title', 'subtitle')}>Hills & dragons</h2>
					</header>
					<h3>Dragon I would like to slay: Imposter syndrome</h3>
					<p>Coders do not look or act a certain way. We all have different strengths, skill sets and points of view. We can and should evaluate ourselves and our employees with ambition and drive, but we can also find balance through empathy, patience, and inclusion.</p>
					<h3>Hill to die on</h3>
					<p>We need to stop thinking about technical education, especially coding, as a specifically STEM endeavor, or as a niche interest. If we explored different teaching methods and expected a higher base level of tech literacy, it would help (in one small way) to diversify the voices we hear from in tech.</p>
				</section>
				<section className={styles.section}>
					<h2>My work</h2>
				</section>
				<section className={styles.section}>
					<h2>Outside of work</h2>
					<p>I love animals and the outdoors. I grew up camping and love to hike and backpack. Someday, I dream of having a sprawling garden and owning some chickens or a duck. Maybe a goat if I get really ambitious.</p>
					<p>I am a hobbyist - I love learning to craft new things, whether it’s sewing, knitting, baking or painting.</p>
				</section>
			</main>
		</div>
	)
}
