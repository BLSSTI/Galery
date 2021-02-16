import React, { Component } from 'react'
import axios from 'axios'


class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			nome: '',
			nome_foto: '',
			local_foto: '',
			data_foto:'',
			img_base64:'',
			termo:'',

		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('https://apidev.inema.ba.gov.br/participante', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { nome, nome_foto, local_foto,data_foto,img_base64 ,termo} = this.state
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<div>
						<input
							type="text"
							name="nome"
							value={nome}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="nome_foto"
							value={nome_foto}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="local_foto"
							value={local_foto}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="data_foto"
							value={data_foto}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="file"
							name="img_base64"
							value={img_base64}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
					<input
							type="text"
							name="termo"
							value={termo}
							onChange={this.changeHandler}
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default PostForm