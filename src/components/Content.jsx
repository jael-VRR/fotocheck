import React from "react";
import { Card,Image} from "react-bootstrap";
import fotoimage from "../images/fotoimage.jpg";
import codigobar from "../images/codigobar.jpg";
import logogn from "../images/logo gn.png";
import "../styles/Content.css";

function Content() {

	let time= new Date().toLocaleTimeString();

	const [hour,setHour] = React.useState(time);

	const updateTime =() =>{
		time =new Date().toLocaleTimeString();
		setHour(time);
	}
	setInterval(updateTime,1000)
  return (
    <>
      <div class="container">
        <div class="abs-center">
          <Card style={{ width: "18rem" }}>
            <Card.Body  className="wrapper-content">
					  
						<img
                className="logo-header"
								variant="center"
                src={logogn}
                alt="usuario"
              />
              <Card.Title className="text-center">
                Panaderia San Jorge S.A.C
              </Card.Title>
              <Image 
                className="foto-user"
                variant="top"
                src={fotoimage}
                alt="usuario"
                rounded
              />
                <Card.Title className="text-center">
                Mario Alberto Simbala Mendoza
              </Card.Title>
							<Card.Title className="text-center">
                Jefe de RR.HH
              </Card.Title>
							<Card.Title className="text-center">
               Hora: {hour}
              </Card.Title>
							<img
                className="codigo-unico"
                src={codigobar}
                alt="codigo"
              />
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Content;
