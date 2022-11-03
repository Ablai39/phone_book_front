import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './errors.css';

const Error404 = () => {
    return (
        <Container className="section-padding">
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>Эта страница не найдена!</h2>
                    <p>На поиски этой страницы мы отправили своих лучших специалистов, собак и несколько дронов.</p>
                    <p>Пока предлагаем пройти на другие:</p>
                </div>
            </div>
        </Container>
    );

}

export default Error404;