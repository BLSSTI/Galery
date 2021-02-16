import React, { useState } from "react";
import { Title, DivBranca, Nav, Navlist, Divazul, Container, Upload} from "./styles";
import { Link } from "react-router-dom";
import Modal from "./modal";
import Input from "./input";
import PostForm from "../../components/Forms";

const Home: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Modal
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
        portalName="another"
      >
        <Upload> <Input></Input> </Upload>
      </Modal>
      <Nav>
        <Navlist>
          <ul>
            <li>
              <Link to="/login"> INICIO</Link>
            </li>
            <li>
              <Link to="/login"> O CONCURSO</Link>
            </li>
            <li>
              <Link to="/login"> SOBRE</Link>
            </li>
            <li>
              <Link to="/login"> REGRAS</Link>
            </li>
            <li>
              <Link to="/login"> INSCRIÇÃO</Link>
            </li>
          </ul>
        </Navlist>
        <div></div>
      </Nav>

      <Title> Varal das Águas</Title>

      <DivBranca>
        <div>
          <Container>
            <div>
              <h1>O CONCURSO</h1>
              <p>
                Concurso de fotografia para todos os técnicos do Inema para
                exposição de fotos que retratem a temática água (os desafios e
                as belezas encontradas em campo) pelos colaboradores. Além de
                uma apresentação cultural com um artista de rua (poesia, musica,
                cordel) que aborde a temática água.
              </p>
            </div>
          </Container>
          <h1> SOBRE</h1>
          <p>
            Objetivos <br />
            <br />
            Promover a seleção de 100 fotografias produzidas por colaboradores
            do Inema em comemoração ao dia da água, que será elaborado um mural
            de fotos denominado de “Varal das Águas”.
            <br />
            <br /> Dos participante Poderão participar do Concurso Fotográfico
            2017: Todos os colaboradores do Instituto do Meio Ambiente e
            Recursos Hídricos - INEMA e Secretaria do Meio Ambiente -SEMA.
            <br />
            <br /> Das especificações das fotografias participantes <br />
            <br />
            As fotografias devem abordar somente o tema OS DESAFIOS E AS BELEZAS
            RETRATADAS EM CAMPO REFERENTE À SITUAÇÃO HIDRICA, devendo ser
            obrigatoriamente a foto ser tirada em inspeção em campo a serviço do
            Inema.
            <br />
            <br /> premiação final do concurso
            <br />
            <br /> As 05 (cinco) primeiras fotografia que for mais votada nas
            redes sociais (Facebook e Instagram) do Inema, receberá como prêmio.
          </p>

          <h1>REGRAS</h1>
          <p>
            Todas as fotos que retrate da temática água (tais como situação de
            secas ou excedentes hídricos, as belezas e os desafios de se
            trabalhar com os recursos hídricos etc.) serão bem vindas.
            <br />
            <br />
            <br />• As fotos devem ser originais e sem alterações.
            <br />• As fotos devem expor os ambientes visitados em inspeções
            técnicas realizadas durante inspeções pelo INEMA.
            <br />• Fotografias que incluam pessoas serão desclassificadas.
            <br />• As fotos devem ser enviadas com um formulário de inscrição
            preenchido.
            <br />• As fotografias do concurso se tornarão publicas.
            <br />• O fotógrafo da foto que receber mais votos ganhará um prêmio
            simbólico.
            <br />• Cada pessoa só poderá cadastrar uma única foto.
            <br />• A votação será por meio das redes sociais do INEMA.
            <br />• As vagas serão limitadas apenas 50. <br /> <br /> A foto vencedora irá
            ganhar um kit de brinde (Agenda, caneta, livro).
          </p>
        </div>

        <footer></footer>
      </DivBranca>
      <Divazul>
        <div>
          <h1>Exposição de fotos</h1>
          <p>
            <br></br>
          </p>
          <h1>Apresentação</h1>
          <p>20/03/2017 das 16:30h ás 17:30h.</p>
        </div>
        <button onClick={() => setModalOpen(true)}>FAÇA SUA INSCRIÇÃO</button>
      </Divazul>
    </>
  );
};

export default Home;
