import React from 'react';
import { Links } from './styles';
import { Content } from './styles'
import { Button } from '../../components/Button/';
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';


export function Details() {
    return (
        <section>
            <Header />

            <main>
                <Content>

            
                    <ButtonText title="Excluir Nota"/>

                    <h1>
                        Introdução ao React
                    </h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iure pariatur, asperiores quisquam quod fugit voluptates id aliquid nihil enim ipsum earum! Ex natus adipisci illum, totam corporis eius. Hic? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut doloribus consequuntur nobis, exercitationem esse numquam saepe vitae sit, fugit eius iste eveniet ex accusantium officiis. Magni totam laborum exercitationem quo!</p>

                    <Section title="Links úteis">
                        <Links>
                            <li><a href='#'>https://www.rocketseat.com.br</a></li>
                            <li><a href='#'>https://www.rocketseat.com.br</a></li>
                        </Links>
                    </Section>
                    <Section title="Marcadores">
                        <Tag title="Express"/>
                        <Tag title="Node"/>
                    </Section>


            
                <Button title="Voltar" />
            </Content>
        </main>
        </section>
    );
}
