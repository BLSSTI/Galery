import React, { useState } from "react";
import axios from "axios";
import {InputStyle} from '../../pages/Home/styles';

function PostForm() {

  
  const url = "https://apidev.inema.ba.gov.br/participante";
  const [data, setData] = useState({
    nome: "",
    data_foto: "",
    local_foto: "",
    nome_foto: "",
    img_base64: "",
    termo: "",
  });

  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        nome: data.nome,
        data_foto: data.data_foto,
        local_foto: data.local_foto,
        nome_foto: data.nome_foto,
        img_base64: data.img_base64,
        termo: data.termo,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  async function handle(e) {

    const newdata = { ...data};
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  const uploadImage = async (e) => {
    console.log(e.target.files);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setData({ ...data, img_base64:base64 })


  
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  return (
    <div>

      <form onSubmit={(e) => submit(e)}>
        <InputStyle>
        <input
          onChange={(e) => handle(e)}
          id="nome"
          value={data.nome}
          placeholder="nome"
          type="text"
        />
        <input
          onChange={(e) => handle(e)}
          id="data_foto"
          value={data.data_foto}
          placeholder="data_foto"
          type="date"
        />
        <input
          onChange={(e) => handle(e)}
          id="local_foto"
          value={data.local_foto}
          placeholder="local_foto"
          type="text"
        />
        <input
          onChange={(e) => handle(e)}
          id="nome_foto"
          value={data.nome_foto}
          placeholder="nome_foto"
          type="text"
        />
        <input
          onChange={(e) => uploadImage(e)}
          id="img_base64"

          placeholder="img_base64"
          type="file"
        />
        <input
          onChange={(e) => handle(e)}
          id="termo"
          value={true}
          placeholder="termo"
          type="radio"
          required
        />
        </InputStyle>
        <button>Submit</button>
      </form>

    </div>
  );

  
}

export default PostForm;
