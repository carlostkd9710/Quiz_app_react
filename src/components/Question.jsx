import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { questionGames } from '../Questionario'
import { Divform } from '../style/styls'
import { Formstyle, Titulo } from '../style/styls'
import { Radiostyle, Buttonstyle } from '../style/styls'


export default class Question extends Component {

    constructor() {
        super()
        this.state = {
            numberQuestion: 0,
            question: {
                question: '',
                a: '',
                b: '',
                c: '',
                d: '',
                correct: ''
            },
            score: 0,
            answerSelect: ''
        }
    }
    componentDidMount() {
        const currentQuizData = questionGames[this.state.numberQuestion]
        /* console.log(currentQuizData); */
        this.setState({
            question: {
                question: currentQuizData.question,
                a: currentQuizData.a,
                b: currentQuizData.b,
                c: currentQuizData.c,
                d: currentQuizData.d,
                correct: currentQuizData.corrrect
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        e.target.reset()
        if (this.state.answerSelect === this.state.question.correct) {
            this.setState({
                score: this.state.score + 1
            })
        }
        if (this.state.numberQuestion < questionGames.length) {
            this.componentDidMount()
        } else {
            alert("tu puntaje es " + this.state.score);
        }
    }
    onChange = (e) => {
        this.setState({
            answerSelect: e.currentTarget.value
        })
    }

    render() {
        console.log(this.state.answerSelect);
        return (
            <Divform>
                <Formstyle onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="control-radio" style={{ padding: "3rem" }}>
                        <Titulo>{this.state.numberQuestion + " " + this.state.question.question}</Titulo>
                        <Radiostyle type="radio" value={this.state.question.a} label={this.state.question.a} name={"respuestas"} id={"respuestas1"} onChange={this.onChange} />
                        <Radiostyle type="radio" value={this.state.question.b} label={this.state.question.b} name={"respuestas"} id={"respuestas2"} onChange={this.onChange} />
                        <Radiostyle type="radio" value={this.state.question.c} label={this.state.question.c} name={"respuestas"} id={"respuestas3"} onChange={this.onChange} />
                        <Radiostyle type="radio" value={this.state.question.d} label={this.state.question.d} name={"respuestas"} id={"respuestas4"} onChange={this.onChange} />
                    </Form.Group>
                    <h2 style={{textAlign:"center"}}>{this.state.score} / {questionGames.length}</h2>
                    <Buttonstyle onClick={() => {
                        this.setState({
                            numberQuestion: this.state.numberQuestion + 1
                        })
                    }} variant='primary' type='submit'>Enviar</Buttonstyle>
                </Formstyle>
            </Divform>
        )
    }
}
