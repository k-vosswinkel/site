import Button from '@material-ui/core/Button'
import Head from 'next/head'
import Layout from '../components/layout'

export default function FirstPost () {
	return (
		<Layout>
			<Head>
				<title>First Post</title>
			</Head>
			<Button variant="contained" color="primary">
			Hello World
			</Button>
		</Layout>
	)
}
