import { Container } from '@components/Container';
import { Layout } from '@components/Layout';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const O_Projektu: NextPage = () => {
	return (
		<>
			<Head>
				<title>Oblíbené</title>
			</Head>
			<Layout>
				<Container heading="O projektu">
					<p className="mb-4">
						Portál <span className="text-pardubice-default font-bold">ParduGo</span>{' '}
						vznikl jako studentský projekt na{' '}
						<span className="text-pardubice-default font-bold underline">
							<Link href="https://www.delta-skola.cz/" passHref>
								Střední škole informatiky a ekonomie DELTA v Pardubicích
							</Link>
						</span>
						.
					</p>
					<p className="mb-4">
						Tento projekt vznikal v rámci{' '}
						<span className="text-pardubice-default font-bold">
							Foxconn Funovation week
						</span>
						. Zadáním hackathonu bylo vytvořit aplikaci, která dokáže zlepšit
						Pardubice. V našem teamu jsme se zaměřili na věci, co bychom rádi změnili
						v Pardubicích. Nápadů jsme měli mnoho, ale vyhrálo právě{' '}
						<span className="text-pardubice-default font-bold">ParduGo</span>. Systém
						pro vytváření, upravování a sledování akcí v Pardubicích. Do systému může
						přidávat informace kdokoliv.
					</p>
					<div className="font-bold">
						<p>
							Kryštof <span className="text-pardubice-default font-bold">Krátký</span>{' '}
							- 4. ročník{' '}
							<span className="text-pardubice-default font-bold">
								(programátor mobilní aplikace)
							</span>
							,
						</p>
						<p>
							Josef <span className="text-pardubice-default font-bold">Kahoun</span> -
							4. ročník{' '}
							<span className="text-pardubice-default font-bold">
								(programátor webové frontend části, grafický design)
							</span>
							,
						</p>
						<p>
							Michal <span className="text-pardubice-default font-bold">Maděra</span> -
							4. ročník{' '}
							<span className="text-pardubice-default font-bold">
								(programátor backend části)
							</span>
							,
						</p>
						<p>
							Marek <span className="text-pardubice-default font-bold">Fadrný</span> -
							4. ročník{' '}
							<span className="text-pardubice-default font-bold">
								(programátor mobilní aplikace, speaker)
							</span>
							.
						</p>
					</div>
				</Container>
			</Layout>
		</>
	);
};

export default O_Projektu;
