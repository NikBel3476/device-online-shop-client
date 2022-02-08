import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStarSvg from '../assets/bigStar.svg';

const DevicePage = () => {
    const device = { id: 1, name: "IPhone 12 pro", price: 2500, rating: 5, img: `https://avatars.mds.yandex.net/get-mpic/4932805/img_id320032172410367143.png/orig`};
    const description = [
        {id: 1, title: 'RAM', description: '4 GB'},
        {id: 2, title: 'Camera', description: '12 MP'},
        {id: 3, title: 'CPU', description: 'Pentium 3'},
        {id: 4, title: 'CPU cores amount', description: '2'},
        {id: 5, title: 'Accumulator', description: '100 mAh'},
    ];

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStarSvg}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>From {device.price} rub.</h3>
                        <Button variant="outline-dark">Add to basket</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Description</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;
