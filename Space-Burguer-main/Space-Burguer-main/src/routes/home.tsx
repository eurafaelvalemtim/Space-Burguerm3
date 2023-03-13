import { Hero } from '@/components/hero'
import { HeroIllustration } from '@/components/hero-illustration'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Space Burguer"
        content="Faça seu pedido e descubra o melhor sabor das galáxias.Ultrapasse Universos com Nosso Sabor"
        illustration={<HeroIllustration />}
      />

      {/* <ArticleMedia>
      <img
          alt="Lorem Picsum"
          className="mx-auto lg:aspect-[5/7] lg:w-full"
          width="100px"
          height="100px"
          src="./components/img/logohome.png"
        />
      </ArticleMedia> */}

      {/* <ArticleMedia>
          <img
          alt="Lorem Picsum"
          className="mx-auto lg:aspect-[5/7] lg:w-full"
          width="420"
          height="640"
          src="https://picsum.photos/420/640?grayscale"
        />
      </ArticleMedia> */}

    </Layout>
  )
}
